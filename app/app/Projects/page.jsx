import React from 'react'
import Intro from '../Components/intro'
import { projects } from '../Data'
import Image from 'next/image'
import Project from '../Components/Project'
import Link from 'next/link'
const Projects = () => {
  return (
    <div className='flex items-center w-full justify-center lg:items-start flex-col min-h-[100vh] py-20 px-5'>
        <Intro title={"Projects"} desc={"Check out our latest construction projects around the world"}/>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full'>
          {
            projects.map((project) => {
              return (
                <Link key={project.id} className='flex relative contentContainer w-full' href={`/Projects/${project.id}`}>
                  <Image
                    src={project.img}
                    alt={project.name}
                    className="w-full object-cover rounded-md"
                    width={1000}
                    height={1000}
                  />
                  <div className='absolute NameDetail flex items-center flex-col justify-center top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                      <span className='text-yellow-700 font-bold text-2xl'>{project.name}</span>
                  </div>
                </Link>
              )
            })
          }
        </div>
    </div>
  )
}

export default Projects