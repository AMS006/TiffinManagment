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
    phoneNo:{
        type:Number,
        min:10,
        max:10
    },
    role:{
        type:String,
        enum:["user","dealer"],
        default:"user"
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