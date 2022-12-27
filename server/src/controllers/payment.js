const Razorpay = require('razorpay')

exports.orders = async(req,res) =>{
    let instance = new Razorpay({key_id:process.env.KEY_ID, key_secret:process.env.KEY_SECRET})
    let options = {
        amount : Number(req.body.amount) * 100,
        currency: "INR"
    }
    const order = await instance.orders.create(options)
    if(!order)
        return res.status(400).json({message:"An Error Occured"})
    
    return res.status(200).json({order})
}
exports.createNewOrder = async(req,res) =>{
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
