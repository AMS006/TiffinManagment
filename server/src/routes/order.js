const express = require('express');
const { addOrder, getUserOrders, getProvidersOrders, updateOrderStatus, deleteOrder } = require('../controllers/order');
const { isProvider } = require('../middleware/isProvider');
const { isUser } = require('../middleware/isUser')

const router = express.Router()

router.post('/',isUser,addOrder);

router.get('/user',isUser, getUserOrders);

router.get('/provider', isProvider, getProvidersOrders);

router.put('/updateStatus',updateOrderStatus);

router.delete('/:_id',deleteOrder);

module.exports = router;