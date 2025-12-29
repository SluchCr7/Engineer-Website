'use client'
import React, { useContext } from 'react'
import Intro from '../Components/intro'
import { ProductContext } from '../Context/ProductContext'
import Product from '../Components/Product'
import { motion } from 'framer-motion'
import { ShoppingBag, Filter, Search } from 'lucide-react'

const Shop = () => {
  const { products } = useContext(ProductContext)

  return (
    <div className="flex flex-col gap-16 w-full py-32 px-6 md:px-12 min-h-screen relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full industrial-grid opacity-5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
          <Intro
            title={"Industrial Provisions"}
            desc={"High-precision engineering components and professional-grade structural materials."}
          />

          <div className="flex items-center gap-4">
            <div className="glass flex items-center gap-3 px-4 py-2 rounded-2xl border border-white/10">
              <Search size={18} className="text-foreground/40" />
              <input
                type="text"
                placeholder="Search Inventory..."
                className="bg-transparent outline-none text-xs font-bold uppercase tracking-widest w-40"
              />
            </div>
            <button className="p-3 glass rounded-2xl border border-white/10 hover:border-electric-cobalt transition-colors">
              <Filter size={18} />
            </button>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {products.map((product, index) => (
            <Product key={product._id} product={product} />
          ))}
        </div>

        {products.length === 0 && (
          <div className="flex flex-col items-center justify-center py-24 glass-card rounded-3xl border border-white/5">
            <ShoppingBag size={48} className="text-foreground/10 mb-6" />
            <h3 className="text-xl font-black font-display uppercase tracking-tight">Inventory Depleted</h3>
            <p className="text-xs text-foreground/40 font-bold uppercase tracking-widest mt-2">Check back for technical restock</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Shop
