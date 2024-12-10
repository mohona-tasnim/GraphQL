import React, { useState, useEffect } from 'react';

function App() {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch all products when the component mounts
    fetch('http://localhost:5000/api/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  // Fetch product by id
  const fetchProductById = (id) => {
    fetch(`http://localhost:5000/api/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error('Error fetching product:', error));
  };

  return (
    <div className="App">
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ₹{product.price}
            <button onClick={() => fetchProductById(product.id)}>
              View Details
            </button>
          </li>
        ))}
      </ul>

      {product && (
        <div>
          <h2>Product Details</h2>
          <p>Name: {product.name}</p>
          <p>Price: ₹{product.price}</p>
        </div>
      )}
    </div>
  );
}

export default App;
