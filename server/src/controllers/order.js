const orderModel = require('../models/order')
const foodModel =require('../models/food')
const {sendEmail} = require('../utils/sendEmail')
exports.addOrder = async(req,res) =>{
    try {
        const user = req.user._id;
        if(!user)
            return res.status(400).json({message:"Plzz Login to make orders"});
        const data = req.body;
        const obj = {user,...data}
        const order = await orderModel.create(obj);
        const food = await foodModel.findById(data.food)
        const quantity = food.quantity - data.quantity
        await foodModel.findByIdAndUpdate(food._id,{$set:{quantity}})
        const subject = "Ordered: Your Order for Food is Successfull"
        const message = `Hi ${req.user.name} \n Your Order for ${food.name} is Successfull \n Thank You`
        const email = req.user.email

        await sendEmail({email,subject,message});
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
        
        const orders = await orderModel.find({user}).populate("food user provider")
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
        
        const orders = await orderModel.find({provider}).populate("user food").sort({createdAt:-1})

        if(!orders)
            return res.status(404).json({message:"No orders Found"});
        
        return res.status(200).json({orders});
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}
exports.deleteOrder = async(req,res)=>{
    try {
        const {_id} = req.params;
        if(!_id)
            return res.status(404).json({message:"Invalid Request"});
        
        await orderModel.findByIdAndDelete(_id);

        return res.status(200).json({message:"Order Deleted Successfully"});
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}
exports.updateOrderStatus = async(req,res) =>{
    try {
        const status = req.body.status
        const id = req.body._id
        let subject,message,email;
        
        if(status === "Delivered"){     
            subject = "Delivered: Your Order for Food is Delivered Successfully"
            message = `Hi ${req.body.user.name} \n Your Order for ${req.body.food.name} has been delivered \n Thank You`
            email = req.body.user.email
        }else{
            subject = "Cancelled: Order has been Cancelled"
            message = `Hi ${req.body.provider.name} Your Order for ${req.body.food.name} has been Cancelled by ${req.body.user.name}`
            email = req.body.provider.email
            const quantity = req.body.food.quantity + req.body.quantity
            await foodModel.findByIdAndUpdate(req.body.food._id,{$set:{quantity}})
        }
        // await sendEmail({email,subject,message});

        if(!id)
            return res.status(400).json({message:"No Order Found"})
        
        const updatedOrder = await orderModel.findByIdAndUpdate(id,{orderStatus:status},{new:true}).populate("user food")

        return res.status(200).json({updatedOrder})
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}