import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

const BookingModal = ({productItem,setProductItem,refetch}) => {
    const {name,resalePrice} = productItem;
    console.log(productItem)
    const { user } = useContext(AuthContext);

    const handleBooking=()=>{

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
