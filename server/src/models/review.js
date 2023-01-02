const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  provider: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "providers",
  },
  rating: {
    type: Number,
    required: true,
    max: 5,
  },
  message: {
    type: String,
    required: true,
  },
},{timestamps:true});

module.exports = mongoose.model("reviews", reviewSchema);
