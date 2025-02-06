'use client'
import React, { useContext, useState } from 'react'
import Image from 'next/image';
import { ProductContext } from '../Context/ProductContext';
import { IoClose } from "react-icons/io5";

const AddProduct = ({AddMenu , setAddMenu}) => {
  const [image, setImage] = useState(null);
  const [price , setPrice] = useState(0)
  const [Name , setName] = useState("")
  const [desc , setDesc] = useState("")
  const [Model , setModel] = useState("")
  const [quantity, setQuantity] = useState(0)
  
  const {addNewProduct} = useContext(ProductContext)
  return (
    <div className={`${AddMenu ? "Menu" : ""}`}>
      <div className={`bg-white ${AddMenu ? "opacity-100 flex" : "opacity-0 hidden"} duration-1000 transition-opacity absolute z-[1000] top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] shadow-lg p-5 w-[80%] lg:w-[500px] flex items-start flex-col gap-4`}>
          <span onClick={()=> setAddMenu(false)} className='text-yellow-700 text-2xl absolute top-2 right-2'><IoClose/></span>
          <span className='text-yellow-700 font-bold'>Add New Product</span>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-3 w-full'>
            <input value={Name} onChange={(e)=> setName(e.target.value)} placeholder='Product Name' type="text" className='border-[1px] p-3 border-black bg-transparent text-black w-[100%]' />
            <input value={price} onChange={(e)=> setPrice(e.target.value)} placeholder='Price' type="number" className='border-[1px] p-3 border-black bg-transparent text-black w-[100%]' />
            <input value={quantity} onChange={(e)=> setQuantity(e.target.value)} placeholder='Quantity' type="number" className='border-[1px] p-3 border-black bg-transparent text-black w-[100%]' />
            <input value={Model} onChange={(e)=> setModel(e.target.value)} placeholder='Product Model' type="text" className='border-[1px] p-3 border-black bg-transparent text-black w-[100%]' />
          </div>
          <div className='w-[80%] flex justify-center items-center'>
              <input type="file" id='file' 
                  className='hidden'
                  onChange={(e) => setImage(e.target.files[0])}
              />
              <label htmlFor="file" className='w-full p-3'>
                  <Image src={image ? URL.createObjectURL(image) : ""} alt='profile' width={80} height={80} className='w-[60%]' />
              </label>
            </div>
            <textarea value={desc} onChange={(e)=> setDesc(e.target.value)} placeholder='Description' name="" id="" className='border-[1px] p-3 border-black bg-transparent text-black w-[90%]'></textarea>
            <button onClick={()=> addNewProduct(Name , price , quantity , image , desc , Model)} className='w-[90%] border-[1px] border-black text-black hover:bg-black hover:text-yellow-600 p-4 font-bold'>Add Product</button>
      </div>
    </div>
  )
}

export default AddProduct