import React from "react"
import { useLocation } from "react-router-dom"
import useForOneMovie from "../../hooks/useForOneMovie"
import { imageCDN  } from "../../utils/url"
import { useSelector } from "react-redux"
const Movie = () => {
  const { handleMovieCard } = useForOneMovie();
  const {backdrop_path , original_title, overview} = useSelector((store) => store.movies.movieInfo);
  const { pathname } = useLocation()
  return (
    <div className=" absolute w-1/2 top-1/4  -bottom-2 bg-black/90  rounded-md flex justify-center  text-red-500 ">
      {/* cancel button  */}
      <div
        className="absolute top-2 right-2 cursor-pointer w-6 h-6 rounded-full bg-red-500 text-white text-center align-middle z-50"
        onClick={() => handleMovieCard(null)}
      >
        {" "}
        <p> x</p>{" "}
      </div>

      {/* moive background */}
      <div  className='w-full z-10  cursor-pointer relative rounded-lg '>
        <div className="inset-0 z-20 bg-gradient-to-r from-black/80  to-transparent  absolute "></div>
      <img src={imageCDN+backdrop_path} alt="poster" className=' absolute w-full h-fit z-10  object-cover block rounded-lg'/>
    </div>

    {/* moive Info  */}
    <div className="absolute z-20 top-1/4 left-3 text-white">
      {/* movie title  */}
        <h1 className="text-xl md:text-2xl font-bold">{original_title}</h1>
      {/* movie overview  */}
      {/* {release date } */}
    </div>


    </div>
  )
}

export default Movie
