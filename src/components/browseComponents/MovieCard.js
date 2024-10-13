import React from 'react'
import { imageCDN } from '../../utils/url'

const MovieCard = ({poster}) => {
  return (
    <div className='w-48  cursor-pointer relative p-2 rounded-lg'>
      <img src={imageCDN+poster} alt="poster" className='w-full h-auto block rounded-lg'/>
    </div>
  )
}

export default MovieCard