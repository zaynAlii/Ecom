"use client"
import { useEffect, useReducer } from "react";
import filterProductContext from "./filterProductContext";
import { Product } from "./productcontext";
import { UseProductContext } from "./productcontext";
import reducer from "@/Reducer/filterReducer";
export type tStates = {
    filter_Product: Product[],
    all_products: Product[],
    grid_view: boolean,
    sorting_val: string
    filter: {
        text:""
        company: string,
        category: string,
        price: number,
        min: number,
        max: number
    },
    UpdateFilterOnSearch: (val: any) => void,
    clearFilter:()=>void
}

function FilterProvider({ children }: { children: React.ReactNode; }) {


    const { Products } = UseProductContext();
    // console.log(Products)
    const states: tStates = {
        filter_Product: [],
        all_products: [],
        grid_view: false,
        sorting_val: "",
        filter: {
            text: "",
            company: "all",
            category: "all",
            price: 0,
            min: 0,
            max: 0,
        },
        UpdateFilterOnSearch(val) { },
        clearFilter(){}
    };

    const [state, dispatch] = useReducer(reducer, states);
    useEffect(() => {
        dispatch({ type: "lOAD_Filter_DATA", payload: Products });
    }, [Products]);
    const setView = () => {
        dispatch({ type: "SET_VIEW" });
    };
    const setLView = () => {
        dispatch({ type: "SET_LIST_VIEW" });
    };
    const sorting = (e: any) => {
        let value = e.target.value;
        dispatch({ type: "SET_BY_OPTION", payload: value });
    };
    const UpdateFilterOnSearch = (e: any) => {
        let name = e.target.name;
        let value = e.target.value;
        dispatch({ type: "UPDATE_FOR_SEARCH", payload: { name, value } })
    }
    const clearFilter=()=>{
        dispatch({type:"CLEAR_IT"})
    }
    useEffect(()=>
    {
       dispatch({type:"FILTER_BY_CAT"})
    },[state.filter.category])
    useEffect(()=>
    {
        dispatch({type:"FILTER_BY_COMPANY"});
    },[state.filter.company])
    useEffect(() => {
        dispatch({ type: "SORT_PRODUCT_LIKE", payload: Products });
    }, [state.sorting_val]);
    useEffect(() => {
        dispatch({ type: "FILTER_BY_SEARCH" })
    }, [state.filter.text])
    useEffect(() => {
        dispatch({ type: "FILTER_BY_PRICES" })
    }, [state.filter.price])
    useEffect(() => {
        dispatch({ type: "SEARCH_BY_NAME" });
    }, [Products])

   
    return (
        <filterProductContext.Provider value={{ ...state, setView, setLView, sorting, UpdateFilterOnSearch,clearFilter }}>
            {children}
        </filterProductContext.Provider>
    );
}
export default FilterProvider