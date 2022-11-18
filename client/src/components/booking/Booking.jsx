import React from "react";
import {useState} from 'react';
import "./Booking.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from "date-fns";
import Container from 'react-bootstrap/Container';




const Booking = ({carparkId}) => {
    const [openDate, setOpenDate] = useState(false)

    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);


    return (

    <Container>
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
                <label for="booking-date" class="form-label mt-4">Booking date</label>
              
                <input onClick={()=> setOpenDate(!openDate)} type="BookingText" class="form-control" placeholder={`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`} ></input>
                {/* <FontAwesomeIcon icon={faCalendarDays} /> */}
                { openDate &&
                <DateRange
                    editableDateInputs={true}
                    onChange={item => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                /> }
            </div>
            {/* <div class="form-group">
            <label for="exampleInputPassword1" class="form-label mt-4">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div> */}
        </fieldset>

            <Container>
                <button type="submit" class="btn btn-primary">Book Now</button>
                <small id="submitlHelp" class="form-text text-muted">Book now and pay later!</small>

            </Container>
       
        </form>
    </Container>
    )
}

export default Booking;