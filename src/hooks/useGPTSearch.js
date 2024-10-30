import { useRef } from "react"
import { useDispatch } from "react-redux"
import { genAI } from "../utils/geminiAI"
import {
  addSearchedMoviesData,
  setErrorMessage,
  setIsLoading,
  setSearchResults,
} from "../redux/Slice/gptSearch"
import { searchMovieURL } from "../utils/url"
import { API_OPTION, getMatchingMovies } from "../utils/constants"
import toast from "react-hot-toast"

const useGPTSearch = () => {
  const dispatch = useDispatch()
  //get the search input value
  const searchRef = useRef(null)

  //initiate the gemini AI model
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" })

  const handleSearch = async () => {
    if(searchRef.current.value === "") {
      toast.error('No search Input');
      return;
    };
    dispatch(setIsLoading(true));
    try {
      //prompt for gemini AI
      const prompt =
        "Act like a movie recommendation engine with the following prompt: " +
        searchRef.current.value +
        `. Respond in this format:
- if sucess then give the 5 movies name with comma seperation
- in case of error give the message error. for the success and error sign use 0 for error and 1 for success in the start of the string.`

      //generating the result
      const result = await model.generateContent(prompt)
      const response = result.response

      //getting the actual results as movie name string
      const text = response.text()
      console.log(text);
      if(text.charAt(0) === '0'){
        dispatch(setErrorMessage(text.slice(2)));
        toast.error('Try with another prompt.')
        dispatch(setIsLoading(false))
        return;
      }
      const moviesNameArray = text.slice(2).split(",")

      //add to the redux store
      dispatch(setSearchResults(moviesNameArray))

      //search the movie related data on the TMDB
      const searchMovie = async (movieName) => {
        try {
          const res = await fetch(searchMovieURL + movieName, API_OPTION)
          const movieData = await res.json()
          return movieData?.results
        } catch (e) {
          
          console.log(e)
        }
      }

      //get the promiseArray for all the searchedMovies
      const promiseArray = moviesNameArray?.map((movieName) =>
        searchMovie(movieName),
      )
      console.log("promise Array : ", promiseArray)

      //resolve all the movies and get the data
      Promise.all(promiseArray)
        // .then((searchedMovieAllData) => {
        //   return getMatchingMovies(searchedMovieAllData, moviesNameArray)
        // })
        .then((matchingMovies) => {
          dispatch(addSearchedMoviesData(matchingMovies))
          dispatch(setErrorMessage(null))
          dispatch(setIsLoading(false));
        })
    } catch (e) {
      console.log(e)
      toast.error('Something went wrong. Try to search with different prompt.')
      dispatch(setErrorMessage( 'Something went wrong. Try to search with different prompt.'))
    }finally{
      dispatch(setIsLoading(false));
    }
  }

  return { handleSearch, searchRef }
}

export default useGPTSearch
