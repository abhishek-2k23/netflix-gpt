import React, { useRef } from 'react'
import bgImage from '../../asset/bgImage.jpg'
import { FaSearch } from 'react-icons/fa'
const GptSearch = () => {
    const searchRef = useRef(null);
    const handleSearch = () => {
        console.log(searchRef.current.value);
    }
  return (
    <div>
        {/* background  */}
        <img src={bgImage} alt="bgImage" className=''/>
        <div className='absolute inset-0 bg-gradient-to-br from-[#000000ab] to-[#0000007a]'></div>

        {/* search div  */}
        <div className='absolute top-[20%] left-1/4 w-1/2 bg-black rounded-md  p-5 '>
            <form className='flex w-full gap-2' onSubmit={(e) => e.preventDefault()}>
                <input ref={searchRef} type='text' placeholder='Search for movies, TV shows and people...' className='flex-1 px-4 py-3 bg-[#c0c0c033] rounded-md text-white'/>
                <button className='w-12 h-12 rounded-full bg-red-600  text-white flex gap-2 justify-center items-center' onClick={handleSearch}><p className=''><FaSearch /> </p></button>
            </form>
        </div>
    </div>
  )
}

export default GptSearch