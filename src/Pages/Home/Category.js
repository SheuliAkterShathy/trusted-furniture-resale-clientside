import React from "react";
import { Link, useNavigate, } from "react-router-dom";

const Category = ({ category }) => {
  const navigate =useNavigate();
  const handleNavigate = () =>{
    navigate(`categories/${category._id}`)
}
  return (
    <div onClick={handleNavigate} className="card bg-base-100 image-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 ... cursor-pointer ">
      <figure>
        <img  src={category.img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{category.categoryName}</h2>

        <div className="card-actions mt-16">
          <Link to={`categories/${category._id}`}>
            <button className="bg-orange-400 hover:bg-orange-300 p-3 rounded-md ">
              See Category Products
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category;
