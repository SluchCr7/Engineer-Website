'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { Linkedin, Twitter, Mail, ExternalLink } from 'lucide-react'
import Intro from './intro'

const Team = () => {
    const TeamMempers = [
        {
            id: 1,
            name: "Dr. Alan Smith",
            role: "Chief Structural Engineer",
            img: "/eng1.jpg",
            desc: "Specializing in high-rise seismic resilience and algorithmic load analysis."
        },
        {
            id: 2,
            name: "Amad Nathan, PE",
            role: "Lead Infrastructure Architect",
            img: "/eng2.jpg",
            desc: "Expert in sustainable urban bridge systems and modular transport hubs."
        },
        {
            id: 3,
            name: "Kloud Uilne",
            role: "Head of Technical Systems",
            img: "/eng3.jpg",
            desc: "Pioneer in IoT-integrated building management and smart material deployment."
        },
        {
            id: 4,
            name: "Ali Roam",
            role: "Senior Safety Consultant",
            img: "/eng4.jpg",
            desc: "Dedicated to zero-incident construction methodologies and virtual risk assessment."
        }
    ]

    return (
        <section className='w-full py-24 px-6 md:px-12 bg-background relative overflow-hidden'>
            {/* Background Decorative Element */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-electric-cobalt/20 to-transparent"></div>

            <div className="max-w-7xl mx-auto">
                <Intro
                    title={"Executive Engineering Board"}
                    desc={"The pioneers behind our most complex structural achievements."}
                />

                <div className='mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {TeamMempers.map((member, index) => (
                        <motion.div
                            key={member.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className='group relative glass-card rounded-2xl overflow-hidden glow-hover'
                        >
                            <div className='relative h-80 overflow-hidden'>
                                <Image
                                    src={member.img}
                                    alt={member.name}
                                    width={500}
                                    height={600}
                                    className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                                />
                                {/* Hover Overlay */}
                                <div className='absolute inset-0 bg-obsidian/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-4'>
                                    <button className='w-10 h-10 rounded-full bg-electric-cobalt flex items-center justify-center text-white hover:scale-110 transition-transform'>
                                        <Linkedin size={18} />
                                    </button>
                                    <button className='w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors'>
                                        <Twitter size={18} />
                                    </button>
                                    <button className='w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors'>
                                        <Mail size={18} />
                                    </button>
                                </div>
                            </div>

                            <div className='p-6 relative'>
                                <div className="absolute -top-4 right-6 bg-electric-cobalt text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                                    Verified PE
                                </div>
                                <h3 className='font-display font-black text-xl mb-1 group-hover:text-electric-cobalt transition-colors'>{member.name}</h3>
                                <p className='text-electric-cobalt/80 text-xs font-bold uppercase tracking-wider mb-4'>{member.role}</p>
                                <p className='text-xs text-foreground/50 leading-relaxed italic'>"{member.desc}"</p>

                                <div className='mt-6 pt-4 border-t border-white/5 flex items-center justify-between'>
                                    <span className="text-[10px] font-bold uppercase tracking-tighter text-foreground/30">ID.240{member.id}</span>
                                    <ExternalLink size={14} className="text-foreground/20 group-hover:text-electric-cobalt transition-colors" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Team
