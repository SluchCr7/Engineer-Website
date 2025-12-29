'use client';

import React, { useContext, useState } from 'react';
import Intro from '../Components/intro';
import { ProductContext } from '../Context/ProductContext';
import { AuthContext } from '../Context/AuthContext';
import Image from 'next/image';
import Link from 'next/link';
import AddProduct from '../Components/AddProduct';
import { LayoutDashboard, Package, Users, Plus, Trash2, ExternalLink, Activity, ShieldCheck, Database } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Admin = () => {
    const [mode, setMode] = useState('Overview');
    const { products, DeleteProduct } = useContext(ProductContext);
    const { users, deleteUser } = useContext(AuthContext);
    const [AddMenu, setAddMenu] = useState(false)

    const stats = [
        { label: 'Network Nodes', value: users.length, icon: <Users size={20} />, color: 'text-electric-cobalt' },
        { label: 'Provision Stock', value: products.length, icon: <Package size={20} />, color: 'text-gold-accent' },
        { label: 'Active Projects', value: '24', icon: <Database size={20} />, color: 'text-cyber-lime' },
        { label: 'System Health', value: 'OPTIMAL', icon: <Activity size={20} />, color: 'text-green-500' }
    ]

    return (
        <div className='flex flex-col gap-12 w-full py-32 px-6 md:px-12 min-h-screen relative overflow-hidden'>
            <div className="absolute top-0 left-0 w-full h-full industrial-grid opacity-5 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto w-full relative z-10">
                <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
                    <Intro title={'Command Center'} desc={'Centralized control protocols for systemic infrastructure management.'} />
                    <div className="flex items-center gap-2 glass px-4 py-2 rounded-2xl border border-white/10">
                        <ShieldCheck size={16} className="text-cyber-lime" />
                        <span className="text-[10px] font-black uppercase tracking-widest">Admin Privileges Active</span>
                    </div>
                </div>

                {/* Tactical Stats Grid */}
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16'>
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -5 }}
                            className="glass-card p-6 rounded-3xl border border-white/5 flex flex-col gap-4"
                        >
                            <div className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center ${stat.color}`}>
                                {stat.icon}
                            </div>
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-widest text-foreground/40">{stat.label}</p>
                                <h3 className="text-3xl font-black font-display tracking-tight mt-1">{stat.value}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Navigation Tabs */}
                <div className="flex items-center gap-4 mb-12 border-b border-white/5 pb-4">
                    {['Overview', 'Products', 'Users'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setMode(tab)}
                            className={`px-6 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${mode === tab
                                    ? 'bg-electric-cobalt text-white shadow-lg shadow-electric-cobalt/20'
                                    : 'text-foreground/40 hover:text-foreground'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    {mode === 'Products' && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className='w-full'
                        >
                            <div className='flex justify-between items-center mb-8'>
                                <h2 className="text-xl font-black font-display uppercase tracking-tight">Provision Inventory</h2>
                                <button
                                    onClick={() => setAddMenu(true)}
                                    className='btn-premium flex items-center gap-2 py-2 px-6'
                                >
                                    Initialize Add <Plus size={16} />
                                </button>
                            </div>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                                {products.map((product) => (
                                    <div key={product._id} className='glass-card p-4 rounded-2xl border border-white/5 group hover:border-electric-cobalt/30 transition-all'>
                                        <div className="relative aspect-square rounded-xl overflow-hidden mb-4 grayscale group-hover:grayscale-0 transition-all">
                                            <Image src={product?.image[0]?.url} alt={product.name} fill className='object-cover' />
                                            <div className="absolute top-2 right-2 glass px-2 py-1 rounded-lg text-[10px] font-bold">
                                                ${product.price}
                                            </div>
                                        </div>
                                        <h4 className='text-xs font-black uppercase tracking-tight mb-4 truncate'>{product.name}</h4>
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => DeleteProduct(product._id)}
                                                className='flex-1 h-10 rounded-xl bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white transition-all flex items-center justify-center gap-2 text-[10px] font-black uppercase'
                                            >
                                                <Trash2 size={14} /> Purge
                                            </button>
                                            <Link
                                                href={`/Shop/${product._id}`}
                                                className="w-10 h-10 rounded-xl glass flex items-center justify-center text-foreground/40 hover:text-electric-cobalt transition-colors"
                                            >
                                                <ExternalLink size={14} />
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {mode === 'Users' && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className='w-full'
                        >
                            <h2 className="text-xl font-black font-display uppercase tracking-tight mb-8">Node Registry</h2>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                                {users.map((user) => (
                                    <div key={user.id} className='glass-card p-6 rounded-2xl border border-white/5 flex flex-col items-center text-center'>
                                        <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-electric-cobalt/20 mb-4">
                                            <Image src={user?.profilePhoto?.url} alt='profile' fill className='object-cover grayscale hover:grayscale-0 transition-all' />
                                        </div>
                                        <h4 className='text-sm font-black uppercase tracking-tight'>{user.name}</h4>
                                        <span className='text-[10px] text-foreground/40 font-bold uppercase tracking-widest mt-1'>{user.profileName}</span>
                                        <button
                                            onClick={() => deleteUser(user.id)}
                                            className='mt-6 w-full h-10 rounded-xl border border-red-500/20 text-red-500/50 hover:bg-red-500 hover:text-white hover:border-red-500 transition-all text-[10px] font-black uppercase'
                                        >
                                            Terminate Access
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {mode === 'Overview' && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className='flex flex-col items-center justify-center py-20 border-2 border-dashed border-white/5 rounded-3xl'
                        >
                            <LayoutDashboard size={48} className="text-foreground/5 mb-6" />
                            <h3 className="text-lg font-black font-display uppercase tracking-tight">System Telemetry Online</h3>
                            <p className="text-xs text-foreground/40 font-bold uppercase tracking-widest mt-2">Select a sector from the registry above</p>
                        </motion.div>
                    )}
                </AnimatePresence>

                <AddProduct AddMenu={AddMenu} setAddMenu={setAddMenu} />
            </div>
        </div>
    );
};

export default Admin;

