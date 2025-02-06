import React from 'react'
import Image from 'next/image'
const Project = ({project}) => {
    return (
    <div className='w-[100%]'>            
        <div key={project.id} className='flex flex-col items-center'>      
            <div className="w-full relative containProject h-full bg-white shadow-xl p-5 rounded-md">
                <Image
                    src={project.img}
                    alt={project.name}
                    className="w-full object-cover rounded-md mb-3"
                    width={1000}
                    height={1000}
                />
            </div>
            <div className='dataProject'>
                <span className='text-white font-bold text-3xl'>{project.name}</span>
                <span>{project.Completed}</span>
            </div>
        </div>
      </div>
  )
}

export default Project