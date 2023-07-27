const foodModel = require('../models/food');
const uploads = require('../utils/cloudinaryUpload');
exports.addFood = async(req,res) =>{
    try {
        const {name,isVeg,price,description,quantity} = req.body;
        let provider = req.provider._id;
        let image = ""
        if(req.file){
            const location = req.file.buffer;
            const result = await uploads(location);
            image = result.url
        }
        const updatedData = {
            name,
            isVeg,
            price,
            provider,
            image,
            enteredQuantity:quantity,
            quantity,
            description
        }
        const food = await foodModel.create(updatedData);

        return res.status(200).json({food});
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}
exports.getAllFoodsOfProvider = async(req,res) =>{
    try {
        const {_id} = req.params;
        const foods = await foodModel.find({provider:_id}).populate("provider");

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
        
        const food = await foodModel.findById(_id).populate("provider");

        if(!food)
            return res.status(404).json({message:"No food Found"});

        return res.status(200).json({food})
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}
exports.deleteFood = async(req,res) =>{
    try {
        const {_id} = req.params;

        if(!_id)
            return res.status(404).json({message:"Invalid Request"})
        
        const food = await foodModel.findByIdAndDelete(_id);

        return res.status(201).json({food});
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}