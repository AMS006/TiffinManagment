const mongoose = require("mongoose")
const provider = require("./provider")

const reviewSchema = new mongoose.Schema({
   provider:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"providers"
   },
   review:[
        {
            user:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"users"
            },
            rating:{
                type:Number,
                required:true,
                max:5
            },
            message:{
                type:String,
                required:true
            }
        }
    ]
})

module.exports = mongoose.model('reviews',reviewSchema)
