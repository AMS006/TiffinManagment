const express = require('express');
const { registerProvider, loginProvider, logoutProvider, getAllProviders, getProviderById } = require('../controllers/provider');
const { isProvider } = require('../middleware/isProvider');
const router = express.Router()

router.post('/signUp',registerProvider)

router.post('/login', loginProvider);

router.post('/logout', isProvider, logoutProvider);

router.get('/', getAllProviders);

router.get('/:_id', getProviderById);


module.exports = router