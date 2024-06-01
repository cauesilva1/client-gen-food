import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Load from "./pages/Load";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Load />} />

      </Routes>
    </Router>
  );
}

export default App;
