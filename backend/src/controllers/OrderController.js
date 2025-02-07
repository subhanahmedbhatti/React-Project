// filepath: /path/to/backend/src/controllers/OrderController.js
const Order = require('../models/Order');

class OrderController {
  async placeOrder(req, res) {
    const { productId, quantity } = req.body;
    const userId = req.user;

    const order = new Order({ userId, productId, quantity });
    try {
      const newOrder = await order.save();
      res.status(201).json(newOrder);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

module.exports = OrderController;