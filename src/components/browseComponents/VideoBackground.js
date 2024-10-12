import React from "react"
import useGetTrailerKey from "../../hooks/useGetTrailerKey";

const VideoBackground = ({ movieID }) => {
  //get the key from the custom hook
  const trailerKey = useGetTrailerKey(movieID);

  return (
    <div className="">
      <iframe
        className="absolute -top-8 -z-10 w-screen max-h-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&showinfo=0&controls=0&loop=1`}
        title="YouTube video player"
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default VideoBackground

