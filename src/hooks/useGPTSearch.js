import { useRef } from "react"
import { useDispatch } from "react-redux"
import { genAI } from "../utils/geminiAI"
import {
  addSearchedMoviesData,
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
    try {
      //prompt for gemini AI
      const prompt =
        "Act like a movie recommendation engine with the following prompt: " +
        searchRef.current.value +
        ". The output should be the name of 5 movie seperated with comma. For example: The Matrix, The Matrix Reloaded, The Matrix Revolutions, The Matrix Resurrections, The Matrix Revolutions. I only need the name of movie never the description. Only the name with comma seperation."

      //generating the result
      const result = await model.generateContent(prompt)
      const response = result.response

      //getting the actual results as movie name string
      const text = response.text()

      //convert movies name from text to array
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
        })
    } catch (e) {
      console.log(e)
    }
  }

  return { handleSearch, searchRef }
}

export default useGPTSearch
