import React, { useRef } from 'react'
import bgImage from '../../asset/bgImage.jpg'
import { FaSearch } from 'react-icons/fa'
import { genAI } from '../../utils/geminiAI'
import { useDispatch } from 'react-redux'
import { setSearchResult } from '../../redux/Slice/gptSearch'
const GptSearch = () => {
    const dispatch = useDispatch(); 

    //get the search input value
    const searchRef = useRef(null);
    
    //initiate the gemini AI model
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    
    const handleSearch = async () => {
        try{
            const prompt = "Act like a movie recommendation engine with the following prompt: " + searchRef.current.value + ". The output should be the name of 5 movie seperated with comma. For example: The Matrix, The Matrix Reloaded, The Matrix Revolutions, The Matrix Resurrections, The Matrix Revolutions. I only need the name of movie never the description. Only the name with comma seperation.";
        
            const result = await model.generateContent(prompt);
            const response = result.response;
            const text = response.text();

            //convert movies name from text to array
            const moviesNameArray = text.split(',');

            //add to the redux store
            dispatch(setSearchResult(moviesNameArray));
        }catch(e){
            console.log(e)
        }
    }

  return (
    <div>
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
    </div>
  )
}

export default GptSearch