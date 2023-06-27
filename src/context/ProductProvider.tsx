"use client"
import React from 'react'
import Productcontext, { SinglePorduct } from './productcontext'
import { useState, useEffect, useReducer } from 'react'
import axios from 'axios'
import reducer from '@/Reducer/productReducer'
import { Product } from './productcontext'
const API = "https://api.pujakaitem.com/api/products/"
const ProductProvider = ({ children }: { children: React.ReactNode }) => {
    // console.log("i am top")
    const getProduct = async (url: string) => {
        dispatch({ type: "LOADING_KRO" })
        try {
            const res = await axios.get(url);
            const ProductData = res.data;
            dispatch({ type: "SET_API_DATA", payload: ProductData })
        }
        catch (error) {
            dispatch({ type: "ERROR_DEKHAOO" })
        }
    }
    const getSingleProduct = async (url: string) => {
        // console.log("1")
        dispatch({ type: "SET_SINGLE_LOADING" });
        // console.log("2")
        try {
            // console.log("3")
            const res = await axios.get(url);
            const SingleProduct = res.data;
            // console.log("4")

            dispatch({ type: "SET_SINGLE_PRODUCT", payload: SingleProduct });
        }
        catch (error) {
            dispatch({ type: "SINGLR_ERROR_DEKHAOO" })
        }
    }

    useEffect(() => { getProduct(API) }, [])

    type initialki = {
        featuredProduct: Product[],
        Products: Product[],
        isLoading: boolean,
        isSingleLoading: boolean,
        SingleProduct: SinglePorduct,
        // SingleProduct: {},
        isError: boolean,
        getSingleProduct: (url: string) => void
    }
    const initialState: initialki = {
        featuredProduct: [],
        Products: [],
        isLoading: false,
        isSingleLoading: false,
        SingleProduct:{
            id: "",
            shipping: false,
            name: "",
            company: "",
            category: "",
            price: 0,
            stars: 0,
            reviews: 0,
            stock: 0,
            colors: [],
            description: "",
            image: []
        }
        
       , isError: false,
        getSingleProduct(url: string) { }
    }
    const [state, dispatch] = useReducer(reducer, initialState);
    // console.log(state.Products)
    // console.log(state.SingleProduct)

    return (
        <div>

            <Productcontext.Provider value={{ ...state, getSingleProduct }}> {children} </Productcontext.Provider>
            {/* <Productcontext.Provider value={name}> {children} </Productcontext.Provider> */}

        </div>
    )
}

export default ProductProvider