const express = require('express');
const { registerUser, loginUser,getUserDetails, logoutUser } = require('../controllers/User');
const { isUser } = require('../middleware/isUser');
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
    destination: "./src/uploads",
    filename: function (req, file, cb) {
      cb(null, Date.now() + "-" + file.originalname);
    },
  });
const upload = multer({storage});

router.post('/signUp',upload.single("profilePic"),registerUser)

router.post('/login', loginUser);

router.get('/logout',isUser, logoutUser);

router.get('/me',isUser, getUserDetails);

module.exports = router