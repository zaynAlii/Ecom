"use client"
import React from 'react'
import Product from './Product'
import Sekeleton from './sekeleton'
import { useFilterProductContext } from '@/context/filterProductContext'
// import { Product } from '@/context/productcontext'
import { UseProductContext } from '@/context/productcontext'
import ListView from './ListView'
const ProductList = () => {
    const {Products,isLoading}=UseProductContext()
    
    const {grid_view,filter_Product} =useFilterProductContext()
    if (isLoading) {
        return <Sekeleton/>
    }
    if (grid_view) {
        return  ( 
        <ListView products={filter_Product} />
        )
    }
  return (
    <section className='grid grid-cols-3'>
       
       {filter_Product.map((product)=>
       {
        return ( <Product key={product.id} pro={product}/> )
       })}

    </section>
  )
}

export default ProductList