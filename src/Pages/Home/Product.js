import React from "react";

const Product = ({product}) => {
    const {name,location,resalePrice,orginalPrice,postedTime,condition,used,image,seller} = product;
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl  m-10">
      <figure>
        <img className="w-96 h-96" src={image} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title mb-0">{name}</h2>
        <p className="">Orginal Price:{orginalPrice}</p>
        <p>Resale Price:{resalePrice}</p>
        <p>Posted Time:{postedTime}</p>
        <p>Location:{location}</p>
        <p>Seller:{seller}</p>

        <div className="card-actions justify-end">
          <button className="btn btn-primary">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
