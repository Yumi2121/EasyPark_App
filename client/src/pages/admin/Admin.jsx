import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
// import Admin from "../../components/admin/Admin";
import "./Admin.css";
import AllBookingUsers from "../../components/admin/AllBookingUsers";
import AllUsers from "../../components/admin/AllUsers";





const Home = () => {
    return (
        <div>
            {/* <Sidebar />  */}
            <div>
                <h2>This is all Bookings with Users</h2>
                <AllBookingUsers /> 
            </div>
            <div>
                <h2>This is all Users</h2>
                <AllUsers />   
            </div>
        </div>
    )
}

export default Home;