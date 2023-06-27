import React from 'react'

const productReducer = (state: any, action: any) => {

    switch (action.type) {
        case "LOADING_KRO":
            return {
                ...state,
                isLoading: true,
            }

        case "SET_API_DATA":

            const featureData = action.payload.filter((item: any) => {
                return item.featured === true;
            })
            return {
                ...state,
                isLoading: false,
                featuredProduct: featureData,
                Products: action.payload,
            }


        case "ERROR_DEKHAOO":
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        case "SET_SINGLE_LOADING":

            return {
                ...state,
                isSingleLoading: true,
            }

        case "SET_SINGLE_PRODUCT":
            // console.log(action.payload)
            return {
                ...state,
                isSingleLoading: false,
                SingleProduct: action.payload,
            }
            
        case "SINGLR_ERROR_DEKHAOO":
            return {
                ...state,
                isSingleLoading: false,
                isError: true,
            }
          case '':  


        default:
            return state
    }

}

export default productReducer