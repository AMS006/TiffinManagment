const express = require('express');
const { registerUser, loginUser,getProfile, logoutUser } = require('../controllers/User');
const { isUser } = require('../middleware/isUser');
const router = express.Router()

router.post('/signUp',registerUser)

router.post('/login', loginUser);

router.get('/logout',isUser, logoutUser);

router.get('/profile',isUser, getProfile);

module.exports = router