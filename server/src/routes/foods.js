const express = require('express');
const { addFood, getAllFoods, getFoodById } = require('../controllers/foods');
const { isProvider } = require('../middleware/isProvider');
const router = express.Router()

router.post('/', isProvider, addFood)

router.get('/',getAllFoods)

router.get('/:_id', getFoodById);

module.exports = router