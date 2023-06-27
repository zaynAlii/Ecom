import React from 'react'
import { AiOutlinePlusCircle } from "react-icons/ai"
import { AiFillMinusCircle } from "react-icons/ai"
const QuantiyAmount = ({amount, setIncrease,setDecrease}:{amount:number,setIncrease:any,setDecrease:any}) => {
  return (
    <div>

            <div className='flex gap-4 mt-6 '>

                <div className='text-gray-500 text-xl'>Quantity: </div>
                <div ><AiOutlinePlusCircle onClick={setIncrease} className='w-[30px] h-[30px]' /></div>
                <div className=' text-lime-500 text-2xl'>{amount}</div>
                <div><AiFillMinusCircle onClick={setDecrease} className='w-[30px] h-[30px]' /></div>
            </div>
            {/* <button className='px-10 mt-5 py-2 text-center bg-lime-400'>Add to cart</button> */}

    </div>
  )
}

export default QuantiyAmount