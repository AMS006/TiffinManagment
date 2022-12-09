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
    provider:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'providers'
    },
    menu:[{
        name:{
            type:String,
            required:true,
            trim:true
        },
        day:{
            type:String,
            required:true
        },
        img:{
            type:String,
        },
        description:{
            type:String,
            required:true,
            trim:true
        },
        price:{
            type:Number,
            required:true
        },
    }]
})

module.exports = mongoose.model('foods',foodSchema)
