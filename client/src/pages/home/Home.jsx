import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Search from "../../components/search/Search";
import Booking from "../../components/booking/Booking";

const Home = () => {
    return (
        <div>
            <Navbar />           
            <div className="homecontainer">
                <Search />
            </div>
            <div>
                <Booking />
            </div>

        </div>
    )
}

export default Home;