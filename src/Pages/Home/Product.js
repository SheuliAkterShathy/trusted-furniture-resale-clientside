import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { FaCheck, FaHeart } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthProvider";
import Loading from "../Shared/Loading";

const Product = ({product,setProductItem}) => {
  // const {user} = useContext(AuthContext)
  const {name,location,resalePrice,orginalPrice,postedTime,condition,used,image, email,sellerName,phone,details,_id} = product;
   
  const {data : user, isLoading} = useQuery({
    queryKey : ['user', name],
    queryFn : async ()=>{
      const res = await fetch(`https://trusted-furniture-server.vercel.app/user?email=${email}`)
      const data = await res.json()
      console.log(data)
      return data
    }
  })

   const handleWishlist=(id)=>{

    const wishlist={
        productName:name,
        image:image,
        resalePrice:resalePrice,
        email:user.email
    }
console.log(wishlist)

    fetch('https://trusted-furniture-server.vercel.app/wishlist', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(wishlist)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    
                    toast.success('Your wish is added successfully');
                    // refetch();
                }
                else{
                    toast.error(data.message);
                }
            })


   }

   


    if(isLoading){
       return <Loading></Loading>
    }
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl  m-10">
      <figure className="lg:w-1/3">
        <img className="w-96 h-96" src={image} alt="Album" />
      </figure>
      <div className="card-body lg:w-2/3">
        <div>
        <h2 className="card-title">{name}</h2>
        <div className="flex">
          <p>SellerName: {sellerName}</p>
          <p>SellerEmail: {email}</p>
        
        {
          user?.verified === true &&  <FaCheck className="bg-blue-600 rounded-full"/>
        }
       
        </div>
        </div>
       <div className="lg:fle gap-8">
       
       <div>
       <p>Orginal Price:{orginalPrice}</p>
        <p>Resale Price:{resalePrice}</p>
       </div>
        <div>
        <p>Posted Time:{postedTime}</p>
        <p>Condition: {condition}</p>
        </div>
       
        
       <div>
       <p>Used Year: {used}</p>
        
       </div>
        <div>
        <p>Location:{location}</p>
        <p>Phone:{phone}</p>
        </div>
       </div>
        <p className="mb-0">{details}</p>

        <div className="card-actions justify-end">
          {/* <button htmlFor="booking-modal" className="btn btn-primary">Book Now</button> */}
          <button onClick={()=>handleWishlist(_id)}><span className="text-5xl "><FaHeart className="text-orange-300 hover:text-amber-600"></FaHeart></span></button>
          <label onClick={()=>setProductItem(product)} htmlFor="booking-modal" className="bg-orange-300 p-2 rounded-md cursor-pointer hover:bg-amber-400">Book Now</label>
        </div>
      </div>
    </div>
  );
};

export default Product;
