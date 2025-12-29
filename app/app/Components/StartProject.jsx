'use client'
import React from 'react'
import { Construction, ArrowRight, Layers } from "lucide-react";
import { motion } from 'framer-motion';

const StartProject = () => {
  return (
    <div className='w-full relative overflow-hidden py-24 px-6 md:px-12'>
      {/* Background Decorative Layer */}
      <div className="absolute inset-x-0 bottom-0 top-0 bg-electric-cobalt opacity-[0.03] industrial-grid"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-electric-cobalt/20 to-transparent"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='max-w-7xl mx-auto glass-card p-12 md:p-16 rounded-[3rem] border border-white/5 flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10'
      >
        <div className='flex flex-col md:flex-row items-center gap-8'>
          <div className='w-20 h-20 rounded-2xl bg-electric-cobalt/10 flex items-center justify-center text-electric-cobalt shadow-[0_0_30px_rgba(37,99,235,0.1)] shrink-0'>
            <Construction size={32} />
          </div>
          <div className='flex flex-col gap-3 text-center md:text-left'>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Layers size={14} className="text-electric-cobalt" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-electric-cobalt">Project Initiation</span>
            </div>
            <h2 className='text-3xl md:text-4xl font-black font-display text-white uppercase tracking-tight'>
              Commence Your <span className="text-electric-cobalt">Structural Vision</span>
            </h2>
            <p className='text-sm text-foreground/40 font-medium max-w-xl leading-relaxed'>
              Deploy our elite engineering protocols to transform your architectural concepts into high-integrity industrial realities.
            </p>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05, x: 5 }}
          whileTap={{ scale: 0.95 }}
          className='btn-premium flex items-center gap-4 px-10 py-5 group min-w-[240px] justify-center'
        >
          <span className="text-sm font-black uppercase tracking-widest">Begin Deployment</span>
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </motion.div>
    </div>
  )
}

export default StartProject
