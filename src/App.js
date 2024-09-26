import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./Comps/Nav";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Reservation from "./Pages/Reservation";
import OrderOnline from "./Pages/OrderOnline";
import Login from "./Pages/Login";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/order-online" element={<OrderOnline />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
