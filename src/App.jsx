import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Load from "./pages/Load.jsx";
import Register from "./pages/Register.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Dashbord from "./pages/Adm/Dashbord.jsx";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Loading" element={<Load />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Dashbord" element={<Dashbord />} />
      </Routes>
    </Router>
  );
}

export default App;
