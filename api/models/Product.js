const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  category: {
    _id: {
      type: String,
      require: true
    },
    name: {
      type: String,
      require: true
    }
  },
  attributes: [
    {
      price: {
        type: Number,
        required: true
      },
      imageUrl: {
        type: String
      },
      sizes: [
        {
          type: String,
          require: true
        }
      ],
      color: {
        type: String,
        required: true
      }
    }
  ]
});

module.exports = productSchema;
