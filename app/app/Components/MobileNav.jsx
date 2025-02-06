import React, { useContext, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Sheet, SheetTrigger , SheetContent} from '@/components/ui/sheet'
import { Links } from '../Data'
import { IoIosLogOut } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { IoCart } from "react-icons/io5";
import Image from 'next/image';
import { AuthContext } from '../Context/AuthContext';
import { OrderContext } from '../Context/OrderContext';
const MopileNav = () => {
    const pathname = usePathname()
    const { user, logout } = useContext(AuthContext)
    const {productsNum} = useContext(OrderContext)
    const [showMenu , setShowMenu] = useState(false)
  return (
    <div>
        <Sheet>
            <SheetTrigger>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-10 text-yellow-700"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
                </svg>
            </SheetTrigger>
            <SheetContent position="right" size="content">
                <div className='flex flex-col items-center gap-4 justify-center w-full min-h-[100vh]'>                    
                    {
                        user ?
                                <div className='relative'>
                                    <Image
                                        onClick={() => setShowMenu(!showMenu)}
                                        src={user?.profilePhoto?.url}
                                        alt='profile-photo'
                                        width={200} height={200}
                                        className="w-[70px] h-[70px] rounded-full"
                                    />
                                    <div className={` ${showMenu ? "opacity-100" : "opacity-0"} flex transition-opacity duration-700 absolute right-0 top-24 items-start flex-col rounded-xl w-[250px] bg-white `}>
                                        <div className='flex items-center w-full justify-between px-3 py-5 hover:bg-gray-200 rounded-xl duration-700'>
                                            <span className='text-yellow-600 text-xl'><CgProfile/></span>
                                            <span className='text-black text-sm font-bold'>{user.name}</span>
                                        </div>
                                        <div onClick={logout} className='flex items-center w-full justify-between px-3 py-5 hover:bg-gray-200 rounded-xl duration-700'>
                                            <span className='text-yellow-600 text-xl'><IoIosLogOut/></span>
                                            <span className='text-black text-sm font-bold'>Logout</span>
                                        </div>
                                    </div>
                                </div>
                            :
                            ""
                    }
                    
                    <nav className='flex flex-col items-center gap-4 mt-20 text-center'>
                    {
                        Links.map((link, index) => {
                            return (
                                <Link href={link} className={`text-lg ${link === pathname ? 'text-yellow-700 font-bold' : 'text-yellow-700 font-medium'}`} key={index}>
                                    {link}
                                </Link>
                            )
                        })
                    }
                    {
                        user
                            ?
                                ""
                            :
                                <button onClick={() => setLogin(true)} className='bg-yellow-700 p-2 px-5 rounded-3xl'>Get Started</button>
                    }
                    </nav>  
                </div>
            </SheetContent>
        </Sheet>
    </div>
  )
}

export default MopileNav