 import React, { useEffect } from 'react'
import bgImage from '../../asset/bgImage.jpg'
import { FaSearch } from 'react-icons/fa'
import useGPTSearch from '../../hooks/useGPTSearch'
import { useSelector } from 'react-redux'
import GptSuggestedMovies from './GptSuggestedMovies'
const GptSearch = () => {
    const {handleSearch, searchRef} = useGPTSearch();
    const {searchedMoviesData} = useSelector((store) => store.gptSearch);
  return (
    <>
      <div className='fixed -z-10'>
        {/* background  */}
        <img src={bgImage} alt="bgImage" className='h-screen  w-screen object-cover'/>
        <div className='absolute inset-0 bg-gradient-to-br from-[#00000094] to-[#00000060]'></div>
      </div>

      <div className=' px-2 md:px-0'>

        {/* search div  */}
        <div className='absolute top-1/4 md:top-[20%]  md:left-1/4 w-full md:w-1/2 bg-black rounded-md  md:p-5 p-2'>
            <form className='flex w-full gap-2 bg-black' onSubmit={(e) => e.preventDefault()}>
                <input ref={searchRef} type='text' placeholder='Search for movies, TV shows and people...' className='flex-1 px-2 md:px-4 py-3 bg-[#c0c0c033] rounded-md text-white'/>
                <button className='px-4 py-4 md:w-12 md:h-12 rounded-full bg-red-600  text-white flex gap-2 justify-center items-center' onClick={handleSearch}><p className='text-sm md:text-base'><FaSearch /> </p></button>
            </form>
        </div>

        {/* suggested movie lists */}
        {
          searchedMoviesData !== null && <div className='absolute top-[38%] md:top-1/3 w-screen md:w-3/4 md:left-[12.5%] h-[58%] md:h-[65%] no-scrollbar overflow-scroll bg-[#00000083] rounded-xl border border-gray-500 py-3 px-2'> <GptSuggestedMovies /> </div>
        }
    </div>
    </>
    
  )
}

export default GptSearch