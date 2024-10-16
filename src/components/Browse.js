import React, { useEffect } from 'react'
import Header from './Header'
import useGetNowPlayingMovies from '../hooks/useGetNowPlayingMovies'
import MainContainer from './browseComponents/MainContainer';
import SecondaryContainer from './browseComponents/SecondaryContainer';
import useGetPopularMovies from '../hooks/useGetPopularMovies';
import useGetTopRatedMovies from '../hooks/useGetTopRatedMovies';

const Browse = () => {
  console.log("inside browse page up")
  useEffect(() => {
    console.log("browse component mounted")
    return () => console.log("browse component unmounted")
  })
  useGetNowPlayingMovies();
  useGetPopularMovies();
  useGetTopRatedMovies();
  console.log('inside browse page down')
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse