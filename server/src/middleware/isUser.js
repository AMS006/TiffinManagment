const userModel = require('../models/user')
const jwt = require('jsonwebtoken')
exports.isUser = async (req,res,next) =>{    
    try{
        const {userToken} = req.cookies;
        if(!userToken) return res.status(500).json({success:false});
    
        const decodeData = jwt.verify(userToken, process.env.SECRET_KEY);
        req.user = await userModel.findById(decodeData.id);
        next();
        }catch(error){
            return res.status(500).json({success:false,message:error.message});
    }
}