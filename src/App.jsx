import React from "react";
import {  Router, Routes, Route } from "react-router-dom";
import Load from "./pages/load";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Home" element={<Load />} />
      </Routes>
    </Router>
  );
};

export default App;
