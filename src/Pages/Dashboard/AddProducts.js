import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider";

const AddProducts = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {user} = useContext(AuthContext)
  const imageHostKey = process.env.REACT_APP_imgbb_key;
   
  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/categories");
      const data = await res.json();
      return data;
    },
  });


  const handleAddProduct = data=> {
    console.log(data)
    const image = data.image[0];
    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
    console.log(url)
    fetch(url, {
        method: 'POST',
        body: formData
    })
    .then(res => res.json())
    .then(imgData => {
        if(imgData.success){
            
            // console.log(imgData.data.url);
            const product = {
                //  id:data.id,
                name: data.productName, 
                orginalPrice: data.orginalPrice,
                resalePrice: data.resalePrice,
                postedTime: data.postedTime,
                condition: data.condition,
                categoryName: data.categoryName,
                used: data.use,
                details: data.details,
                phone:data.phone,
                location:data.location,
                image: imgData.data.url,
                email:user.email
            }
            // save product information to the database
            fetch('http://localhost:5000/products', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json', 
                    // authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(product)
            })
            .then(res => res.json())
            .then(result =>{
                console.log(result);
                toast.success(`${data.productName} is added successfully`);
              
                // navigate('/dashboard/managedoctors')
            })
        }
    })
}
  return (
    <div>
      <h2 className="text-4xl">Add Products</h2>

      <div className=" p-7">
        <form onSubmit={handleSubmit(handleAddProduct)} className='lg:grid grid-cols-2'>
          <div className="form-control w-full">
            <label className="label">
              {" "}
              <span className="label-text"> Product Name</span>
            </label>
            <input
              type="text"
              {...register("productName", {
                required: "ProductName is Required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.productName && (
              <p className="text-red-500">{errors.productName.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Resale Price</span>
            </label>
            <input
              type="text"
              {...register("resalePrice", {
                required: true,
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {/* {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )} */}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Orginal Price</span>
            </label>
            <input
              type="text"
              {...register("orginalPrice", {
                required: true,
              })}
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Use</span>
            </label>
            <input
              type="text"
              {...register("use", {
                required: true,
              })}
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Seller Name</span>
            </label>
            <input
              type="text"
              {...register("sellerName", {
                required: true,
              })}
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Posted Time</span>
            </label>
            <input
              type="text"
              {...register("postedTime", {
                required: true,
              })}
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Phn Number</span>
            </label>
            <input
              type="text"
              {...register("phone", {
                required: true,
              })}
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Location</span>
            </label>
            <input
              type="text"
              {...register("location", {
                required: true,
              })}
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="space-y-1 text-sm">
            <label for="username" className="block ">
              Type of condition
            </label>
            <select  {...register('condition')} className="select input-bordered w-full max-w-xs">
              <option value='excellent'> Excellent</option>
              <option value='good'> Good</option>
              <option value='fair'> Fair</option>
            </select>
          </div>
          <div className="space-y-1 text-sm">
            <label for="username" className="block ">
              Category Name
            </label>
            <select  {...register('categoryName')} className="select input-bordered w-full max-w-xs">
            {
                            categories.map(category=> <option
                                key={category._id}
                                // id={category._id}
                                value={category.categoryName}
                            >{category.categoryName}</option>)
                        }
            </select>
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Photo</span>
            </label>
            <input
              type="file"
              {...register("image", {
                required: "Photo is Required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.img && <p className="text-red-500">{errors.img.message}</p>}
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Products Details</span>
            </label>
            <textarea
              type="text"
              {...register("details", {
                required: true,
              })}
              className="input input-bordered w-full max-w-xs"
            />
          </div>


          <input
            className="btn btn-accent w-full mt-4 max-w-xs"
            value="Add Product"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
