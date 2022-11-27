import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import Loading from '../Shared/Loading';

const MyProducts = () => {
    const navigate=useNavigate()
    const { user } = useContext(AuthContext);
    const { data: myProducts = [], isLoading,refetch } = useQuery({
      queryKey: ["myProducts", user?.email],
      queryFn: async () => {
        const res = await fetch(
          `http://localhost:5000/myProducts?email=${user?.email}`,{
            headers: {
              authorization: `bearer ${localStorage.getItem('accessToken')}`
          }
          }
        );
        const data = await res.json();
        return data;
      },
    });
  
    const handleDelete = (id) => {
        const proceed = window.confirm(
          "Are you sure, you want to cancel this order"
        );
        if (proceed) {
          fetch(
            `http://localhost:5000/myProducts/${id}`,
            {
              method: "DELETE",
              headers: {
                // authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              },
            }
          )
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                toast.success("deleted successfully");
                refetch();
              }
            })
            .catch((err) => console.log(err));
        }
      };

  const handleAdvertise=(id)=>{
      fetch(`http://localhost:5000/advertise/${id}`,{
        method:'PUT',
        headers:{
            'content-type': 'application/json',
        }
      })
      .then(res =>res.json())
      .then(data =>{
        if(data.acknowledged){
            toast.success('Advertised successfully')
        }
        else{
            toast.error(data.message)
        }
      })
      .catch(err=>toast.error(err.message))
  }


    if(isLoading){
      return <Loading></Loading>
    }
    return (
        <div>
        <div className="">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>product Image</th>
                <th>product Name</th>
                <th>Price </th>
                <th> Status </th>
                <th> Advertise </th>
                <th> Delete </th>
              </tr>
            </thead>
            <tbody>
             {
              myProducts.length>0 ?
              <>
               {
                  myProducts.map((product) => (
                      <tr key={product._id}>
                        <th></th>
                        <th><img className='w-16 h-12' src={product.image} alt="" /></th>
                        <th> {product.name} </th>
                        <th> {product.resalePrice} </th>
                        <th> <button className="btn btn-xs btn-info">unsold</button> </th>
                        <th>
                          {" "}
                          <button onClick={()=>handleAdvertise(product._id)} className={`btn btn-xs  ${product.isAdvertised === true ? ' btn-outline btn-success':'btn-success'}`}> {product.isAdvertised === true ? 'advertise running' : 'Click to Advertise'}</button>{" "}
                        </th>
                        <th>
                          {" "}
                          <button onClick={()=>handleDelete(product._id)} className="btn btn-xs btn-error">Delete</button>{" "}
                        </th>
                      </tr>
                    ))
               }
              </>
              :
              <h3 className="text-4xl text-center text-orange">No Products are Abailable For Sells now  </h3>
             }
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default MyProducts;