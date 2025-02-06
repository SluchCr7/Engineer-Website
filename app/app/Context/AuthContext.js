'use client'
import axios from 'axios'
import { createContext, useEffect, useState } from 'react'
export const AuthContext = createContext()
import swal from 'sweetalert'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const AuthContextProvider = ({ children }) => {
    const [user , setUser] = useState(null)
    const [users, setUsers] = useState([])
    // Register Function 
    const RegisterUser = (email , password , name , e) => {
        e.preventDefault()
        axios.post(`${process.env.NEXT_PUBLIC_BACK_URL}/api/auth/register`, { email, password, name })
            .then(res => {
                swal("Good job!", res.data.message, "success");
            })
            .catch((err) => {
                swal("Oops!", err.response.data.message, "error");
            })
    }

    // Login Function
    const LoginUser = (email , password , e) => {
        e.preventDefault()
        axios.post(`${process.env.NEXT_PUBLIC_BACK_URL}/api/auth/login` , {email , password})
            .then(res => {
                setUser(res.data)
                toast.success("Login Successfully")
                localStorage.setItem('User' , JSON.stringify(res.data))
            })
            .catch((err) => {
                // console.log(err)
                toast.error("Something went wrong")
            })
    }
    useEffect(() => {
        const user = localStorage.getItem('User')
        if(user){
            setUser(JSON.parse(user))
        }
    }, [])
    // Logout Function
    const logout = () => {
        swal({
            title: "Are you sure?",
            text: "You are go to logout from your account !",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then(willLogout => {    
                if (willLogout) {
                    setUser(null)
                    localStorage.removeItem('User')
                }
            })
            .catch(err => toast.error("Logout Failed"))
    }
    const deleteUser = (id) => {
        axios.delete(`${process.env.NEXT_PUBLIC_BACK_URL}/api/auth/${id}`)
        .then(res => {
            toast.success(res.data.message)
            window.location.reload()
        })
        .catch((err) => {
            toast.error(err.response.data.message)
        })
    }
    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_BACK_URL}/api/auth`).then((res) => {
            setUsers(res.data)
        })
            .catch((err) => {
            console.log(err)
        })
    },[])
    return (
        <>
            <ToastContainer/>
            <AuthContext.Provider value={{user ,users, LoginUser , RegisterUser , logout , deleteUser}}>
                {children}
            </AuthContext.Provider>
        </>
    )
}

export default AuthContextProvider