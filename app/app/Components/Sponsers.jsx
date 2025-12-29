'use client'
import React from 'react'
import Intro from './intro'
import Image from 'next/image'
import { motion } from 'framer-motion'

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
        <section className='w-full py-24 px-6 md:px-12 bg-background/50'>
            <div className="max-w-7xl mx-auto">
                <div className="mb-12">
                    <Intro
                        title={"Strategic Alliances"}
                        desc={"Global industrial pioneers who consistently support our structural innovations."}
                    />
                </div>

                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-700 hover:opacity-100'>
                    {Sponsers_images.map((img, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.1 }}
                            className="w-full max-w-[120px] filter drop-shadow-lg"
                        >
                            <Image
                                src={img}
                                alt={`Partner ${index + 1}`}
                                width={200}
                                height={100}
                                className='w-full object-contain'
                            />
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            </div>
        </section>
    )
}

export default Sponsers
