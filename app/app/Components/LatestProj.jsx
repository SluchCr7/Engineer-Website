'use client'
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Intro from './intro';
import { projects } from '../Data';
import Image from 'next/image';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
const LatestProj = () => {
  const [projectOne , setProjectOne] = useState(0)
  const [projectTwo , setProjectTwo] = useState(1)
  const [projectThree, setProjectThree] = useState(2)
  const prev = () => {
    if (projectTwo == 0) {
      return;
    }
    else {
      setProjectOne((prev) => prev - 1);
      setProjectTwo((prev) => prev - 1);
      setProjectThree((prev) => prev - 1);
    }
  };
  const next = () => {
    if (projectTwo == projects.length - 1) return
    else {
      setProjectOne((prev) => prev + 1);
      setProjectTwo((prev) => prev + 1);
      setProjectThree((prev) => prev + 1);
    }
  };
  return (
    <div className="w-full flex items-center flex-col gap-3 min-h-[80vh] py-5 px-10 bg-yellow-600">
      <div className='w-full flex items-center lg:items-start justify-between flex-col lg:flex-row'>
        <Intro
          title="Latest Projects"
          desc="Check out our latest construction projects around the world"
        />
        <div className='flex items-center gap-3'>
          <span onClick={prev} className='w-[40px] h-[40px] rounded-full border-[1px] border-yellow-700 flex items-center justify-center text-black hover:bg-black hover:text-yellow-500 duration-700'><FaArrowLeft/></span>
          <span onClick={next} className='w-[40px] h-[40px] rounded-full border-[1px] border-yellow-700 flex items-center justify-center text-black hover:bg-black hover:text-yellow-500 duration-700'><FaArrowRight/></span>
        </div>
      </div>
      <div className='flex items-center gap-4'>
        <div className="w-[100%] opacity-20 h-fit containProject flex items-center justify-center">
          <div className='w-[100%] h-fit'>              
            <Image
              src={projects[projectOne]?.img}
              alt={projects[projectOne]?.name}
              className="w-[100%] object-cover rounded-md "
              width={2000}
              height={2000}
            />
          </div>
          <div className='dataProject flex items-center justify-center'>
            <span className='text-yellow-700 font-bold uppercase text-2xl'>{projects[projectOne]?.name}</span>
            <span className='text-white'>{projects[projectOne]?.location}</span>
          </div>
        </div>
        <div className="w-[100%] h-fit containProject flex items-center justify-center">
          <div className='w-[100%] h-fit'>              
            <Image
              src={projects[projectTwo]?.img}
              alt={projects[projectTwo]?.name}
              className="w-[100%] object-cover rounded-md "
              width={2000}
              height={2000}
            />
          </div>
          <div className='dataProject flex items-center justify-center'>
            <span className='text-yellow-700 font-bold uppercase text-2xl'>{projects[projectTwo]?.name}</span>
            <span className='text-white'>{projects[projectTwo]?.location}</span>
          </div>
        </div>
        <div className="w-[100%] opacity-20 h-fit containProject flex items-center justify-center">
          <div className='w-[100%] h-fit'>              
            <Image
              src={projects[projectThree]?.img}
              alt={projects[projectThree]?.name}
              className="w-[100%] object-cover rounded-md "
              width={2000}
              height={2000}
            />
          </div>
          <div className='dataProject flex items-center justify-center'>
            <span className='text-yellow-700 font-bold uppercase text-2xl'>{projects[projectThree]?.name}</span>
            <span className='text-white'>{projects[projectThree]?.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestProj;
