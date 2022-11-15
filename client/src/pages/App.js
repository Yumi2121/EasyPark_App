import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from "./home/Home";
import SignUp from "./signup/Signup";
import LogIn from "./login/Login"
import List from "./list/List";
import CarparkDetail from "./carparkDetail/carparkDetail";
import 'bootswatch/dist/morph/bootstrap.min.css';
import Navbar from "../components/navbar/NavBar";



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/carparks" element={<List />} />
          <Route path="/carparks/:id" element={<CarparkDetail />} />
        </Routes>
      </div>
      
    </BrowserRouter>
  );
}

export default App;
