import React from 'react'
import { FaPlay } from "react-icons/fa";
import { IoInformationCircleOutline } from "react-icons/io5";

const VideoTitle = ({title, overview}) => {
  return (
    <div  className='pt-[20%]  px-24 space-y-5 absolute  text-white w-screen aspect-video bg-gradient-to-r from-black to-[#00000071] overflow-hidden'>

        {/* video title  */}
        <h1 className='text-5xl font-bold'>{title}</h1>

        {/* video overview  */}
        <p className='text-lg w-[30%] text-justify'>{overview}</p>
        
        {/* button div  */}
        <div className='flex gap-5 text-lg'>
            <button className='px-12 py-3 border bg-white rounded-md  font-semibold tracking-wide text-black hover:opacity-40'><p className='flex gap-2 items-center'><FaPlay /> Play</p></button>
            <button className='px-6 py-3 bg-[#c0c0c050] rounded-md '><p className='opacity-100 text-white flex gap-2 items-center'><IoInformationCircleOutline c /> More Info </p></button>
        </div>
    </div>
  )
}

export default VideoTitle