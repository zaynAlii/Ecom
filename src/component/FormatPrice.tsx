import React from 'react'

const FormatPrice = ({price}:{price:number}) => {

  return (
    <div className='w-3/5'>
         <h1 className='  bg-slate-900 p-2 text-white text-center uppercase text-sm font-bold '>
            Price
          </h1>
           <h1 className='mt-5'>${price}.00</h1>


        
    </div>
  )
}

export default FormatPrice