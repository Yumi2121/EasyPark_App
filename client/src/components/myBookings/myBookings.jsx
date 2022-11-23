import React from "react";
import { getBookings } from "../../services/bookingServices"
import { useEffect, useState } from "react";
import { useGlobalState } from "../../utils/StateContext";

const MyBookings = () => {

    const {user} = useContext(AuthContext);
    // id = user.data._id
    id = "637b1ee778aab202de539826"

    const { store, dispatch } = useGlobalState();
    const [booked, setBooked] = useState();
    const userId = user.

    // try to use useGlobal here
    useEffect(() => {
        if (!user) {
            return;
        }
        async function fetchBookings() {
            let userBookings = await getBookings();
        }
    })



  return (
    <>

    </>
  );
};

export default MyBookings;