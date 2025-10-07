

import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, User } from 'lucide-react';
import { navbarData } from '../data/navbarData.js';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthDropdownOpen, setIsAuthDropdownOpen] = useState(false);
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [selectedGame, setSelectedGame] = useState(navbarData.top_bonus_offer.games[0]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleAuthDropdown = () => {
    setIsAuthDropdownOpen(!isAuthDropdownOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const closeAuthDropdown = () => {
    setIsAuthDropdownOpen(false);
  };

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * navbarData.top_bonus_offer.games.length);
    setSelectedGame(navbarData.top_bonus_offer.games[randomIndex]);
  }, []);

  // Auto-advance for Top Events
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEventIndex((prevIndex) => 
        prevIndex === navbarData.top_events.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const currentEvent = navbarData.top_events[currentEventIndex];

  // Function to truncate text to two words
  const truncateToTwoWords = (text) => {
    const words = text.split(' ');
    return words.slice(0, 2).join(' ');
  };

  // Function to truncate offer text to two words
  const truncateOffer = (text) => {
    const words = text.split(' ');
    return words.slice(0, 2).join(' ');
  };

  return (
    <nav className="bg-gray-800 text-white text-lg fixed w-full top-0 z-50">
      {/* Top Header */}
      <div className="bg-gray-700 px-4 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left Section */}
          <div className="flex items-center space-x-4">
            {/* Hamburger Menu */}
            <button 
              className="lg:hidden"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>

            {/* Logo */}
            <div className="text-4xl font-bold">
              <Link to="/" className="text-white">ODDS</Link>
              <Link to="/" className="text-red-500">.am</Link>
            </div>

            {/* Top Events Banner and Circles */}
            <div className="hidden lg:flex flex-col items-center">
              <div className="bg-red-600 px-3 py-1 rounded text-base font-bold text-white">
                <span>Top Events</span>
              </div>
              <div className="flex justify-center space-x-2 mt-1">
                {navbarData.top_events.map((_, index) => (
                  <div
                    key={index}
                    className={`w-1.5 h-1.5 rounded-full cursor-pointer ${index === currentEventIndex ? 'bg-white' : 'bg-gray-300 opacity-60'}`}
                    onClick={() => setCurrentEventIndex(index)}
                  ></div>
                ))}
              </div>
            </div>

            {/* Event Info */}
            <div className="hidden lg:flex items-center space-x-1 w-64 cursor-pointer">
              <Link to={`/event/${currentEventIndex}`} className="flex items-center space-x-1 w-full">
                <div className="p-1.5 rounded ">
                  <img src={currentEvent.logo} alt={currentEvent.title} className="w-10 h-10 object-cover-contain" />
                </div>
                <div className="text-base overflow-hidden">
                  <div className="font-semibold truncate hover:underline">{truncateToTwoWords(currentEvent.title)}</div>
                  <div className="text-gray-300 truncate">{truncateToTwoWords(currentEvent.description)}</div>
                </div>
              </Link>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-2">
            {/* Search Bar (Tablet) */}
            <div className="hidden sm:flex lg:hidden relative">
              <input 
                type="text" 
                placeholder="Search" 
                className="bg-gray-700 text-white px-4 py-2 rounded border border-gray-600 focus:border-red-500 focus:outline-none w-64 h-9 text-lg"
              />
            </div>

            {/* Auth Dropdown Toggle (Mobile and Tablet) */}
            <div className="lg:hidden relative">
              <button 
                className="lg:hidden"
                onClick={toggleAuthDropdown}
              >
                <User className="w-8 h-8" />
              </button>
              {isAuthDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 bg-gray-700 rounded border border-gray-600 flex flex-col space-y-2 p-2 z-50">
                  <Link to="/login" className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-lg font-semibold text-white w-full" onClick={closeAuthDropdown}>
                    Login
                  </Link>
                  <Link to="/signup" className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-lg font-semibold text-white w-full" onClick={closeAuthDropdown}>
                    Sign Up
                  </Link>
                </div>
              )}
            </div>

            {/* Top Bonus Offer */}
            <div className="hidden xl:flex items-center space-x-2">
              <div className="bg-red-600 px-2 py-0.5 rounded text-base font-bold text-white">
                {navbarData.top_bonus_offer.name}
              </div>
              <Link to={selectedGame.website} className="bg-black px-2 py-1 rounded font-bold text-base cursor-pointer">
                <img src={selectedGame.logo} alt={selectedGame.name} className="h-6 object-cover-contain" />
              </Link>
              <div className="text-base text-gray-300 w-32 truncate">{truncateOffer(selectedGame.offer)}</div>
            </div>

            {/* Auth Buttons (Desktop) */}
            <div className="hidden lg:flex items-center space-x-0.5">
              <Link to="/login" className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-base font-semibold">
                Login
              </Link>
              <Link to="/signup" className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-base font-semibold">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-gray-800 px-4 py-3 h-14">
        <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-2 h-full">
            <Link to="/live-odds" className="text-white hover:text-red-400 font-semibold text-lg">LIVE ODDS</Link>
            <span className="text-gray-500 text-lg">/</span>
            <Link to="/Upcoming-match" className="text-white hover:text-red-400 font-semibold text-lg">UPCOMING MATCHES</Link>
            <span className="text-gray-500 text-lg">/</span>
            <Link to="/Betting-contest" className="text-white hover:text-red-400 font-semibold text-lg">BETTING CONTEST</Link>
            <span className="text-gray-500 text-lg">/</span>
            <Link to="/Sure-bets" className="text-white hover:text-red-400 font-semibold text-lg">SURE BETS</Link>
            <span className="text-gray-500 text-lg">/</span>
            <Link to="/Book-maker" className="text-white hover:text-red-400 font-semibold text-lg">BOOKMAKERS</Link>
            <span className="text-gray-500 text-lg">/</span>
            <Link to="/Result" className="text-white hover:text-red-400 font-semibold text-lg">RESULTS</Link>
            <span className="text-gray-500 text-lg">/</span>
            <Link to="/Tips" className="text-white hover:text-red-400 font-semibold text-lg">TIPS</Link>
            <span className="text-gray-500 text-lg">/</span>
            <Link to="/Faq" className="text-white hover:text-red-400 font-semibold text-lg">FAQ</Link>
          </div>

          {/* Search Bar (Mobile and Desktop) */}
          <div className="relative flex justify-center sm:hidden lg:flex lg:justify-end w-full lg:w-auto">
            <input 
              type="text" 
              placeholder="Search" 
              className="bg-gray-700 text-white px-4 py-2 rounded border border-gray-600 focus:border-red-500 focus:outline-none w-64 h-9 text-lg"
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-gray-800 text-white pt-4 w-screen fixed top-[88px] left-0 z-50 shadow-lg">
          <div className="px-4">
            <div className="flex flex-col space-y-2">
              <Link to="/live-odds" className="text-white hover:text-red-400 font-semibold text-lg py-2" onClick={closeMobileMenu}>LIVE ODDS</Link>
              <Link to="/Upcoming-match" className="text-white hover:text-red-400 font-semibold text-lg py-2" onClick={closeMobileMenu}>UPCOMING MATCHES</Link>
              <Link to="/Betting-contest" className="text-white hover:text-red-400 font-semibold text-lg py-2" onClick={closeMobileMenu}>BETTING CONTEST</Link>
              <Link to="/Sure-bets" className="text-white hover:text-red-400 font-semibold text-lg py-2" onClick={closeMobileMenu}>SURE BETS</Link>
              <Link to="/Book-maker" className="text-white hover:text-red-400 font-semibold text-lg py-2" onClick={closeMobileMenu}>BOOKMAKERS</Link>
              <Link to="/Result" className="text-white hover:text-red-400 font-semibold text-lg py-2" onClick={closeMobileMenu}>RESULTS</Link>
              <Link to="/Tips" className="text-white hover:text-red-400 font-semibold text-lg py-2" onClick={closeMobileMenu}>TIPS</Link>
              <Link to="/Faq" className="text-white hover:text-red-400 font-semibold text-lg py-2" onClick={closeMobileMenu}>FAQ</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}