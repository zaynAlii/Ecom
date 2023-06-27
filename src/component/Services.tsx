import React from 'react'
import { FaShuttleVan } from "react-icons/fa"
import { MdOutlineSecurity } from "react-icons/md"
import { FaEthereum } from "react-icons/fa"

const Services = () => {
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 gap-4  '>
            <div className='bg-gray-100 rounded-xl px-4 py-16 text-center'>
                <FaShuttleVan className=' mb-2 sm:w-[100px] md:w-[150px] lg:w-[200px] lg:ml-[40px] text-lime-400 h-[20px] ' />
                <h1 className='text-sm  '>Super Fast And Safe delivery</h1>
            </div>

            <div className='flex flex-col gap-2'>
                <div className='bg-gray-100 rounded-xl px-4 py-6 text-center'>
                    <MdOutlineSecurity className=' mb-2 sm:w-[100px] md:w-[150px] lg:w-[200px] lg:ml-[40px] text-lime-400 h-[20px] ' />
                    No-Conatact-Shipping</div>
                <div className='bg-gray-100 rounded-xl px-4 py-6 text-center'
                ><FaEthereum className=' mb-2 sm:w-[100px] md:w-[150px] lg:w-[200px] lg:ml-[40px] text-lime-400 h-[20px] ' /> Money-Back Guranteed</div>
            </div>
            <div className='bg-gray-100 rounded-xl px-4 py-16 text-center'>
                <FaEthereum className='  mb-2 sm:w-[100px] md:w-[150px] lg:w-[200px] lg:ml-[40px] text-lime-400 h-[20px] ' />
                Super secure Payment system
            </div>








        </div>
    )
}

export default Services