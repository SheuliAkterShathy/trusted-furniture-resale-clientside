import React from "react";

const Product = ({product}) => {
    const {name,location,resalePrice,orginalPrice,postedTime,condition,used,image,seller,phone,details} = product;
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl  m-10">
      <figure className="w-1/3">
        <img className="w-96 h-96" src={image} alt="Album" />
      </figure>
      <div className="card-body w-2/3">
        <h2 className="card-title">{name}</h2>
        <p className="mb-0">{details}</p>
       <div className="flex gap-8">
       
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
        <p>Seller:</p>
       </div>
        <div>
        <p>Location:{location}</p>
        <p>Phone:{phone}</p>
        </div>
        
       </div>

        <div className="card-actions justify-end">
          <button className="btn btn-primary">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
