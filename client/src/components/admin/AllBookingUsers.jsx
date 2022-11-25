import React from "react";
import useFetch from '../../utils/useFetch';
import moment from 'moment'


const AllBookingUsers = () => {
    const {data: bookings}  = useFetch("/bookings")
    console.log(bookings)
 

    const {data: users} = useFetch("/users")
    console.log(users)

    function getUserEmail(id) {
      return users.find(user => user._id === id)?.email
    }

    if(!bookings && !users) return <></>

    return bookings.map((booking, i) => (
      <div key={i} className="bookingdetails_display">
        <h4>{booking.carpark_name}</h4>
        <p>User: {getUserEmail(booking.user)}</p>
        <p>Duration: {moment(booking.start_booking_date).format("DD/MM/YYYY")} to {moment(booking.end_booking_date).format("DD/MM/YYYY")}</p>

      </div>
    ));
  };

export default AllBookingUsers;
