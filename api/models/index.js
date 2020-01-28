const mongoose = require('mongoose');
const dotenv = require('dotenv');
const categorySchema = require('./Category');
const productSchema = require('./Product');

const {
  mongoURI
} = require('../config/keys');

dotenv.config();

const connection = mongoose.createConnection(mongoURI, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'ecom',
});

connection.model('Category', categorySchema);
connection.model('Product', productSchema);

module.exports = connection;