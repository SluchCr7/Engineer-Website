'use client'
import { projects } from '@/app/Data'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Page = ({ params }) => {
    const [project , setProject] = useState({})
    const {id} = params
    useEffect(() => {
      setProject(projects.filter((project) => project.id == id)[0])
    }, [id])
    const dataProject = [
      {
        text: "name",
        value : project.name
      },
      {
        text: "location",
        value : project.location
      },
      {
        text: "Completed",
        value : project.Completed
      },
      {
        text: "Engineer",
        value : project.engineer
      },
      {
        text: "area",
        value : project.area
      },
      {
        text: "value",
        value : project.value
      },
    ]
  return (
    <div className='flex items-center flex-col gap-8 w-full py-24 px-10'>
      <div className='flex items-center flex-col lg:flex-row gap-4 w-full justify-center'>
          <div className='flex w-[100%] lg:w-[50%] items-center lg:items-start flex-col gap-4'>
            {
              dataProject.map((info) => {
                return (
                  <div className='w-[80%] flex items-center justify-between'>
                    <span className='text-sm text-black'>{info.text}</span>
                    <span className='text-yellow-700 font-bold'>{info.value}</span>
                  </div>
                )  
              })
            }
          </div>
          <div className=' w-[100%] lg:w-[50%]'>
            <Image src={project.img} alt='imageProduct' width={500} height={500} className='w-[100%] rounded-md' />
          </div>
      </div>
      <div className='flex w-full items-center lg:items-start shadow-xl py-5 px-2 flex-col gap-3'>
        <p className='w-[80%] text-sm tracking-[1px]'>{project.desc}</p>
        <div className='flex items-center gap-3'>
          {
            project?.keyWords?.map((keyword , index) => {
              return (
                <span key={index} className='border-[1px] rounded-lg border-yellow-700 text-yellow-700 w-fit px-2 py-1'>
                  {keyword}
                </span>
              )
            })
          }
        </div>
      </div>
      <div className='flex items-center lg:items-start flex-col gap-3'>
          <span className='text-yellow-700 font-black'>Related Projects</span>
          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3'>
            {
              projects.map((project) => {
                return (
                  <Link href={`/Projects/${project.id}`}>
                    <Image key={project.id} src={project.img} alt='image' width={500} height={500} className='w-[100%] h-[100%]' />
                  </Link>
                )
              })
            }
          </div>
      </div>
    </div>
  )
}

export default Page