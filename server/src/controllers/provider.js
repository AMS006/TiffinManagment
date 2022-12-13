const bcrypt = require('bcrypt')
const providerModel = require('../models/provider');
const userModel = require('../models/user')
const generateToken = require('../utils/generateToken');
const uploads = require('../utils/cloudinaryUpload');
exports.registerProvider = async(req,res) =>{
    try {
        const {name,email,password,phoneNumber,address} = req.body;
        const providerExists = await providerModel.findOne({email})
        let providerLogo = "";
        if(req.file){
            const location = req.file.path;
            const result = await uploads(location);
            providerLogo = result.url;
        }

        // Checking If Proiver Already Exist With Entered Email
        if(providerExists)
            return res.status(400).json({message:"Provider Already Exists"});

        // Checking if email exists as user
        const isUser = await userModel.findOne({email});
        if(isUser)
            return res.status(400).json({message:"Invalid email! Email exists as user"});
        const data = {
            name,
            email,
            password,
            phoneNumber,
            address,
            providerLogo
        }
        // const provider = await providerModel.create();
        // generateToken(res,201,provider,false)
        return res.status(200).json({data});
    }catch (error) {
        return res.status(500).json({message:error})
    }
}
exports.loginProvider = async(req,res) =>{
    try {
        const {email, password} = req.body;
        const provider = await providerModel.findOne({email});
        if(!provider)
            return res.status(404).json({message:"Invalid Email or Password"});
        const passwordMatch = await bcrypt.compare(password,provider.password)
        if(!passwordMatch)
            return res.status(400).jons({message:"Invalid Email or Password"})
        generateToken(res,200,provider,false)
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}
exports.logoutProvider = async(req,res) =>{
    try {
        res.cookie('providerToken',null,{
            expires: new Date(Date.now()),
            httpOnly:true,
        })
        return res.status(200).json({message:"Logout Succeccfully"})
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}
exports.getAllProviders = async(req,res) =>{
    try {
        const provider = await providerModel.find({isAuthorized:true});

        if(!provider)
            return res.status(404).json({message:"No provider found"});

        return res.status(200).json({provider});
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}
exports.getProviderById = async(req,res) =>{
    try {
        const {_id} = req.params;

        const provider = await providerModel.findById(_id);

        if(!provider)
            return res.status(404).json({message:"No Provider Found"});
        
        return res.status(200).json({provider});
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}