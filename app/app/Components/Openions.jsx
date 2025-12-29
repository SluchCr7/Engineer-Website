'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import Intro from './intro';
import { Testimonials } from '../Data';

const Openions = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 2;
  const totalPages = Math.ceil(Testimonials.length / itemsPerPage);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentTestimonials = Testimonials.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  return (
    <section className='w-full py-24 px-6 md:px-12 relative overflow-hidden'>
      {/* Structural Accent */}
      <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-transparent via-electric-cobalt/20 to-transparent ml-12 lg:ml-24"></div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <Intro
            title={"Industry Endorsements"}
            desc={"Verifiable feedback from our Tier-1 industrial partners and structural stakeholders."}
          />
          <div className='flex items-center gap-4'>
            <button
              onClick={prev}
              className='p-3 rounded-full glass border border-border hover:border-electric-cobalt hover:bg-electric-cobalt/10 transition-all group'
            >
              <ChevronLeft className="group-hover:-translate-x-1 transition-transform" size={24} />
            </button>
            <button
              onClick={next}
              className='p-3 rounded-full glass border border-border hover:border-electric-cobalt hover:bg-electric-cobalt/10 transition-all group'
            >
              <ChevronRight className="group-hover:translate-x-1 transition-transform" size={24} />
            </button>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <AnimatePresence mode='wait'>
            {currentTestimonials.map((test, index) => (
              <motion.div
                key={test.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className='glass-card p-10 rounded-3xl relative overflow-hidden group glow-hover'
              >
                <Quote className="absolute top-8 right-8 text-electric-cobalt/10 group-hover:text-electric-cobalt/20 transition-colors" size={80} />

                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-gold-accent text-gold-accent" />
                  ))}
                </div>

                <p className='text-lg md:text-xl font-medium leading-relaxed mb-8 relative z-10 italic text-foreground/80'>
                  "{test.text}"
                </p>

                <div className="flex items-center gap-5 pt-8 border-t border-white/5">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-electric-cobalt/30 group-hover:border-electric-cobalt transition-colors duration-500">
                    <Image
                      src={test.image}
                      alt={test.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className='text-lg font-black font-display tracking-tight'>{test.name}</h4>
                    <p className='text-xs font-bold uppercase tracking-widest text-electric-cobalt'>{test.pos}</p>
                  </div>
                </div>

                {/* Technical Marker */}
                <div className="absolute bottom-4 right-6 text-[8px] font-black uppercase tracking-[0.3em] text-foreground/10">
                  ID.VERIFIED_0x{test.id}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Pagination Dots */}
        <div className='flex items-center justify-center gap-3 mt-12'>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1 rounded-full transition-all duration-500 ${currentIndex === index
                  ? 'w-12 bg-electric-cobalt'
                  : 'w-4 bg-border hover:bg-electric-cobalt/30'
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Openions;

