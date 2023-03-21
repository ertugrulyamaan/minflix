import axios from 'axios'
import React, { useEffect, useState, memo } from 'react'
import { Link } from 'react-router-dom'
import  requests from '../Request'

const Main = () => {

  const [movies,setMovies] = useState([])
  const movie =  movies[Math.floor(Math.random() * movies.length)]
 
  useEffect( ()=> {
    fetchData()
  },[])
  
  const fetchData = async () => {
    try{
      const {data: {results}} = await axios.get(`${requests.requestPopular}`)
      setMovies(results)
    }
    catch(e) {
      console.log(e.message)
    }
  }

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0,num) + '...';
    }
    else {
      return str;
    }
  }


return (
    <div className='w-full h-[550px] text-white'>
    <div className='w-full h-full'>
      <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'/>
      <img className='w-full h-full object-cover md:object-fill' src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`} alt={movie?.title}/> 
      <div className='absolute w-full top-[20%] p-4 md:p-8'>
        <h1 className=' text-3xl md:text-5xl my-4 font-bold'>{movie?.title}</h1>
        <div>
          <Link to={`${movie?.id}`}>
            <button className='rounded bg-gradient-to-bl from-slate-400 to-gray-600 text-black border-gray-300 py-2 px-5' >Play</button>
          </Link>
        </div>
        <p className='text-gray-400 text-sm py-3 '>Release Date: {movie?.release_date}</p>
        <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>{truncateString(movie?.overview, 150)}</p>
      </div>
    </div>
  </div>
)
}
export default memo(Main);



//   <Youtube videoId={trailer.key} className={"youtube amru"} containerClassName={"youtube-container amru"} opts={{  width: '100%',  height: '100%',  playerVars: {autoplay: 1, controls: 0, cc_load_policy: 0, fs: 0, iv_load_policy: 0, modestbranding: 0, rel: 0, showinfo: 0,}, }}/>
    