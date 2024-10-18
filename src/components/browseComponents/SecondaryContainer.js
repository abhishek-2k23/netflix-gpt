import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux';
const SecondaryContainer = () => {

  const {nowPlayingMovies, popularMovies, topRatedMovies} = useSelector((store) => store.movies);
  
  if(!nowPlayingMovies) return <div>Loading...</div>;
  return (
    <div className='bg-black'>
      <div className=' md:-mt-72'>
      <MovieList title="Now Playing" movies={nowPlayingMovies}/>
      {
        popularMovies && 
        <MovieList title="Popular Movies" movies={popularMovies}/>
      }
      {
        topRatedMovies && 
        <MovieList title="Top Rated Movies" movies={topRatedMovies}/>
      }
      {
        nowPlayingMovies &&
        <MovieList title="Upcoming Movies" movies={nowPlayingMovies}/>
      }

      </div>
    </div>
  )
}

export default SecondaryContainer