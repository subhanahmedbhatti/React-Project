const express = require('express');
const ProductController = require('../controllers/ProductController');
const auth = require('../middleware/auth'); // Ensure this path is correct

const router = express.Router();

router.get('/', ProductController.getAllProducts);
router.get('/:id', ProductController.getProductById); // Add this route
router.post('/', auth, ProductController.addProduct);
router.put('/:id', auth, ProductController.updateProduct);
router.delete('/:id', auth, ProductController.deleteProduct);

module.exports = router;