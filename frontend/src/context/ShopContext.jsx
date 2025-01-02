import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
// import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    
    const currency = '$';
    const deliveryFee = 10;
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const [products, setProducts] = useState([]);
    const [token ,setToken] = useState("");
    const navigate = useNavigate();

    const addToCart = async(itemId, size) => {
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

        if(token){
            try{
                await axios.post(backendUrl+ "/api/cart/add", {itemId, size}, {headers: {token}})
            } catch(error){
                console.log(error);
                toast.error(error.message);
            }
        }
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
                    console.log(error)
                    toast.error(error.message);
                }
            }
        }
        console.log(totalCount);
        return totalCount;
    }
 
    const updateQuantity = async(itemId, size,quantity) => {
        let cartData = JSON.parse(JSON.stringify(cartItems));

        cartData[itemId][size] = quantity;
        setCartItems(cartData);
        // console.log(cartData);
        if(token){
            try{
                await axios.post(backendUrl+ "/api/cart/update",{itemId, size, quantity}, {headers: {token}} )
            } catch(error){
                console.log(error);
                toast.error(error.message);
            }
        }
    }

    const getCartAmount = () => {
        let totalAmount = 0;
        for(const items in cartItems){
            let itemInfo = products.find((product)=> product._id === items);
            if (itemInfo) {
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
        }
        return totalAmount;
    }


    const getProductData = async() => {
        try{
            const response = await axios.get(backendUrl + "/api/product/list")
            if(response.data.success){
                setProducts(response.data.products)
            }else{
                toast.error(response.data.message)
            }
            
        } catch(error){
            console.log(error);
            toast.error(error.message);
        }
    }

    const getUserCart = async(token) => {
        try{
            const response = await axios.post(backendUrl+"/api/cart/get",{},{headers: {token}});
            if(response.data.success){
                setCartItems(response.data.cartData)
            }
        } catch(error){
            console.log(error);
            toast.error(error.message);
        }
    }

    useEffect(()=>{
        getProductData();
    },[])

    // useEffect(()=>{
    //     console.log(cartItems);
    // },[cartItems])

    useEffect(()=>{
        if(!token && localStorage.getItem("token")){
            setToken(localStorage.getItem("token"));
            getUserCart(localStorage.getItem("token"));
        }
    },[])     
    
    const value = {
        products: products,
        currency: currency,
        deliveryFee: deliveryFee,
        search: search,
        setSearch: setSearch,
        showSearch: showSearch,
        setShowSearch: setShowSearch,
        cartItems: cartItems,
        setCartItems: setCartItems,
        addToCart: addToCart,
        getCartCount: getCartCount,
        updateQuantity: updateQuantity,
        getCartAmount: getCartAmount,
        navigate: navigate,
        backendUrl: backendUrl,
        token: token,
        setToken: setToken
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