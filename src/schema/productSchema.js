// src/schema/productSchema.js
const { gql } = require('apollo-server');

const typeDefs = gql`
  type Product {
    id: ID!
    name: String!
    price: Float!
  }

  type Query {
    products: [Product]
    product(id: ID!): Product
  }
`;

module.exports = typeDefs;
