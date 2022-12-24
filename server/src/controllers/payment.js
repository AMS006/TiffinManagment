const Razorpay = require('razorpay')

exports.orders = async(req,res) =>{
    let instance = new Razorpay({key_id:process.env.KEY_ID, key_secret:process.env.KEY_SECRET})
    let options = {
        amount : req.body.amount * 100,
        currency: "INR"
    }
    const order = await instance.orders.create(options)
    if(!order)
        return res.status(400).json({message:"An Error Occured"})
    
    return res.status(200).json({order})
    
}
