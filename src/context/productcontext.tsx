// "use client"

import { createContext, useContext } from 'react'

export interface Product {
    id?: string;
    name: string;
    company: string
    colors: string[]
    image: string
    category: string
    featured: string
    description: string
    price: string;
    // rating:string;
}
type imgtype={
    filename:string,
    height:number,
    id:string,
    size:number,
    type:string,
    url:string,
    width:number
}
export type SinglePorduct = {
    id: string,
    
    name: string,
    company: string,
    category: string,
    shipping:boolean
    price: number,
    stars: number,
    reviews: number,
    stock: number,
    colors: string[],
    description: string,
    image: imgtype[]

}
interface IproductCon {
    isLoading: boolean;
    isError: boolean;
    featuredProduct: Product[]
    Products: Product[];
    isSingleLoading: boolean
    SingleProduct: SinglePorduct
    getSingleProduct: (url: string) => void
    // updateProduct:(Product:Product)=>void;
}
// {"id":"thapaserialnoa","name":"iphone x","company":"apple","price":6000000,"colors":["#ff0000","#000000","#CDD0D0"],"image":"https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","description":"The mobile is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.","category":"mobile","featured":true}
// const Productcontext=createContext<IproductCon>(
const Productcontext = createContext<IproductCon>(
    {
        isSingleLoading: false,
        SingleProduct:{ 
            id: "", 
            shipping:false,
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
        },
        featuredProduct: [],
        isLoading: false,
        isError: false,
        Products: [],
        getSingleProduct(url: string) { }
    }
)

export const UseProductContext = () => useContext(Productcontext);

export default Productcontext