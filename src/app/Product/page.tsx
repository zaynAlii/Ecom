import React from 'react'
import FilterSection from '@/component/FilterSection'
import Sort from '@/component/Sort'
import ProductList from '@/component/ProductList'
const page = () => {
  return (
    <div className='flex min-h-screen '>
           <div className='w-[23%]'> <FilterSection/>  </div>
           <div className='w-[77%]'>
                   <div><Sort   /></div>
                   
                   <div><ProductList /></div>
           </div>



    </div>
  )
}

export default page