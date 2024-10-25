import React, { useEffect } from "react"
import bgImage from "../../../asset/bgImage.jpg"
import { useSelector } from "react-redux"
import GptSuggestedMovies from "./GptSuggestedMovies"
import GptSearchBar from "./GptSearchBar"
import Loader from "../../Loader"

const GptSearch = () => {
  const { searchedMoviesData, isLoading } = useSelector((store) => store.gptSearch)
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
        {isLoading ? <div className="absolute top-[40%] md:top-1/3 left-1/2"><Loader /></div> : searchedMoviesData && <GptSuggestedMovies />}
      </div>
    </>
  )
}

export default GptSearch
