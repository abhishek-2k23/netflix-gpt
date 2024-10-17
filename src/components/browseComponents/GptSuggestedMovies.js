import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'
const GptSuggestedMovies = () => {
    const {searchedMoviesData, searchResults} = useSelector((store) => store.gptSearch);
  return (
    <div >
        {
            searchedMoviesData?.map((movies,index) => (
              <MovieList key={searchResults[index]} title={searchResults[index]} movies={movies} />
            ))
        }
    </div>
  )
}

export default GptSuggestedMovies