const providerModel = require('../models/provider');
const userModel = require('../models/user');

exports.initialData = async(req,res) =>{
    try {
        if(!req.user)
            return res.status(400).json({message:"Invalid request"})
        const user = await userModel.findOne(req.user._id);
        const provider = await providerModel.find({isAuthorized:true});

        return res.status(200).json({user,provider});
    } catch (error) {
        return res.status(500).json({success:false})
    }
}