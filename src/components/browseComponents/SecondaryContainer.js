import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux';
const SecondaryContainer = () => {

  const {nowPlayingMovies, popularMovies, topRatedMovies} = useSelector((store) => store.movies);
  
  if(!nowPlayingMovies || !popularMovies || !topRatedMovies) return <div>Loading...</div>;
  return (
    <div className='bg-black'>
      <div className='-mt-72'>
      <MovieList title="Now Playing" movies={nowPlayingMovies}/>
      <MovieList title="Popular Movies" movies={popularMovies}/>
      <MovieList title="Top Rated Movies" movies={topRatedMovies}/>
      <MovieList title="Upcoming Movies" movies={nowPlayingMovies}/>

      </div>
    </div>
  )
}

export default SecondaryContainer