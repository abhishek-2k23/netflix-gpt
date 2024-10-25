import React from "react"
import { useSelector } from "react-redux"
import MovieList from "../MovieList"
import Loader from "../../Loader"

const GptSuggestedMovies = () => {
  const { searchedMoviesData, searchResults, errorMessage } =
    useSelector((store) => store.gptSearch)


  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }

  return (
    <div className="absolute top-[38%] md:top-1/3  w-11/12 md:w-3/4 left-[2%]  md:left-[12.5%]  no-scrollbar overflow-scroll bg-[#292222d0] rounded-xl border border-gray-500 py-3 px-2">
      {searchedMoviesData?.map((movies, index) => (
        <MovieList
          key={searchResults[index]}
          title={searchResults[index]}
          movies={movies}
        />
      ))}
    </div>
  );
};

export default GptSuggestedMovies;

