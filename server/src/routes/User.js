const express = require('express');
const { registerUser, loginUser,getProfile } = require('../controllers/User');
const { isAuthenticatedUser } = require('../middleware/isAuthenticated');
const router = express.Router()

router.post('/signUp',registerUser)

router.post('/login', loginUser);


router.get('/profile',isAuthenticatedUser, getProfile)
module.exports = router