'use client'
import React, { useContext, useState } from 'react'
import { OrderContext } from '../Context/OrderContext'
import Link from 'next/link'
import Image from 'next/image'
import { Plus, Minus, ShoppingCart, Info, Activity } from 'lucide-react'
import { motion } from 'framer-motion'

const Product = ({ product }) => {
  const { addProduct } = useContext(OrderContext)
  const [productCount, setProductCount] = useState(0)

  const handleIncrease = () => setProductCount(prev => prev + 1)
  const handleDecrease = () => setProductCount(prev => (prev > 0 ? prev - 1 : 0))
  const handleAddToCart = () => {
    if (productCount > 0) {
      addProduct(product, productCount)
      setProductCount(0)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className='glass-card flex flex-col gap-5 p-6 rounded-3xl group glow-hover border border-white/5 relative overflow-hidden'
    >
      {/* Precision UI Badge */}
      <div className='absolute top-4 left-4 z-10 flex items-center gap-2'>
        <div className="w-1.5 h-1.5 rounded-full bg-electric-cobalt animate-pulse"></div>
        <span className='text-[8px] font-black uppercase tracking-[0.2em] text-foreground/40'>Industrial Grade</span>
      </div>

      <span className='absolute top-4 right-4 z-20 glass px-4 py-1.5 rounded-xl text-electric-cobalt font-black font-display text-sm border border-electric-cobalt/20'>
        ${product.price}
      </span>

      <div className="relative aspect-square rounded-2xl overflow-hidden mt-4">
        <Link href={`/Shop/${product._id}`} className="block w-full h-full">
          <Image
            src={product?.image[0]?.url}
            alt={product.name}
            fill
            className='object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0'
          />
        </Link>
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/40 to-transparent pointer-events-none"></div>
      </div>

      <div className="flex flex-col gap-1">
        <h3 className='font-display font-black text-lg tracking-tight uppercase group-hover:text-electric-cobalt transition-colors'>
          {product.name}
        </h3>
        <div className="flex items-center gap-2 text-[10px] text-foreground/40 font-bold uppercase tracking-widest">
          <Activity size={10} className="text-electric-cobalt" /> SKU: 0x{product._id.slice(-6)}
        </div>
      </div>

      <div className='flex flex-col gap-4'>
        <div className='flex items-center p-1 glass border border-white/5 rounded-2xl overflow-hidden'>
          <button
            onClick={handleDecrease}
            className='p-3 rounded-xl hover:bg-electric-cobalt/10 text-foreground transition-all flex-1 flex justify-center'
          >
            <Minus size={16} />
          </button>
          <span className='w-12 text-center font-display font-black text-lg'>{productCount}</span>
          <button
            onClick={handleIncrease}
            className='p-3 rounded-xl hover:bg-electric-cobalt/10 text-foreground transition-all flex-1 flex justify-center'
          >
            <Plus size={16} />
          </button>
        </div>

        <button
          onClick={handleAddToCart}
          disabled={productCount === 0}
          className={`btn-premium flex items-center justify-center gap-3 py-3 ${productCount === 0 ? 'opacity-30 cursor-not-allowed grayscale' : ''}`}
        >
          Provision Hub <ShoppingCart size={18} />
        </button>

        <Link
          href={`/Shop/${product._id}`}
          className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-foreground/40 hover:text-electric-cobalt transition-colors"
        >
          Sector Specs <Info size={14} />
        </Link>
      </div>
    </motion.div>
  )
}

export default Product
