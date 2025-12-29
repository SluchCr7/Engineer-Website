'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Intro from './intro';
import { projects } from '../Data';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, Layers, MapPin, Calendar } from 'lucide-react';

const LatestProj = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="w-full py-24 px-6 md:px-12 bg-background relative">
      <div className="absolute top-0 right-0 w-full h-24 bg-gradient-to-b from-obsidian/10 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <div className='w-full flex items-end justify-between mb-12 flex-col md:flex-row gap-6'>
          <Intro
            title="Structural Portfolio"
            desc="Explore our most challenging precision engineering projects delivered across the globe."
          />
          <div className='flex items-center gap-4'>
            <button
              onClick={prev}
              className='p-3 rounded-xl border border-border glass hover:border-electric-cobalt hover:bg-electric-cobalt/10 transition-all group'
            >
              <ArrowLeft className="group-hover:-translate-x-1 transition-transform" size={20} />
            </button>
            <button
              onClick={next}
              className='p-3 rounded-xl border border-border glass hover:border-electric-cobalt hover:bg-electric-cobalt/10 transition-all group'
            >
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Featured Project */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8 group relative overflow-hidden rounded-3xl h-[400px] md:h-[600px] shadow-2xl"
          >
            <Image
              src={projects[currentIndex]?.img}
              alt={projects[currentIndex]?.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent opacity-80"></div>

            <div className="absolute bottom-0 left-0 p-8 w-full">
              <div className="flex flex-wrap gap-4 mb-4">
                <span className="flex items-center gap-2 glass px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-widest text-electric-cobalt">
                  <Layers size={14} /> Structural
                </span>
                <span className="flex items-center gap-2 glass px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-widest">
                  <MapPin size={14} /> International
                </span>
              </div>
              <h3 className="text-3xl md:text-5xl font-black text-white font-display mb-4 uppercase tracking-tight">
                {projects[currentIndex]?.name}
              </h3>
              <p className="text-white/70 max-w-2xl text-sm md:text-base leading-relaxed mb-6">
                Redefining the standard of modern infrastructure through algorithmic design and advanced material science.
              </p>
              <button className="btn-premium py-2 px-8 text-sm">View Analysis</button>
            </div>
          </motion.div>

          {/* Sidebar Project Grid */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {projects.slice((currentIndex + 1) % projects.length, (currentIndex + 3) % projects.length).map((proj, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="flex-1 glass-card rounded-2xl overflow-hidden flex flex-col border border-white/5"
              >
                <div className="relative h-40">
                  <Image src={proj.img} alt={proj.name} fill className="object-cover" />
                  <div className="absolute inset-0 bg-obsidian/40"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-electric-cobalt">Project {idx + 1}</span>
                    <span className="text-[10px] text-foreground/40 font-bold uppercase flex items-center gap-1">
                      <Calendar size={10} /> 2024
                    </span>
                  </div>
                  <h4 className="font-display font-bold text-lg mb-2">{proj.name}</h4>
                  <button className="text-sm font-bold text-electric-cobalt hover:underline flex items-center gap-2">
                    Details <ArrowRight size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestProj;

