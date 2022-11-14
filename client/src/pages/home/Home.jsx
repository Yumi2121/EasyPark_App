import React from "react";
import Search from "../../components/search/Search";
import Booking from "../../components/booking/Booking";
import "./home.css"
import List from "../list/List";

const Home = () => {
    return (
        <div>          
            <Search /> 
            <Booking />
    

        </div>
    )
}

export default Home;