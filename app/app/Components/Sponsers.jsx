import React from 'react'
import Intro from './intro'
import Image from 'next/image'

const Sponsers = () => {
    const Sponsers_images = [
        "/SponsersBg/Sponser1.png",
        "/SponsersBg/Sponser2.png",
        "/SponsersBg/Sponser3.png",
        "/SponsersBg/Sponser4.png",
        "/SponsersBg/Sponser5.png",
        "/SponsersBg/Sponser6.png",
    ]
  return (
    <div className='flex items-center md:items-start flex-col gap-3 w-full py-5 px-10 min-h-[80vh]'>
        <Intro title={"Sponsers"} desc={"Sponsors who constantly support us to continue success"}/>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4'>
            {
                Sponsers_images.map((img, index) => {
                    return(
                        <Image key={index} src={img} alt='imageSponser' width={200} height={200} className='w-full'/>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Sponsers