'use client'
import React from 'react'
import Intro from '../Components/intro'
import { projects } from '../Data'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Maximize2, Layers, MapPin } from 'lucide-react'

const Projects = () => {
  return (
    <div className='flex items-center w-full lg:items-start flex-col min-h-screen py-32 px-6 md:px-12 relative'>
      <div className="absolute top-0 right-0 w-1/3 h-full industrial-grid opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full">
        <Intro
          title={"Industrial Portfolio"}
          desc={"A comprehensive database of our structural achievements across multi-billion dollar infrastructure projects."}
        />

        <div className='mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full'>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl glass-card border border-white/5"
            >
              <Link href={`/Projects/${project.id}`} className='block relative aspect-[4/5] overflow-hidden'>
                <Image
                  src={project.img}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />

                {/* Technical Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity"></div>

                {/* Hover Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                    <span className="glass px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest text-electric-cobalt flex items-center gap-1">
                      <Layers size={12} /> Structural
                    </span>
                    <span className="glass px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest flex items-center gap-1">
                      <MapPin size={12} /> Global
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-white font-display uppercase tracking-tight mb-2">
                    {project.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-white/50 font-medium">Project ID: 0{project.id}X_ST</span>
                    <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-500 delay-200">
                      <Maximize2 size={18} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
