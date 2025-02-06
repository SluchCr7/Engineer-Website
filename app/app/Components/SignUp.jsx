'use client'
import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";

const SignUp = ({signUp , setSignUp , setLogin}) => {
   const { LoginUser, RegisterUser } = useContext(AuthContext)
    const [user , setUser] = useState({email : "" , password : "" , name : ""})
  return (
    <div className={`${signUp ? "Menu" : ""}`}>           
        <div className={`${signUp ? "flex" : "hidden"} z-[999] items-center w-[80%] md:w-[500px] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] justify-center min-h-screen`}>
            <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg border border-yellow-300">
                <h2 className="text-2xl font-bold text-center text-yellow-600">Register</h2>
                <form onSubmit={(e) => RegisterUser(user.email , user.password , user.name , e)} className="space-y-4">
                <div>
                    <label
                    htmlFor="email"
                    className="block text-sm font-medium text-yellow-700"
                    >
                    Email
                    </label>
                    <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 mt-1 text-yellow-900 bg-yellow-50 border border-yellow-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                    placeholder="Enter your email"
                    value={user.email}
                    onChange={(e)=> setUser({...user , email : e.target.value})}
                    />
                </div>
                <div>
                    <label
                    htmlFor="name"
                    className="block text-sm font-medium text-yellow-700"
                    >
                    Name
                    </label>
                    <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 mt-1 text-yellow-900 bg-yellow-50 border border-yellow-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                    placeholder="Enter your Name"
                    value={user.name}
                    onChange={(e)=> setUser({...user , name : e.target.value})}
                    />
                </div>
                <div>
                    <label
                    htmlFor="password"
                    className="block text-sm font-medium text-yellow-700"
                    >
                    Password
                    </label>
                    <input
                    type="password"
                    id="password"
                    className="w-full px-4 py-2 mt-1 text-yellow-900 bg-yellow-50 border border-yellow-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                    placeholder="Enter your password"
                    value={user.password}
                    onChange={(e)=> setUser({...user , password : e.target.value})}
                    />
                </div>
                <button
                    type="submit"
                    className="w-full px-4 py-2 text-white bg-yellow-500 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
                    
                >
                    Register
                </button>
                </form>
                <p className="text-sm text-center text-yellow-700">
                    Already Have An Account{" "}
                    <button onClick={() => { setSignUp(false);  setLogin(true)}} className="font-medium text-yellow-600 hover:underline">
                        Login
                    </button>
                </p>
            </div>
        </div>
    </div>
  );
};

export default SignUp;
