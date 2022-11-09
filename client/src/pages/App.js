import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from "./home/Home";
import List from "./list/List";
import CarparkDetail from "./carparkDetail/carparkDetail";
import 'bootswatch/dist/morph/bootstrap.min.css';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carparks" element={<List />} />
          <Route path="/carparks/:id" element={<CarparkDetail />} />
        </Routes>
      </div>
      
    </BrowserRouter>
  );
}

export default App;
