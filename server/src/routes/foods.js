const express = require('express');
const { addFood, getFoodById, getAllFoodsOfProvider, deleteFood } = require('../controllers/foods');
const { isProvider } = require('../middleware/isProvider');
const router = express.Router()
const multer = require('multer')

const storage = multer.memoryStorage()
const upload = multer({storage});

router.post('/', isProvider,upload.single('foodImage'), addFood)

router.delete('/:_id', isProvider, deleteFood)

router.get('/provider/:_id',getAllFoodsOfProvider)

router.get('/:_id', getFoodById);

module.exports = router