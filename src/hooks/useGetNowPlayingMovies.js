import { useDispatch } from "react-redux"
import { nowPlayingMovieURL } from "../utils/url"
import { API_OPTION } from "../utils/constants"
import { addNowPlayingMovies } from "../redux/Slice/moviesSlice"
import { useEffect } from "react"
import { useSelector } from "react-redux"

const useGetNowPlayingMovies = () => {
  console.log('inside useGetNowPlayingMovies')
  const dispatch = useDispatch()
  const user = useSelector((store) => store.user)
  const nowPlayingMovies = useSelector((store) => store.movies.
  nowPlayingMovies)


  //getNowPlayingMovies function
  const getNowPlayingMovies = async () => {
    try{
      const res = await fetch(nowPlayingMovieURL, API_OPTION)
      const movieData = await res.json()
      dispatch(addNowPlayingMovies(movieData?.results))
      
    }catch(e) {
      console.log('error from hook ' ,e);
    }
  }

  //call the function only once
  useEffect(() => {
    if(user && !nowPlayingMovies){
      getNowPlayingMovies();
    }
  }, [user])
}

export default useGetNowPlayingMovies;