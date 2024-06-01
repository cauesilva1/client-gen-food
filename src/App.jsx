import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Load from "./pages/load.jsx";
import Home from "./pages/home.jsx";
import Login from "./pages/login.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/load" element={<Load />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
