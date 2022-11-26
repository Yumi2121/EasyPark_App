import React from "react"
import useFetch from '../../utils/useFetch'
import moment from 'moment'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import easyparkAPI from '../../config/api'

const AllBookingUsers = () => {
  const {data: bookings, reFetch: reFetchBookings}  = useFetch("/bookings")
  console.log(bookings)

  const {data: users} = useFetch("/users")
  console.log(users)

  const handleClick = (bookingId) => {
    easyparkAPI.delete(`/bookings/${bookingId}`)
    .then(() => reFetchBookings())
    .catch(() => console.log('oops something went wrong'))
  }

  function getUserEmail(id) {
    return users.find(user => user._id === id)?.email
  }

  if(!bookings && !users) return <></>

  return bookings.map((booking, i) => (
    <Card style={{ height: '13rem', width: '40rem'}}>
      <Card.Body key={i} className="bookingdetails_display">
        <Card.Title>{booking.carpark_name}</Card.Title>
        <Card.Text>User: {getUserEmail(booking.user)}</Card.Text>
        <Card.Text>Duration: {moment(booking.start_booking_date).format("DD/MM/YYYY")} to {moment(booking.end_booking_date).format("DD/MM/YYYY")}</Card.Text>
        <Button onClick={() => handleClick(booking._id)} variant="primary">Delete</Button>
      </Card.Body>
    </Card>
  ))
}

export default AllBookingUsers;
