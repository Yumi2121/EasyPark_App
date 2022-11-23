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


function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{backgroundcolor:"blue"}}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Confirmed!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Thank you For Booking with us!</h4>
        <p>
          The carpark owner will be informed and reach out to you shortly!
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} >Close</Button>
      </Modal.Footer>
    </Modal>
  );
}



const Booking = () => {
  const {id} = useParams();

  const {data, loading, error}  = useFetch(`/carparks/${id}`);
  console.log(data)
  

  const [modalShow, setModalShow] = useState(false);
  const [openDate, setOpenDate] = useState(false)
  
  const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);



      // useEffect(() => {
      //   if (setModalShow) {
      //     // setTimeout for about 2 seconds then let isLoading to false
      //     setTimeout(() => {
      //       modalShow(false);
      //     }, 8000);
      //   }
      // }, [props]);


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

        {/* <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            id="disabledFieldsetCheck"
            label="Can't check this"
          />
        </Form.Group> */}

        <Button type="submit" onClick={() => setModalShow(true)}>Book Now</Button>
        {" "}
        <div>
        <small id="submitlHelp" class="form-text text-muted" >Book now and pay later!</small>
        </div>
        </fieldset>
    </Form>


      <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
    
        />
    

    </Container>
    );
}



export default Booking;