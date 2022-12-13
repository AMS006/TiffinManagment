const foodModel = require('../models/food');
const uploads = require('../utils/cloudinaryUpload');
exports.addFood = async(req,res) =>{
    try {
        const {name,menu,isVeg,price} = req.body;
        let provider = req.provider._id;
        const arrayData = Object.values(menu);
        if(req.files.length > 0){
            for(let i = 0;i<req.files.length;i++){
                const location = req.files[i].path;
                const result = await uploads(location);
                arrayData[i].img = result.url
            }
        }
        const updatedData = {
            name,
            isVeg,
            price,
            provider,
            menu:arrayData
        }
        const food = await foodModel.create(updatedData);

        return res.status(200).json({food});
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}

exports.getAllFoodsOfProvider = async(req,res) =>{
    try {
        const {_id} = req.body;
        const foods = await foodModel.find({provider:_id});

        if(!foods)
            return res.status(404).json({message:"NO Food Found"})
        return res.status(200).json({foods});
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}

exports.getFoodById = async(req,res) =>{
    try {
        const {_id} = req.params;
        if(!_id)
            return res.status(400).json({message:"Unable to get Food"});
        
        const food = await foodModel.findById(_id);

        if(!food)
            return res.status(404).json({message:"No food Found"});

        return res.status(200).json({food})
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}