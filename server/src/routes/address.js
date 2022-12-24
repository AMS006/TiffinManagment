const express = require('express');
const { addAddress, getUserAddress } = require('../controllers/address');
const { isUser } = require('../middleware/isUser');
const router = express.Router()

router.post('/',isUser,addAddress);

router.get('/',isUser,getUserAddress);

module.exports = router