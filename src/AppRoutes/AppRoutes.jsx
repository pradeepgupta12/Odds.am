import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar"; // Path to Navbar
import HomePage from "../pages/HomePage"; // Path to HomePage
import Footer from "../components/Footer"; // Path to Footer

import LiveOddsPage from "../pages/LiveOddsPage";
import UpcomingMatchesPage from "../pages/UpcomingMatchesPage";
import BettingContest from "../pages/BettingContest";
import SureBets from "../pages/SureBets";
import BookMaker from "../pages/BookMaker";
import Result from "../pages/Result";

const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
         <Route path="/live-odds" element={<LiveOddsPage />} />
         <Route path="/Upcoming-match" element={<UpcomingMatchesPage/>} />
         <Route path="/Betting-contest" element={<BettingContest/>} />
         <Route path="/Sure-bets" element={<SureBets/>} />
         <Route path="/Book-maker" element={<BookMaker/>} />
         <Route path="/Result" element={<Result/>} />
        {/* yaha aur pages add kar sakte ho */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRoutes;
