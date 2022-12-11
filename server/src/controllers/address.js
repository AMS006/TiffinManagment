const addressModel = require('../models/address')

exports.addAddress = async(req,res) =>{
    try {
        const data = req.body;
        const user = req.user._id
        const obj = {user, ...data}
        if(!data)
            return res.status(404).json({message:"Invalid Request"})

        const address = await addressModel.create(obj)
        
        return res.status(201).json({address});
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}
exports.getUserAddress = async(req,res) =>{
    try {
        const user = req.user._id;
        if(!user)
            return res.status(404).json({message:"Login to get Address"});
        
        const address = await addressModel.find({user});
        if(!address)
            return res.status(404).json({message:"No address Found"});
        
        return res.status(200).json({address});
    } catch (error) {
        
    }
}
exports.deleteAddress = async(req,res)=>{
    try {
        const {_id} = req.body;
        if(!_id)
            return res.status(404).json({message:"Invalid Request"});
        
        await addressModel.findByIdAndDelete(_id);

        return res.status(200).json({message:"Address Deleted Successfully"});
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}

