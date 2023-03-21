import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import requests from '../Request'

const Popular = () => {
  const [movies,setMovies] =useState([])


  useEffect(()=> {
    fetchData()
  },[])

  const fetchData = async() => {
    const {data:{results}} = await axios.get(requests.requestPopular)
    setMovies(results)
  }

  return (
    <div className='py-2'>
      <h3 className='w-max mx-auto text-white italic text-4xl bg-gradient-to-r from-gray-700 py-2 px-4 my-2 rounded-xl'>Popular Movies</h3>
      <div className='flex justify-center flex-wrap'>
        {movies.map((item)=> (
          <div className='py-10 px-5' key={item.id}>
            <Link to={`${item.id}`}>
              <h2 className=' text-white text-l w-auto px-2 my-2 rounded mb-5'>
              {item.original_title || item.original_name} <span className='ml-2'>({item.vote_average})</span>
              </h2>
              <img src={`https://image.tmdb.org/t/p/w400${item.poster_path}`}  alt={item.original_title} />
          </Link>
        </div>
      ))}
    </div>
  </div>
  )
}
export default Popular