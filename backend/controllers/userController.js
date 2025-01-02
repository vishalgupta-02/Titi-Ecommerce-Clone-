import userModel from "../models/userModel.js";
import validator from 'validator'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET)
}


// Route for USER LOGIN
const loginUser = async(req,res) => {
    try{
        const { email, password } = req.body;

        const user = await userModel.findOne({email});
        if(!user){
            return res.json({success: false, message: "USER DOES NOT EXISTS"})
        }

        const isMatch = await bcrypt.compare( password, user.password);

        if(isMatch){
            const token = createToken(user._id);
            res.json({success: true, token});
        }
        else{
            res.json({success: false, message: "INVALID CREDENTIALS"});
        }
    } catch(error){
        console.log(error);
        return res.json({success: false, message: error.message});
    }
}

// Route for USER REGISTRATION
const registerUser = async(req,res) => {
    try{
        const { name, email, password } = req.body;

        // CHECKING USER ALREADY EXISTS OR NOT
        const exist = await userModel.findOne({email})
        if(exist){
            return res.json({success: false, message: "USER ALREADY EXISTS"})
        }

        //VALIDATING EMAIL FORMAT OR STRONG PASSWORD
        if(!validator.isEmail(email)){
            return res.json({success: false, message: "PLEASE ENTER A VALID EMAIL"})
        }
        if(password.length < 8){
            return res.json({success: false, message: "PLEASE ENTER STRONG PASSWORD"})
        }

        // HASHING USER PASSWORD
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        
        const newUser = new userModel({
            name: name,
            email: email,
            password: hashedPassword, 
        })

        const user = await newUser.save();

        const token = createToken(user._id);

        res.json({success: true, token})

    } catch(error){
        console.log(error);
        res.json({success: false, message: error.message})
    }
}

// Route for ADMIN LOGIN
const adminLogin = async(req, res) => {
    try{
        const { email, password} = req.body
        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
            const token = jwt.sign(email+password, process.env.JWT_SECRET)
            res.json({success: true, token})
        }else{
            res.json({success: false, message: "INVALID CREDENTIALS"})
        }
    } catch(error){
        console.log(error);
        res.json({success: false, message: error.message})
    }
} 

export { loginUser, registerUser, adminLogin };