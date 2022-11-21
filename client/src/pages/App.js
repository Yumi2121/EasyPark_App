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
// import 'bootswatch/dist/morph/bootstrap.min.css';
import NavbarEP from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import About from "../components/about/About";
import Booking from "./booking/Booking";
import GoogleMapComponent from "../components/googleMap/map"



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
          <Route path="/carparks/:id" element={<Booking />} />
          <Route path="/map" element={<GoogleMapComponent />} />

        </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
