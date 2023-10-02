// ProductList.js
import React, { useState, useEffect } from 'react';
import api from 'superiorselect/client/src/services/api';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
   
    const fetchProducts = async () => {
      try {
        const response = await api.get('/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []); // ensures effect runs only once on mount

  import userService from 'superiorselect/client/src/services/userService';

const handleRegister = async (userData) => {
  try {
    const result = await userService.register(userData);
    
  } catch (error) {
    
    console.error('Error registering user:', error);
  }
};

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
               <button onClick={() => handleAddToCart(product._id)}>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
