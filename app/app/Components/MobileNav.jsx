'use client'
import React, { useContext, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet'
import { Links } from '../Data'
import { User, LogOut, ShoppingBag, Menu, X, Cpu, ChevronRight } from "lucide-react";
import Image from 'next/image';
import { AuthContext } from '../Context/AuthContext';
import { OrderContext } from '../Context/OrderContext';

const MopileNav = () => {
    const pathname = usePathname()
    const { user, logout } = useContext(AuthContext)
    const { productsNum } = useContext(OrderContext)
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='lg:hidden'>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                    <button className="p-2 glass rounded-xl border border-white/10 text-electric-cobalt">
                        <Menu size={24} />
                    </button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[85%] bg-obsidian border-l border-white/10 p-0 overflow-hidden">
                    <div className="absolute inset-0 industrial-grid opacity-5 pointer-events-none"></div>

                    <div className='flex flex-col h-full relative z-10'>
                        {/* Header in Menu */}
                        <div className="p-8 border-b border-white/5 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Cpu className="text-electric-cobalt" size={24} />
                                <span className="font-display font-black text-xl tracking-tighter uppercase text-white">
                                    Sluch<span className="text-electric-cobalt">Bui</span>
                                </span>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-foreground/40">
                                <X size={24} />
                            </button>
                        </div>

                        {/* User Profile Section */}
                        {user && (
                            <div className="p-8 bg-white/5 mx-4 mt-8 rounded-3xl border border-white/5">
                                <div className="flex items-center gap-4">
                                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-electric-cobalt/30">
                                        <Image
                                            src={user?.profilePhoto?.url}
                                            alt='profile'
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-black uppercase tracking-tight text-white">{user.name}</h4>
                                        <p className="text-[10px] font-bold text-electric-cobalt uppercase tracking-widest mt-1">Authorized PE</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Navigation Links */}
                        <nav className='flex flex-col gap-2 p-8'>
                            {Links.map((link, index) => {
                                const href = link === 'Home' ? '/' : `/${link}`
                                const isActive = pathname === href

                                return (
                                    <Link
                                        key={index}
                                        href={href}
                                        onClick={() => setIsOpen(false)}
                                        className={`flex items-center justify-between p-4 rounded-2xl transition-all ${isActive
                                                ? 'bg-electric-cobalt/10 text-electric-cobalt border border-electric-cobalt/20 shadow-[0_0_20px_rgba(37,99,235,0.1)]'
                                                : 'text-foreground/50 hover:text-white hover:bg-white/5'
                                            }`}
                                    >
                                        <span className="text-xs font-black uppercase tracking-[0.2em]">{link}</span>
                                        {isActive && <ChevronRight size={16} />}
                                    </Link>
                                )
                            })}
                        </nav>

                        {/* Action Section */}
                        <div className="mt-auto p-8 border-t border-white/5 flex flex-col gap-4">
                            {user ? (
                                <button
                                    onClick={logout}
                                    className="flex items-center justify-center gap-3 w-full py-4 glass border border-red-500/20 text-red-500 text-[10px] font-black uppercase tracking-widest rounded-2xl hover:bg-red-500 hover:text-white transition-all"
                                >
                                    Terminate Session <LogOut size={16} />
                                </button>
                            ) : (
                                <Link
                                    href="/auth"
                                    onClick={() => setIsOpen(false)}
                                    className="btn-premium flex items-center justify-center py-4 text-[10px]"
                                >
                                    Deploy Profile
                                </Link>
                            )}

                            <div className="flex items-center justify-center gap-2 text-[8px] font-black uppercase tracking-[0.3em] text-foreground/20 mt-4">
                                System Identity: Global_Structural_Hub_v2.0
                            </div>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default MopileNav
