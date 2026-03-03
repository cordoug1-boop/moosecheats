import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductGrid from "./ProductGrid";
import Success from "./Success";
import Cancel from "./Cancel";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductGrid />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
      </Routes>
    </Router>
  );
}

export default App;
