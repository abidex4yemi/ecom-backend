const express = require('express');
const controller = require('../controllers/categories');

const categoryRouter = express.Router();

categoryRouter.route('/categories').get(controller.getCategories);

module.exports = categoryRouter;
