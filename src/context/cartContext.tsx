import { type } from "os";
import { createContext } from "react";
import { Product } from "./productcontext";
import { useContext } from "react"

export type cartItemsType = {
        id:string,
        name:string,
        color:string,
        image:string,
        price:string,
        max:number,
        Quantity:number,
       
}


export type cartType =
    {
        total_Item: number,
        total_price: number,
        cartItems:cartItemsType[]
        shipping: number,
        addToCrt: (id: string, Quantity: number, activeColor: string, SingleProduct: Product) => void,
        minusQuan:(val:string)=>void
        PlusQuan:(val:string)=>void
        deleteIt:(pro:string)=>void
        deleteall:()=>void
    }
export const cartContext = createContext<cartType>(
    {
        cartItems: [],
        total_Item: 0,
        total_price: 0,
        shipping: 5000,
        addToCrt(id: string, Quantity: number, activeColor: string, SingleProduct: Product) { },
        minusQuan(val:string){},
        PlusQuan(val:string){},
        deleteIt(pro:string){},
        deleteall(){}
    }
)
export let useCartContext = () => useContext(cartContext);

