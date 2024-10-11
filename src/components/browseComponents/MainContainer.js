import React from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'

const MainContainer = () => {
    const nowPlayingMovies = useSelector((store) => store.movies?.nowPlayingMovies); 
    if(!nowPlayingMovies ) return;

    const mainMovie = nowPlayingMovies[0];
    const {original_title, overview, id} = mainMovie;
  return (
    <div className={`relative`}>
        <VideoTitle className={`absolute`} title={original_title} overview={overview}/>
        <VideoBackground movieID = {id} />
    </div>
  )
}

export default MainContainer