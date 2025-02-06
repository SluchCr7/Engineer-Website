'use client'
import axios from 'axios'
import { createContext, useContext, useEffect, useState } from 'react'
export const OrderContext = createContext()
import swal from 'sweetalert'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from './AuthContext'
const OrderContextProvider = ({ children }) => {
    const [productsNum, setProductsNum] = useState(0)
    const [productsArr, setProductsArr] = useState([])
    const [orders , setOrders] = useState([])
    const {user} = useContext(AuthContext)
    const addProduct = (product , productCount) => {
        setProductsArr([...productsArr, {...product,productCount} ,])
        setProductsNum((prev)=> prev + 1)
    }
    const removeProduct = (productId) => {
        setProductsArr(productsArr.filter((product) => product.id !== productId));
        setProductsNum((prev) => prev - 1);
    }
    const submitOrder = (Products , address , phoneNumber , total) => {
        axios.post(`${process.env.NEXT_PUBLIC_BACK_URL}/api/order`, 
            {
                Products , address , phoneNumber , total
            }, {
            headers: {
                Authorization: `Bearer ${user.token}`,
                "Content-Type": "application/json"
            }
        })
        .then((res) => {
            toast.success(res.data.message)
            window.location.reload()
        })
        .catch((err) => {
            console.log(err)
        })
    }
    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_BACK_URL}/api/order`)
            .then((res) => {
                setOrders(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [user])
    useEffect(() => {
        console.log(orders)
    },[orders])
    return (
        <>
            <ToastContainer/>
            <OrderContext.Provider value={{addProduct , productsNum , productsArr , removeProduct , submitOrder , orders}}>
                {children}
            </OrderContext.Provider>
        </>

    )
}

export default OrderContextProvider