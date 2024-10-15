import { useDispatch } from "react-redux"
import { topRatedMovieURL } from "../utils/url"
import { API_OPTION } from "../utils/constants"
import { addTopRatedMovies } from "../redux/Slice/moviesSlice"
import { useEffect } from "react"

const useGetTopRatedMovies = () => {
  const dispatch = useDispatch()

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
  useEffect(() => getTopRatedMovies, [])
}

export default useGetTopRatedMovies;