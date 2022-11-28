import { useQuery } from "@tanstack/react-query";
import moment from "moment/moment";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import Loading from "../Shared/Loading";

const AddProducts = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {user} = useContext(AuthContext)
  const imageHostKey = process.env.REACT_APP_imgbb_key;
   

  const navigate = useNavigate()
  const { data: categories = [],isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch("https://trusted-furniture-server.vercel.app/categories");
      const data = await res.json();
      return data;
    },
  });


  const handleAddProduct = data=> {
    console.log(data)
    const postedTime = moment().format('lll');
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
                postedTime: postedTime,
                condition: data.condition,
                categoryName: data.categoryName,
                used: data.use,
                details: data.details,
                sellerName: data.sellerName,
                phone:data.phone,
                location:data.location,
                image: imgData.data.url,
                email:user.email
            }
            // save product information to the database
            fetch('https://trusted-furniture-server.vercel.app/products', {
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
              
                 navigate('/dashboard/myProducts')
            })
        }
    })
}

if(isLoading){
 return <Loading></Loading>
}
  return (
    <div className="lg:ml-20">
      <h2 className="text-4xl ml-8 underline">Add Products</h2>

      <div className=" p-7">
        <form onSubmit={handleSubmit(handleAddProduct)} className=''>
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
                required: "Resale Price is Required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.resalePrice && (
              <p className="text-red-500">{errors.resalePrice.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Orginal Price</span>
            </label>
            <input
              type="text"
              {...register("orginalPrice", {
                required: "OrginalPrice is Required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
             {errors.orginalPrice && (
              <p className="text-red-500">{errors.orginalPrice.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Use</span>
            </label>
            <input
              type="text"
              {...register("use", {
                required: "Used Time is Required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
             {errors.use && (
              <p className="text-red-500">{errors.use.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Seller Name</span>
            </label>
            <input
              type="text"
              {...register("sellerName", {
                required:"SellerName is Required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
             {errors.sellerName && (
              <p className="text-red-500">{errors.sellerName.message}</p>
            )}
          </div>
         
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Phn Number</span>
            </label>
            <input
              type="text"
              {...register("phone", {
                required: "Phone Number is Required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
             {errors.phone && (
              <p className="text-red-500">{errors.phone.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Location</span>
            </label>
            <input
              type="text"
              {...register("location", {
                required: "Location is Required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
             {errors.location && (
              <p className="text-red-500">{errors.location.message}</p>
            )}
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
                required: "Products details are Required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
             {errors.details && (
              <p className="text-red-500">{errors.details.message}</p>
            )}
          </div>


          <input
            className="bg-orange-300 hover:bg-orange-200 p-3 rounded-md w-full mt-4 max-w-xs"
            value="Add Product"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
