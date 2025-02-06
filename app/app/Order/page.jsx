'use client'
import React, { useContext, useEffect, useState } from 'react';
import Intro from '../Components/intro';
import Image from 'next/image';
import { AuthContext } from '../Context/AuthContext';
import { OrderContext } from '../Context/OrderContext';

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

  useEffect(() => {
    console.log(userOrders);
  }, [userOrders]);

  return (
    <div className='flex flex-col w-full py-20 px-10 gap-6 bg-gray-100 min-h-screen'>
      <Intro title='Orders' desc='Manage and track your orders easily' />
      
      {userOrders.length > 0 ? (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full'>
          {userOrders.map((order) => (
            <div key={order._id} className='flex flex-col p-6 border rounded-xl shadow-lg bg-white transition-transform transform hover:scale-105'>
              <div className='flex items-start flex-col gap-1'>
                <span className='text-yellow-600'>Products ({order.Products.length})</span>
                <div className='grid grid-cols-1 gap-4 mb-4'>
                  {order.Products.map((product, index) => (
                    <div key={index} className='flex items-center gap-4 bg-gray-50 p-3 rounded-lg shadow-sm'>
                      <Image src={product?.image[0].url} alt={product.name} width={80} height={80} className='w-20 h-20 rounded-md object-cover' />
                      <span className='text-lg font-semibold text-gray-800'>{product.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='flex items-start flex-col gap-1'>
                  <span className='text-yellow-600'>Address</span>
                  <span className='text-xl font-bold text-gray-900'>{order?.address}</span>
                </div>
                <div className='flex items-start flex-col gap-1'>
                  <span className='text-yellow-600'>Total :</span>
                  <span className='text-xl font-bold text-gray-900'>${order?.total}</span>
                </div>
              </div>
              <span className={`py-2 mt-4 px-4 text-lg font-semibold text-center rounded-md w-fit self-center ${order?.status === 'Done' ? 'text-green-700 bg-green-100 border-green-500' : 'text-red-700 bg-red-100 border-red-500'} border`}> 
                {order?.status || 'Pending'}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <p className='text-gray-500 text-center text-lg'>No orders found.</p>
      )}
    </div>
  );
};

export default Orders;
