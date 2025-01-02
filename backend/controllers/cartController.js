import userModel from "../models/userModel.js"


// ADD PRODUCTS TO USER CART
const addToCart = async(req, res) => {
    try{
        const { userId, itemId, size } = req.body
        const userData = await userModel.findById(userId);
        let cartData = await userData.cartData;
        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size] += 1;
            }
            else{
                cartData[itemId][size] = 1;
            }
        } else{
            cartData[itemId] = {}
            cartData[itemId][size] = 1;
        }

        await userModel.findByIdAndUpdate(userId, {cartData});
        res.json({success: true, message: "ADDED TO CART"});

    } catch(error){
        console.log(error);
        res.json({success: false, message: error.message});
    }
}

// UPDATE USER CART
const updateCart = async(req,res) => {
    try{
        const {userId, itemId, size, quantity } = req.body
        const userData = await userModel.findById(userId);
        let cartData = await userData.cartData;

        cartData[itemId][size] = quantity;
        await userModel.findByIdAndUpdate(userId, {cartData});
        res.json({success: true, message: "CART UPDATED"});
    }catch(error){
        console.log(error);
        res.json({success: false, message: error.message});
    }
}

// GET USER CART DATA
const getUserCart = async(req, res) => {
    try{
        const {userId} = req.body;
        const userData = await userModel.findById(userId);
        let cartData = await userData.cartData;

        res.json({success: true, cartData});
    } catch(error){
        console.log(error);
        res.json({success: false, message: error.message});
    }
}

export {addToCart, updateCart, getUserCart}