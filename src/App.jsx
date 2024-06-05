import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Load from "./pages/Load.jsx";
import Register from "./pages/Register.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Dashbord from "./pages/Adm/Dashbord.jsx";
import Produtos from "./pages/Adm/produtos.jsx";
import Perfil from "./pages/Perfil.jsx";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Loading" element={<Load />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Perfil" element={<Perfil />} />

        <Route path="/Dashbord" element={<Dashbord />} />
        <Route path="/produtos" element={<Produtos />} />
      </Routes>
    </Router>
  );
}

export default App;
