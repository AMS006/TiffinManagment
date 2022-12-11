const express = require('express');
const { addFood, getFoodById, getAllFoodsOfProvider } = require('../controllers/foods');
const { isProvider } = require('../middleware/isProvider');
const router = express.Router()

router.post('/', isProvider, addFood)

router.get('/',getAllFoodsOfProvider)

router.get('/:_id', getFoodById);

module.exports = router