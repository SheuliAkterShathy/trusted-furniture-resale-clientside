import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider";

const AllSellers = () => {
  const { user } = useContext(AuthContext);
  const {
    data: allSellers = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allSellers"],
    queryFn: async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/allSellers?email=${user?.email}`,
          {
            headers: {
              // authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
          }
        );
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to cancel this order"
    );
    if (proceed) {
      fetch(`http://localhost:5000/allSellers/${id}`, {
        method: "DELETE",
        headers: {
          // authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
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

  const handleVerify=(id)=>{
    fetch(`http://localhost:5000/verify/${id}`,{
      method:'PUT',
      headers:{
          'content-type': 'application/json',
      }
    })
    .then(res =>res.json())
    .then(data =>{
      if(data.acknowledged){
          toast.success('Verified successfully')
          refetch()
      }
      else{
          toast.error(data.message)
      }
    })
    .catch(err=>toast.error(err.message))
  }


  if (isLoading) {
    return <p>Loading....</p>;
  }
  return (
    <div>
      <h2 className="text-3xl">All Sellers</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Verify</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allSellers.map((seller, i) => (
              <tr key={seller._id}>
                <th>{i + 1}</th>

                <td>{seller.name}</td>
                <td>{seller.email}</td>
                <td>
                  <button onClick={()=>handleVerify(seller._id)}>{seller.isVerified === true ? 'Verified':'No verify'}</button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(seller._id)}
                    className="bg-error btn-xs rounded-md"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSellers;
