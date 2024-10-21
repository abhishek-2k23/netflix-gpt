import React from 'react'
import { useLocation } from 'react-router-dom';

const Movie = () => {
    const {pathname} = useLocation();
  return (
    <div>{pathname.split('/').pop()}</div>
  )
}

export default Movie