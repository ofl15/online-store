import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import { Navigate } from 'react-router-dom'
import axios from 'axios'
import { BRANDS, CATEGORIES, PRODUCTS } from '../urls'

const Home = () => {

  const [products , setProducts] = useState([])
  const [brands , setBrands] = useState([])
  const [categories , setCategories] = useState([])

  useEffect(() => load() , [])

  useEffect(() => {
    axios.get(BRANDS)
      .then(res => setBrands(res.data.data))
      .catch(err => console.log(err))
    
    axios.get(CATEGORIES)
      .then(res => setCategories(res.data.data))
      .catch(err => console.log(err))
  } , [])

  const load = () => {
    axios.get(PRODUCTS)
      .then(res => setProducts(res.data.data))
      .catch(err => console.log(err))
  }

  const filter = filters => {
    axios.get(PRODUCTS + `&filters[${filters.key}][title][&eq]=${filters.value}`)
      .then(res => setProducts(res.data.data))
      .catch(err => console.log(err))
  }

  const isAuthenticated = localStorage.getItem("user") && localStorage.getItem("token")


  if (!isAuthenticated) {
    return <Navigate to="/login"/>
  }

  return (
    <Layout>
        <Navbar brands={brands} categories={categories} products={products}/>
        <Products products={products}/>
    </Layout>
  )
}

export default Home