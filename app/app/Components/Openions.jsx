'use client';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import Intro from './intro';
import { Testimonials } from '../Data';
const Openions = () => {
  const [currentPage, setCurrentPage] = React.useState(1);

  const itemsPerPage = 2;
  const totalPages = Math.ceil(Testimonials.length / itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const currentTestimonials = Testimonials.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className='flex items-center md:items-start flex-col gap-3 w-full py-5 px-10 min-h-[80vh]'>
      <Intro title={"Testimonials"} desc={"Check out why our customers love us in each project"} />
      <div className='flex items-center flex-col justify-center w-full gap-9 min-h-[80vh]'>
        <div className='flex flex-wrap items-center justify-center gap-6'>
          {currentTestimonials.map((test) => (
            <div
              key={test.id}
              className='border-[1px] hover:bg-yellow-700 duration-700 transition-all hover:text-white bg-white flex flex-col items-center gap-2 rounded-md border-yellow-700 p-10 w-[80%] md:w-[45%]'
            >
              <Image
                src={test.image}
                alt='person'
                width={500}
                className='w-[70px] h-[70px] rounded-full'
                height={500}
              />
              <h1 className='text-2xl font-bold'>{test.name}</h1>
              <span className='text-base text-center'>{test.pos}</span>
              <span className='text-xs text-center'>{test.text}</span>
            </div>
          ))}
        </div>
        <div className='flex items-center gap-3'>
          <span
            onClick={handlePrev}
            className={`border-[1px] border-yellow-700 hover:bg-yellow-700 transition-all duration-700 rounded-full w-[30px] flex items-center justify-center h-[30px] cursor-pointer ${currentPage === 1 && 'opacity-50 cursor-not-allowed'}`}
          >
            <FaArrowLeft />
          </span>
          {[...Array(totalPages)].map((_, index) => (
            <span
              key={index}
              onClick={() => handlePageClick(index + 1)}
              className={`px-3 py-1 border-[1px] border-yellow-700 rounded-full cursor-pointer ${
                currentPage === index + 1
                  ? 'bg-yellow-700 text-white'
                  : 'hover:bg-yellow-700 hover:text-white'
              }`}
            >
              {index + 1}
            </span>
          ))}
          <span
            onClick={handleNext}
            className={`border-[1px] border-yellow-700 hover:bg-yellow-700 transition-all duration-700 rounded-full w-[30px] flex items-center justify-center h-[30px] cursor-pointer ${currentPage === totalPages && 'opacity-50 cursor-not-allowed'}`}
          >
            <FaArrowRight />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Openions;
