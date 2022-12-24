const express = require('express');
const { addOrder, getUserOrders, getProvidersOrders } = require('../controllers/order');
const { isProvider } = require('../middleware/isProvider');
const { isUser } = require('../middleware/isUser')

const router = express.Router()

router.post('/',isUser,addOrder);

router.get('/user',isUser, getUserOrders);

router.get('/provider', isProvider, getProvidersOrders);

module.exports = router