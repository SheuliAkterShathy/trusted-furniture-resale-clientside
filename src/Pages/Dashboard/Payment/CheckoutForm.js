import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({booking}) => {
    const {price,email,productName} = booking;
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    console.log(price)

    const stripe = useStripe()
    const elements = useElements();

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
         fetch("https://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);


    const handleSubmit=async(event)=>{
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
          return;
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });

          if (error) {
            
            setCardError(error.message);
        }
        else {
            setCardError('');
        }

        setProcessing(true);
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        // name: productName,
                        email: email
                    },
                },
            },
        );

        if (confirmError) {
            setCardError(confirmError.message);
            return;
        }
        console.log(paymentIntent)

        setProcessing(false)
    }



    return (

    <><form onSubmit={handleSubmit}>
    <CardElement
      options={{
        style: {
          base: {
            fontSize: '16px',
            color: '#424770',
            '::placeholder': {
              color: '#aab7c4',
            },
          },
          invalid: {
            color: '#9e2146',
          },
        },
      }}
    />
    <button className='bg-orange-300 p-2 px-8 mt-8 rounded-md' type="submit" disabled={!stripe || !clientSecret || processing}>
      Pay
    </button>
  </form>
  <p className="text-red-500">{cardError}</p>
  </>


    );
};

export default CheckoutForm;