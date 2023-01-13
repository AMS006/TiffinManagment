const mongoose = require("mongoose")

const foodSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    isVeg:{
        type:Boolean,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    provider:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'providers'
    },
    image:{
        type:String
    },
    description:{
        type:String
    },
    enteredQuantity:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    }
})

module.exports = mongoose.model('foods',foodSchema)
