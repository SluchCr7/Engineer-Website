import React from 'react'
import { Icons , Links , contact } from '../Data';
import Link from 'next/link';
const Footer = () => {
  return (
    <div className='flex items-center flex-col w-full'>
      <div className='w-full bg-[#2e2e2e] py-10 px-16 grid grid-cols-2 lg:grid-cols-4 gap-6'>
        <div className='flex items-start gap-4 flex-col w-full'>
          <span className='text-yellow-700 relative w-[80%] text-lg'><span className='heading'>SluchBui.Co</span></span>
          <p className='text-sm w-[100%] md:w-[60%] text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nobis quas, vel nisi itaque sit blanditiis totam earum </p>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 text-2xl text-yellow-700'>
            {
              Icons.map((icon) => {
                return (
                  <span key={icon.id} className='border-[1px] border-yellow-700 w-[35px] h-[35px] rounded-full flex items-center justify-center'>{icon.icon}</span>
                )
              })
            }
          </div>
        </div>
        <div className='flex items-start gap-4 flex-col w-full'>
          <span className='text-yellow-700 relative w-[80%] text-lg'><span className='heading'>Links</span></span>
          <ul className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full'>
            {
              Links.map((link) => {
                return (
                  <Link href={`/${link}`} key={link} className='text-white hover:text-yellow-700 duration-700'>{link}</Link>
                )
              })
            }
          </ul>
        </div>
        <div className='flex items-start gap-4 flex-col w-full'>
          <span className='text-yellow-700 relative w-[80%] text-lg'><span className='heading'>Contact</span></span>
          <ul className='flex items-start gap-4 flex-col'>
            {
              contact.map((way , index) => {
                return (
                  <li key={index} className='flex items-start md:items-center flex-col md:flex-row gap-2 text-white'>
                    {way.icon}
                    <span className='w-[50%] text-xs lg:w-full'>{way.text}</span>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div className='flex items-start gap-4 flex-col w-full'>
          <span className='text-yellow-700 relative w-[80%] text-lg'><span className='heading'>Working Hours</span></span>
          <p className='w-[100%] md:w-[70%] text-sm text-white tracking-[2px]'>Our support available to help you 24 hours a day, seven days a week.</p>
          <div className='flex items-center flex-col gap-2 w-[80%]'>
            <div className='flex items-start md:items-center flex-col md:flex-row justify-between w-full'>
              <span className='text-white'>Sun - Thu</span>
              <span className='text-white'>10AM - 6PM</span>
            </div>
            <div className='flex items-start md:items-center flex-col md:flex-row justify-between w-full'>
              <span className='text-white'>Fri</span>
              <span className='text-white'>1PM - 7PM</span>
            </div>
            <div className='flex items-start md:items-center flex-col md:flex-row justify-between w-full'>
              <span className='text-white'>Sat</span>
              <span className='text-white'>12PM - 7PM</span>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full flex items-center justify-between py-10 px-16'>
        <span className='text-base'>© Copyright 2025. All Rights Reserved <span className='text-yellow-700'>@SluchTeam</span></span>
      </div>
    </div>
  )
}

export default Footer