'use client'
import Link from 'next/link';
import React, { useContext, useState } from 'react'
import {
    ShoppingBag,
    Menu as MenuIcon,
    X,
    User as UserIcon,
    LogOut,
    Sun,
    Moon,
    ChevronDown
} from 'lucide-react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { AuthContext } from '../Context/AuthContext';
import { OrderContext } from '../Context/OrderContext';
import { useTheme } from '../Context/ThemeContext';
import MopileNav from './MobileNav';

const Header = ({ setLogin }) => {
    const links = [
        { Name: "Home", url: "/" },
        { Name: "About", url: "/About" },
        { Name: "Projects", url: "/Projects" },
        { Name: "FAQ", url: "/FAQ" },
        { Name: "Contact", url: "/Contact" },
        { Name: "Shop", url: "/Shop" },
        { Name: "Orders", url: "/Order" }
    ]
    const [showProfileMenu, setShowProfileMenu] = useState(false)
    const { user, logout } = useContext(AuthContext)
    const { productsNum } = useContext(OrderContext)
    const { isDark, toggleTheme } = useTheme()
    const PathName = usePathname()

    return (
        <header className='flex justify-center w-full fixed top-6 z-[100] px-4'>
            <nav className='glass w-full max-w-7xl px-6 py-3 rounded-2xl flex items-center justify-between transition-all duration-300 border border-white/10'>
                <div className='flex items-center gap-12'>
                    {/* Logo Section */}
                    <Link href="/" className='flex items-center gap-3 group'>
                        <div className='relative w-10 h-10 bg-electric-cobalt rounded-lg flex items-center justify-center overflow-hidden shadow-lg shadow-electric-cobalt/20'>
                            <div className='absolute inset-0 bg-white/10 group-hover:bg-transparent transition-colors'></div>
                            <span className='text-white font-bold text-xl font-display'>E</span>
                        </div>
                        <div className='flex flex-col'>
                            <span className='font-display font-bold text-lg leading-tight tracking-tight uppercase'>Engineer</span>
                            <span className='text-[10px] text-electric-cobalt font-bold tracking-[0.2em] uppercase'>Structural Hub</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <ul className='hidden lg:flex items-center gap-8'>
                        {links.map((link) => (
                            <li key={link.Name}>
                                <Link
                                    href={link.url}
                                    className={`relative py-1 text-sm font-medium tracking-wide transition-all duration-300 hover:text-electric-cobalt uppercase ${PathName === link.url ? "text-electric-cobalt" : "text-foreground/70"}`}
                                >
                                    {link.Name}
                                    {PathName === link.url && (
                                        <span className='absolute -bottom-1 left-0 w-full h-[2px] bg-electric-cobalt rounded-full'></span>
                                    )}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='flex items-center gap-5'>
                    {/* Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        className='p-2 rounded-full hover:bg-white/10 transition-colors duration-300'
                        aria-label="Toggle Theme"
                    >
                        {isDark ? <Sun size={20} /> : <Moon size={20} />}
                    </button>

                    {/* Cart Section */}
                    <Link href="/Cart" className='relative group p-2 hover:bg-white/10 rounded-full transition-colors'>
                        <ShoppingBag size={20} />
                        {productsNum > 0 && (
                            <span className='absolute -top-1 -right-1 bg-electric-cobalt text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-background'>
                                {productsNum}
                            </span>
                        )}
                    </Link>

                    {/* Auth Section */}
                    <div className='hidden sm:flex items-center gap-4 border-l border-white/10 pl-5'>
                        {user ? (
                            <div className='relative'>
                                <button
                                    onClick={() => setShowProfileMenu(!showProfileMenu)}
                                    className='flex items-center gap-2 group'
                                >
                                    <div className='w-9 h-9 rounded-full overflow-hidden border-2 border-electric-cobalt/50 group-hover:border-electric-cobalt transition-colors'>
                                        <Image src={user?.profilePhoto?.url} alt='Profile' width={40} height={40} className="object-cover w-full h-full" />
                                    </div>
                                    <ChevronDown size={14} className={`transition-transform duration-300 ${showProfileMenu ? 'rotate-180' : ''}`} />
                                </button>

                                {showProfileMenu && (
                                    <div className='absolute right-0 top-12 w-56 glass-card rounded-xl p-2 animate-in fade-in zoom-in duration-200'>
                                        <div className='p-3 border-bottom border-white/5'>
                                            <p className='text-xs text-foreground/50'>Signed in as</p>
                                            <p className='text-sm font-bold truncate'>{user.name}</p>
                                        </div>
                                        <div className='py-2'>
                                            <Link href="/Profile" className='flex items-center gap-3 w-full px-3 py-2 text-sm hover:bg-white/5 rounded-lg transition-colors'>
                                                <UserIcon size={16} className='text-electric-cobalt' />
                                                <span>Profile Settings</span>
                                            </Link>
                                            <button
                                                onClick={logout}
                                                className='flex items-center gap-3 w-full px-3 py-2 text-sm text-destructive hover:bg-destructive/5 rounded-lg transition-colors'
                                            >
                                                <LogOut size={16} />
                                                <span>Logout</span>
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <button
                                onClick={() => setLogin(true)}
                                className='btn-premium py-2 px-6 text-sm'
                            >
                                Get Started
                            </button>
                        )}
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className='lg:hidden'>
                        <MopileNav />
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
