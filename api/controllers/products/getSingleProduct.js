const db = require('../../models');
const { handleSuccessResponse, OK } = require('../../util/success');
const { createError, GENERIC_ERROR, NOT_FOUND } = require('../../util/error');

const Product = db.models.Product;

/**
 * @description Returns a single product
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const getSingleProduct = async (req, res, next) => {
  try {
    const productId = req.params.id;

    const product = await Product.findOne({ _id: productId });

    if (!product) {
      return next(
        createError({
          status: NOT_FOUND,
          message: 'Product with the specified ID not found'
        })
      );
    }

    return res.status(OK).json(
      handleSuccessResponse({
        data: product
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

module.exports = getSingleProduct;
