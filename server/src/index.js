const express = require('express')
const env = require('dotenv')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const cors = require('cors');
const user = require('./routes/User');
const provider = require('./routes/provider');
const food = require ('./routes/foods')
const app = express()
env.config();
const corsOptions = {
    origin:true,
    credentials:true
}
app.use(cors({
    origin: 'http://localhost:3000', 
    methods: ['GET', 'PUT', 'POST','DELETE'], 
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

app.use('/api/v1/user', user);
app.use('/api/v1/provider',provider)
app.use('/api/v1/food',food)

app.listen(process.env.PORT,()=>{
    console.log("Server is Running on port " + process.env.PORT)
})