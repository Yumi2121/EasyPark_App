import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../utils/AuthContext";
import { useState } from "react";
import useFetch from '../../utils/useFetch';
import Container from 'react-bootstrap/Container';


const Bookings = () => {
    const {data, loading, error, reFetch }  = useFetch("/bookings")
    console.log(data)

    //filter data by user:id & authcontect

    const bookingdetails = data

    return bookingdetails.map((bookings, i) => (
      <div key={i} className="bookingdetails_display">
        <h3>{bookings.carpark_name}</h3>
        <p>{bookings.booking_date}</p>
      </div>
    ));
  };

export default Bookings;