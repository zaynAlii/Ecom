"use client"
import { AiOutlinePlusCircle } from "react-icons/ai"
import { AiFillMinusCircle } from "react-icons/ai"
import { FcDeleteRow } from "react-icons/fc"
import Link from "next/link"
import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useCartContext } from '@/context/cartContext'
import { cartItemsType } from '@/context/cartContext'

const Page = () => {
  const { total_Item, total_price, cartItems, shipping, minusQuan, PlusQuan, deleteIt, deleteall } = useCartContext()
  // console.log(total_price, cartItems,total_Item); 
  return (
    <div className='h-screen mt-20'>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Items</TableHead>
            {/* <TableHead>Item</TableHead> */}
         
            <TableHead>Price</TableHead>
            <TableHead>Qunatity</TableHead>
            <TableHead className="text-right">Amount</TableHead>
            <TableHead className="text-right "><FcDeleteRow className="text-3xl" /></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cartItems.map((pro: cartItemsType) => {
            return (
              <TableRow key={pro?.id}>
                <TableCell className="font-medium w-[250px]">
                  <div className="flex gap-2 items-center">
                    <img
                      src={pro?.image}
                      alt={pro?.name}
                      width={180}
                      height={180}
                    />
                    <div>
                      <h1 className="font-bold">{pro?.name}</h1>
                      <button style={{ backgroundColor: pro?.color }} className="w-[20px] h-[20px] rounded-full"></button>
                    </div>
                  </div>
                </TableCell>
              
                <TableCell>${pro?.price}.00</TableCell>
                <TableCell>
                  <div className='flex gap-4 mt-6 '>
                    <div ><AiOutlinePlusCircle onClick={() => PlusQuan(pro?.id)} className='w-[30px] h-[30px]' /></div>
                    <div className=' text-lime-500 text-2xl'>{pro?.Quantity}</div>
                    <div ><AiFillMinusCircle onClick={() => minusQuan(pro?.id)} className='w-[30px] h-[30px]' /></div>
                  </div>
                </TableCell>
                <TableCell className="text-right">{Number(pro?.price) * pro?.Quantity}</TableCell>
                <TableCell><FcDeleteRow onClick={() => deleteIt(pro?.id)} className="text-4xl" /></TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
      <hr className="border border-black" />
      <div className="mt-7 flex justify-between">
        <Link href="./Product/"><button className="py-2 px-7 bg-lime-500 hover:bg-lime-600 ">Continue Shopping</button> </Link>
        <div>
          <button className="py-2 px-7 bg-red-500 hover:bg-red-600" onClick={deleteall}>  Clear All </button>
          <div className="mt-10 w-[250px] p-5 bg-gray-200 ">
            <div className=" flex flex-col">
              <span className="font-bold">Sub Total: <span className=" font-normal"> ${total_price}.00</span> </span>

              {cartItems.length > 0 && <span className="mt-3 font-bold"> Shipping Fee: <span className="font-normal"> ${shipping / 20}.00</span>  </span>}
            </div>
            <hr className="border border-black mb-2" />
            <div className="mt-3">
              {cartItems.length > 0 && <span className="font-bold"> Order Total:  <span className="font-normal"> ${total_price + shipping / 20}.00</span> </span>}

            </div>
          </div>
        </div>

      </div>



    </div>

  )
}

export default Page