import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    
    const currency = '₹';
    const deliveryFee = 10;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const navigate = useNavigate();

    const addToCart = (itemId, size) => {
        if(!size){
            toast.error('Please select a size');
        }
        // Add to cart logic here
        let cartData = structuredClone(cartItems);
        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size] +=1;
            }
            else{
                cartData[itemId][size] = 1;
            }
        }else{
            cartData[itemId]= {};
            cartData[itemId][size] = 1;
        }
        setCartItems(cartData);
    }

    const getCartCount = () => {
        let totalCount = 0;
        for(const items in cartItems){
            for(const item in cartItems[items]){
                try{
                    if(cartItems[items][item] > 0){
                        totalCount+= cartItems[items][item];
                        // console.log(totalCount);
                    }
                } catch(error) {
                    toast.error("An error occurred",error.message);
                }
            }
        }
        console.log(totalCount);
        return totalCount;
    }
 
    const updateQuantity = (itemId, size,quantity) => {
        let cartData = JSON.parse(JSON.stringify(cartItems));

        cartData[itemId][size] = quantity;
        setCartItems(cartData);
        console.log(cartData);
    }

    const getCartAmount = () => {
        let totalAmount = 0;
        for(const items in cartItems){
            let itemInfo = products.find((product)=> product._id === items);
            for(const item in cartItems[items]){
                try{
                    if(cartItems[items][item] > 0){
                        totalAmount += itemInfo.price * cartItems[items][item];
                    }
                } catch{
                    toast.error("An error occurred");
                } 
            }
        }
        return totalAmount;
    }
    useEffect(()=>{
        console.log(cartItems);
    },[cartItems])
    
    const value = {
        products: products,
        currency: currency,
        deliveryFee: deliveryFee,
        search: search,
        setSearch: setSearch,
        showSearch: showSearch,
        setShowSearch: setShowSearch,
        cartItems: cartItems,
        addToCart: addToCart,
        getCartCount: getCartCount,
        updateQuantity: updateQuantity,
        getCartAmount: getCartAmount,
        navigate: navigate,
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

ShopContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ShopContextProvider;