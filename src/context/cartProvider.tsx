"use client"
import React from 'react'
import { cartType, cartItemsType } from './cartContext'
import { useReducer } from "react"
import { cartContext } from './cartContext'
// import { useReducer } from "react"
import { Product } from './productcontext'
import reducer from '@/Reducer/cartReducer'
const CartProvider = ({ children }: { children: React.ReactNode }) => {

    let initialstate: cartType = {
        cartItems: [],
        total_Item: 0,
        total_price: 0,
        shipping: 5000,
        addToCrt(id: string, Quantity: number, activeColor: string, product: Product) { },
        minusQuan(val: string) { },
        PlusQuan(val: string) { },
        deleteIt(pro: string) { },
        deleteall() { }
    }
    const PlusQuan = (val: string) => {
        dispatch({ type: "PLUS_IT", payload: val });
    }
    const minusQuan = (val: string) => {
        dispatch({ type: "MINUS_IT", payload: val });
    }
    const [state, dispatch] = useReducer(reducer, initialstate)
    const addToCrt = (id: string, Quantity: number, activeColor: string, product: Product) => {
        dispatch({ type: "ADD_TO_CART", payload: { id, Quantity, activeColor, product } });
    }
    const deleteIt = (pro: string) => {

        dispatch({ type: "DELETE", payload: pro })

    }
    const deleteall = () => {

        dispatch({ type: "DELETE_ALL" })

    }
    // console.log(state);
    return (
        <cartContext.Provider value={{ ...state, addToCrt, minusQuan, PlusQuan, deleteIt, deleteall }}> {children}</cartContext.Provider>
    )
}
export default CartProvider