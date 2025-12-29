'use client'
import React from 'react'
import Intro from '../Components/intro'
import Image from 'next/image'
import { CheckCircle2, Award, Users, Building2, ShieldCheck, Cpu } from "lucide-react";
import { aboutCharactersics, features, services } from '../Data';
import CountUp from "react-countup"
import { motion } from 'framer-motion'

const About = () => {
    const stats = [
        { num: 50, text: "Years of Experience", icon: <Building2 className="text-electric-cobalt" /> },
        { num: 70, text: "Projects Completed", icon: <Cpu className="text-electric-cobalt" /> },
        { num: 200, text: "Awards Won", icon: <Award className="text-electric-cobalt" /> },
        { num: 100, text: "Happy Clients", icon: <Users className="text-electric-cobalt" /> }
    ];

    return (
        <div className='flex flex-col items-center w-full min-h-screen py-32 gap-24 relative'>
            <div className="absolute top-0 left-0 w-full h-full industrial-grid opacity-10 pointer-events-none"></div>

            {/* About Section */}
            <section className='container mx-auto px-6 md:px-12'>
                <div className='flex flex-col lg:flex-row gap-16 items-center'>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className='w-full lg:w-1/3 relative group'
                    >
                        <div className="absolute -inset-4 bg-electric-cobalt/20 rounded-3xl blur-2xl group-hover:bg-electric-cobalt/30 transition-all"></div>
                        <Image
                            src="/about_line-1-1.jpg"
                            alt='Structural Detail'
                            width={800}
                            height={1000}
                            className='relative rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700'
                        />
                        <div className="absolute bottom-6 right-6 glass p-6 rounded-2xl border border-white/20">
                            <span className="text-4xl font-black text-electric-cobalt font-display">25+</span>
                            <p className="text-[10px] uppercase font-bold tracking-widest leading-none mt-1">Global Patents</p>
                        </div>
                    </motion.div>

                    <div className='w-full lg:w-2/3 flex flex-col gap-8'>
                        <Intro title='Structural Legacy' desc='Defining the boundaries of modern engineering since 1974.' />
                        <p className='text-foreground/70 text-lg leading-relaxed font-medium'>
                            At SluchBui.Co, we operate at the intersection of architectural vision and structural precision. With decades of intensive industrial experience, we have pioneered seismic-resistant frameworks and algorithmic material distribution. Our mission is to build foundations that transcend generations.
                        </p>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 py-6'>
                            {aboutCharactersics.map(({ text, percentig }, index) => (
                                <div key={index} className='flex flex-col gap-4'>
                                    <div className="flex justify-between items-end">
                                        <span className='text-xs font-black uppercase tracking-[0.2em] text-electric-cobalt'>{text}</span>
                                        <span className="text-xs font-display font-bold">{percentig}%</span>
                                    </div>
                                    <div className='relative w-full h-1.5 bg-slate-gray/20 rounded-full overflow-hidden'>
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${percentig}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1.5, ease: "easeOut" }}
                                            className='absolute top-0 left-0 h-full bg-electric-cobalt'
                                        ></motion.div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 mt-8 border-t border-white/5 pt-12'>
                            {stats.map((ele, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className='flex flex-col gap-4'
                                >
                                    <div className="w-10 h-10 rounded-lg bg-electric-cobalt/10 flex items-center justify-center">
                                        {ele.icon}
                                    </div>
                                    <div>
                                        <CountUp end={ele.num} duration={4} className='text-4xl font-black font-display tracking-tight text-foreground' />
                                        <span className="text-electric-cobalt font-display font-black text-2xl">+</span>
                                        <p className='text-[10px] text-foreground/50 font-black uppercase tracking-widest mt-1'>{ele.text}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className='w-full py-24 bg-obsidian relative'>
                <div className="absolute inset-0 blueprint-bg opacity-5"></div>
                <div className="container mx-auto px-6 md:px-12 relative z-10">
                    <Intro title='Core Advantages' desc='Verifiable metrics of our industrial superiority.' />
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-6 mt-16'>
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.02 }}
                                className='flex items-center gap-5 p-6 glass border border-white/5 rounded-2xl hover:bg-electric-cobalt/10 hover:border-electric-cobalt/30 transition-all duration-500'
                            >
                                <div className='flex-shrink-0 w-10 h-10 rounded-full bg-electric-cobalt flex items-center justify-center text-white shadow-lg shadow-electric-cobalt/20'>
                                    <ShieldCheck size={20} />
                                </div>
                                <p className='text-sm font-bold tracking-tight uppercase'>{feature}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className='container mx-auto px-6 md:px-12'>
                <Intro title='Technical Sectors' desc='Over 50 years of multi-disciplinary excellence across heavy industry.' />
                <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-16'>
                    {services.map((serv, index) => (
                        <motion.div
                            key={serv.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className='group relative flex flex-col gap-6'
                        >
                            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden glass-card border border-white/5 shadow-2xl">
                                <Image
                                    src={serv.img}
                                    alt='Service Sector'
                                    fill
                                    className='object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700'
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-60"></div>
                                <div className="absolute bottom-6 left-6 right-6 glass p-6 rounded-2xl border border-white/10 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                    <span className='text-electric-cobalt text-xs font-black uppercase tracking-[0.2em] mb-2 block'>{serv.title}</span>
                                    <p className='text-xs text-foreground/70 leading-relaxed font-medium'>{serv.paragraph}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default About;

