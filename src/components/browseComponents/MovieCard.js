import React from "react"
import { imageCDN } from "../../utils/url"
import { Link } from "react-router-dom"
import useForOneMovie from "../../hooks/useForOneMovie";
import useGetTrailerKey from "../../hooks/useGetTrailerKey";

const MovieCard = ({ id, poster }) => {
  
  const {handleMovieCard, fetchMovieRelatedVideo} = useForOneMovie();

  if (!poster) return null
  return (
    <div onClick={() => {handleMovieCard(id); fetchMovieRelatedVideo()}} className="w-32 md:w-48 cursor-pointer relative p-2 rounded-lg">
      <img
        src={imageCDN + poster}
        alt="poster"
        className="w-full h-auto block rounded-lg"
      />
    </div>
  )
}

export default MovieCard
