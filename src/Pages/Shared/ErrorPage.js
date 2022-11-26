import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <section className="flex items-center h-screen p-16 text-gray-900">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          
          <img src="https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7888.jpg?size=338&ext=jpg&ga=GA1.2.258402809.1666072521&semt=sph" alt="" />
          <div className="max-w-md text-center">
            
            <p className="text-2xl font-semibold md:text-3xl mb-8">
              Sorry, we couldn't find this page.
            </p>
            <Link
              to="/"
              className="px-8 py-3 font-semibold rounded bg-amber-300 text-gray-900"
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ErrorPage;
