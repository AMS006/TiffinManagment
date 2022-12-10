const orderModel = require('../models/order')

exports.addOrder = async(req,res) =>{
    try {
        const user = req.user._id;
        if(!user)
            return res.status(400).json({message:"Plzz Login to make orders"});
        const data = req.body;
        
        const order = await orderModel.create({data,user});

        return res.status(200).json({order})
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}
exports.getUserOrders = async(req,res) =>{
    try {
        const user = req.user._id;
        if(!user)
            return res.status(400).json({message:"Plzz Login to fetch orders"});
        
        const orders = orderModel.find({user})

        if(!orders)
            return res.status(404).json({message:"No orders Found"});
        
        return res.status(200).json({orders});
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}
exports.getProvidersOrders = async(req,res) =>{
    try {
        const provider = req.provider._id;
        if(!provider)
            return res.status(400).json({message:"Plzz Login to fetch orders"});
        
        const orders = orderModel.find({provider})

        if(!orders)
            return res.status(404).json({message:"No orders Found"});
        
        return res.status(200).json({orders});
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}