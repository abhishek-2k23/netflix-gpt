import React from 'react'
import useGPTSearch from '../../../hooks/useGPTSearch'
import { FaSearch } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const GptSearchBar = () => {
    const {handleSearch, searchRef} = useGPTSearch();
    const isLoading = useSelector((store) => store.gptSearch.isLoading)
  return (
    <div className="absolute top-1/4 md:top-[20%]  md:left-1/4 w-11/12 md:w-1/2 bg-black rounded-md  md:p-5 p-2">
          <form
            className="flex w-full gap-2 bg-black"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              ref={searchRef}
              type="text"
              placeholder="Search for movies, TV shows and people..."
              className="flex-1 px-2 md:px-4 py-3 bg-[#c0c0c033] rounded-md text-white"
            />
            <button
              className="px-4 py-4 md:w-12 md:h-12 rounded-full bg-red-600 hover:bg-white hover:border hover:border-red-600 hover:text-red-600 text-white flex gap-2 justify-center items-center"
              onClick={handleSearch}
            >
              <p className="text-sm md:text-base">
                <FaSearch />{" "}
              </p>
            </button>
          </form>
        </div>
  )
}

export default GptSearchBar