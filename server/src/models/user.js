const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim: true,
        min:3,
        max:30
    },
    address:{
        type:String,
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
    },
    password:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:Number,
        min:10
    },
    profilePic:{type:String}

})
userSchema.pre("save", async function(next){
    const user = this
    if(!user.isModified("password")){
        next()
    }
    user.password = await bcrypt.hash(user.password,10)
})
userSchema.methods.generateJwtToken = function(){
    return jwt.sign({id:this._id},process.env.SECRET_KEY,{expiresIn:'5d'});
}
module.exports = mongoose.model('users',userSchema)