import React, { useEffect } from "react"
import bgImage from "../../../asset/bgImage.jpg"
import { useSelector } from "react-redux"
import GptSuggestedMovies from "./GptSuggestedMovies"
import GptSearchBar from "./GptSearchBar"

const GptSearch = () => {
  const { searchedMoviesData } = useSelector((store) => store.gptSearch)
  return (
    <>
      <div className="fixed -z-10">
        {/* background  */}
        <img
          src={bgImage}
          alt="bgImage"
          className="w-screen h-screen object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#00000094] 80% to-transparent"></div>
      </div>

      <div className=" px-2 md:px-0">
        {/* search bar  */}
        <GptSearchBar />

        {/* suggested movie lists */}
        <GptSuggestedMovies />
      </div>
    </>
  )
}

export default GptSearch
