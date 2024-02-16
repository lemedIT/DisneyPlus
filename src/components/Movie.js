import React from 'react'
import { Link } from 'react-router-dom'

const Movie = ({ id, title, poster }) => {    
  return (
    <div className="box-shadow">
      <Link to={`/movie/${id}`}><img src={poster} alt={`${title} image`}></img></Link>
    </div> 
  )
}

export default Movie