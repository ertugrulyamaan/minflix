import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Movie from './Movie'
import axios from 'axios'
import {BsArrowRightSquareFill,BsArrowLeftSquareFill} from 'react-icons/bs'




const Row = ({title, fetchURl}) => {
    const slider = useRef()
    const mainTitle = title.toUpperCase()
    const [movies, setMovies] = useState([])
    
    useEffect(()=> {        
       fetchData()
        },[fetchURl])
    
    const fetchData = async() => {
        const {data:{results}} = await axios.get(fetchURl)
        setMovies(results)
    }
    
    const slideLeft= ()=> {
        slider.current.scrollLeft -=500 
    }
    const slideRight= ()=> {
        slider.current.scrollLeft +=500
    }
    

  return (
    <>
      <Link to={`${title}`}>
        <h2 className='text-white font-bold md:text-xl p-4'>{mainTitle}</h2>
      </Link>
        <div className='relative flex items-center group'>
          <BsArrowLeftSquareFill onClick={slideLeft} className='bg-white rounded absolute opacity-50 hover:opacity-100 left-0 z-10 hidden group-hover:block' size={40} color='#000'/>
            <div ref={slider} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
              {movies.map((movie) => (
               <Movie movie={movie} key={movie.id}/>
              ))}
            </div>
          <BsArrowRightSquareFill onClick={slideRight} className='bg-white rounded absolute opacity-50 hover:opacity-100 right-0 z-10 hidden group-hover:block' size={40} color='#000'/>
        </div>
    </>
  )
}

export default Row