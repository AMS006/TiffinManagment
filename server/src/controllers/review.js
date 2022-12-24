const reviewModal = require('../models/review');

exports.addReview = async(req,res) =>{
    try {
        const user = req.user._id;
        const data = {user, ...req.body.review}
        const provider = req.body.provider
        if(!user)
            return res.status(404).json({message:"Login to add review"})
        
        const review = await reviewModal.findOneAndUpdate(
            {provider},
            {
                '$push':{
                    review:data
                }
            },
            {new:true, upsert:true}
        );
        return res.status(201).json({review});

    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}

exports.getReview = async(req,res) =>{
    try {
       const {_id} = req.body 

       const review = await reviewModal.find({provider:_id}).populate("review.user");

       if(review.length == 0)
            return res.status(404).json({message:"No Review Found"});
        
        return res.status(200).json({review});
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}
