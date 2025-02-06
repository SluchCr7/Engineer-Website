import React from 'react'

const Intro = ({title , desc}) => {
  return (
    <div className='relative flex md:items-start text-center py-5 items-center gap-2 flex-col justify-center'>
        <span className='text-xl lg:text-5xl font-bold'>{title}</span>
        <p className='text-xs text-center lg:text-left'>{desc}</p>
    </div>
  )
}

export default Intro