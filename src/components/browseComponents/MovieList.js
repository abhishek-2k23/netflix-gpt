import React from 'react'
import MovieCard from './MovieCard'
const MovieList = ({title,movies}) => {
  
  return (
    <div className='flex flex-col overflow-scroll no-scrollbar bg-black text-white p-1 '>
      <div className=' font-bold text-2xl pl-2 z-20'> {title}</div>
      <div className='flex '>
      {
        movies.map((movie) => <div className=''><MovieCard key={movie.id} poster={movie.poster_path}/> </div>)
      }
      </div>
    </div>
  )
}

export default MovieList