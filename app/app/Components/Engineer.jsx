'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import {
    Compass,
    ShieldCheck,
    Hammer,
    Paintbrush,
    ArrowUpRight
} from 'lucide-react'
import Intro from './intro'

const Engineer = () => {
    const data = [
        {
            num: "01",
            title: "Advanced Structural Design",
            desc: "Precision engineering for complex architectural blueprints using state-of-the-art HUB development systems.",
            icon: <Compass className="text-electric-cobalt" size={24} />
        },
        {
            num: "02",
            title: "Industrial Safety Systems",
            desc: "Virtual review software and real-time monitoring to ensure maximum compliance with global safety standards.",
            icon: <ShieldCheck className="text-electric-cobalt" size={24} />
        },
        {
            num: "03",
            title: "Sustainable Remodeling",
            desc: "Eco-efficient retrofitting solutions that optimize energy consumption without compromising structural integrity.",
            icon: <Hammer className="text-electric-cobalt" size={24} />
        },
        {
            num: "04",
            title: "Technical Surface Finishes",
            desc: "High-durability protective coatings and aesthetic finishes designed for extreme industrial environments.",
            icon: <Paintbrush className="text-electric-cobalt" size={24} />
        }
    ]

    return (
        <section className='w-full py-24 px-6 md:px-12 relative overflow-hidden'>
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-1/3 h-full industrial-grid opacity-20 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto">
                <Intro
                    title={"Industrial Capabilities"}
                    desc={"Promoting safety and structural innovation through precision engineering."}
                />

                <div className='mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {data.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-card p-8 rounded-2xl group cursor-default relative overflow-hidden glow-hover"
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                                    <ArrowUpRight size={20} className="text-electric-cobalt" />
                                </div>

                                <div className="mb-6 w-12 h-12 rounded-lg bg-electric-cobalt/10 flex items-center justify-center">
                                    {item.icon}
                                </div>

                                <h3 className="text-xl font-bold mb-4 font-display group-hover:text-electric-cobalt transition-colors">
                                    {item.title}
                                </h3>

                                <p className="text-sm text-foreground/60 leading-relaxed">
                                    {item.desc}
                                </p>

                                <span className="absolute -bottom-8 -right-4 text-9xl font-black text-foreground/5 pointer-events-none select-none">
                                    {item.num}
                                </span>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className='relative w-full aspect-square md:aspect-video lg:aspect-square overflow-hidden rounded-3xl group'
                    >
                        <div className="absolute inset-0 bg-electric-cobalt/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                        <Image
                            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop"
                            alt='Advanced Engineering'
                            className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                            width={800}
                            height={800}
                        />
                        <div className="absolute bottom-6 left-6 z-20 glass p-4 rounded-xl border border-white/20">
                            <div className="text-xs font-bold tracking-[0.2em] uppercase text-electric-cobalt mb-1">Status</div>
                            <div className="text-sm font-bold uppercase">Mainframe Active.042</div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Engineer
