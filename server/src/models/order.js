const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    },
    provider:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'providers'
    },
    food:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"foods",
        required:true
    },
    date:{
        type:String,
        required:true
    },
    time:{
        type:String,
    },
    address:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    totalAmount:{
        type:Number,
        required:true,
    },
    paymentMode:{
        type:String,
        enum:["COD", "Online"],
        default:"Online"
    },
    paymentStatus:{
        type:String,
        enum:["Pending","Success","Failed"]
    },
    orderStatus:{
        type:String,
        enum:["Ordered","Confirmed","Cancelled"],
        default:"Ordered"
    }
    
},
{timestamps:true}
)

module.exports = mongoose.model('orders',orderSchema)
