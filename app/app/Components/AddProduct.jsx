'use client'
import React, { useContext, useState } from 'react'
import Image from 'next/image';
import { ProductContext } from '../Context/ProductContext';
import { X, Upload, HardDrive, Cpu, DollarSign, Database, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AddProduct = ({ AddMenu, setAddMenu }) => {
  const [image, setImage] = useState(null);
  const [price, setPrice] = useState(0)
  const [Name, setName] = useState("")
  const [desc, setDesc] = useState("")
  const [Model, setModel] = useState("")
  const [quantity, setQuantity] = useState(0)

  const { addNewProduct } = useContext(ProductContext)

  const handleSubmit = () => {
    addNewProduct(Name, price, quantity, image, desc, Model);
    setAddMenu(false);
  }

  return (
    <AnimatePresence>
      {AddMenu && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-6 bg-obsidian/80 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className='glass-card w-full max-w-2xl p-10 rounded-3xl border border-white/10 relative overflow-hidden'
          >
            {/* Structural Accent */}
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Database size={120} />
            </div>

            <button
              onClick={() => setAddMenu(false)}
              className='absolute top-6 right-6 p-2 rounded-xl hover:bg-white/5 transition-colors text-foreground/40 hover:text-white'
            >
              <X size={24} />
            </button>

            <div className="mb-8">
              <div className="flex items-center gap-2 mb-2">
                <Cpu className="text-electric-cobalt" size={20} />
                <span className="text-[10px] font-black uppercase tracking-widest text-electric-cobalt">Provisioning Protocol</span>
              </div>
              <h2 className='text-3xl font-black font-display uppercase tracking-tight'>Initialize New Asset</h2>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-foreground/40">Asset Designation</label>
                <div className="flex items-center gap-3 glass-card px-4 py-1 border border-white/5 rounded-xl">
                  <HardDrive size={16} className="text-foreground/40" />
                  <input value={Name} onChange={(e) => setName(e.target.value)} placeholder='Product Name' type="text" className='bg-transparent p-2 outline-none w-full text-sm font-bold' />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-foreground/40">Valuation ($)</label>
                <div className="flex items-center gap-3 glass-card px-4 py-1 border border-white/5 rounded-xl">
                  <DollarSign size={16} className="text-foreground/40" />
                  <input value={price} onChange={(e) => setPrice(e.target.value)} placeholder='Price' type="number" className='bg-transparent p-2 outline-none w-full text-sm font-bold' />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-foreground/40">Inventory Count</label>
                <div className="flex items-center gap-3 glass-card px-4 py-1 border border-white/5 rounded-xl">
                  <Database size={16} className="text-foreground/40" />
                  <input value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder='Quantity' type="number" className='bg-transparent p-2 outline-none w-full text-sm font-bold' />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-foreground/40">System Model ID</label>
                <div className="flex items-center gap-3 glass-card px-4 py-1 border border-white/5 rounded-xl">
                  <Cpu size={16} className="text-foreground/40" />
                  <input value={Model} onChange={(e) => setModel(e.target.value)} placeholder='Model Number' type="text" className='bg-transparent p-2 outline-none w-full text-sm font-bold' />
                </div>
              </div>
            </div>

            {/* Media Upload */}
            <div className="mb-8">
              <label className="text-[10px] font-black uppercase tracking-widest text-foreground/40 mb-3 block">Structural Manifest Media</label>
              <input type="file" id='file' className='hidden' onChange={(e) => setImage(e.target.files[0])} />
              <label
                htmlFor="file"
                className='group cursor-pointer flex flex-col items-center justify-center p-8 border-2 border-dashed border-white/10 rounded-2xl hover:border-electric-cobalt/50 hover:bg-electric-cobalt/5 transition-all'
              >
                {image ? (
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden grayscale">
                    <Image src={URL.createObjectURL(image)} alt='preview' fill className="object-cover" />
                  </div>
                ) : (
                  <>
                    <Upload size={32} className="text-foreground/20 group-hover:text-electric-cobalt transition-colors mb-3" />
                    <span className="text-xs font-bold uppercase tracking-widest text-foreground/40">Upload Visual Specs</span>
                  </>
                )}
              </label>
            </div>

            <div className="flex flex-col gap-2 mb-10">
              <label className="text-[10px] font-black uppercase tracking-widest text-foreground/40">Technical Briefing</label>
              <div className="flex items-start gap-3 glass-card px-4 py-3 border border-white/5 rounded-xl">
                <FileText size={16} className="text-foreground/40 mt-1" />
                <textarea value={desc} onChange={(e) => setDesc(e.target.value)} placeholder='Detailed technical specifications...' rows={3} className='bg-transparent outline-none w-full text-sm font-medium resize-none' />
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              onClick={handleSubmit}
              className='btn-premium w-full flex items-center justify-center gap-3 py-4'
            >
              Finalize Provisioning Record <Database size={18} />
            </motion.button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default AddProduct
