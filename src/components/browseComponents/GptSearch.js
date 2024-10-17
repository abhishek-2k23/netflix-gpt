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
    <div className='h-screen overflow-hidden'>
        {/* background  */}
        <img src={bgImage} alt="bgImage" className=''/>
        <div className='absolute inset-0 bg-gradient-to-br from-[#00000094] to-[#00000060]'></div>

        {/* search div  */}
        <div className='absolute top-[20%] left-1/4 w-1/2 bg-black rounded-md  p-5 '>
            <form className='flex w-full gap-2' onSubmit={(e) => e.preventDefault()}>
                <input ref={searchRef} type='text' placeholder='Search for movies, TV shows and people...' className='flex-1 px-4 py-3 bg-[#c0c0c033] rounded-md text-white'/>
                <button className='w-12 h-12 rounded-full bg-red-600  text-white flex gap-2 justify-center items-center' onClick={handleSearch}><p className=''><FaSearch /> </p></button>
            </form>
        </div>

        {/* suggested movie lists */}
        {
          searchedMoviesData !== null && <div className='absolute top-1/3 w-3/4 left-[12.5%] h-[65%] no-scrollbar overflow-scroll bg-[#00000083] rounded-xl border border-gray-500 py-3 px-2'> <GptSuggestedMovies /> </div>
        }
    </div>
  )
}

export default GptSearch