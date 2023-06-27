"use client"
import React from 'react'
import { useEffect } from 'react'
import SingleSekeleton from '@/component/SingleSekeleton'
import { UseProductContext } from '@/context/productcontext'
import SingleNavagation from '@/component/SingleNavagation'
import { TbTruckDelivery } from "react-icons/tb"
import { LuReplaceAll } from "react-icons/lu"
// import Colors from '../Colors'
import { useState } from "react"
import { MdSecurity } from "react-icons/md"

import StarRewiew from '@/component/StarRewiew'
import MyImage from '@/component/MyImage'
import AddtoCart from '@/component/Colors'
// import AddtoCart from '@/component/AddtoCart'
const Page = ({ params }: { params: { id: string } }) => {

  let { SingleProduct, getSingleProduct, isSingleLoading } = UseProductContext();
  useEffect(() => {
    getSingleProduct(`https://api.pujakaitem.com/api/products?id=${params.id}`);
    // console.log(" vyah");
  }, [])

  const { id, name, company, category, price, stars, reviews, stock, colors, description, image = [{ url: "" }] } = SingleProduct
  // console.log(image)
  if (isSingleLoading) {
    return (<div className='min-h-screen'>
      <SingleSekeleton />
    </div>)
  }
  return (
    <div>
      <SingleNavagation tittle={category} />
      <div className='flex  my-20 flex-wrap justify-center min-h-screen'>
        <div className=' xl:w-[70%] '>
          <MyImage img={image} />
        </div>
        <div className='mt-20 xl:mt-0 xl:w-[30%]'>
          <h1 className="scroll-m-20 text-4xl font-extrabold  uppercase tracking-[1px] lg:text-5xl">
            {name}
          </h1>
          <div className='flex gap-5 my-4'>
            <StarRewiew star={{ stars, reviews }} />
          </div>
          <p className="text-sm text-muted-foreground font-semibold">MRP: <del>${Number(price) + 10000}</del></p>
          <p className="text-sm text-muted-foreground font-semibold text-lime-400 my-3">Deal of the Day: ${price}.00</p>
          <p className="text-sm text-muted-foreground text-gray-400  font-mono my-3">{description}</p>
          <div className='flex gap-6 justify-center'>
            <div>
              <TbTruckDelivery className='mx-auto my-2 ' />
              <p className="text-[10px] text-muted-foreground text-center">Free Delivary</p>
            </div>
            <div>
              <LuReplaceAll className='mx-auto my-2 ' />
              <p className="text-[10px] text-muted-foreground text-center">30 Days Replacement</p>
            </div>
            <div>
              <TbTruckDelivery className='mx-auto my-2 text-center' />
              <p className="text-[10px] text-muted-foreground text-center">Zain Delivered</p>
            </div>
            <div>
              <MdSecurity className='mx-auto my-2 text-center' />
              <p className="text-[10px] text-muted-foreground text-center">
                2 Years Gurantueee.
              </p>

            </div>
          </div>
          <hr className='my-4' />
          <p className="text-sm text-muted-foreground ">
            Available : <span className='text-md font-bold'>{stock > 0 ? "In Stock" : "Not Available"} </span>
          </p>
          <p className="text-md  my-3 text-purple-500 uppercase text-muted-foreground ">
            ID: <span className='text-slate-800'>{params.id}</span>
          </p>
          <p className="text-md my-3  text-lime-500 uppercase font-bold ">
            Brand: <span className='text-slate-800'>{company}</span>
          </p>
          <hr className='h-[1px] border border-black' />
          {stock > 0 && <AddtoCart data={{ stock, colors, id ,SingleProduct}} />}
        </div>

      </div>


    </div>
  )
}

export default Page