// src/data/productData.js
const products = [
  { id: '1', name: 'Laptop', price: 78000 },
  { id: '2', name: 'Smartphone', price: 35000 },
  { id: '3', name: 'Tablet', price: 25000 },
  { id: '4', name: 'TV', price: 23000},
  { id: '5', name: 'Radio', price: 3000 },
  { id: '6', name: 'Router', price: 2500 },
  { id: '7', name: 'Refrigerator', price: 80000 }
];

const getProducts = () => products;

const getProductById = (id) => products.find(product => product.id === id);

module.exports = { getProducts, getProductById };
