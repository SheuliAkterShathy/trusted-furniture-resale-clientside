import React from "react";
import { useQuery } from "@tanstack/react-query";
import Category from "./Category";
import Advertise from "../Dashboard/Advertise";

const Home = () => {
  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch("https://trusted-furniture-server.vercel.app/categories");
      const data = await res.json();
      return data;
    },
  });
  return (
    <div>
      <section className="">
        <div className="container flex flex-col justify-center p-2 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="font-semibold leading-none text-5xl">
              <span>Welcome To</span>
              <br />
              <strong className="">Trusted Furniture</strong>
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              Our main purpose is to maintain quality product.We always try to serve on time.
              <br className="hidden md:inline lg:hidden" />
             To Satisfy customer wo do our best.
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-8 py-3 text-lg font-semibold rounded  border-2 border-amber-500"
              >
                Bye Now
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src="https://img.freepik.com/free-psd/contemporary-living-room-mockup-psd-interior-design_53876-129130.jpg?size=626&ext=jpg&ga=GA1.2.258402809.1666072521&semt=sph"
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
        </div>
      </section>

      {/* categories section */}
      <section>
        <div className="grid lg:grid-cols-3 gap-6 my-12 mx-8 m-auto">
          {categories.map((category) => (
            <Category category={category} key={category._id}></Category>
          ))}
        </div>
      </section>

      {/* Advertise */}
      <section className="mx-8 m-auto">
        <Advertise></Advertise>
      </section>

      {/* Customer Review */}
      <div className="mx-8 m-auto">
        <h2 className="text-center text-3xl font-bold">Customer Review</h2>
        <div className="grid md:grid-cols-3 gap-6 my-6">
          <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700   shadow-md">
            <div className="flex justify-between p-4">
              <div className="flex space-x-4">
                <div>
                  <img
                    src="https://img.freepik.com/free-photo/mand-holding-cup_1258-340.jpg?w=1380&t=st=1669549459~exp=1669550059~hmac=0ff73a1e2abc0058a3aecd51428366259e421f0303b8f0bb0d43552c7c4ea464"
                    alt=""
                    className="object-cover w-12 h-12 rounded-full"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Leroy Jenkins</h4>
                  <span className="text-xs">1 days ago</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                </svg>
                <span className="text-xl font-bold">5</span>
              </div>
            </div>
            <div className="p-4 space-y-2 text-sm ">
              <p>
                My favourite piece of furniture from Trusted is my Sofa.
                Definitely recommending Trusted to my friends and family. Their
                comfort and quality is what keeps bringing me back.
              </p>
              <p>
                Prompt delivery and great service. Staff at the store and
                manager are very friendly. 
              </p>
            </div>
          </div>
          <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md shadow-md divide-gray-700">
            <div className="flex justify-between p-4">
              <div className="flex space-x-4">
                <div>
                  <img
                    src="https://img.freepik.com/premium-photo/young-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-65212.jpg?size=626&ext=jpg&ga=GA1.2.258402809.1666072521&semt=sph"
                    alt=""
                    className="object-cover w-12 h-12 rounded-full"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Md: Tonmoy </h4>
                  <span className="text-xs">2 days ago</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                </svg>
                <span className="text-xl font-bold">5</span>
              </div>
            </div>
            <div className="p-4 space-y-2 text-sm ">
              <p>
                We purchased so many products from Trusted and we would
                recommend Trusted Furniture to everyone who needs quality and
                decent looking furniture..
              </p>
              <p>
                Good product and timely delivery. Satisfied with showroom visit,
              </p>
            </div>
          </div>
          <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md shadow-md divide-gray-700">
            <div className="flex justify-between p-4">
              <div className="flex space-x-4">
                <div>
                  <img
                    src="https://img.freepik.com/free-photo/confident-young-businessman-suit-standing-with-arms-folded_171337-18599.jpg?size=626&ext=jpg&ga=GA1.2.258402809.1666072521&semt=sph"
                    alt=""
                    className="object-cover w-12 h-12 rounded-full"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Labib Akter</h4>
                  <span className="text-xs">1 days ago</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                </svg>
                <span className="text-xl font-bold">4.5</span>
              </div>
            </div>
            <div className="p-4 space-y-2 text-sm">
              <p>
                Sceptical about their doors frames and shutters. However quality
                of product and installation was satisfactory.I will buy only from Trusted Furniture in the
                future.
              </p>
              <p>
                Purchased office chairs 5 years ago. Found them to be aesthetic
                and durable. Currently still using the same products.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
