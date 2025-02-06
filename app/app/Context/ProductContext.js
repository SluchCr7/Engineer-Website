'use client'
import axios from 'axios'
import { createContext, useEffect, useState } from 'react'
export const ProductContext = createContext()
import swal from 'sweetalert'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const ProductContextProvider = ({ children }) => {
    const [products , setProducts] = useState([])
    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_BACK_URL}/api/product`).then((res) => {
            setProducts(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    },[])
    const addNewProduct = (name , price , quantity , image , description , model) => {
        const formData = new FormData()
        formData.append('image', image)
        formData.append('name', name)
        formData.append('price', price)
        formData.append('quantity', quantity)
        formData.append('description', description)
        formData.append('model', model)
        axios.post(`${process.env.NEXT_PUBLIC_BACK_URL}/api/product`, formData
        ).then((res) => {
            toast.success("Product Created Successfully")
            window.location.reload()
        })
        .catch((err) => {
            console.log(err)
        })
    }
    const DeleteProduct = (id) => {
        axios.delete(`${process.env.NEXT_PUBLIC_BACK_URL}/api/product/${id}`)
        .then((res) => {
            toast.success("Product Deleted Successfully")
            window.location.reload()
        })
        .catch((err) => {
            console.log(err)
        })
    }
    return (
        <>
            <ProductContext.Provider value={{products , addNewProduct , DeleteProduct}}>
                {children}
            </ProductContext.Provider>
        </>
    )
}
export default ProductContextProvider