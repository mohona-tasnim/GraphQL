// src/resolvers/productResolver.js
const { getProducts, getProductById } = require('../data/productData');

const resolvers = {
  Query: {
    products: () => getProducts(),
    product: (_, { id }) => getProductById(id),
  },
};

module.exports = resolvers;
