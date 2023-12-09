import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Login12 from './pages/Login12'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import ConfirmOrder from './pages/ConfirmOrder'


const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' Component={Home}/>
            <Route path='/login' Component={Login12} />
            <Route path='/register' Component={Register} />
            <Route path='/product/:id' element={<ProductDetail />} exact/>
            <Route path='/cart' element={<Cart />} exact/>
            <Route path='/order/:productId/:amount' element={<ConfirmOrder />} exact/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router