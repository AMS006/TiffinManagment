const express = require('express')
const env = require('dotenv')
const mongoose = require('mongoose')
const user = require('./routes/User');
const cookieParser = require('cookie-parser')
const cors = require('cors')
const app = express()
const bcrypt = require('bcrypt')
const userModel = require('./models/user');
env.config();
const corsOptions = {
    origin:true,
    credentials:true
}
app.use(cors({
    origin: 'http://localhost:3000', 
      methods: ['GET', 'PUT', 'POST'], 
      allowedHeaders: ['Content-Type', 'Authorization', 'x-csrf-token'], 
      credentials: true, 
      maxAge: 5000, 
      exposedHeaders: ['*', 'Authorization' ] 
}))
app.use(express.json())
app.use(cookieParser())

mongoose.connect(process.env.MONGODB_CONNECTION,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("DataBase Connected")
})

app.use('/api/v1/user', user)
app.get('/token',function (req,res){
    // const {email, password} = req.body;
    //     const user = await userModel.findOne({email});
    //     if(!user)
    //         return res.status(404).json({message:"Invalid Email or Password"});
    //     const passwordMatch = await bcrypt.compare(password,user.password)
    //     if(!passwordMatch)
    //         return res.status(400).jons({message:"Invalid Email or Password"})
        return res.cookie('token',"jkjklljlkjjlk",{
            expires: new Date(Date.now() + (3600 * 1000 * 24 * 180 * 1)), //second min hour days year
            httpOnly: true, 
        }).json({user:"Anas"})
})
app.listen(process.env.PORT,()=>{
    console.log("Server is Running on port " + process.env.PORT)
})