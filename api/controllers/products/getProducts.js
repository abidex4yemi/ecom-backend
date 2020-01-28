const db = require('../../models');
const { handleSuccessResponse, OK } = require('../../util/success');
const { createError, GENERIC_ERROR } = require('../../util/error');

const Product = db.models.Product;

/**
 * @description Returns 8 product per-page
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const getProducts = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page, 10) || 1;
    const resultPerPage = 8;

    // Get product on demand | limiting the product to 8 per page
    const products = await Product.find()
      .skip(resultPerPage * page - resultPerPage)
      .limit(resultPerPage);

    // return total number of products in store
    const totalNumberOfProduct = await Product.countDocuments();

    const totalPages = Math.ceil(totalNumberOfProduct / resultPerPage);

    return res.status(OK).json(
      handleSuccessResponse({
        data: {
          products: products,
          currentPage: page,
          totalPages,
          numOfResults: products.length
        }
      })
    );
  } catch (error) {
    return next(
      createError({
        status: GENERIC_ERROR,
        message: 'Try again something went wrong'
      })
    );
  }
};

module.exports = getProducts;
