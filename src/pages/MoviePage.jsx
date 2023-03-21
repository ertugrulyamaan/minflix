import axios from 'axios';
import React, { useEffect, useState } from 'react'

import { Link, useParams } from 'react-router-dom';
import YouTube from 'react-youtube';
import requests from '../Request';


const MoviePage = () => {
    let { userId } = useParams();
    const [value, setValue] = useState([])
    const [video,setVideo] = useState([])
    const [play,setPlay] = useState(false)


    useEffect(()=> {
        fetchData()
        fetchVideo()
    },[])


    const fetchData = async()=> {
        const {data:results} = await axios.get(`${requests.requestmovie}${userId}?api_key=${requests.key}`)
        setValue(results)
    }   
    const fetchVideo = async()=> {
        const {data} = await axios.get(`${requests.requestmovie}${userId}?api_key=${requests.key}&append_to_response=videos`)

        if (data.videos && data.videos.results) {
            const trailer = data.videos.results.find(vid => vid.name === "Official Trailer")
            setVideo(trailer ? trailer : data.videos.results[0])
        }
    }


    const handleTrailer = ()=> {
        setPlay(!play)
    }

  return (
     <div key={value.id} className='flex flex-col  h-max lg:h-screen bg-gradient-to-r from-slate-900 to-black text-white'>   
         <h2 className='mt-5 text-4xl text-center'>{value.original_title}</h2>
         <div className='flex flex-col items-center mx-auto lg:flex-row justify-between gap-10 mt-5 '>   
         <div className='w-fit h-fit'>
          <img className='w-full h-full rounded' src={`https://image.tmdb.org/t/p/w500${value.poster_path}`} alt={value.original_title}/>
           </div>
         <div className='lg:mt-10 md:w-[750px]'>
             <div className='flex flex-col'>
                 {value.genres && <div className=' text-xl sm:text-2xl text-white border-b-red-800 w-fit'>Category :</div>}          
                 <div className='flex gap-2 text-lg my-5'>{value.genres?.map(item=>(<div key={item.id}>{item.name}</div>))}</div>
             </div>
             <p className='flex flex-wrap text-sm sm:text-lg'>{value.overview}</p>
              <div className='flex flex-col mt-10'>
                 {!play ? <button  onClick={handleTrailer} className='px-4 py-2 mb-2 bg-gradient-to-r from-purple-700 to-red-600 w-fit rounded'>Play Trailer</button> : (
                     <>
                     <button onClick={handleTrailer} className='px-4 py-2 mb-2 w-fit bg-gradient-to-r from-slate-800 to-red-600 rounded'>Back</button>
                     {video ? <YouTube videoId={video.key} className={"flex pb-10  w-full h-[450px]"}  opts={{  width: '100%',  height: '100%',  playerVars: {autoplay: 1, controls: 1, cc_load_policy: 0, fs: 1, iv_load_policy: 0, modestbranding: 0, rel: 0, showinfo: 0,}, }}/>: <div>Trailer not Found.</div>} 
                     </>
                 )}
             </div>
         </div>
         </div>
     </div>                


  )
}

export default MoviePage