import React from 'react'
import { Product } from '@/context/productcontext';
import Link from 'next/link';
const Product = ({ pro }: { pro: Product }) => {
    const { image, price, name, category,id } = pro
    return (
        <Link className='mt-5'  key={pro.id} href={`./SingleProduct/${id}`}>
            <div className='p-3 relative  hover:scale-110 transition-all ease-out duration-200 '>
                <img
                    src={pro.image}
                    alt={pro.name}
                    width={300}
                    height={300}
                />
                <div className='flex  mt-3'>
                    <h1 className='text-sm border uppercase  font-bold  py-2 w-full  px-7 rounded-xl'>{pro.name}</h1>
                    <h1 className='ml-auto text-sm border  text-gray-400 py-2 px-3 rounded-xl'> ${pro.price}.00</h1>
                </div>
                <span className='absolute top-4  left-5  bg-gradient-to-t from-black to-transparent  text-sm border border-white  text-white py-2 px-8 rounded-xl'> {pro.category}</span>
                <div className=' h-[180px]  hover:bg-gradient-to-r hover:from-slate-700 hover:to-transparent absolute top-3 w-full   transition-all ease-out  duration-500  '></div>
            </div>
        </Link>
    )
}

export default Product