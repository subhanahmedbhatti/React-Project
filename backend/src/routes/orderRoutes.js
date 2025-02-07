// filepath: /path/to/backend/src/routes/orderRoutes.js
const express = require('express');
const OrderController = require('../controllers/OrderController');
const auth = require('../middleware/auth'); // Import auth middleware

const router = express.Router();
const orderController = new OrderController();

router.post('/orders', auth, orderController.placeOrder.bind(orderController));

module.exports = router;