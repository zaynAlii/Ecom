import React from 'react'
import { cartItemsType } from '@/context/cartContext';
import { cartType } from '@/context/cartContext'
import { Product } from '@/context/productcontext';
const cartReducer = (state: cartType, action: any) => {
    switch (action.type) {
        case "ADD_TO_CART":
            const { id, Quantity, activeColor, product } = action.payload;
            let cartItem: cartItemsType;
            cartItem = {
                id: id + activeColor,
                name: product.name,
                Quantity,
                max: product.stock,
                image: product.image[0].url,
                price: product.price,
                color: activeColor
            }
            let { cartItems, total_Item, total_price } = state
            cartItems.push(cartItem);
            total_Item = cartItems.length
            let newPriceArray: number[] = cartItems.map((pro: cartItemsType) => Number(pro.price));
            total_price = newPriceArray.reduce((previous: number, pro: number) => {
                return pro + previous
            }, 0)
            // console.log(total_price);
            return {
                ...state,
                cartItems,
                total_Item,
                total_price
            }

        case "DELETE":

            let cartItemss: cartItemsType[] = [...state.cartItems];
            let totalprize:number=state.total_price;
            let totalq:number=state.total_Item;

            let deleted = cartItemss.filter((pro: any) => {
                if (pro.id !== action.payload) {
                    return {
                        ...pro
                    }
                    
                }
            })
            let deletedprice = cartItemss.find((pro: any) => {
                if (pro.id == action.payload) {
                    return  pro.price
                    
                    
                }
            })
            // deletedprice=Number(deletedprice)
            totalprize=totalprize-Number(deletedprice?.price)
            totalq=totalq-1;

            return {
                ...state,
                cartItems: deleted,
                total_price:totalprize,
                total_Item:totalq
            }
        case "DELETE_ALL":
            return  state={
                cartItems : [],
                total_Item : 0,
                total_price : 0,
                shipping: 5000,
                addToCrt(id: string, Quantity: number, activeColor: string, product: Product) { },
                minusQuan(val: string) { },
                PlusQuan(val: string) { },
                deleteIt(pro: string) { },
                deleteall() { }
            }
            
        default:
            return state
    }
}

export default cartReducer