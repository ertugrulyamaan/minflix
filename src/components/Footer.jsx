import React from 'react'
import { BsLinkedin, BsReddit, BsTwitter } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className='flex flex-col gap-2 sm:flex-row justify-between sm:p-4 md:p-8 items-center bg-zinc-900'>
        <div>
            <h2 className='text-red-700 text-3xl font-bold'>MinFlix</h2>
        </div>
        <div className='text-white '>© 2023 Ertuğrul Yaman All right reserved.</div>
        <div className='text-slate-200 flex gap-2'>
            <BsLinkedin size={20} style={{cursor:'pointer'}}/>
            <BsTwitter  size={20} style={{cursor:'pointer'}}/>
            <BsReddit   size={20} style={{cursor:'pointer'}}/>
        </div>
    </footer>
  )
}

export default Footer