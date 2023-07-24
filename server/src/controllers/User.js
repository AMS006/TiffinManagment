const bcrypt = require('bcrypt')
const userModel = require('../models/user');
const providerModel = require('../models/provider');
const generateToken = require('../utils/generateToken');
const uploads = require('../utils/cloudinaryUpload')
exports.registerUser = async(req,res) =>{
    try {
        const {name,email,password,phoneNumber} = req.body;
        const userExists = await userModel.findOne({email})
        // Checking If User Already Exist With Entered Email
        if(userExists)
            return res.status(400).json({message:"User Already Exists"});
        
        // Checking if email already exists as provider Email Id
        const isProvider = await providerModel.findOne({email});
        if(isProvider)
            return res.status(400).json({message:"Try Different Email Id"})

        const user = await userModel.create({name,email,password,phoneNumber});
        generateToken(res,201,user,true)
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
            return res.status(400).json({message:"Invalid Email or Password"})
        generateToken(res,200,user,true);
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}
exports.getUserDetails = async(req,res) =>{
    try {
      if(!req.user)
        return res.status(400).json({message:"Invalid request"})
      const user = await userModel.findOne(req.user._id);
  
      if(!user)
        return res.status(404).json({message:"No user found"});
      return res.status(200).json({user});
    } catch (error) {
      return res.status(500).json({success:false})
    }
}