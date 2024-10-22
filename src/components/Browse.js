import React, { useEffect } from 'react'
import Header from './Header'
import useGetNowPlayingMovies from '../hooks/useGetNowPlayingMovies'
import MainContainer from './browseComponents/MainContainer';
import SecondaryContainer from './browseComponents/SecondaryContainer';
import useGetPopularMovies from '../hooks/useGetPopularMovies';
import useGetTopRatedMovies from '../hooks/useGetTopRatedMovies';
import { useSelector } from 'react-redux';
import GptSearch from './browseComponents/gptSearch/GptSearch';
import Movie from './MovieInfo/Movie';
const Browse = () => {
  const isSearchPage = useSelector((store) => store.gptSearch.isSearchPage);
  const {showMovieInfo} = useSelector((store) => store.movies);

  useGetNowPlayingMovies();
  useGetPopularMovies();
  useGetTopRatedMovies();
  return (
    <div className={`${showMovieInfo && 'bg-fixed'}`}>

      {
        showMovieInfo && 
          <div  className='fixed overflow-scroll z-50 w-screen h-screen  backdrop-blur-sm inset-0 bg-black/70 flex justify-center items-center'>
            <Movie />
          </div>
      }
      <Header />
      
      {isSearchPage ? <GptSearch /> : (<><MainContainer /><SecondaryContainer /></>)}

    </div>
  )
}

export default Browse