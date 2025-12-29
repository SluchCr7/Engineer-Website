'use client'
import React, { useContext, useEffect, useState } from 'react';
import Intro from '../Components/intro';
import Image from 'next/image';
import { AuthContext } from '../Context/AuthContext';
import { OrderContext } from '../Context/OrderContext';
import { Package, MapPin, DollarSign, Clock, CheckCircle2, AlertCircle, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';

const Orders = () => {
  const { user } = useContext(AuthContext);
  const { orders } = useContext(OrderContext);
  const [userOrders, setUserOrders] = useState([]);

  useEffect(() => {
    if (user) {
      const filteredOrders = orders.filter(order => order?.User?._id === user?._id);
      setUserOrders(filteredOrders);
    }
  }, [orders, user]);

  return (
    <div className='flex flex-col w-full py-32 px-6 md:px-12 gap-12 min-h-screen relative overflow-hidden'>
      <div className="absolute top-0 right-0 w-full h-full blueprint-bg opacity-5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <Intro
          title='Provision Manifests'
          desc='Tracking protocols for your industrial component acquisitions.'
        />

        {userOrders.length > 0 ? (
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16'>
            {userOrders.map((order, index) => (
              <motion.div
                key={order._id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className='glass-card p-8 rounded-3xl border border-white/5 glow-hover flex flex-col gap-8 relative overflow-hidden'
              >
                {/* Order Header */}
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Package size={16} className="text-electric-cobalt" />
                      <span className="text-[10px] font-black uppercase tracking-widest text-foreground/40">Manifest ID</span>
                    </div>
                    <h3 className="font-display font-black text-xl tracking-tight">#{order._id.slice(-8).toUpperCase()}</h3>
                  </div>
                  <div className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 border ${order?.status === 'Done'
                      ? 'bg-green-500/10 text-green-500 border-green-500/20'
                      : 'bg-gold-accent/10 text-gold-accent border-gold-accent/20 animate-pulse'
                    }`}>
                    {order?.status === 'Done' ? <CheckCircle2 size={12} /> : <Clock size={12} />}
                    {order?.status || 'Processing'}
                  </div>
                </div>

                {/* Products List */}
                <div className="flex flex-col gap-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-electric-cobalt">Consignment Details</span>
                  <div className="grid grid-cols-1 gap-3">
                    {order.Products.map((product, pIndex) => (
                      <div key={pIndex} className="flex items-center gap-4 p-3 glass border border-white/5 rounded-2xl">
                        <div className="relative w-16 h-16 rounded-xl overflow-hidden grayscale">
                          <Image
                            src={product?.image[0].url}
                            alt={product.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-sm font-bold uppercase tracking-tight">{product.name}</p>
                          <p className="text-[10px] font-black text-foreground/40 uppercase tracking-widest mt-1">Industrial Component</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Statistics Grid */}
                <div className='grid grid-cols-2 gap-6 pt-6 border-t border-white/5'>
                  <div className='flex flex-col gap-2'>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} className="text-electric-cobalt" />
                      <span className="text-[10px] font-black uppercase tracking-widest text-foreground/40">Destination Host</span>
                    </div>
                    <span className='text-sm font-bold truncate'>{order?.address}</span>
                  </div>
                  <div className='flex flex-col gap-2'>
                    <div className="flex items-center gap-2">
                      <DollarSign size={14} className="text-electric-cobalt" />
                      <span className="text-[10px] font-black uppercase tracking-widest text-foreground/40">Total Valuation</span>
                    </div>
                    <span className='text-xl font-black font-display text-electric-cobalt'>${order?.total}</span>
                  </div>
                </div>

                <div className="absolute top-0 right-0 p-4 pointer-events-none">
                  <AlertCircle size={40} className="text-white/5 rotate-12" />
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className='flex flex-col items-center justify-center py-32 glass-card rounded-3xl border border-white/5'>
            <ShoppingCart size={64} className="text-foreground/5 mb-8" />
            <h2 className='text-2xl font-black font-display uppercase tracking-tight'>No Active Manifests</h2>
            <p className='text-xs text-foreground/40 font-bold uppercase tracking-widest mt-2'>Provisioning history is currently empty</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;

