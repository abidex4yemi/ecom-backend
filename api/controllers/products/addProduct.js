const db = require('../../models');
const { handleSuccessResponse, CREATED } = require('../../util/success');
const { createError, GENERIC_ERROR, NOT_FOUND } = require('../../util/error');

const Category = db.models.Category;
const Product = db.models.Product;

/**
 * @description Add new product
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const addProduct = async (req, res, next) => {
  try {
    const newProductDetails = req.body;

    const productCategory = await Category.findById(
      newProductDetails.categoryId
    );

    if (!productCategory) {
      return next(
        createError({
          status: NOT_FOUND,
          message: 'Please provide product category ID'
        })
      );
    }

    delete newProductDetails.categoryId;

    const newProduct = await Product.create({
      ...newProductDetails,
      category: productCategory
    });

    return res.status(CREATED).json(
      handleSuccessResponse({
        data: newProduct,
        message: 'New product created successfully'
      })
    );
  } catch (error) {
    if (error.name && error.name === 'CastError') {
      return next(
        createError({
          status: NOT_FOUND,
          message: 'Please provide a valid product category ID'
        })
      );
    }

    return next(
      createError({
        status: GENERIC_ERROR,
        message: 'Try again something went wrong'
      })
    );
  }
};

module.exports = addProduct;
