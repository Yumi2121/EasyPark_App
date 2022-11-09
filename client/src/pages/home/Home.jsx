import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Search from "../../components/search/Search";
import Booking from "../../components/booking/Booking";
import "./Home.css"

const Home = () => {
    return (
        <div>
            <Navbar />           
            <Search /> 
            <Booking />

        </div>
    )
}

export default Home;