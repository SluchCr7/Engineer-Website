'use client';

import React, { useState } from 'react';
import FAQestion from '../Components/FAQestion';
import Image from 'next/image';
import Intro from '../Components/intro';
import { motion } from 'framer-motion';
import { HelpCircle, MessageSquare, Send, Shield, Cpu, BookOpen } from 'lucide-react';

export default function FAQPage() {
  const [formData, setFormData] = useState({ name: '', email: '', question: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const faqData = [
    {
      question: 'What engineering protocols do you utilize?',
      answer: 'We utilize a proprietary blend of ISO-certified structural analysis and real-time algorithmic optimization to ensure maximum stability and resource efficiency.'
    },
    {
      question: 'How do I initialize a system consultation?',
      answer: 'You can reach out to our tactical engineering team via the Inquiry Manifest on this page or email us directly at secure@sluchbui.hub.'
    },
    {
      question: 'In which sectors do you maintain operations?',
      answer: 'Our core operations span high-density civil infrastructure, precision mechanical systems, and advanced electrical grid design across global markets.'
    },
    {
      question: 'How is structural integrity verified?',
      answer: 'All projects undergo rigorous stress-testing and FEA (Finite Element Analysis) protocols before deployment, ensuring failure-proof foundations.'
    },
    {
      question: 'Can I integrate my existing specifications?',
      answer: 'Yes, our systems are designed for full interoperability with standard CAD/BIM protocols. Simply upload your technical manifest during project initiation.'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormData({ name: '', email: '', question: '' });
  };

  return (
    <div className='flex flex-col w-full py-32 px-6 md:px-12 min-h-screen relative overflow-hidden'>
      <div className="absolute top-0 left-0 w-full h-full industrial-grid opacity-5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-start justify-center gap-16">

          {/* Left Section - Inquiry Protocol */}
          <div className='flex flex-col items-start w-full lg:w-[35%] gap-8'>
            <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden grayscale group">
              <Image
                src={'/faq-1.jpg'}
                alt='Technical Support'
                fill
                className='object-cover group-hover:scale-105 transition-transform duration-700'
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-cyber-lime animate-pulse"></div>
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">Support Node Online</span>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className='w-full glass-card p-8 rounded-3xl border border-white/5 relative overflow-hidden'
            >
              <div className="absolute top-0 right-0 p-6 opacity-5">
                <MessageSquare size={80} />
              </div>

              <div className="flex items-center gap-2 mb-6">
                <Cpu className="text-electric-cobalt" size={18} />
                <span className="text-[10px] font-black uppercase tracking-widest text-electric-cobalt">Inquiry Manifest</span>
              </div>
              <h2 className="text-2xl font-black font-display uppercase tracking-tight mb-8">Direct Uplink</h2>

              {isSubmitted ? (
                <div className="p-6 glass border border-green-500/20 rounded-2xl text-center">
                  <Shield size={32} className="text-green-500 mx-auto mb-4" />
                  <p className="text-xs font-bold uppercase tracking-widest text-white">Protocol Received</p>
                  <p className="text-[10px] text-foreground/40 font-bold uppercase tracking-widest mt-2">Engineering response imminent.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {['name', 'email', 'question'].map((field) => (
                    <div key={field} className='flex flex-col gap-2'>
                      <label className="text-[10px] font-black uppercase tracking-widest text-foreground/40">{field}</label>
                      <div className="glass px-4 py-1 border border-white/5 rounded-xl">
                        {field === 'question' ? (
                          <textarea
                            name={field}
                            value={formData[field]}
                            onChange={handleInputChange}
                            placeholder={`Input ${field} matrix...`}
                            rows={3}
                            className='bg-transparent py-2 outline-none w-full text-xs font-bold'
                          />
                        ) : (
                          <input
                            name={field}
                            type={field === 'email' ? 'email' : 'text'}
                            value={formData[field]}
                            onChange={handleInputChange}
                            placeholder={`Input ${field}...`}
                            className='bg-transparent py-2 outline-none w-full text-xs font-bold'
                          />
                        )}
                      </div>
                    </div>
                  ))}
                  <button type="submit" className="btn-premium w-full flex items-center justify-center gap-3 py-4">
                    Send Protocol <Send size={16} />
                  </button>
                </form>
              )}
            </motion.div>
          </div>

          {/* Right Section - Knowledge Repository */}
          <div className='flex flex-col items-start w-full lg:w-[65%] gap-12'>
            <div className="flex flex-col gap-4">
              <Intro
                title={'Strategic Repository'}
                desc={'A centralized knowledge base housing critical technical inquiries and operational standards.'}
              />
            </div>

            <div className="w-full flex flex-col gap-12">
              <div className="flex flex-col gap-6">
                <div className='flex items-center gap-3 mb-2'>
                  <BookOpen size={20} className="text-electric-cobalt" />
                  <h3 className="text-lg font-black font-display uppercase tracking-tight">Core Directives</h3>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  {faqData.slice(0, 3).map((faq, index) => (
                    <FAQestion key={index} faq={faq} />
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <div className='flex items-center gap-3 mb-2'>
                  <Shield size={20} className="text-electric-cobalt" />
                  <h3 className="text-lg font-black font-display uppercase tracking-tight">Operational Support</h3>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  {faqData.slice(3).map((faq, index) => (
                    <FAQestion key={index} faq={faq} />
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
