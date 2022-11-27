import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
// const axios = require('axios');
import axios from "axios";
const MyWishlist = () => {
    const {user} = useContext(AuthContext)
    const [wishlists, setWishlists] = useState([]);

    // const {data: wishlists=[], isLoading} = useQuery({
    //     queryKey: ['wishlists'],
    //     queryFn: async() =>{
    //         const res = await fetch(`http://localhost:5000/wishlists?email=${user?.email}`);
    //         const data = await res.json();
        
    //         return data;
    //     }
    // });
    
    // if(isLoading){
    //     return <p>Loading....</p>
    // }

   
useEffect(()=>{
    axios.get(`http://localhost:5000/wishlists?email=${user?.email}`,{
        headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
    })
    //  .then(res => res.json())
    .then(data=>{
    setWishlists(data.data)
    })
    .catch(err=>console.log(err))
},[user?.email])

    return (
        <div>
            
                
                <div>
                <h3 className="text-3xl mb-5">My Wishslist</h3>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Image</th>
                                <th>ProductName</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                wishlists &&
                                wishlists?.map((wishlist, i) => <tr key={wishlist._id}>
                                    <th>{i + 1}</th>
                                    <td><img className='w-16' src={wishlist?.image} alt="" /></td>
                                    <td>{wishlist?.productName}</td>
                                    <td>{wishlist?.resalePrice}</td>
                                    
                                   <td><button className='btn-xs bg-orange-300 rounded-md'>Purchase</button></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            
        </div>
    );
};

export default MyWishlist;