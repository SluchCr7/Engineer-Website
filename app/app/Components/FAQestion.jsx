'use client'
import React, { useState } from 'react'

const FAQestion = ({ faq }) => {
    const [isView , setIsView] = useState(false)
  return (
    <div onClick={()=> setIsView(!isView)} className="flex items-start cursor-pointer flex-col gap-5 border-[1px] w-[100%] border-yellow-700 p-4 rounded-md">
        <span  className='text-yellow-700 tracking-[2px] font-bold'>{faq.question}</span>
        <p className={`text-black text-sm timeanimate ${isView ? "block visible" : "hidden invisible"}`}>{faq.answer}</p>
    </div>
  )
}

export default FAQestion