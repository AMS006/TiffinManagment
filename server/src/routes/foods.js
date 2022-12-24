const express = require('express');
const { addFood, getFoodById, getAllFoodsOfProvider } = require('../controllers/foods');
const { isProvider } = require('../middleware/isProvider');
const router = express.Router()
const multer = require('multer')

const storage = multer.diskStorage({
    destination: "./src/uploads",
    filename: function (req, file, cb) {
      cb(null, Date.now() + "-" + file.originalname);
    },
  });
const upload = multer({storage});

router.post('/', isProvider,upload.array('menuImages',10), addFood)

router.get('/',getAllFoodsOfProvider)

router.get('/:_id', getFoodById);

module.exports = router