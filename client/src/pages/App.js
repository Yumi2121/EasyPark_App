import React, { Component } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from "./home/Home";
import Login from "./login/Login"
import List from "./list/List";
import Adminpage from "./adminpage/Adminpage";
import Bookings from "./bookings/Bookings";
// import 'bootswatch/dist/morph/bootstrap.min.css';
import NavbarEP from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import About from "../components/about/About";
import Booking from "./booking/Booking";
import GoogleMapComponent from "../components/googleMap/map"
// custom the bootstrap styling
import 'bootstrap/dist/css/bootstrap.min.css'
import SuccessBooking from "../components/success/success";




function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavbarEP />
        <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/carparks" element={<List />} />

          <Route path="/bookings/" element={<Bookings />} />
          <Route path="/admin/" element={<Adminpage />} />
          <Route path="/carparks/:id" element={<Booking />} />
          <Route path="/map" element={<GoogleMapComponent />} />
          <Route path="success" element={<SuccessBooking />} />


        </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
