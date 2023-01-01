const reviewModal = require('../models/review');

exports.addReview = async(req,res) =>{
    try {
        const user = req.user._id;
        const provider = req.body.provider
        const rating = req.body.rating
        const message = req.body.message
        const data = {user,provider,rating,message}
        if(!user)
            return res.status(404).json({message:"Login to add review"})
        
        const review = await reviewModal.create(data)
        return res.status(201).json({review});

    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}

exports.getReview = async(req,res) =>{
    try {
       const {_id} = req.params 

       const review = await reviewModal.find({provider:_id}).populate("review.user");

       if(review.length == 0)
            return res.status(404).json({message:"No Review Found"});
        
        return res.status(200).json({review});
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}
