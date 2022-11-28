import React from "react";
import Bookings from "../../components/bookings/Bookings"
import Container from 'react-bootstrap/Container';

const History= () => {
    return (
        <div className="history">
            <p>Your Bookings</p>

            <div className="bookings-card">
                <Bookings />
            </div>
        </div>
    )
}

export default History;