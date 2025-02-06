'use client'
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react'
import{ MdOutlinePhone } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { usePathname } from 'next/navigation';
import { IoCart } from "react-icons/io5";
import Image from 'next/image';
import { AuthContext } from '../Context/AuthContext';
import { FaBars } from "react-icons/fa";
import MopileNav from './MobileNav';
import { OrderContext } from '../Context/OrderContext';
const Header = ({login , setLogin}) => {
    const links = [
        {
            Name: "Home",
            url : "/"
        },
        {
            Name: "About",
            url : "/About"
        },
        {
            Name: "Projects",
            url : "/Projects"
        },
        {
            Name: "FAQ",
            url : "/FAQ"
        },
        {
            Name: "Contact",
            url : "/Contact"
        },
        {
            Name: "Shop",
            url : "/Shop"
        },
        {
            Name: "Orders",
            url : "/Order"
        }
    ]
    const [showMenu , setShowMenu] = useState(false)
    const { user, logout } = useContext(AuthContext)
    const {productsNum} = useContext(OrderContext)
    const PathName = usePathname()
  return (
    <div className='flex items-center flex-col gap-3 w-full'>
        <div className={`bg-black z-[1000] fixed top-[10px] w-[50%] md:w-[80%] p-3 px-10 rounded-3xl justify-between flex items-center`}>
            <div className='flex items-center gap-5'>
                <Image 
                    alt="logo" 
                    width={50} 
                    height={50} 
                    className={`bg-white w-[40px] h-[40px] rounded-full`} 
                    src="/Black_Monoline_Real_Estate_Logo__1_-removebg-preview.png" 
                />
                <ul className='md:flex hidden items-center md:gap-3 lg:gap-5 xl:gap-9 text-white text-sm'>
                    {
                        links.map((link) => {
                            return(
                                <li key={link.Name}><Link href={link.url} className={` uppercase hover:text-yellow-700 duration-700 transition-all text-sm ${PathName === link.url ? "text-yellow-700" : "text-white"}`}>{link.Name}</Link></li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className='flex items-center gap-3'>
                <Link href={"/Cart"} className='relative'>
                    <span className='absolute -top-2 bg-yellow-700 text-white p-1 text-center -left-3 text-sm rounded-full w-[20px] h-[20px] flex items-center justify-center'>{productsNum}</span>
                    <span className='text-2xl text-white'><IoCart /></span>
                </Link>
                <div className='md:flex hidden items-center gap-3 text-white text-sm'>     
                    {
                        user ? 
                            <div className='relative'>
                                <Image onClick={() => setShowMenu(!showMenu)} src={user?.profilePhoto?.url} alt='profile-photo' width={200} height={200} className="w-[40px] h-[40px] rounded-full"/>
                                <div className={` ${showMenu ? "opacity-100" : "opacity-0"} flex transition-opacity duration-700 absolute -right-6 top-14 items-start flex-col rounded-xl w-[250px] bg-black `}>
                                    <div className='flex items-center w-full justify-between px-3 py-5 hover:bg-gray-950 rounded-xl duration-700'>
                                        <span className='text-yellow-600 text-xl'><CgProfile/></span>
                                        <span className='text-white text-sm font-bold'>{user.name}</span>
                                    </div>
                                    <div onClick={logout} className='flex items-center w-full justify-between px-3 py-5 hover:bg-gray-950 rounded-xl duration-700'>
                                        <span className='text-yellow-600 text-xl'><IoIosLogOut/></span>
                                        <span className='text-white text-sm font-bold'>Logout</span>
                                    </div>
                                </div>
                            </div>
                            :
                            <button onClick={() => setLogin(true)} className='bg-yellow-700 p-2 px-5 rounded-3xl'>Get Started</button>
                    }
                </div>
                <div className={`flex md:hidden`}>
                    <MopileNav />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header