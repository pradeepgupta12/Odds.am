import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar"; // Path to Navbar
import HomePage from "../pages/HomePage"; // Path to HomePage
import Footer from "../components/Footer"; // Path to Footer

const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* yaha aur pages add kar sakte ho */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRoutes;
