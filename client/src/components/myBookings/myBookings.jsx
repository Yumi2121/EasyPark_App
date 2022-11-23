import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../utils/AuthContext";
import { useFetch } from "../../utils/useFetch";

const MyBookings = () => {

    const {user} = useContext(AuthContext);
    // id = user.data._id
    id = "637b1ee778aab202de539826"



  const {data }  = useFetch(`/api/bookings/${parseInt(id)}/all`);
    console.log(data)

  return (
    <>

    </>
  );
};

export default MyBookings;