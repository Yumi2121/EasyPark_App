import { React, useState, useEffect, useReducer } from "react";
import { StateContext } from "../utils/StateContext";
import reducer from "../utils/StateReducer";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from "./home/Home";
import Login from "./login/Login"
import List from "./list/List";
import Admin from "./admin/Admin"
// import 'bootswatch/dist/morph/bootstrap.min.css';
import NavbarEP from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import About from "../components/about/About";
import Booking from "./booking/Booking";
import GoogleMapComponent from "../components/googleMap/map"
// custom the bootstrap styling
import 'bootstrap/dist/css/bootstrap.min.css'
import SuccessBooking from "../components/success/success";
import AllBookingUsers from "../components/admin/AllBookingUsers";
import AllUsers from "../components/admin/AllUsers";



function App() {
  const initialState = {
    bookings: [],
    loggedInUser: sessionStorage.getItem("user") || null,
    auth: sessionStorage.getItem("token") || null,
  }

  const [store, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={{ store, dispatch }}>
      <BrowserRouter>
        <div className="App">
          <NavbarEP />
          <main style={{marginTop: '56px'}}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="auth/login" element={<Login />} />
              <Route path="carparks" element={<List />} />
              <Route path="carparks/:id" element={<Booking />} />
              <Route path="map" element={<GoogleMapComponent />} />
              <Route path="success" element={<SuccessBooking />} />
              <Route path="admin" element={<Admin />} >
                <Route path="bookings" element={<AllBookingUsers />} />
                <Route path="users" element={<AllUsers />} />
              </Route>
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </StateContext.Provider>
  );
}

export default App;
