import { useState } from 'react'

const AddtoCart = () => {
    const [Quantity, setQuantity] = useState<number>(1);
    const minusClick = () => {
        Quantity > 1 ? setQuantity(Quantity - 1) : setQuantity(1); 
    }
    const plusClick = () => {
        // Quantity > 1 ? setQuantity(Quantity - 1) : setQuantity(1); 
           
    }


    return (
        <>
           
        </>
    )
}

export default AddtoCart