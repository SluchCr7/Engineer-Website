'use client'
import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import { IoStar } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { ProductContext } from '@/app/Context/ProductContext';
import { OrderContext } from '@/app/Context/OrderContext';

const Product = ({ params }) => {
    const { id } = params;
    const [product, setProduct] = useState(null);
    const [numProduct, setNumProduct] = useState(1);
    const { products } = useContext(ProductContext);
    const { addProduct } = useContext(OrderContext)
    useEffect(() => {
        const foundProduct = products.find(prod => prod._id === id);
        if (foundProduct) setProduct(foundProduct);
    }, [id, products]);

    if (!product) return <div className='text-center py-20 text-xl flex items-center justify-center min-h-[80vh] text-yellow-700 font-bold'>Loading...</div>;

    const discount = 0.2;
    const discountedPrice = (product.price * (1 - discount)).toFixed(2);

    const instruc = [
        "Free shipping on all orders over $100",
        "14 days easy refund & returns",
        "Product taxes and customs duties included"
    ];

    return (
        <div className='flex flex-col items-center w-full gap-5'>            
            <div className='flex flex-col lg:flex-row items-center justify-center w-full py-20 px-10 gap-10'>
                <div className='lg:w-[50%] w-full'>
                    <Image src={product.image[0].url} alt={product.name} width={500} height={500} className='w-full rounded-md shadow-md' />
                </div>
                <div className='lg:w-[50%] w-full flex flex-col gap-4'>
                    <span className='text-black text-3xl font-bold'>{product.name}</span>
                    <div className='flex items-center gap-3 pb-8'>
                        <div className='flex items-center gap-1'>        
                            {[1, 2, 3, 4].map(star => (
                                <span key={star} className='text-yellow-600 text-base'><IoStar /></span>
                            ))}
                        </div>
                        <span>4</span>
                    </div>
                    <span className='text-black text-3xl font-bold'>
                        <span className='line-through pr-5 text-gray-500'>${product.price}</span>
                        <span className='text-red-600'>${discountedPrice}</span>
                    </span>
                    <p className='text-black text-sm w-full lg:w-[70%]'>{product.description}</p>
                    <div className='flex items-center pb-2 flex-col md:flex-row gap-3'>
                        <button onClick={() => setNumProduct(prev => prev + 1)} className='border-[1px] border-yellow-700 py-3 px-6 font-extrabold hover:bg-black hover:border-black hover:text-yellow-700 duration-700 w-[40px] h-[40px] rounded-full flex items-center justify-center'>+</button>
                        <span className='text-black text-3xl font-bold'>{numProduct}</span>
                        <button onClick={() => setNumProduct(prev => Math.max(prev - 1, 1))} className='border-[1px] border-yellow-700 py-3 px-6 font-extrabold hover:bg-black hover:border-black hover:text-yellow-700 duration-700 w-[40px] h-[40px] rounded-full flex items-center justify-center'>-</button>
                    </div>
                    <button
                        className='border-[1px] border-black py-3 px-6 font-extrabold w-[80%] md:w-[30%] rounded-xl hover:bg-black hover:border-black hover:text-yellow-700 duration-700'
                        onClick={() => addProduct(product, numProduct)}
                    >
                        Add To Cart
                    </button>
                    <div className='border-t-[1px] border-gray-500 pt-4 flex flex-col gap-3'>
                        {instruc.map((instru, index) => (
                            <div key={index} className='flex items-center gap-3'>
                                <span className='text-yellow-700 text-xl'><FaCheckCircle /></span>
                                <span className='text-gray-600 text-sm'>{instru}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-4 items-center w-full'>
                <span className='text-black text-3xl font-bold'>Related Products</span>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full mx-auto gap-5'>
                    {products.map(prod => (
                        <div key={prod._id} className='border-[1px] flex flex-col items-center mx-auto my-16 bg-white shadow-inner relative border-yellow-700 w-[70%] p-4 rounded-md'>
                            <span className='absolute top-[-10px] left-[-10px] bg-red-500 text-white py-1 px-3 text-xs rounded-2xl'>20% OFF</span>
                            <Image src={prod.image[0].url} alt={prod.name} width={500} height={500} className='w-full' />
                            <span className='text-yellow-600 text-xl font-bold pb-7 pt-3'>{prod.name}</span>
                            <button className='bg-yellow-500 p-4 w-[70%] absolute rounded-xl bottom-[-30px] font-bold text-black'>Add To Cart</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Product;