import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Login12 from './pages/Login12'
import ProductDetail from './pages/ProductDetail'



const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' Component={Home}/>
            <Route path='/login' Component={Login12} />
            <Route path='/register' Component={Register} />
            <Route path='/product/:id' element={<ProductDetail />} exact/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router