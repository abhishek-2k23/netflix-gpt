import React from "react"
import useGetTrailerKey from "../../hooks/useGetTrailerKey";

const VideoBackground = ({ movieID }) => {
  //get the key from the custom hook
  const trailerKey = useGetTrailerKey(movieID);

  return (
    <div>
      <iframe
        className="w-screen aspect-video "
        src={`https://www.youtube.com/embed/${trailerKey}?&autoplay=1&mute=1&showinfo=0&controls=0&loop=1`}
        title="YouTube video player"
        allow="autoplay;"
        
      ></iframe>
    </div>
  )
}

export default VideoBackground