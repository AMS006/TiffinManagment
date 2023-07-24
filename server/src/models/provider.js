const mongoose = require("mongoose")
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
const providerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        requied:true,
        trim:true,
        min:8
    },
    address:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:Number,
        required:true,
        min:10,
    },
    rating:{
        type:String,
        default: "0"
    },
    isAuthorized:{
        type:Boolean,
        default:true
    },
    providerLogo:{
        type:String
    }

})
providerSchema.pre("save", async function(next){
    const provider = this
    if(!provider.isModified("password")){
        next()
    }
    provider.password = await bcrypt.hash(provider.password,10)
})
providerSchema.methods.generateJwtToken = function(){
    return jwt.sign({id:this._id},process.env.SECRET_KEY,{expiresIn:'5d'});
}
module.exports = mongoose.model('providers',providerSchema)
