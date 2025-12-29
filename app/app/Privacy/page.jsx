'use client'
import React from 'react';
import { Shield, Lock, Eye, Database, FileText, Mail, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: <Database size={20} />,
      title: 'Data Collection Protocol',
      content: [
        'We collect personal identifiers that you provide to us, such as your name, email address, and any other information you provide directly through our platform.',
        'We also collect non-personal telemetry, such as your browser type, IP address, and other technical data, to improve our services and platform performance.'
      ]
    },
    {
      icon: <Eye size={20} />,
      title: 'Information Utilization',
      items: [
        'To provide, operate, and maintain our platform infrastructure.',
        'To communicate with you, including technical support and system updates.',
        'To improve and personalize your operational experience.',
        'To analyze platform usage and performance metrics.'
      ]
    },
    {
      icon: <Shield size={20} />,
      title: 'Data Sharing Protocols',
      content: [
        'We do not sell or rent your personal information to third parties. However, we may share your information with third-party service providers to assist us in operating our platform or providing services to you, subject to strict confidentiality agreements.'
      ]
    },
    {
      icon: <FileText size={20} />,
      title: 'Cookie Implementation',
      content: [
        'Our platform uses cookies to enhance your experience. You can choose to disable cookies through your browser settings, but this may impact the functionality of the platform.'
      ]
    },
    {
      icon: <Lock size={20} />,
      title: 'Security Infrastructure',
      content: [
        'We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. All data transmissions are encrypted using industry-standard protocols.'
      ]
    }
  ];

  return (
    <div className="flex flex-col w-full py-32 px-6 md:px-12 min-h-screen relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full industrial-grid opacity-5 pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto w-full relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Shield className="text-electric-cobalt" size={32} />
            <h1 className="text-4xl md:text-5xl font-black font-display uppercase tracking-tight">
              Privacy <span className="text-electric-cobalt">Protocol</span>
            </h1>
          </div>
          <p className="text-sm text-foreground/50 font-medium max-w-2xl mx-auto leading-relaxed">
            Your data security is critically important to us. This document outlines our comprehensive privacy and data protection protocols.
          </p>
          <div className="flex items-center justify-center gap-2 mt-6">
            <Calendar size={14} className="text-foreground/30" />
            <span className="text-[10px] font-black uppercase tracking-widest text-foreground/30">Last Updated: 29 Jan 2025</span>
          </div>
        </motion.div>

        {/* Content Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 rounded-3xl border border-white/5"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-electric-cobalt/10 flex items-center justify-center text-electric-cobalt">
                  {section.icon}
                </div>
                <h2 className="text-xl font-black font-display uppercase tracking-tight">{section.title}</h2>
              </div>
              
              {section.content && section.content.map((paragraph, pIndex) => (
                <p key={pIndex} className="text-sm text-foreground/60 font-medium leading-relaxed mb-4 last:mb-0">
                  {paragraph}
                </p>
              ))}
              
              {section.items && (
                <ul className="space-y-3">
                  {section.items.map((item, iIndex) => (
                    <li key={iIndex} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-electric-cobalt mt-2 shrink-0"></div>
                      <span className="text-sm text-foreground/60 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}

          {/* User Rights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="glass-card p-8 rounded-3xl border border-electric-cobalt/20 bg-electric-cobalt/5"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-electric-cobalt/20 flex items-center justify-center text-electric-cobalt">
                <Shield size={20} />
              </div>
              <h2 className="text-xl font-black font-display uppercase tracking-tight">Your Access Rights</h2>
            </div>
            <p className="text-sm text-foreground/60 font-medium leading-relaxed mb-6">
              You have the right to access, correct, or delete your personal information. To exercise these rights, please contact our security team.
            </p>
            <a 
              href="mailto:security@sluchbui.hub" 
              className="inline-flex items-center gap-2 text-electric-cobalt hover:text-white transition-colors text-sm font-bold uppercase tracking-widest"
            >
              <Mail size={16} />
              security@sluchbui.hub
            </a>
          </motion.div>

          {/* Policy Updates */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="glass-card p-8 rounded-3xl border border-white/5"
          >
            <h2 className="text-lg font-black font-display uppercase tracking-tight mb-4">Protocol Amendments</h2>
            <p className="text-sm text-foreground/60 font-medium leading-relaxed">
              We may update this Privacy Protocol from time to time. Any changes will be posted on this page, and the updated date will be reflected at the top of this document.
            </p>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/5 text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/20">
            SluchBui Engineering Corp. • Verified Industrial Build • ISO 27001 Certified
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

