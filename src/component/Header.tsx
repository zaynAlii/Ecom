"use client"
import React from 'react'
import Image from 'next/image'
import Nav from './Nav'
import Link from 'next/link'
import { useCartContext } from '@/context/cartContext'
import { AiOutlineShoppingCart } from "react-icons/ai"
import { RiBarChartHorizontalFill } from "react-icons/ri"
import { ImCross } from "react-icons/im"
import { useState } from "react"
const Header = () => {
    const {total_Item}=useCartContext()
    const [shownav, setshownav] = useState<string>("hidden")
    const [showcros, setshowcros] = useState<string>("")
    return (
        <div className='flex  justify-between  min-h-[70px] items-center max-h-[100px]'>
            <div className='flex items-center justify-between  sm:w-full md:w-none'>
                <Image
                    priority
                    src="/images/mainlogo/mainlogo.jpg"
                    alt='mainlogo'
                    width={400}
                    height={400}
                    className='w-[100px] h-[40px] rounded-md object-cover'
                />
                <RiBarChartHorizontalFill
                    className='sm:block md:hidden   mr-[20px]'
                    onClick={() => setshownav("absolute z-20 bg-lime-400 w-1/2 top-0 py-6 left-0 ")}
                />
            </div>
            
            <nav className={`${shownav} md:py-0 md:relative md:top-0 md:left-0  md:bg-transparent md:block`}>
                <ImCross className='sm:ml-4 sm:block md:hidden  '
                    onClick={() => setshownav("hidden")}
                />

                <ul className={`  flex sm:flex-col md:flex-row sm:ml-20 md:ml-0     gap-6  `} >
                    <li onClick={() => setshownav("hidden")}> <Link href="/" className='hover:underline uppercase hover:text-lime-600 text-sm'>Home</Link> </li>
                    <li onClick={() => setshownav("hidden")}> <Link href="/Product" className='hover:underline uppercase hover:text-lime-600 text-sm'>Products</Link> </li>
                    <li onClick={() => setshownav("hidden")}> <Link href="/About" className='hover:underline uppercase hover:text-lime-600 text-sm'>About</Link> </li>
                    <li onClick={() => setshownav("hidden")}> <Link href="/Contact" className='hover:underline hover:text-lime-600 uppercase text-sm'>Contact</Link> </li>
                    <li onClick={() => setshownav("hidden")} className='relative' >
                        <Link href="/Cart" className='hover:underline hover:text-lime-600 relative'>
                            <AiOutlineShoppingCart className='h-[20px] w-[25px]' />
                            <span className='absolute top-0 left-5 text-[12px]  bg-lime-800 px-1 rounded-full text-center w-4 h-4 text-white'>
                                {total_Item}
                            </span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div >



    )
}

export default Header