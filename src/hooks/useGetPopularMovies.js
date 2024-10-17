import { useDispatch, useSelector } from "react-redux"
import { popularMovieURL } from "../utils/url"
import { API_OPTION } from "../utils/constants"
import { addPopuplarMovies } from "../redux/Slice/moviesSlice"
import { useEffect } from "react"
import useGetNowPlayingMovies from "./useGetNowPlayingMovies"

const useGetPopularMovies = () => {
  const dispatch = useDispatch()
  const popularMovies = useSelector((store) => store.movies.
  popularMovies)
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
  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, [])
}

export default useGetPopularMovies;