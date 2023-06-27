"use client"
import React, { useContext } from 'react'
import { createContext } from 'react';
import { Product } from './productcontext';
interface InterfacefilterProduct {
    filter_Product: Product[],
    all_products: Product[],
    grid_view: boolean
    setView: () => void
    setLView: () => void
    sorting_val: string
    sorting: (val: any) => void
    filter: {
        text: string
        company: string,
        category: string,
        price: number,
        min: number,
        max: number
    },
    clearFilter:()=>void
    UpdateFilterOnSearch: (val: any) => void,

    // serachByName:(val:any)=>void
}
const filterProductContext = createContext<InterfacefilterProduct>(
    {
        filter_Product: [],
        all_products: [],
        grid_view: true,
        sorting_val: "",
        setView() { },
        setLView() { },
        sorting(val: any) { },
        filter: {
            text: "",
            company: "all",
            category: "all",
            price: 0,
            min: 0,
            max: 0
        },
        UpdateFilterOnSearch(val: any) { },

        clearFilter(){}

    }
)
export const useFilterProductContext = () => useContext(filterProductContext);
export default filterProductContext