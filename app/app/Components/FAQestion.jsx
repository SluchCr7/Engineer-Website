'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'

const FAQestion = ({ faq }) => {
  const [isView, setIsView] = useState(false)

  return (
    <div
      onClick={() => setIsView(!isView)}
      className={`group cursor-pointer flex flex-col w-full glass-card border rounded-2xl transition-all duration-300 ${isView ? 'border-electric-cobalt/50 bg-electric-cobalt/5' : 'border-white/5 hover:border-white/20'
        }`}
    >
      <div className="flex items-center justify-between p-6">
        <div className="flex items-center gap-4">
          <HelpCircle size={18} className={isView ? "text-electric-cobalt" : "text-foreground/30"} />
          <span className={`text-sm font-black uppercase tracking-widest transition-colors ${isView ? "text-white" : "text-foreground/70 group-hover:text-white"
            }`}>
            {faq.question}
          </span>
        </div>
        <motion.div
          animate={{ rotate: isView ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={isView ? "text-electric-cobalt" : "text-foreground/30"}
        >
          <ChevronDown size={20} />
        </motion.div>
      </div>

      <AnimatePresence>
        {isView && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-2 border-t border-white/5 ml-10">
              <p className="text-xs text-foreground/50 font-medium leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default FAQestion
