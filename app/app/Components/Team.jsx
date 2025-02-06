import Image from 'next/image'
import React from 'react'
import { TiSocialLinkedin , TiSocialFacebook, TiSocialInstagram } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import Intro from './intro';
const Team = () => {
    const TeamMempers = [
        {
            id: 1,
            name: "Alan Smith",
            img: "/eng1.jpg",
            desc : "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            id: 2,
            name: "Amad Nathan",
            img: "/eng2.jpg",
            desc : "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            id: 3,
            name: "Kloud Uilne",
            img: "/eng3.jpg",
            desc : "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            id: 4,
            name: "Ali Roam",
            img: "/eng4.jpg",
            desc : "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
        }
    ]
  return (
    <div className='flex items-center md:items-start flex-col gap-3 w-full py-5 px-10 min-h-[80vh]'>
        <Intro title={"Our Team"} desc={"Our team is dedicated to providing the best services for our clients"} />
        <div className='flex items-center justify-center w-full min-h-[80vh] gap-3'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>                
                {
                    TeamMempers.map(({ name, id, desc, img }) => {
                        return (
                            <div className='flex imageContainer relative flex-col items-center' key={id}>
                                <Image src={img} width={500} height={500} className='w-[300px] block imgEng h-[400px] rounded-sm'/>
                                <div className='flex listDetails items-center flex-col gap-2'>
                                    <span>{name}</span>
                                    <p className='text-xs w-[70%] text-center'>{desc}</p>
                                    <div className='flex items-center gap-3'>
                                        <span className='border-[1px] border-yellow-700 text-white text-2xl rounded-full flex items-center justify-center h-[40px] w-[40px]'><TiSocialFacebook/></span>
                                        <span className='border-[1px] border-yellow-700 text-white text-2xl rounded-full flex items-center justify-center h-[40px] w-[40px]'><TiSocialInstagram/></span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Team