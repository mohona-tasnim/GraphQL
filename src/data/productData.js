// src/data/productData.js
const products = [
  { id: '1', name: 'Soap Bars', price: 78 },
  { id: '2', name: 'Shampoo', price: 350 },
  { id: '3', name: 'BodyWash', price: 250 },
  { id: '4', name: 'Conditioner', price: 230},
  { id: '5', name: 'Cleansers', price: 300 },
  { id: '6', name: 'Toners', price: 250 },
  { id: '7', name: 'Serums', price: 800 }
  
];

const getProducts = () => products;

const getProductById = (id) => products.find(product => product.id === id);

module.exports = { getProducts, getProductById };
