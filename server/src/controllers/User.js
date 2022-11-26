const bcrypt = require('bcrypt')
const userModel = require('../models/user');
const generateToken = require('../utils/generateToken');

exports.registerUser = async(req,res) =>{
    try {
        const {name,email,password,phoneNumber,profilePic} = req.body;
        const userExists = await userModel.findOne({email})

        // Checking If User Already Exist With Entered Email
        if(userExists)
            return res.status(400).json({message:"User Already Exists"});
        
        const user = await userModel.create({name,email,password,phoneNumber,profilePic});
        return generateToken(res,201,user)
    } catch (error) {
        return res.status(500).json({message:error})
    }
}
exports.loginUser = async(req,res) =>{
    try {
        const {email, password} = req.body;
        const user = await userModel.findOne({email});
        if(!user)
            return res.status(404).json({message:"Invalid Email or Password"});
        const passwordMatch = await bcrypt.compare(password,user.password)
        if(!passwordMatch)
            return res.status(400).jons({message:"Invalid Email or Password"})
        // return generateToken(res,200,user)
        return res.cookie('token',"jkjklljlkjjlk").json({user})
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}
exports.getProfile = async(req,res) =>{
    try {
        const {name,email,role} = req.user
        return res.status(200).json({user:{name,email,role}})
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}