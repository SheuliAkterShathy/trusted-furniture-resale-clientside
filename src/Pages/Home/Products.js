import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from './Product';

const Products = () => {
    const { categoryName } = useLoaderData();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(
          `http://localhost:5000/products?categoryName=${categoryName}`
        )
          .then((res) => res.json())
          .then((data) => setProducts(data));
      }, []);
    return (
        <div>
            {
             products.map(product=><Product product={product} key={product._id}></Product>)
            }
        </div>
    );
};

export default Products;