import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider";
import Loading from "../Shared/Loading";

const AllBuyers = () => {
  const { user } = useContext(AuthContext);
  const {
    data: allBuyers = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allBuyers"],
    queryFn: async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/allBuyers?email=${user?.email}`,
          {
            headers: {
              authorization: `bearer ${localStorage.getItem('accessToken')}`
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
      fetch(`http://localhost:5000/allBuyers/${id}`, {
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

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h2 className="text-3xl">All Buyers</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th> Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allBuyers.map((buyer, i) => (
              <tr key={buyer._id}>
                <th>{i + 1}</th>

                <td>{buyer.name}</td>
                <td>{buyer.email}</td>
                <td>
                  <button
                    onClick={() => handleDelete(buyer._id)}
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

export default AllBuyers;
