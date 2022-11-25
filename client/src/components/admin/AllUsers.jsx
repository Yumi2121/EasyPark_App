import React from "react";
import useFetch from '../../utils/useFetch';
import moment from 'moment';


const AllUsers = () => {
    const {data}  = useFetch("/users")
    console.log(data)

   

    return data.map((users, i) => (
      
      <div key={i} className="bookingdetails_display">
        
        <h4>User Email: {users.email}</h4>
        <p>Registration Date:  {moment(users.createdAt).format("DD/MM/YYYY")}</p>
        <p>Admin: {users.isAdmin.toString()}</p>
        
        
      </div>
    ));
  };

export default AllUsers;
