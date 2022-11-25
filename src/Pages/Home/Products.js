import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal';
import Product from './Product';

const Products = () => {
    const { categoryName } = useLoaderData();
    // const [products, setProducts] = useState([]);
    const [productItem, setProductItem] = useState(null);
    // useEffect(() => {
    //     fetch(
    //       `http://localhost:5000/products?categoryName=${categoryName}`
    //     )
    //       .then((res) => res.json())
    //       .then((data) => setProducts(data));
    //   }, []);


    const { data: products = [], refetch, isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/products?categoryName=${categoryName}`);
            const data = await res.json();
            return data
        }
    });

    if(isLoading){
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-amber-400"></div>
    }
    return (
        <div>
            {
             products.map(product=><Product product={product} key={product._id} setProductItem={setProductItem}></Product>)
            }

            {  productItem &&
                <BookingModal
                productItem={productItem}
                setProductItem={setProductItem} 
                refetch={refetch}
                ></BookingModal>
            }
        </div>
    );
};

export default Products;