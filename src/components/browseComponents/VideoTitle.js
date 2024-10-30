import React from 'react'
import { FaPlay } from "react-icons/fa";
import { IoInformationCircleOutline } from "react-icons/io5";
import useForOneMovie from '../../hooks/useForOneMovie';

const VideoTitle = ({title, overview, movieID}) => {

  const {handleMovieCard} = useForOneMovie();
  const handleButtonClick = () => {
    handleMovieCard(movieID)
  }
  return (
    <div  className='pt-[25%] md:pt-[20%]  px-2 md:px-24 space-y-2 md:space-y-5 absolute  text-white w-screen md:w-full aspect-video bg-gradient-to-r from-black to-transparent overflow-hidden'>

        {/* video title  */}
        <h1 className='text-2xl md:text-4xl font-bold'>{title}</h1>

        {/* video overview  */}
        <p className='hidden md:block text-lg w-[35%] text-justify'>{overview.length > 270 ? overview?.substring(0,250) + '....' : overview}</p>
        
        {/* button div  */}
        <div className='flex gap-x-2 md:gap-5 md:text-lg z-50'>
            <button onClick={handleButtonClick} className='px-4 md:px-12 py-1 md:py-3 border bg-white rounded-md  font-semibold tracking-wide text-black hover:opacity-40'><p className='flex gap-2 items-center'><FaPlay /> Play</p></button>
            <button onClick={handleButtonClick} className='px-3  md:px-6 py-2 md:py-3 bg-[#c0c0c050] rounded-md '><p className='opacity-100 text-white flex md:gap-2 gap-1 items-center'><IoInformationCircleOutline c /> More Info </p></button>
        </div>
    </div>
  )
}

export default VideoTitle