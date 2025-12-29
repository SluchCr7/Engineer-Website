'use client'
import React, { useState } from 'react'
import Intro from '../Components/intro'
import { MapPin, Phone, Mail, Globe, Send, Linkedin, Twitter, MessageSquare } from "lucide-react";
import { motion } from 'framer-motion'

const Contact = () => {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const contactInfo = [
        { icon: <MapPin size={20} />, label: "Global HQ", value: "15th Industrial Ave, NY", sub: "40.7128° N, 74.0060° W" },
        { icon: <Phone size={20} />, label: "Direct Line", value: "+1 (800) STRUCT-1", sub: "Mon-Fri, 08:00 - 18:00" },
        { icon: <Mail size={20} />, label: "Technical Support", value: "eng@sluchbui.hub", sub: "Expect reply within 12h" }
    ]

    return (
        <div className='w-full min-h-screen pt-32 pb-20 px-6 md:px-12 relative overflow-hidden'>
            <div className="absolute top-0 left-0 w-full h-full blueprint-bg opacity-5 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <Intro
                    title={"Interface With Us"}
                    desc={'Establish a direct link with our engineering department for technical inquiries.'}
                />

                <div className='mt-16 flex flex-col lg:flex-row gap-12 bg-card/30 backdrop-blur-xl border border-white/5 rounded-3xl overflow-hidden shadow-2xl'>
                    {/* Contact Information Side */}
                    <div className='lg:w-2/5 p-12 bg-obsidian relative overflow-hidden'>
                        <div className="absolute top-0 right-0 w-40 h-40 bg-electric-cobalt/20 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>

                        <h2 className='text-3xl font-black font-display mb-8 text-white uppercase tracking-tight'>Get In Touch</h2>
                        <p className='text-white/60 mb-12 leading-relaxed font-medium'>
                            Our structural response team is standing by for consultation on your next large-scale infrastructure project.
                        </p>

                        <div className='flex flex-col gap-8 mb-16'>
                            {contactInfo.map((item, i) => (
                                <div key={i} className='flex gap-5 items-start'>
                                    <div className='w-12 h-12 rounded-xl bg-electric-cobalt/10 border border-electric-cobalt/20 flex items-center justify-center text-electric-cobalt'>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p className='text-[10px] font-black uppercase tracking-widest text-electric-cobalt mb-1'>{item.label}</p>
                                        <p className='text-white font-bold'>{item.value}</p>
                                        <p className='text-white/40 text-xs mt-1'>{item.sub}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className='flex items-center gap-4 mt-auto'>
                            <button className='w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-white hover:bg-electric-cobalt transition-colors'>
                                <Linkedin size={18} />
                            </button>
                            <button className='w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-white hover:bg-electric-cobalt transition-colors'>
                                <Twitter size={18} />
                            </button>
                        </div>
                    </div>

                    {/* Contact Form Side */}
                    <div className='lg:w-3/5 p-12'>
                        <form className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                            <div className='flex flex-col gap-2'>
                                <label className='text-[10px] font-black uppercase tracking-[0.2em] text-electric-cobalt'>Signal Name</label>
                                <input
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    type="text"
                                    placeholder="Full Name"
                                    className='bg-transparent border-b border-white/10 p-3 focus:border-electric-cobalt outline-none transition-colors text-foreground'
                                />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className='text-[10px] font-black uppercase tracking-[0.2em] text-electric-cobalt'>Digital Mail</label>
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    placeholder="name@company.com"
                                    className='bg-transparent border-b border-white/10 p-3 focus:border-electric-cobalt outline-none transition-colors text-foreground'
                                />
                            </div>
                            <div className='flex flex-col gap-2 md:col-span-2'>
                                <label className='text-[10px] font-black uppercase tracking-[0.2em] text-electric-cobalt'>Phone Link</label>
                                <input
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    type="tel"
                                    placeholder="+1 (000) 000-0000"
                                    className='bg-transparent border-b border-white/10 p-3 focus:border-electric-cobalt outline-none transition-colors text-foreground'
                                />
                            </div>
                            <div className='flex flex-col gap-2 md:col-span-2'>
                                <label className='text-[10px] font-black uppercase tracking-[0.2em] text-electric-cobalt'>Mission Description</label>
                                <textarea
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    rows={4}
                                    placeholder="Detailed structural project briefing..."
                                    className='bg-transparent border-b border-white/10 p-3 focus:border-electric-cobalt outline-none transition-colors text-foreground resize-none'
                                />
                            </div>

                            <div className="md:col-span-2 flex items-center justify-between mt-4">
                                <span className="text-[10px] text-foreground/40 font-bold uppercase flex items-center gap-2">
                                    <MessageSquare size={12} /> Encryption Protocol: AES-256 Active
                                </span>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className='btn-premium flex items-center justify-center gap-3 w-64'
                                >
                                    Transmit Data <Send size={18} />
                                </motion.button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
