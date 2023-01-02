const reviewModal = require('../models/review');
const providerModal = require('../models/provider')
exports.addReview = async(req,res) =>{
    try {
        const user = req.user._id;
        const provider = req.body.provider
        const rating = req.body.rating
        const message = req.body.message
        const data = {user,provider,rating,message}

        const providerData = await providerModal.findById(provider)
        let providerRating = Number(providerData.rating)
        providerRating = (providerRating + Number(rating)) / 2.0;
        await providerModal.findByIdAndUpdate(provider,{$set:{rating:providerRating}})
        if(!user)
            return res.status(404).json({message:"Login to add review"})
        
        const review = await reviewModal.create(data)
        return res.status(201).json({review});

    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}
exports.getAllReview = async(req,res) =>{
    try {

       const reviews = await reviewModal.find().populate("user");

       if(reviews.length == 0)
            return res.status(404).json({message:"No Review Found"});
        const filteredReview = reviews.filter((review) => review.rating >= 4)
        return res.status(200).json({reviews:filteredReview});
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}
exports.getReviewOfProvider = async(req,res) =>{
    try {
       const {_id} = req.params 

       const review = await reviewModal.find({provider:_id}).populate("user").sort({createdAt:-1});

       if(review.length == 0)
            return res.status(404).json({message:"No Review Found"});
        
        return res.status(200).json({review});
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}
