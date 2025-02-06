import Image from 'next/image'
import React from 'react'
import { IoStar } from "react-icons/io5";
import Intro from './intro';

const Engineer = () => {
    const data = [
        {
            num: "01",
            title: "Design & Building",
            desc: "Services currently available at the Department’s Development HUB have been enhanced.",
        },
        {
            num: "02",
            title: "Safe Construction",
            desc: "Applicants and Owners can review plans and objections alongside their plan examiner virtually.",
        },
        {
            num: "03",
            title: "Remodeling",
            desc: "The virtual review software eliminates the need for developers to visit a borough office.",
        },
        {
            num: "04",
            title: "Tiling Painting",
            desc: "Will allow the applicant to access reviewer comments and objections online.",
        }
    ]
    return (
    <div className='flex items-center md:items-start flex-col gap-3 w-full py-5 px-10 min-h-[80vh]' >
        <Intro title={"Building it better in Concrete"} desc={"The Department of Buildings promotes the safety build"}/>
        <div className='flex flex-col-reverse md:flex-row items-center gap-10 lg:gap-4 px-6 justify-center w-full min-h-[80vh]'>
            <div className='flex items-center md:items-start flex-col'>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
            {data.map((item, index) => (
                <div key={index} className="flex items-center md:items-start gap-6 flex-col relative bg-white p-6 rounded-xl shadow-md transition-transform hover:scale-105">
                {/* Number Badge */}
                <span className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-gray-300 font-extrabold text-[10rem] tracking-tight z-[-1]">
                    {item.num}
                </span>

                {/* Title with Icon */}
                <div className="flex items-center text-center md:text-left gap-3">
                    <span className="text-yellow-500 text-3xl hidden lg:flex">
                    <IoStar />
                    </span>
                    <h3 className="text-2xl font-bold text-gray-800">{item.title}</h3>
                </div>

                {/* Description */}
                <p className="text-sm w-[80%] text-center md:text-left text-gray-600 leading-relaxed">
                    {item.desc}
                </p>
                </div>
            ))}
            </div>

            </div>
            <div className='w-full'>
                <Image src={"/ingineure.jpg"} alt='engineer' className='w-[100%]' width={500} height={500}/>
            </div>
        </div>
    </div>
  )
}

export default Engineer