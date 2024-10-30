import { useDispatch, useSelector } from "react-redux";
import { movieVideoURL } from "../utils/url";
import { API_OPTION } from "../utils/constants";
import { addMovieId, addMovieVideos, addTrailerKey } from "../redux/Slice/moviesSlice";
import { useEffect } from "react";

const useGetTrailerKey = ( fromCard=false) => {
    const dispatch = useDispatch();
    const {trailerKey, movieID} = useSelector((store) => store?.movies)
  const getVideoClips = async () => {

    try{
      dispatch(addMovieId(movieID))
      const res = await fetch(
        movieVideoURL + movieID + "/videos?language=en-US",
        API_OPTION,
      )
      const videoData = await res.json()
      if(fromCard){
        dispatch(addMovieVideos(videoData));
        return;
      }else{

      //extracting only the trailers
      let trailers = videoData?.results?.filter((v) => v.type === "Trailer")
  
      //getting only one trailer if no trailer then take any video clip
      let trailer = trailers.length ? trailers[0] : videoData[0]
      dispatch(addTrailerKey(trailer?.key));
        
    }
    }catch(e){
      console.log(e)
    }
  }

  useEffect(() => {
    !trailerKey && getVideoClips()
  }, [])

  return {trailerKey, getVideoClips};
}

export default useGetTrailerKey;