import React, { useEffect } from 'react'
import Header from './Header'
import useGetNowPlayingMovies from '../hooks/useGetNowPlayingMovies'
import MainContainer from './browseComponents/MainContainer';
import SecondaryContainer from './browseComponents/SecondaryContainer';
import useGetPopularMovies from '../hooks/useGetPopularMovies';
import useGetTopRatedMovies from '../hooks/useGetTopRatedMovies';
import { useSelector } from 'react-redux';
import GptSearch from './browseComponents/gptSearch/GptSearch';
const Browse = () => {
  const isSearchPage = useSelector((store) => store.gptSearch.isSearchPage);
  useGetNowPlayingMovies();
  useGetPopularMovies();
  useGetTopRatedMovies();
  console.log('inside browse page down')
  return (
    <div>
      <Header />
      
      {isSearchPage ? <GptSearch /> : (<><MainContainer /><SecondaryContainer /></>)}

    </div>
  )
}

export default Browse