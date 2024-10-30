import React from "react"
import { useLocation } from "react-router-dom"
import useForOneMovie from "../../hooks/useForOneMovie"
import { imageCDN  } from "../../utils/url"
import { useSelector } from "react-redux"
import Loader from "../Loader"
const Movie = () => {
  const { handleMovieCard } = useForOneMovie();
  const {backdrop_path , original_title, overview, genres, release_date} = useSelector((store) => store?.movies?.movieInfo);
  const {showMovieInfo} = useSelector((store) => store.movies);

  let genersName = genres.map((genre) => genre.name).join(" | ");

  if(showMovieInfo == null) return <Loader />
  return (
    <div className=" absolute w-11/12 md:w-1/2 top-[20%] border border-gray-800 md:top-1/4  -bottom-2  rounded-md flex justify-center  text-red-500 ">
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
        <div className="inset-0 z-20 bg-black/70  absolute "></div>
      <img src={imageCDN+backdrop_path} alt="poster" className=' absolute w-full z-10  object-cover block rounded-lg'/>
    </div>

    {/* moive Info  */}
    <div className="absolute z-20 top-1/4 md:left-5 text-white px-2 md:px-0">
      {/* movie title  */}
        <h1 className="text-xl md:text-6xl font-bold font-titleFont tracking-widest md:max-w-1/4 ">{original_title}</h1>

      {/* {release date } */}
        <p>{release_date.split("-")[0]+" . "}</p>
      {/* movie overview  */}
        <p className="text-sm md:text-base text-justify tracking-widest md:w-1/2 font-sans mt-4"> {overview.length > 270 ? overview?.substring(0,250) + '....' : overview}</p>
      
      {/* movie genere  */}
        <p className="text-sm md:text-lg font-bold text-justify tracking-widest md:w-1/2 font-mono mt-4">{genersName}</p>
      
    </div>


    </div>
  )
}

export default Movie
