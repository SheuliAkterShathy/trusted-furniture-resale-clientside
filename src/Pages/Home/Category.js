import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Category = ({category}) => {
  
    return (
        <div className="card card-compact w-96 h-84 bg-base-100 shadow-xl">
        <figure><img className='' src={category.img} alt="Shoes" /></figure>
        <div className="card-body">
          
          <div className="card-actions">
            <Link className=" p-4 rounded-md text-xl bg-orange-300 border-none w-full" to={`categories/${category._id}`}><button >{category.categoryName}</button></Link>
          </div>
        </div>
      </div>
    );
};

export default Category;