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
    selectedPlan:{
        type:String,
        enum:["Monthly","Weekly","OneDay"],
        required:true
    },
    totalAmount:{
        type:Number,
        required:true,
    },
    paymentMode:{
        type:String,
        enum:["COD", "Online"]
    },
    paymentStatus:{
        type:String,
        enum:["Pending","Success","Failed"]
    },
    orderStatus:{
        type:String,
        enum:["Ordered","Success","Cancelled"],
        default:"Ordered"
    }
},
{timestamps:true}
)

module.exports = mongoose.model('orders',orderSchema)
