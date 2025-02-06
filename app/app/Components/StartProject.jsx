import React from 'react'
import { FaBuilding } from "react-icons/fa";

const StartProject = () => {
  return (
    <div className='w-full bg-yellow-600 px-10 py-16 flex items-center flex-col md:flex-row justify-center gap-10'>
        <div className='flex flex-col md:flex-row items-center gap-3'>
            <span className='text-yellow-700 p-2 rounded-full w-[70px] h-[70px] flex items-center justify-center text-3xl bg-black'><FaBuilding/></span>
            <div className='flex items-center flex-col gap-1'>
                <h1 className='text-white font-bold text-3xl'>Start a new project with us</h1>
                <p className='text-sm text-center md:text-start w-[100%] md:w-[70%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis perspiciatis tempore similique nam, optio dicta quidem necessitatibus debitis</p>
            </div>
        </div>
        <button className='border-[1px] border-black p-4 rounded-xl text-xl font-bold text-black hover:bg-black hover:text-yellow-600 duration-700'>Get Started</button>
    </div>
  )
}

export default StartProject