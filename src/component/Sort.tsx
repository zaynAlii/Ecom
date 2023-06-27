"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import { BsGrid3X3GapFill } from "react-icons/bs"
import { CiCircleList } from "react-icons/ci"
import { useFilterProductContext } from '@/context/filterProductContext'
const Sort = () => {
  const { grid_view, setView, setLView, sorting } = useFilterProductContext();
  return (
    <div className='grid grid-cols-3 p-6'>
      <div className='px-5 flex gap-6 '>
        <BsGrid3X3GapFill onClick={setView} className='text-3xl cursor-pointer' />
        <CiCircleList onClick={setLView} className='text-3xl cursor-pointer' />
      </div>
      <div className='text-sm text-gray-300'>12 TOTAL PRODUCT</div>
      <div>
        <form action="">
          <select name="" className='text-black bg-purple-500 outline-none ' id="sort" onClick={sorting}>

            <option value="" > Select </option>
            <option value="lowest">Price-(Lowest)</option>
            <option value="highest">Price-(Highest)</option>
            <option value="a-z">Price-(A-Z)</option>
            <option value="z-a">Price-(Z-A)</option>
          </select>
        </form>

      </div>





    </div>
  )
}

export default Sort