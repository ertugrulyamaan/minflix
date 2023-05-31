import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MainContext } from '../context/SearchContext'
import {BsToggleOn,BsToggleOff} from 'react-icons/bs'
import request from '../Request'
const Navbar = () => {
  const [toggle,setToggle] = useState(false)
  const navigate = useNavigate()
  const{ searchValue,setSearchValue,setSearchMovies } =  useContext(MainContext)

  const handleToggle = () => {
    setToggle((prev)=>!prev)
  }


  const handleSubmit = async(e)=> {
    e.preventDefault()
    const {data:{results}} = await axios.get(`${request.requestSearch+searchValue}`)
    await setSearchMovies(results)
    localStorage.setItem('searchMovies', JSON.stringify(results))
    navigate('/search')
    setSearchValue('')
  }
  
  const handleSearch = (e) => {
    setSearchValue(e.target.value)
    localStorage.setItem('search', e.target.value)
  }


  return (
    <nav className='flex flex-row justify-between py-4 sm:p-4 md:p-8 bg-gradient-to-tr from-slate-900 to-red-900'>
        <Link to={'/'} className=''>
            <h2 className='text-3xl text-red-600 font-bold italic'>MinFlix</h2>
        </Link>
        <div className='flex sm:hidden mr-2 relative items-center'>
          {toggle ? <BsToggleOn onClick={handleToggle} size={40} color='#fff'/>: <BsToggleOff onClick={handleToggle} size={40} color='#fff'/> }
          {toggle && (
              <form onSubmit={handleSubmit} className='absolute top-10 right-5 flex z-10 p-4 bg-slate-500/60 rounded'>
                <input type='text' placeholder='Search movie...' className='rounded w-[125px] text-black' value={searchValue} onChange={handleSearch}/>
                <button type='submit' className='text-white ml-1 bg-gradient-to-b from-red-700 to-black px-1 border-transparent rounded'>Search</button>
            </form>
          )}
        </div>
        <form onSubmit={handleSubmit} className='sm:flex  gap-0 sm:gap-2 hidden '>
          <input type='text' placeholder='Search movie...' className='rounded md:px-1 text-black' value={searchValue} onChange={handleSearch}/>
          <button type='submit' className='text-white bg-gradient-to-b from-red-700 to-black px-1 border-transparent rounded'>Search</button>
        </form>
    </nav>
  )
}

export default Navbar