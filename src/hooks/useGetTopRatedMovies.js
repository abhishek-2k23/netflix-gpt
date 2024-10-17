import { useDispatch, useSelector } from "react-redux"
import { topRatedMovieURL } from "../utils/url"
import { API_OPTION } from "../utils/constants"
import { addTopRatedMovies } from "../redux/Slice/moviesSlice"
import { useEffect } from "react"

const useGetTopRatedMovies = () => {
  const dispatch = useDispatch()
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies)
  //getNowPlayingMovies function
  const getTopRatedMovies = async () => {
    try{
      const res = await fetch(topRatedMovieURL, API_OPTION)
      const movieData = await res.json()
      dispatch(addTopRatedMovies(movieData?.results))

    }catch(e) {
      console.log(e);
    }
  }

  //call the function only once
  useEffect(() => {
    !topRatedMovies && getTopRatedMovies();
  }, [])
}

export default useGetTopRatedMovies;