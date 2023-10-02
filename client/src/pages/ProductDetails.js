// ProductDetails.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';
import Breadcrumbs from '../components/Breadcrumbs';

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await api.get(`/products/${productId}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProduct();
  }, [productId]);

  
  const breadcrumbsPaths = [
    { label: 'Home', url: '/' },
    { label: 'Products', url: '/products' },
    { label: product ? product.name : 'Loading', url: `/products/${productId}` },
  ];

  return (
    <div>
      <Breadcrumbs paths={breadcrumbsPaths} />

      {product ? (
        <div>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>${product.price}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductDetails;
