const express = require('express')
const env = require('dotenv')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const cors = require('cors');
const user = require('./routes/User');
const provider = require('./routes/provider');
const food = require ('./routes/foods')
const order = require('./routes/order')
const address = require('./routes/address');
const review  = require('./routes/review')
const moment = require('moment')
const CronJob = require('cron').CronJob;
const initialData = require('./routes/initialData')
const foodModel = require('./models/food')

const app = express()
env.config();

app.use(cors({
    origin: 'https://tiffin-managment-client.vercel.app', 
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
const updateFood = async() =>{
    const foods = await foodModel.find()
    for(let i = 0;i<foods.length;i++){
        await foodModel.findByIdAndUpdate(foods[i]._id,{$set:{quantity:foods[i].enteredQuantity}});
    }
}
const timeInSec = moment().endOf('day').valueOf()
new CronJob('0 0 * * *', async () => {
    await updateFood()
  }, null, true, 'Asia/Kolkata');
app.use('/api/v1/user', user);
app.use('/api/v1/provider',provider)
app.use('/api/v1/food',food)
app.use('/api/v1/order',order)
app.use('/api/v1/address',address);
app.use('/api/v1/review',review);
app.use('/api/v1/initialData',initialData)
app.listen(process.env.PORT,()=>{
    console.log("Server is Running on port " + process.env.PORT)
})
