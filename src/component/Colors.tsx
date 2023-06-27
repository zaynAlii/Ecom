import React, { useState } from 'react'
import { BsCheck } from "react-icons/bs"
import Link from 'next/link'
import QuantiyAmount from './QuantityAmount'
import { useCartContext } from '@/context/cartContext'
const AddtoCart = ({ data = [] }: { data: any }) => {
    const { stock, id, colors, SingleProduct } = data;
    const {addToCrt}=useCartContext()
    const [activeColor, setActColor] = useState<string>(colors[0]);
    const [Quantity, setQuantity] = useState<number>(1);
    const minusClick = () => {
        Quantity > 1 ? setQuantity(Quantity - 1) : setQuantity(1);
    }
    const plusClick = () => {
        // Quantity > 1 ? setQuantity(Quantity - 1) : setQuantity(1); 
        Quantity < stock ? setQuantity(Quantity + 1) : setQuantity(stock)
    }
    return (
        <div>

            <div className='flex gap-2 mt-6  font-extrabold text-xl items-center'>

                colors:{colors.map((color: string, i: number) => {
                    // color=color.toLocaleLowerCase();
                    return (
                        <div key={i} >
                            <p style={{ backgroundColor: color }} onClick={() => setActColor(color)} className={`${color === activeColor ? "opacity-100" : " opacity-50"} hover:opacity-100  w-[20px] h-[20px]    rounded-full  `}>{color === activeColor ? <BsCheck /> : null}</p>
                        </div>
                    )
                })}

            </div>
            <QuantiyAmount amount={Quantity} setIncrease={plusClick} setDecrease={minusClick} />

            <Link href="/Cart" onClick={() => addToCrt(id, Quantity, activeColor, SingleProduct)}>  <button className='px-10 mt-5 hover:bg-lime-600 py-2 text-center bg-lime-400' >Add to cart</button></Link>
        </div>

    );
}

export default AddtoCart