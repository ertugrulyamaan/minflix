import React from 'react'
import { Link } from 'react-router-dom'




const Movie = ({movie}) => {
  return (
    <Link to={`${movie?.id}`}>
    <div  className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2' >
        <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie?.title}/>
        <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 hover:opacity-100 opacity-0 text-white'>
            <p className=' flex items-center h-full justify-center text-xs font-bold'>{movie?.title}</p>
        </div>
    </div>
    </Link>
  )
}

export default Movie