import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllSellers = () => {

    const { data: allSellers = [], isLoading, refetch } = useQuery({
        queryKey: ['allSellers'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/allSellers', {
                    // headers: {
                    //     authorization: `bearer ${localStorage.getItem('accessToken')}`
                    // }
                });
                const data = await res.json();
                return data;
            }
            catch (error) {
              console.log(error)
            }
        }
    });

    const handleDelete = (id) => {
        const proceed = window.confirm(
          "Are you sure, you want to cancel this order"
        );
        if (proceed) {
          fetch(
            `http://localhost:5000/allSellers/${id}`,
            {
              method: "DELETE",
            //   headers: {
            //     authorization: `Bearer ${localStorage.getItem("token")}`,
            //   },
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

      
    if(isLoading){
        return <p>Loading....</p>
    }
    return (
      
           

            <div>
            <h2 className="text-3xl">All Sellers</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Image</th>
                            <th>Product Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allSellers.map((seller, i) => <tr key={seller._id}>
                                <th>{i + 1}</th>
                                
                                <td><img className='w-16' src={seller?.image} alt="" /></td>
                                <td>{seller.name}</td>
                                <td>{seller.email}</td>
                                 <td><button onClick={()=>handleDelete(seller._id)} className='bg-error btn-xs rounded-md'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
         
        </div>
       
    );
};

export default AllSellers;