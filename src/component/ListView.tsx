import React from 'react'
import { Product } from '@/context/productcontext'
import Link from 'next/link'
const ListView = ({ products }: { products: Product[] }) => {
    // console.log(products)
    return (
        <div className=''>
            {products.map((pro: Product) => {
                const { id,name, price, image, description } = pro
                return (
                <div key={name} className='grid grid-cols-2 mb-5 border p-5'>
                    <div>
                        <img
                            src={image}
                            alt={name}
                            width={300}
                            height={300}
                        />
                    </div>
                    <div>
                           <h1 className='text-xl mt-2 font-bold tracking-[1px] '>{name}</h1>
                           <h1 className='mt-2'>Price: ${price}.00</h1>
                           <h1 className='mt-2'>{description.slice(0,90)}...</h1>
                          <Link href={`/SingleProduct/${id}`}> <button className=' uppercase tracking-[1px] px-5 py-2 bg-lime-500 mt-5 text-white'>Read more</button> </Link>
                    </div>
                </div>
                )
            })}




        </div>
    )
}

export default ListView