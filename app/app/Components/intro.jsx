import React from 'react'

const Intro = ({ title, desc }) => {
  return (
    <div className='relative flex md:items-start items-center gap-4 flex-col text-center md:text-left group'>
      <div className="flex items-center gap-3">
        <div className="w-12 h-[2px] bg-electric-cobalt group-hover:w-20 transition-all duration-500"></div>
        <span className="text-xs font-bold tracking-[0.3em] uppercase text-electric-cobalt">Technical Briefing</span>
      </div>
      <h2 className='text-3xl lg:text-5xl font-display font-black tracking-tight leading-tight'>
        {title}
      </h2>
      <p className='text-sm md:text-base text-foreground/60 max-w-xl font-medium'>
        {desc}
      </p>
    </div>
  )
}

export default Intro
