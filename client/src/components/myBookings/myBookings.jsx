import React from "react";
import { getBookings } from "../../services/bookingServices"
import { useEffect, useState } from "react";
import { useGlobalState } from "../../utils/StateContext";
import Card from 'react-bootstrap/Card';


const MyBookings = () => {

    const {user} = useContext(AuthContext);
    // id = user.data._id
    id = "637b1ee778aab202de539826"

    const { store, dispatch } = useGlobalState();
    const [booked, setBooked] = useState();
    const userId = user.

    // try to use useGlobal here
    useEffect(() => {
        if (!user) {
            return;
        }
        async function fetchBookings() {
            let userBookings = await getBookings();
            dispatch({ type: "setBookings", data: userBookings });
            setBooked(userBookings);
        }
    })



// this is to display the information obtained above. Feel free to change
    return bookingdetails.map((bookings, i) => (

      <div key={i} className="bookingdetails">
        <div class="row">
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{bookings.carpark_name}</h5>
                <p class="card-text"> Initial Parking Date: {bookings.start_booking_date}</p>
                <p class="card-text"> Parking End Date: {bookings.end_booking_date}</p>
              </div>
            </div>
          </div>
        </div>
      </div>





    ));
};

export default MyBookings;