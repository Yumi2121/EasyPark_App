import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {  } from '@fortawesome/free-solid-svg-icons'


const Booking = () => {
    return (
        // <div className="booking-session">
        //     <div className="bookingItem">
        //         <FontAwesomeIcon icon={faCalenderDays} />
        //         <span classname="BookingText">date to date</span>
        //     </div>

        //     <div className="bookingItem">
        //         <FontAwesomeIcon icon={faMagnifyingGlass} />
        //         <input type="text" placeholder="Where are you going?" classname="SearchInput" />
        //     </div>

        //     <div className="bookingItem">
        //         <FontAwesomeIcon icon={faMagnifyingGlass} />
        //         <input type="text" placeholder="Where are you going?" classname="SearchInput" />
        //     </div>
        // </div>


<form>
  <fieldset>
    <legend>Booking Details</legend>
    <div class="form-group">
      <label for="exampleSelect1" class="form-label mt-4">Carpark</label>
      <select class="form-select" id="exampleSelect1">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1" class="form-label mt-4">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1" class="form-label mt-4">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
    </div>
    <button type="submit" class="btn btn-primary">Book Now</button>
  </fieldset>
</form>
    )
}

export default Booking;