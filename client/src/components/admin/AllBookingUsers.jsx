import React from "react";
import useFetch from '../../utils/useFetch';


const AllBookingUsers = () => {
    const {data}  = useFetch("/bookings")
    console.log(data)

    return data.map((bookings, i) => (
      <div key={i} className="bookingdetails_display">
        <h3>{bookings.carpark_name}</h3>
        <p>{bookings.user}</p>
      </div>
    ));
  };

export default AllBookingUsers;