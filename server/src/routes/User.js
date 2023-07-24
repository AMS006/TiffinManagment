const express = require('express');
const { registerUser, loginUser,getUserDetails, logoutUser } = require('../controllers/User');
const { isUser } = require('../middleware/isUser');
const router = express.Router();
const multer = require('multer');

const storage = multer.memoryStorage()
const upload = multer({storage});

router.post('/signUp',upload.single("profilePic"),registerUser)

router.post('/login', loginUser);

router.get('/me',isUser, getUserDetails);

module.exports = router