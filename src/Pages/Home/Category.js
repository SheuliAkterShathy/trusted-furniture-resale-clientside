import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Category = ({ category }) => {
  return (
    <div className="card bg-base-100 shadow-xl image-full">
      <figure>
        <img src={category.img} alt="Shoes" />
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
