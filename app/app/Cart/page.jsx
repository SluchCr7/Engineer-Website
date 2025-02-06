'use client';
import { IoClose } from "react-icons/io5";
import React, { useContext, useState } from 'react';
import { OrderContext } from '../Context/OrderContext';
import Intro from '../Components/intro';
import Image from 'next/image';
import { AuthContext } from "../Context/AuthContext";

const Cart = () => {
    const { productsArr, removeProduct , submitOrder } = useContext(OrderContext);
    const [address, setAddress] = useState("")
    const [phone , setPhone] = useState("")
    const {user} = useContext(AuthContext)
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
    };
    const totalPrice = productsArr.reduce((prev, curr) => prev + curr.price * curr.productCount, 0)
    return (
        <div className='flex flex-col w-full py-20 px-10'>
            <Intro title='Your Cart' desc='Check your cart and proceed to checkout.' />
            {productsArr.length > 0 ? (
                <div className='flex flex-col lg:flex-row w-full gap-10'>
                    {/* Products Section */}
                    <div className='flex flex-col gap-4 w-full md:w-[60%]'>
                        {productsArr.map((product, index) => (
                            <div key={product.id} className='flex items-center justify-between w-full p-4 border rounded-lg shadow-md'>
                                <Image src={product?.image[0]?.url} className='rounded-md' width={100} height={100} alt='Product Image' />
                                <div className='flex flex-col gap-1'>
                                    <span className='text-black font-bold'>{product.name}</span>
                                    <span className='text-sm text-gray-700'>{formatCurrency(product.price)}</span>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <span className='text-yellow-700 font-bold'>{product.productCount}</span>
                                </div>
                                <span className='text-yellow-700 font-bold'>{formatCurrency(product.price * product.productCount)}</span>
                                <button className='px-2 py-1 bg-red-500 text-white rounded-md' onClick={() => removeProduct(product.id)}><IoClose/></button>
                            </div>
                        ))}
                    </div>
                    {/* Checkout Section */}
                    <div className='flex flex-col gap-3 w-full md:w-[40%] p-8 border bg-black rounded-lg shadow-md'>
                        <h2 className='text-lg font-bold border-b pb-2 text-white'>Checkout Details</h2>
                        <div className='flex flex-col gap-3 w-full'>
                            <div className="flex items-start flex-col gap-1 w-full">
                              <label className="text-yellow-700" htmlFor="Name">Full Name</label>
                              <input type='text' id="Name" className='p-3 rounded-md border w-[90%] border-yellow-700 bg-transparent text-yellow-700' />
                            </div>
                            <div className="flex items-start flex-col gap-1 w-full">
                              <label className="text-yellow-700" htmlFor="Number">Phone Number</label>
                              <input value={phone} onChange={(e)=> setPhone(e.target.value)} type='text' id="Number" className='p-3 rounded-md border w-[90%] border-yellow-700 bg-transparent text-yellow-700' />
                            </div>
                            <div className="flex items-start flex-col gap-1 w-full">
                              <label className="text-yellow-700" htmlFor="Address">Address</label>
                              <input value={address} onChange={(e)=> setAddress(e.target.value)} type='text' id='Address' className='p-3 rounded-md border w-[90%] border-yellow-700 bg-transparent text-yellow-700' />
                            </div>
                        </div>
                        <div className='flex justify-between text-lg font-bold text-white'>
                            <span>Total Price:</span>
                            <span className='text-yellow-700'>{formatCurrency(totalPrice)}</span>
                        </div>
                        <button className='w-full py-2 bg-green-600 text-white font-bold rounded-md mt-4 hover:bg-green-700 transition' onClick={()=>submitOrder(productsArr , address , phone , totalPrice)}>Proceed to Pay</button>
                    </div>
                </div>
            ) : (
                <span className='flex items-center justify-center w-full min-h-[80vh] text-yellow-700 font-bold text-3xl uppercase'>No Products Found</span>
            )}
        </div>
    );
};

export default Cart;