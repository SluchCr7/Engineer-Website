import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className='flex items-center flex-col justify-center w-full min-h-[100vh] gap-4'>
        {/* <span className='text-sm text-yellow-700'>oops page not found !</span> */}
        <h1 className='text-9xl'>404</h1>
        <p className='text-sm text-yellow-700'>We can not find this page now , Go to Home Page Or Check your destination</p>
        <Link href={"/"} className='border-[1px] cursor-pointer rounded-md border-yellow-700 py-2 px-5 '>Home Page</Link>
    </div>
  )
}

export default NotFound