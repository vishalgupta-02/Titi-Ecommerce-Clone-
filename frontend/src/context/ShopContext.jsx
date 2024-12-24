import { createContext } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    
    const currency = '₹';
    const deliveryFee = 10;

    
    const value = {
        products: products,
        currency: currency,
        deliveryFee: deliveryFee,
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;