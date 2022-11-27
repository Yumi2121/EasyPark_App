import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import logo from '../../images/logo.png'
import useFetch from '../../utils/useFetch'
import { useContext } from "react";
import { AuthContext } from "../../utils/AuthContext";

function SuccessBooking() {
 
    const {user} = useContext(AuthContext);
    //const id = user.data._id
    const id = "637b1ee778aab202de539826"





  return (
    <Container>
       <img src={logo} alt="easypark-logo" width="200"/>

        <h3>
          Thank you for booking with EasyPark! 
          The booking has been confirmed!
        </h3>
        <hr />
        <div>
          <Button href="/" variant="outline-primary">Back to Home</Button>
          {" "}
          <Button href="/bookings" variant="outline-primary">View my booking</Button>
        </div>
      </Container>
  );
}

export default SuccessBooking;