import React from 'react'
import logo from '../asset/logo.png'
const Header = () => {
  return (
    <div className='absolute w-10/12 left-[8.5%] justify-between lg:gap-x-80 md:gap-36 gap-16 flex  items-center bg-gradient-to-b from-black to-transparent pt-2'>
      {/* logo */}
      <img src={logo} alt='logo' className='w-56'/>

      {/* buttons  */}
      <div className='z-10 text-white flex gap-5 '>
        {/* first button */}
        <div className='px-7 py-1 cursor-pointer rounded-md border border-gray-500 '>
          English
        </div>

        {/* second button */}
        <div className='px-7 py-1 cursor-pointer rounded-md  bg-red-700 font-bold tracking-wide'>
          Sign In
        </div>
      </div>


    </div>
  )
}

export default Header