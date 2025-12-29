'use client'
import React from 'react'
import { Links, contact } from '../Data';
import Link from 'next/link';
import { Linkedin, Twitter, Github, Mail, Phone, MapPin, Clock, ShieldCheck, Cpu } from 'lucide-react';

const Footer = () => {
  return (
    <footer className='w-full bg-obsidian border-t border-white/5 pt-24 pb-12 relative overflow-hidden'>
      {/* Structural Decoration */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-electric-cobalt/30 to-transparent"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-electric-cobalt/10 blur-[120px] rounded-full"></div>

      <div className='max-w-7xl mx-auto px-6 md:px-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20'>
          {/* Brand Identity */}
          <div className='flex flex-col gap-6'>
            <div className="flex items-center gap-2">
              <Cpu className="text-electric-cobalt" size={24} />
              <span className='font-display font-black text-2xl tracking-tighter uppercase text-white'>
                Sluch<span className="text-electric-cobalt">Bui</span>Hub
              </span>
            </div>
            <p className='text-sm text-foreground/50 leading-relaxed font-medium'>
              Advancing structural integrity through algorithmic precision and sustainable industrial engineering since 1974. Defining the foundations of tomorrow.
            </p>
            <div className='flex items-center gap-4 mt-2'>
              <button className='w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-white hover:bg-electric-cobalt transition-colors'>
                <Linkedin size={18} />
              </button>
              <button className='w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-white hover:bg-electric-cobalt transition-colors'>
                <Twitter size={18} />
              </button>
              <button className='w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-white hover:bg-electric-cobalt transition-colors'>
                <Github size={18} />
              </button>
            </div>
          </div>

          {/* Indexing Map */}
          <div className='flex flex-col gap-6'>
            <span className='text-[10px] font-black uppercase tracking-[0.3em] text-electric-cobalt'>System Index</span>
            <ul className='grid grid-cols-2 gap-y-3 gap-x-8'>
              {Links.map((link) => (
                <li key={link}>
                  <Link
                    href={`/${link === 'Home' ? '' : link}`}
                    className='text-sm text-white/50 hover:text-electric-cobalt transition-colors font-bold uppercase tracking-widest'
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Communication Protocols */}
          <div className='flex flex-col gap-6'>
            <span className='text-[10px] font-black uppercase tracking-[0.3em] text-electric-cobalt'>Protocols</span>
            <ul className='flex flex-col gap-4'>
              <li className='flex items-center gap-4 text-white/50'>
                <MapPin size={18} className="text-electric-cobalt" />
                <span className='text-xs font-medium'>15th Industrial Ave, NY, USA</span>
              </li>
              <li className='flex items-center gap-4 text-white/50'>
                <Phone size={18} className="text-electric-cobalt" />
                <span className='text-xs font-medium'>+1 (800) STRUCT-LINK</span>
              </li>
              <li className='flex items-center gap-4 text-white/50'>
                <Mail size={18} className="text-electric-cobalt" />
                <span className='text-xs font-medium'>eng@sluchbui.hub</span>
              </li>
            </ul>
          </div>

          {/* Operational Uptime */}
          <div className='flex flex-col gap-6'>
            <span className='text-[10px] font-black uppercase tracking-[0.3em] text-electric-cobalt'>Operational Uptime</span>
            <div className='flex flex-col gap-4 p-5 glass border border-white/5 rounded-2xl'>
              <div className="flex items-center gap-3 mb-2">
                <Clock size={16} className="text-electric-cobalt" />
                <span className="text-[10px] font-black uppercase tracking-widest text-white">System Availability</span>
              </div>
              <div className='flex flex-col gap-2'>
                <div className='flex justify-between text-[10px] font-bold uppercase tracking-widest'>
                  <span className='text-white/40'>Standard Week</span>
                  <span className='text-white'>10:00 - 18:00</span>
                </div>
                <div className='flex justify-between text-[10px] font-bold uppercase tracking-widest'>
                  <span className='text-white/40'>Maintenance</span>
                  <span className='text-white'>Sat | 12:00 - 17:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className='pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6'>
          <div className="flex items-center gap-2">
            <ShieldCheck size={14} className="text-electric-cobalt" />
            <span className='text-[10px] font-black uppercase tracking-[0.2em] text-white/30'>
              © 2025 SluchBui Engineering Corp. Verified Industrial Build
            </span>
          </div>
          <div className="flex items-center gap-8">
            <Link href="#" className="text-[10px] font-black uppercase tracking-widest text-white/30 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-[10px] font-black uppercase tracking-widest text-white/30 hover:text-white transition-colors">Security Protocol</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
