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

const useGPTSearch = () => {
  const dispatch = useDispatch()
  //get the search input value
  const searchRef = useRef(null)

  //initiate the gemini AI model
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" })

  const handleSearch = async () => {
    if(searchRef.current.value === "") return;
    dispatch(setIsLoading(true));
    try {
      //prompt for gemini AI
      const prompt =
        "Act like a movie recommendation engine with the following prompt: " +
        searchRef.current.value +
        ". The output should be the name of 5 movie seperated with comma in case of no error. For example: The Matrix, The Matrix Reloaded, The Matrix Revolutions, The Matrix Resurrections, The Matrix Revolutions. I only need the name of movie never the description. Only the name with comma seperation. If you have any problem or error with the prompt then just give me a json data with message . Example: { 'message' : 'Change your prompt instead of this' } Make the message sort but clear to the user. For the error always return values in json stringified text"

      //generating the result
      const result = await model.generateContent(prompt)
      const response = result.response

      //getting the actual results as movie name string
      const text = response.text()

      //if got a object
      // if(typeof text === Object){
      //   setErrorMessage(text?.message);
      // }
      //convert movies name from text to array
      console.log(text, typeof text);

      function isJsonText(){
        try{
          JSON.parse(text);
          return true;
        }catch(e){
          return false
        }
      }

      if(isJsonText()){
        dispatch(setErrorMessage(JSON.parse(text)?.message));
        dispatch(setIsLoading(false));
      }
      const moviesNameArray = text.split(",")

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
      dispatch(setErrorMessage( 'Something went wrong. Try to search with different prompt.'))
    }finally{
      dispatch(setIsLoading(false));
    }
  }

  return { handleSearch, searchRef }
}

export default useGPTSearch
