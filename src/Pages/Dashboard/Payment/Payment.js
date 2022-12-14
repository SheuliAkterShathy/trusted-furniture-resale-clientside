import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
// console.log(stripePromise);
const Payment = () => {
  const booking = useLoaderData();
  console.log(booking);
  const { productName, price } = booking;
  return (
    <div>
      <h3 className="text-3xl ">Pay for {productName}</h3>
      <p>pay {price} </p>
      <div  className="w-96 my-12">
        <Elements stripe={stripePromise}>
          <CheckoutForm booking={booking} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
