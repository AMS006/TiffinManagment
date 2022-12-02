const userModel = require('../models/user')
const jwt = require('jsonwebtoken')
exports.isAuthenticatedUser = async (req,res,next) =>{    
    try{
        const {token} = req.cookies;
        if(!token) return res.status(500).json({success:false, message:"Plzz login to access this resource"});
    
        const decodeData = jwt.verify(token, process.env.SECRET_KEY);
        req.user = await userModel.findById(decodeData.id);
        next();
        }catch(error){
            return res.status(500).json({success:false,message:error.message});
    }
}