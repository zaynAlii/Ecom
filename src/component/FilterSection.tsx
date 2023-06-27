"use client"
import React, { useState } from 'react'
import { useFilterProductContext } from '@/context/filterProductContext'
import { Product } from '@/context/productcontext';
import FormatPrice from './FormatPrice'
const FilterSection = () => {
  const [active, setactive] = useState<string>("all");
  const { filter: { text, category, price, min, max }, UpdateFilterOnSearch, all_products ,clearFilter} = useFilterProductContext();
  let arraycat: string[] = [];
  let rm: string[] = [];
  let company: string[] = [];
  const removeDubmicates = (P: Product[], what: string) => {

    arraycat = all_products.map((pro: any) => pro[what])
    if (what === "category") {
      rm = arraycat.filter((n: string, i, arr) => arr.indexOf(n) === i)
      rm.unshift("all");
    }
    else {
      company = arraycat.filter((n: string, i, arr) => arr.indexOf(n) === i)
      company.unshift("all");

    }

  }



  removeDubmicates(all_products, "category");
  removeDubmicates(all_products, "company");

  return (
    <div>
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <input type="text"
          className='p-2 mt-2 bg-gray-300 text-black outline-none  '
          placeholder='Search ....'
          name='text'
          value={text}
          onChange={UpdateFilterOnSearch}
        />
      </form>
      <div className='mt-4 w-3/5  py-2 mr-2 rounded-md bg-gray-300'>
        <h1 className=' bg-slate-900 p-2 text-white text-center uppercase text-sm font-bold '>
          category
        </h1>
        {rm.map((pro: string) => {
          return (

            <button name='category' key={pro} value={pro} onClick={UpdateFilterOnSearch} className={`my-2  block  uppercase text-[12px] px-2 py-1 cursor-pointer  hover:border-b-2 hover:border-lime-500`}>
              {pro}
            </button>
          )
        })}
      </div>
      <div className='mt-9 outline-none w-3/5'>
        <form action="" onSubmit={(e) => e.preventDefault()}>
          <h1 className='  bg-slate-900 p-2 text-white text-center uppercase text-sm font-bold '>
            Company
          </h1>
          <select name="company" id="list" onClick={UpdateFilterOnSearch}>
            {/* <option className=' outline-none' value="">Company Product</option> */}
            {company.map((com: string) => {
              return (
                // <div key={com}> 

                <option key={com} className='' value={com}>{com}</option>


                // </div>
              )
            })}
          </select>
        </form>
      </div>

      <div className='mt-14'>
        <FormatPrice price={price} />
        <input className='mt-4' type="range" name="price" min={min} max={max} value={price} onChange={UpdateFilterOnSearch} />


      </div>

      <div className='mt-10'>
           <button  className='py-2 px-6 bg-red-600 rounded-lg'  onClick={clearFilter}>Clear filter </button>
      </div>

    </div>
  )
}

export default FilterSection