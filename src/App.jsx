import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Load from "./pages/Load.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Load />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
