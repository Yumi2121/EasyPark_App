import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
// import Admin from "../../components/admin/Admin";
import "./Admin.css";
import AllBookingUsers from "../../components/admin/AllBookingUsers";




const Home = () => {
    return (
        <div>
            {/* <Sidebar />  */}
            <div>
                <AllBookingUsers />          
            </div>
        </div>
    )
}

export default Home;