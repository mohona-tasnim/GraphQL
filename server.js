// server.js
const express = require('express');
const { getProducts, getProductById } = require('./src/data/productData');
const app = express();
const PORT = 5000;  // You can use any available port

// Endpoint to fetch all products
app.get('/api/products', (req, res) => {
  const products = getProducts();
  res.json(products);
});

// Endpoint to fetch product by ID
app.get('/api/products/:id', (req, res) => {
  const product = getProductById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
