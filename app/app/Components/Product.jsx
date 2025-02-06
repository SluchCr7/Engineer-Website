'use client'
import React, { useContext, useState } from 'react'
import { OrderContext } from '../Context/OrderContext'
import Link from 'next/link'
import Image from 'next/image'

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
    <div key={product._id} className='border flex items-center my-8 shadow-lg flex-col gap-4 relative border-yellow-700 p-6 rounded-lg'>
      <span className='absolute top-2 z-[999] right-2 bg-black text-yellow-500 py-1 px-3 rounded-2xl'>${product.price}</span>
      
      <Link href={`/Shop/${product._id}`}>
        <Image src={product?.image[0]?.url} alt={product.name} width={400} height={400} className='w-full object-cover rounded-md cursor-pointer transition-transform transform hover:scale-105' />
      </Link>
      
      <span className='text-yellow-600 text-lg font-semibold'>{product.name}</span>
      
      <div className='flex flex-col items-center w-full'>
        <div className='flex items-center w-full bg-black rounded-lg overflow-hidden'>
          <button onClick={handleIncrease} className='text-yellow-500 bg-black px-4 py-2 text-2xl w-full transition hover:bg-yellow-600 hover:text-black'>+</button>
          <span className='text-2xl text-black bg-yellow-500 w-full px-4 py-2 text-center'>{productCount}</span>
          <button onClick={handleDecrease} className='text-yellow-500 bg-black px-4 py-2 text-2xl w-full transition hover:bg-yellow-600 hover:text-black'>-</button>
        </div>
        
        <button className={`bg-black p-3 w-full font-semibold text-yellow-500 mt-2 rounded-lg transition ${productCount > 0 ? 'hover:bg-yellow-600 hover:text-black' : 'opacity-50 cursor-not-allowed'}`} onClick={handleAddToCart} disabled={productCount === 0}>
          Add To Cart
        </button>
      </div>
    </div>
  )
}

export default Product