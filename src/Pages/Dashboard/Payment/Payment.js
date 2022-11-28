import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise ,'kkkkkk')

const Payment = () => {
    const booking = useLoaderData();
   
    const {price,productName}=booking
    return (
        <div>
        <h3 className="text-3xl">Payment for {productName}</h3>
        <p className="text-xl">Please pay <strong>{price} </strong>$</p>
        <div className='w-1/2 my-8  bg-amber-50 p-8'>
            <Elements stripe={stripePromise}>
                <CheckoutForm
                    booking={booking}
                />
            </Elements>
        </div>
    </div>
    );
};

export default Payment;