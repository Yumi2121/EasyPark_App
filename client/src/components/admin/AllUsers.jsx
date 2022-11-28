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

      <div className="card-container" key={i}>
        <Card bg={"secondary"} text={"light"} style={{ width: "30rem" }}>
          <Card.Body>
            <Card.Title style={{ fontSize: "14px" }}>
              User Email: {users.email}
            </Card.Title>
            <Card.Text style={{ fontSize: "12px" }}>
              Registration Date:  {moment(users.createdAt).format("DD/MM/YYYY")}
            </Card.Text>
            <Card.Text style={{ fontSize: "12px" }}>
             Admin: {users.isAdmin.toString()}
            </Card.Text>

            <Button onClick={() => handleClick(users._id)} variant="primary">
              Delete
            </Button>
          </Card.Body>
        </Card>
      </div>
    ));
  };

export default AllUsers;
