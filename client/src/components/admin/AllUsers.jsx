import React from "react";
import useFetch from '../../utils/useFetch';
import moment from 'moment';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

import easyparkAPI from '../../config/api'

const AllUsers = () => {
    const {data, reFetch: reFetchUsers}  = useFetch("/users")
    console.log(data)


    const handleClick = (usersId) => {
      easyparkAPI.delete(`/users/${usersId}`)
      .then(() => reFetchUsers())
      .catch(() => console.log('oops something went wrong'))
    }

   

    return data.map((users, i) => (
      
      <Card style={{ height: '13rem', width: '40rem'}}>
        <Card.Body key={i} className="bookingdetails_display">
          <Card.Title>User Email: {users.email}</Card.Title> 
          <Card.Text>Registration Date:  {moment(users.createdAt).format("DD/MM/YYYY")}</Card.Text>
          <Card.Text>Admin: {users.isAdmin.toString()}</Card.Text>
          <Button onClick={() => handleClick(users._id)} variant="primary">Delete</Button>
        </Card.Body>
      </Card>
    ));
  };

export default AllUsers;
