import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
// const axios = require('axios');
import axios from "axios";
import { Link } from 'react-router-dom';
const MyWishlist = () => {
    const {user} = useContext(AuthContext)
    const [wishlists, setWishlists] = useState([]);

   
   
useEffect(()=>{
    axios.get(`https://trusted-furniture-server.vercel.app/wishlists?email=${user?.email}`,{
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
                                    
                                   <td><button className='btn-xs bg-orange-300 hover:bg-orange-200 rounded-md'><Link to={`/dashboard/payment/${wishlist._id}`}>Purchase</Link></button></td>
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