import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider";

const BookingModal = ({productItem,setProductItem,refetch}) => {
    const {name,resalePrice} = productItem;
    // console.log(productItem)
    const { user } = useContext(AuthContext);

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const phone = form.phone.value;
        const price = form.price.value;
        const location = form.location.value;
        
        const booking = {
            productName:productItem.name,
            image:productItem.image,
            price,
            email,
            phone,
            location
        }

      //  console.log(booking)
        fetch('https://trusted-furniture-server.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.acknowledged) {
                    setProductItem(null);
                    toast.success('Booking is confirmed successfully');
                    refetch();
                }
                else{
                    toast.error(data.message);
                }
            })


    }


  return (
    <div>
      {/* The button to open modal */}
      {/* <label htmlFor="booking-modal" className="btn">open modal</label> */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
           ProductName: {name}
          </h3>
          
          <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                       
                        <input name="name" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />

                        <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />

                        <input name="name" type="text" defaultValue={ name} disabled placeholder="Product Name" className="input w-full input-bordered" />

                        <input name="price" type="text" defaultValue={ resalePrice} disabled placeholder="Price Number" className="input w-full input-bordered" />
                
                        <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        
                        <input name="location" type="text" placeholder="Location" className="input w-full input-bordered" />
                        
                        <input className='bg-orange-300 p-3 rounded-md w-full' type="submit" value="Submit" />
                    </form>
          <div className="modal-action">
            <label htmlFor="booking-modal" className="btn w-full">
              cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
