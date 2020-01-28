const Joi = require('@hapi/joi');
const joiValidate = require('../util/validate');

/**
 * Product validation schema
 */
const productSchema = Joi.object().keys({
  name: Joi.string()
    .trim()
    .required(),
  description: Joi.string()
    .trim()
    .required(),
  categoryId: Joi.string().required(),
  attributes: Joi.array()
    .items(
      Joi.object().keys({
        price: Joi.number()
          .min(0)
          .required(),
        imageUrl: Joi.string().required(),
        sizes: Joi.array()
          .items(Joi.string().required())
          .required(),
        color: Joi.string().required()
      })
    )
    .required()
});

/**
 * Validate product data against defined schema
 */
const validateProductData = (req, res, next) =>
  joiValidate(req, res, next, productSchema);

module.exports = validateProductData;
