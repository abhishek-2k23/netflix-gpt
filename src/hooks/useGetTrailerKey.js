import { useDispatch, useSelector } from "react-redux";
import { movieVideoURL } from "../utils/url";
import { API_OPTION } from "../utils/constants";
import { addTrailerKey } from "../redux/Slice/moviesSlice";
import { useEffect } from "react";

const useGetTrailerKey = (movieID) => {
    const dispatch = useDispatch();
    const trailerKey = useSelector((store) => store?.movies?.trailerKey)
  const getVideoClips = async () => {
    try{
      const res = await fetch(
        movieVideoURL + movieID + "/videos?language=en-US",
        API_OPTION,
      )
      const videoData = await res.json()
  
      //extracting only the trailers
      let trailers = videoData?.results?.filter((v) => v.type === "Trailer")
  
      //getting only one trailer if no trailer then take any video clip
      let trailer = trailers.length ? trailers[0] : videoData[0]
      dispatch(addTrailerKey(trailer?.key));
    }catch(e){
      console.log(e)
    }
  }

  useEffect(() => {
    !trailerKey && getVideoClips()
  }, [])

  return trailerKey;
}

export default useGetTrailerKey;