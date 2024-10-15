import { useDispatch } from "react-redux"
import { popularMovieURL } from "../utils/url"
import { API_OPTION } from "../utils/constants"
import { addPopuplarMovies } from "../redux/Slice/moviesSlice"
import { useEffect } from "react"

const useGetPopularMovies = () => {
  const dispatch = useDispatch()

  //getNowPlayingMovies function
  const getPopularMovies = async () => {
    try{
      const res = await fetch(popularMovieURL, API_OPTION)
      const movieData = await res.json()
      dispatch(addPopuplarMovies(movieData?.results))
    }catch(e){
      console.log(e);
    }
  }

  //call the function only once
  useEffect(() => getPopularMovies, [])
}

export default useGetPopularMovies;