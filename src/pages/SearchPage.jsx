import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MainContext } from '../context/SearchContext'


const SearchPage = () => {
  const{searchMovies} =  useContext(MainContext)

  return (
    <div className='flex flex-col items-center text-white'>
      <h3 className='w-max mx-auto text-white italic text-4xl bg-gradient-to-r from-gray-700 py-2 px-4 my-2 rounded-xl mt-10'>Search Page</h3>
      <div className='mt-10 flex justify-center flex-wrap'>
        {searchMovies?.map(item =>(
          <div key={item.id} className='py-5 px-5'>
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

export default SearchPage