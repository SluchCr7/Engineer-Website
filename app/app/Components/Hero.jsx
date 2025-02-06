import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <div className="relative w-full min-h-[100vh] flex items-center justify-center bg-fixed bg-cover bg-center" style={{ backgroundImage: `url('https://xtratheme.com/elementor/building/wp-content/uploads/sites/5/revslider/xtra_slider_contruction/slider1.webp')` }}>
      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center flex flex-col items-center gap-4 px-4">
        <span className="text-white text-lg md:text-xl tracking-wide font-medium">
          Building States
        </span>
        <h1 className="text-yellow-500 uppercase font-bold text-4xl md:text-6xl leading-tight">
          We are SluchBui.Co
        </h1>
        <p className="text-white text-sm md:text-base max-w-[80%] md:max-w-[50%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Building innovative solutions that last for generations.
        </p>
      </div>
    </div>
  );
};

export default Hero;
