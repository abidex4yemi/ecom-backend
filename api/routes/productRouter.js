const express = require('express');
const controller = require('../controllers/products');
const validateProductData = require('../middleware/validateSingleProduct');

const productRouter = express.Router();

productRouter
  .route('/products')
  .post(validateProductData, controller.addProduct)
  .get(controller.getProducts);

productRouter
  .route('/products/:id')
  .get(controller.getSingleProduct)
  .delete(controller.deleteProduct);

module.exports = productRouter;
