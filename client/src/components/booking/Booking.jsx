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
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';




const Booking = (props) => {
    

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
        <Form>
        <fieldset>
         <legend>Booking Details</legend>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">carpark</Form.Label>
          <Form.Control id="disabledTextInput" placeholder="Disabled input" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledSelect">Booking date</Form.Label>
          <Form.Control onClick={()=> setOpenDate(!openDate)} type="BookingText" placeholder={`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`} />
                {/* <FontAwesomeIcon icon={faCalendarDays} /> */}
                { openDate &&
                <DateRange
                    editableDateInputs={true}
                    onChange={item => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                /> }
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            id="disabledFieldsetCheck"
            label="Can't check this"
          />
        </Form.Group>

        <Button type="submit">Submit</Button>
        </fieldset>
    </Form>
   

        <Container>
                <Button type="submit" class="btn btn-primary">Book Now </Button>
                <small id="submitlHelp" class="form-text text-muted">Book now and pay later!</small>
        </Container>



    </Container>
    );
}

export default Booking;