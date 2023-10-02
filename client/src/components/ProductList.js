// ProductList.js

import React, { useState, useEffect } from 'react';
import api from '../services/api';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the server when the component mounts
    const fetchProducts = async () => {
      try {
        const response = await api.get('/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <div>
              <img src={product.image} alt={product.name} />
            </div>
            <div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>${product.price}</p>
              {/* Add a button or link for adding the product to the cart */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
