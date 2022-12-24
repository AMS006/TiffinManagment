const express = require('express');
const { initialData } = require('../controllers/initialData');
const router = express.Router()

router.get('/',initialData)

module.exports = router