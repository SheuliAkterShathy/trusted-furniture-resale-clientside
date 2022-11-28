import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../Shared/Loading";

const Advertise = () => {
  const { data: advertiseProduct = [], isLoading } = useQuery({
    queryKey: ["advertiseProduct"],
    queryFn: async () => {
      const res = await fetch(
        "https://trusted-furniture-server.vercel.app/advertise"
      );
      const data = await res.json();
      console.log(data);
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="grid gap-6 md:grid-cols-3 my-24">
      <>
        {advertiseProduct?.length &&
          advertiseProduct.map((advertise) => (
            <div className="card card-compact bg-base-100 shadow-xl">
              <figure>
                <img
                  className="h-40 w-full"
                  src={advertise.image}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{advertise.name}</h2>
                <p>ResalePrice: {advertise.resalePrice}</p>
                <p>OrginalPrice: {advertise.orginalPrice}</p>
                <p>UsedTime: {advertise.used}</p>
                <p>SellerEmail: {advertise.email}</p>
                <p>Location: {advertise.location}</p>
                <p>Phone:{advertise.phone}</p>

                <div className="card-actions">
                  <button className="bg-orange-300 p-3 rounded-md">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
      </>
    </div>
  );
};

export default Advertise;
