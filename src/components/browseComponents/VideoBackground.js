import React from "react"
import useGetTrailerKey from "../../hooks/useGetTrailerKey";

const VideoBackground = ({ movieID }) => {
  //get the key from the custom hook
  const trailerKey = useGetTrailerKey(movieID);

  return (
    <div className="w-screen">
      <div className=" -mt-4">
        <iframe
          className=" w-screen  aspect-video"
          src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&controls=0&loop=1&mute=1`}
          title="YouTube video player"
          allowFullScreen
          frameBorder={0}
        ></iframe>
      </div>
    </div>
  )
}

export default VideoBackground

