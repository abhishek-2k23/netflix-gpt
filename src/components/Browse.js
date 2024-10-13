import React from 'react'
import Header from './Header'
import useGetNowPlayingMovies from '../hooks/useGetNowPlayingMovies'
import MainContainer from './browseComponents/MainContainer';
import SecondaryContainer from './browseComponents/SecondaryContainer';
import useGetPopularMovies from '../hooks/useGetPopularMovies';
import useGetTopRatedMovies from '../hooks/useGetTopRatedMovies';

const Browse = () => {
  useGetNowPlayingMovies();
  useGetPopularMovies();
  useGetTopRatedMovies();
  
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse