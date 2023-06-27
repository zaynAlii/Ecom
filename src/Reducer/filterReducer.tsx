import React from 'react'
import { tStates } from '@/context/filterProductProvider'
import { Product } from '@/context/productcontext'



const filterReducer = (state: tStates, action: any) => {
  switch (action.type) {
    case "lOAD_Filter_DATA":
      let { filter: { max, min, price } } = state
      let Prodt = [...action.payload];
      //  console.log(Prodt);
      let prices: number[] = Prodt.map((pro: Product) => Number(pro.price));
      //  console.log(prices);
      max = Math.max(...prices);
      min = Math.min(...prices);

      //  for (let i = 0; i < Prodt.length; i++) {


      //  }

      return {
        ...state,
        filter_Product: [...action.payload],
        all_products: [...action.payload],
        filter: {
          ...state.filter,
          price: max,
          max,
          min
        }
      }
    case "SET_VIEW":
      return {
        ...state,
        grid_view: false
      }
    case "SET_LIST_VIEW":
      return {
        ...state,
        grid_view: true
      }
    case "SET_BY_OPTION":
      // let seletectedVal = document.getElementById("sort");
      // let val:string= seletectedVal.options[seletectedVal.selectedIndex].value
      // console.log(val);
      return {
        ...state,
        sorting_val: action.payload
      }
    case "SORT_PRODUCT_LIKE":
      let newStore: Product[];
      let tempProduct = [...action.payload];

      if (state.sorting_val === "a-z") {
        tempProduct.sort((a, b) => a.name.localeCompare(b.name));
      }
      if (state.sorting_val === "z-a") {
        tempProduct.sort((a, b) => b.name.localeCompare(a.name));
      }
      if (state.sorting_val === "lowest") {
        tempProduct.sort((a, b) => a.price - b.price);
      }
      if (state.sorting_val === "highest") {
        tempProduct.sort((a, b) => b.price - a.price);
      }
      return {
        ...state,
        filter_Product: tempProduct
      }
    case "UPDATE_FOR_SEARCH":

      const { name, value } = action.payload;
      return {
        ...state,
        filter: {
          ...state.filter,
          [name]: value
        }
      }
    case "FILTER_BY_SEARCH":

      let { all_products, filter: { text } } = state;
      let TempProduc: Product[] = [...all_products];

      TempProduc = TempProduc.filter((product: Product) => product.name.toLowerCase().includes(text))

      return {
        ...state,
        filter_Product: TempProduc
      }

    case "FILTER_BY_CAT":
      let tempP = state.all_products;

      const { filter: { category } } = state
      if (category === "all") {
        tempP = tempP;
      }
      else if (category === "mobile") {
        tempP = tempP.filter((pro: Product) => pro.category === "mobile")
        // console.log(tempP);
      }
      else if (category === "laptop") {
        tempP = tempP.filter((pro: Product) => pro.category === "laptop")
        // console.log(tempP);
      }
      else if (category === "computer") {
        tempP = tempP.filter((pro: Product) => pro.category === "computer")
        // console.log(tempP);
      }
      else if (category === "watch") {
        tempP = tempP.filter((pro: Product) => pro.category === "watch")
        // console.log(tempP);
      }
      else if (category === "accessories") {
        tempP = tempP.filter((pro: Product) => pro.category === "accessories")
        // console.log(tempP);
      }
      return {
        ...state,
        filter_Product: tempP
      }
    // 'all', 'apple', 'samsung', 'dell', 'nokia', 'asus', 'lenova', 'rolex'
    case "FILTER_BY_COMPANY":
      let newTempProduct = [...state.all_products];
      const { filter: { company } } = state;
      if (company === "all") {
        newTempProduct = newTempProduct
      }
      else if (company === "apple") {
        newTempProduct = newTempProduct.filter((pro: Product) => pro.company === "apple");
      }

      else if (company === "samsung") {
        newTempProduct = newTempProduct.filter((pro: Product) => pro.company === "samsung");
      }

      else if (company === "dell") {
        newTempProduct = newTempProduct.filter((pro: Product) => pro.company === "dell");
      }

      else if (company === "nokia") {
        newTempProduct = newTempProduct.filter((pro: Product) => pro.company === "nokia");
      }

      else if (company === "asus") {
        newTempProduct = newTempProduct.filter((pro: Product) => pro.company === "asus");
      }

      else if (company === "lenova") {
        newTempProduct = newTempProduct.filter((pro: Product) => pro.company === "lenova");
      }

      else if (company === "rolex") {
        newTempProduct = newTempProduct.filter((pro: Product) => pro.company === "rolex");
      }
      return {
        ...state,
        filter_Product: newTempProduct
      }
    case "FILTER_BY_PRICES":
      
      let priceProducts = [...state.all_products];
      let { filter: { price: prize } } = state;
      priceProducts = priceProducts.filter((pro: Product) => Number(pro.price) <= prize)
      return {
        ...state,
        filter_Product: priceProducts
      }
    case "CLEAR_IT":
        
           let seletectedVal = document.getElementById("sort");
          //  seletectedVal.innerHTML="Select"Select
      //  seletectedVal.options[seletectedVal.selectedIndex].value="Select";F
         let filterKro=[...state.all_products];
        let { filter: { max: proic } } = state
         return {
          ...state,
          filter_Product:filterKro,
          filter:{
            ...state.filter,
            // text:"",
            company:"all",
            category:"all",
            price:proic 
          }
         }
    default:
      return state
  }
}

export default filterReducer 