const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');


router.get('/products', productController.getAllProducts);


router.get('/products/:productId', productController.getProductById);


router.post('/products', productController.createProduct);


router.put('/products/:productId', productController.updateProductById);


router.delete('/products/:productId', productController.deleteProductById);

module.exports = router;
