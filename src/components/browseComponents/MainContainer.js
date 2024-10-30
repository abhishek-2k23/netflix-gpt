import React from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'

const MainContainer = () => {
    const nowPlayingMovies = useSelector((store) => store.movies?.nowPlayingMovies); 
    if(!nowPlayingMovies ) return;

    const mainMovie = nowPlayingMovies[1];
    const {original_title, overview, id} = mainMovie;

  return (
    <div className="pt-40 md:pt-0 bg-black md:bg-none">
        <VideoTitle title={original_title} overview={overview} movieID = {id}/>
        <VideoBackground movieID = {id} />
    </div>
  )
}

export default MainContainer