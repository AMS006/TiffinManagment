const orderModel = require('../models/order')

exports.addOrder = async(req,res) =>{
    try {
        const user = req.user._id;
        if(!user)
            return res.status(400).json({message:"Plzz Login to make orders"});
        const data = req.body;
        const obj = {user,...data}
        const order = await orderModel.create(obj);

        return res.status(200).json({order});
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}
exports.getUserOrders = async(req,res) =>{
    try {
        const user = req.user._id;
        if(!user)
            return res.status(400).json({message:"Plzz Login to fetch orders"});
        
        const orders = await orderModel.find({user}).populate("address")
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
        
        const orders = await orderModel.find({provider}).populate("user food address")

        if(!orders)
            return res.status(404).json({message:"No orders Found"});
        
        return res.status(200).json({orders});
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}
exports.deleteOrder = async(req,res)=>{
    try {
        const {_id} = req.body;
        if(!_id)
            return res.status(404).json({message:"Invalid Request"});
        
        await orderModel.findByIdAndDelete(_id);

        return res.status(200).json({message:"Order Deleted Successfully"});
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}