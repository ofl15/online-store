import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'


const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' Component={Home}/>
            <Route path='/login' Component={Login} />
            <Route path='/register' Component={Register} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router