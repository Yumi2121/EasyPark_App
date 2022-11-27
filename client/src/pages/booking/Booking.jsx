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
import Modal from 'react-bootstrap/Modal';
import { useEffect } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import { useParams } from "react-router-dom";
import axios from "axios";
import useFetch from "../../utils/useFetch";
import { useContext } from "react";
import { AuthContext } from "../../utils/AuthContext";
import { useNavigate } from "react-router-dom";
import {createBookings} from '../../services/bookingServices';

const Booking = () => {
  const {id} = useParams();
  const [parkname, setParkname] = useState("");

  
  const {user} = useContext(AuthContext);
  console.log(user);

  const navigate = useNavigate();

  const {data, loading, error}  = useFetch(`/carparks/${id}`);
  
  const [openDate, setOpenDate] = useState(false)
  
  const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
      console.log(date[0].startDate)
      console.log(date[0].endDate)

      useEffect(() => {
        if (data) {
          setParkname(data.carpark_name)
        }
      }, [date, data])


      const handleClick = async (e) => {
          e.preventDefault();
          console.log(date[0].startDate)
        
          const res = await createBookings({
            carpark_name: parkname,
            user: user.data._id,
            start_booking_date: date[0].startDate,
            end_booking_date: date[0].endDate,
          });
        // const res = await axios.post("/api/bookings", {
        //   carpark_name: parkname,
        //   user: user.data._id,
        //   start_booking_date: date[0].startDate,
        //   end_booking_date: date[0].endDate,
        //   }, {
        //     headers: {
        //       "Content-Type": "application/json",
        //       "Authorization": `Bearer ${user.data.token}`,        
        //     },
        //   },);

          console.log(res)

          navigate('/success');
      }

    

    return (
    <Container>
        <Form>
        <fieldset>
         <legend>Booking Details</legend>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">{parkname}</Form.Label>
          
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

        <Button type="submit" variant="warning" onClick={handleClick}>Book Now</Button>
        {" "}
        <div>
        <small id="submitlHelp" class="form-text text-muted" >Book now and pay later!</small>
        </div>
        </fieldset>
    </Form>

{/* 
      <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
    
        /> */}
    

    </Container>
    );
}



export default Booking;