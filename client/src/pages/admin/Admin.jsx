import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
// import Admin from "../../components/admin/Admin";
import "./Admin.css";
import {Outlet} from "react-router-dom";

const Home = () => {
    return (
        <div style={{display: 'flex'}}>
            <Sidebar />
            <div style={{marginLeft: '270px'}}>
                <Outlet />
            </div>
        </div>
    )
}

export default Home;