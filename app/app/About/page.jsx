'use client'
import React from 'react'
import Intro from '../Components/intro'
import Image from 'next/image'
import { FaCheck } from "react-icons/fa6";
import { aboutCharactersics, features, services } from '../Data';
import CountUp from "react-countup"
import {motion} from 'framer-motion'

const About = () => {
    const stats = [
        { num: 50, text: "Years of Experience" },
        { num: 70, text: "Projects Completed" },
        { num: 200, text: "Awards Won" },
        { num: 100, text: "Happy Clients" },
        { num : 40 , text : "Architect Engineer"}
    ];

    return (
        <div className='flex flex-col items-center w-full min-h-screen py-20 gap-10'>
            {/* About Section */}
            <div className='flex flex-col lg:flex-row items-center lg:items-start px-10 w-full'>
                <div className='w-[30%]'>
                    <Image src={"/about_line-1-1.jpg"} alt='image' width={500} height={500} className='w-[70%] h-[100%]'/>
                </div>
                <div className='flex flex-col gap-4 w-full lg:w-[70%]'>
                    <Intro title='Who We Are' desc='Meet our team members and our workplaces'/>
                    <p className='text-gray-700 leading-relaxed'>
                        At SluchBui.Co, we specialize in turning visions into reality. With 8 years of experience in the construction and building industry, we have built a reputation for delivering high-quality projects on time and within budget. Our expertise spans residential, commercial, and large-scale developments.
                    </p>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 py-3'>
                        {aboutCharactersics.map(({ text, percentig }, index) => (
                            <div key={index} className='flex flex-col gap-3'>
                                <span className='text-yellow-600 font-bold tracking-widest'>{text}</span>
                                <div className='relative w-full h-3 bg-gray-200 rounded-md'>
                                    <motion.div 
                                        initial={{ width: 0 }} 
                                        animate={{ width: `${percentig}%` }} 
                                        transition={{ duration: 1.5 }}
                                        className='absolute top-0 left-0 h-full bg-yellow-600 rounded-md'
                                    ></motion.div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <ul className='grid grid-cols-1 lg:grid-cols-3 gap-5 pt-4'>
                        {stats.map((ele, index) => (
                            <div key={index} className='flex flex-col items-center text-center gap-2'>
                                <CountUp end={ele.num} duration={6} className='text-6xl font-bold text-yellow-700'/>
                                <p className='text-gray-900 font-semibold uppercase'>{ele.text}</p>
                            </div>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Why Choose Us Section */}
            <div className='w-full bg-gray-50 py-16 px-10 text-center'>
                <Intro title='Why Choose Us' desc='Discover why we stand out in the industry.'/>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-8 pt-8'>
                    {features.map((feature, index) => (
                        <div key={index} className='flex items-center gap-4 p-4 border rounded-lg shadow-md bg-white hover:bg-black hover:text-yellow-600 transition duration-500'>
                            <span className='flex items-center justify-center w-10 h-10 rounded-full bg-yellow-600 text-white'><FaCheck/></span>
                            <p className='text-gray-500 font-medium'>{feature}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Services Section */}
            <div className='flex flex-col items-start bg-gray-50 py-16 px-10 w-full'>
                <Intro title='Services' desc='Over 30 years of expertise in residential renovation design and execution.'/>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-10 pt-8'>
                    {services.map((serv) => (
                        <div key={serv.id} className='relative w-full py-10'>
                            <Image src={serv.img} alt='Service' width={500} height={500} className='w-full rounded-lg shadow-lg'/>
                            <div className='bg-white w-11/12 mx-auto absolute bottom-[-60px] left-1/2 transform -translate-x-1/2 shadow-lg hover:bg-black hover:text-yellow-600 transition duration-700 p-5 rounded-lg flex flex-col gap-2'>
                                <span className='text-yellow-600 text-lg font-semibold'>{serv.title}</span>
                                <p className='text-sm text-gray-500'>{serv.paragraph}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
