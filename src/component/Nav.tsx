"use client"
import React from 'react'
import Link from 'next/link'
import { AiOutlineShoppingCart } from "react-icons/ai"
import { RiBarChartHorizontalFill } from "react-icons/ri"
import { ImCross } from "react-icons/im"
import { useState } from "react"

const Nav = () => {
    const [shownav, setshownav] = useState<string>("hidden")
    const [showcros, setshowcros] = useState<boolean>(false)
    return (
        <>
               <RiBarChartHorizontalFill
                className='sm:block md:hidden mr-[20px]'
                onClick={() => setshownav("absolute  ")}
            />
            <div className={`${shownav} md:block `} >
                <nav >
                    <ul className={`  flex     gap-6  `} >
                        <li > <Link href="/" className='hover:underline hover:text-lime-600 text-sm'>Home</Link> </li>
                        <li > <Link href="/Product" className='hover:underline hover:text-lime-600 text-sm'>Products</Link> </li>
                        <li > <Link href="/About" className='hover:underline hover:text-lime-600 text-sm'>About</Link> </li>
                        <li > <Link href="/Contact" className='hover:underline hover:text-lime-600 text-sm'>Contact</Link> </li>
                        <li className='relative' >
                            <Link href="/Cart" className='hover:underline hover:text-lime-600 relative'>
                                <AiOutlineShoppingCart className='h-[20px] w-[25px]' />
                                <span className='absolute top-0 left-5 text-[12px]  bg-lime-800 px-1 rounded-full text-center w-4 h-4 text-white'>
                                    0
                                </span>
                            </Link>

                        </li>
                        {/* <li > <Link href="/">Home</Link> </li> */}
                    </ul>


                </nav>

                {/* <ImCross className='sm:block md:hidden ' /> */}

            </div>
         
        </>
    )
}

export default Nav