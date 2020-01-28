const db = require('../../models');
const { handleSuccessResponse, OK } = require('../../util/success');
const { createError, GENERIC_ERROR } = require('../../util/error');

const Category = db.models.Category;

/**
 * @description Returns all categories
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const getCategories = async (req, res, next) => {
  try {
    const categories = await Category.find();

    return res.status(OK).json(
      handleSuccessResponse({
        data: {
          categories
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

module.exports = getCategories;
