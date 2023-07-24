const express = require('express');
const { registerProvider, loginProvider, logoutProvider, getAllProviders, getProviderById, getProviderDetails } = require('../controllers/provider');
const { isProvider } = require('../middleware/isProvider');
const router = express.Router()
const multer = require('multer')

const storage = multer.memoryStorage()
const upload = multer({storage});

router.post('/register',upload.single("providerLogo"),registerProvider);

router.post('/login', loginProvider);

router.get('/', getAllProviders);

router.get('/me',isProvider, getProviderDetails)

router.get('/:_id', getProviderById);


module.exports = router