import React from 'react'
import MovieCard from './MovieCard'
import useForOneMovie from '../../hooks/useForOneMovie'
const MovieList = ({title,movies}) => {
  const {handleMovieCard} = useForOneMovie();

  return (
    <div className='flex flex-col  md:overflow-auto  text-white p-1 '>
      <div className=' font-semibold md:font-bold text-lg md:text-2xl pl-2 z-20'> {title}</div>
      <div className='flex overflow-scroll no-scrollbar'>
      {
        movies.map((movie) => <div onClick={() => handleMovieCard(movie)} className='w-36 md:w-48' key={movie.id}><MovieCard  id={movie.id} poster={movie.poster_path}/> </div>)
      }
      </div>
    </div>
  )
}

export default MovieList