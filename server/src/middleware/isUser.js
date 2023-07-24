const userModel = require('../models/user')
const jwt = require('jsonwebtoken')
exports.isUser = async (req,res,next) =>{    
    try{
        if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        const token = req.headers.authorization.split(" ")[1]
        const decodeData = jwt.verify(token, process.env.SECRET_KEY);
        const user  = await userModel.findById(decodeData.id);
        if(user)
            req.user = user
        else
            res.status(400).json({message:"Bad Request"});
        next();
        }
    }catch(error){
        return res.status(500).json({success:false,message:error.message});
    }
}