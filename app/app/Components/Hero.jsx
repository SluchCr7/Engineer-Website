'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Settings, Cpu, ShieldCheck } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax-like effect */}
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center scale-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070&auto=format&fit=crop')`,
        }}
      />

      {/* Precision Overlays */}
      <div className="absolute inset-0 bg-obsidian/80 backdrop-blur-[2px]"></div>
      <div className="absolute inset-0 blueprint-bg opacity-20"></div>

      {/* Industrial Grid Lines */}
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-electric-cobalt/10"></div>
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-electric-cobalt/10"></div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 mb-6 px-4 py-2 rounded-full glass border border-electric-cobalt/20"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric-cobalt opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-electric-cobalt"></span>
          </span>
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-electric-cobalt">Precision in Every Build</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center font-display font-black text-5xl md:text-8xl leading-tight tracking-tight mb-8"
        >
          ENGINEERING <br />
          <span className="text-gradient">EXCELLENCE</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-foreground/70 text-lg md:text-xl max-w-2xl mb-12 font-medium leading-relaxed"
        >
          Architecting sustainable infrastructures with structural integrity and
          cutting-edge technological integration. We redefine the horizon of modern industry.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <button className="btn-premium group flex items-center gap-2 pr-4">
            Start Your Project
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="btn-outline-premium flex items-center gap-2">
            Explore Portfolio
          </button>
        </motion.div>
      </div>

      {/* Floating Specs Labels (High-Tech Feel) */}
      <div className="absolute bottom-12 left-12 hidden xl:flex flex-col gap-4">
        {[
          { icon: <Settings size={14} />, label: "Automated Systems" },
          { icon: <Cpu size={14} />, label: "Smart Integration" },
          { icon: <ShieldCheck size={14} />, label: "Safety First" }
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 + (i * 0.2) }}
            className="flex items-center gap-3 text-[10px] font-bold tracking-[0.2em] uppercase text-white/40"
          >
            <div className="w-8 h-[1px] bg-white/20"></div>
            <span className="text-electric-cobalt">{item.icon}</span>
            {item.label}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Hero;

