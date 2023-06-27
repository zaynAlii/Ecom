"use client"
import React from 'react'
import { Product } from '@/context/productcontext'
import Image from 'next/image'
import Sekeleton from './sekeleton'
import Products from './Product'
import { UseProductContext } from '@/context/productcontext'
const FeaturedProducts = () => {
    const { featuredProduct, isLoading } = UseProductContext();
    // console.log(UseProductContext());
    if (isLoading) {
        // console.log("in hehe")
        return <div className='flex justify-evenly'>
            <Sekeleton />
        </div>

    }
    return (
        <div className='my-28'>
            <h1 className=' text-center my-5'> <small className="text-sm font-medium leading-none text-purple-400   ">Featured Products</small></h1>
            <section className='flex gap-3  flex-wrap'>
                {featuredProduct.map((pro: Product, i) => {
                    return (
                       
                              <Products key={pro.id} pro={pro}/>

                    );
                })}


            </section>
        </div>
    )
}

export default FeaturedProducts