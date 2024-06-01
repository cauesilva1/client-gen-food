import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Load from "./pages/Load.jsx";
import Register from "./pages/register.jsx";
import Home from "./pages/home.jsx";
import Login from "./pages/login.jsx";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/loading" element={<Load />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
