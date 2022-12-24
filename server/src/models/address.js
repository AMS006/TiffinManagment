const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    min: 3,
    max: 50,
  },
  mobileNumber: {
    type: Number,
    required: true,
    trim: true,
  },
  pinCode: {
    type: Number,
    required: true,
    trim: true,
  },
  locality: {
    type: String,
    required: true,
  },
  cityDistrictTown: {
    type: String,
    required: true,
    trim: true,
  },
  state: {
    type: String,
    required: true,
    required: true,
  },
  landmark: {
    type: String,
    min: 10,
    max: 100,
  },
  alternatePhone: {
    type: String,
  },
  addressType: {
    type: String,
    required: true,
    enum: ["home", "work"],
    required: true,
  },
});
const userAddressSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    address:{
      name: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 50,
      },
      mobileNumber: {
        type: Number,
        required: true,
        trim: true,
      },
      pinCode: {
        type: Number,
        required: true,
        trim: true,
      },
      locality: {
        type: String,
        required: true,
      },
      cityDistrictTown: {
        type: String,
        required: true,
        trim: true,
      },
      state: {
        type: String,
        required: true,
        required: true,
      },
      landmark: {
        type: String,
        min: 10,
        max: 100,
      },
      alternatePhone: {
        type: String,
      },
      addressType: {
        type: String,
        required: true,
        enum: ["home", "work"],
        required: true,
      },
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("userAddress", userAddressSchema);
