'use client'
import React, { useState } from 'react'
import Header from './Header'
import Login from './Login'
import SignUp from './SignUp'
import Footer from './Footer'
import StartProject from './StartProject'
import AuthContextProvider from '../Context/AuthContext'
import OrderContextProvider from '../Context/OrderContext'
import ProductContextProvider from '../Context/ProductContext'

import { ThemeProvider } from '../Context/ThemeContext'

const Content = ({ children }) => {
  const [login, setLogin] = useState(false)
  const [signUp, setSignUp] = useState(false)
  return (
    <div>
      <ThemeProvider>
        <AuthContextProvider>
          <OrderContextProvider>
            <ProductContextProvider>
              <Header login={login} setLogin={setLogin} />
              {children}
              <Login login={login} setLogin={setLogin} setSignUp={setSignUp} />
              <SignUp signUp={signUp} setSignUp={setSignUp} setLogin={setLogin} />
              <StartProject />
              <Footer />
            </ProductContextProvider>
          </OrderContextProvider>
        </AuthContextProvider>
      </ThemeProvider>
    </div>
  )
}


export default Content