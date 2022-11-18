import React from "react";
import Search from "../../components/search/Search";
import List from "../list/List";
import About from "../../components/about/About"
import Booking from "../../components/booking/Booking";


const Home = () => {
    return (
        <div>          
            <Search /> 
            <About />
            <Booking />
        </div>
    )
}

export default Home;