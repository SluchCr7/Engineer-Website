'use client'
import React, { useContext, useState } from 'react'
import Intro from '../Components/intro'
import Image from 'next/image'
import Link from 'next/link'
import { products } from '../Data'
import { OrderContext } from '../Context/OrderContext'
import Product from '../Components/Product'
import { ProductContext } from '../Context/ProductContext'
const Shop = () => {
  const {products} = useContext(ProductContext)
  return (
    <div className="flex items-center lg:items-start flex-col gap-4 w-full justify-center py-20 px-10">
      <Intro title={"Products"} desc={"You can buy many products from BuildSlu.co Brand about building and engineering"}/>
      <div className='flex items-center justify-center w-full mx-auto'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-5">
          {
            products.map((product) => {
              return(
                <Product key={product._id} product={product}/>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Shop