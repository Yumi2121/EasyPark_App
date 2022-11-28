import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import logo from '../../images/logo.png'

function SuccessBooking() {

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