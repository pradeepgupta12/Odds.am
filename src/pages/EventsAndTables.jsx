

import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FaStar } from "react-icons/fa";
import eventsAndTables from "../data/eventsAndTables";
import bookmakerRating from "../data/bookmakerRating";

const EventsAndTables = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLeague, setSelectedLeague] = useState(eventsAndTables[0]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLeagueSelect = (league) => {
    setSelectedLeague(league);
    setIsDropdownOpen(false);
  };

  const handleTeamClick = (teamName) => {
    navigate(`/events-and-tables-details/${encodeURIComponent(teamName)}`);
  };

  const handleDetailedLeagueTableClick = () => {
    navigate(`/events-and-tables-details/${encodeURIComponent(selectedLeague.league)}`);
  };

  const handleBookmakerClick = (website) => {
    window.open(website, '_blank', 'noopener,noreferrer');
  };

  const getPositionColor = (position) => {
    if (position === 1) return "bg-green-500";
    if (position <= 4) return "bg-green-400";
    if (position <= 6) return "bg-blue-400";
    if (position >= selectedLeague.standings.length - 2) return "bg-red-500";
    return "bg-gray-400";
  };

  return (
    <>
      <Helmet>
        <html lang="en" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Events and Tables - Live League Standings & Bookmaker Ratings | Watchdogs.net</title>
        <meta name="description" content="Explore live league tables, team standings, events, and top bookmaker ratings on Watchdogs.net. Track positions, points, W/D/L records, and get the best odds for football betting." />
        <meta name="keywords" content="league tables, football standings, events and tables, bookmaker ratings, sports events, team positions, betting odds, live scores" />
        <meta name="author" content="Watchdogs Team" />
        <link rel="canonical" href="https://watchdogs.net/events-and-tables" />
        <link rel="icon" href="/favicon.ico" />
        {/* Open Graph Tags */}
        <meta property="og:title" content="Events and Tables - Live League Standings & Bookmaker Ratings | Watchdogs.net" />
        <meta property="og:description" content="Explore live league tables, team standings, events, and top bookmaker ratings on Watchdogs.net. Track positions, points, W/D/L records, and get the best odds for football betting." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://watchdogs.net/events-and-tables" />
        <meta property="og:image" content="https://watchdogs.net/og-tables.jpg" />
        <meta property="og:image:alt" content="League Tables & Events - Watchdogs.net" />
        <meta property="og:site_name" content="Watchdogs.net" />
        {/* Structured Data: WebPage with ItemList for Leagues/Bookmakers */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Events and Tables - League Standings & Bookmaker Ratings",
            "url": "https://watchdogs.net/events-and-tables",
            "description": "Live league tables, team standings, and bookmaker ratings for sports betting.",
            "publisher": {
              "@type": "Organization",
              "name": "Watchdogs.net",
              "url": "https://watchdogs.net/",
              "logo": {
                "@type": "ImageObject",
                "url": "https://watchdogs.net/logo.jpg"
              }
            },
            "mainEntity": {
              "@type": "ItemList",
              "name": "Top Bookmaker Ratings",
              "itemListElement": bookmakerRating.slice(0, 5).map((item, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "name": item.name,
                "description": `${item.rating} stars - ${item.trafficRank}`,
                "image": item.logo,
                "url": "https://watchdogs.net/bookmaker/" + item.name.toLowerCase().replace(/\s+/g, '-')
              }))
            }
          })}
        </script>
      </Helmet>
      <div className="w-full bg-white">
        {/* Heading */}
        <h2 className="text-lg font-bold mb-4 px-4 py-3">
          <span className="text-red-600">▶</span> EVENTS AND TABLES
        </h2>

        {/* League Selector */}
        <div className="relative mb-2 px-4">
          <div
            onClick={toggleDropdown}
            className="flex items-center justify-between cursor-pointer py-2"
          >
            <div className="flex items-center gap-2">
              <img
                src={selectedLeague.countryLogo}
                alt="country flag"
                className="w-5 h-4 object-contain"
              />
              <span className="font-medium text-base text-gray-800">
                {selectedLeague.league}
              </span>
            </div>
            {isDropdownOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </div>

          {isDropdownOpen && (
            <div className="absolute mt-1 w-64 bg-white border rounded-md shadow-lg z-20">
              {eventsAndTables.map((league, index) => (
                <div
                  key={index}
                  onClick={() => handleLeagueSelect(league)}
                  className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 cursor-pointer"
                >
                  <img
                    src={league.countryLogo}
                    alt="country flag"
                    className="w-4 h-3 object-contain"
                  />
                  <span className="text-sm">{league.league}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* League Table */}
        <div className="overflow-hidden">
          <div className="grid grid-cols-12 gap-1 px-4 py-2 bg-gray-50 text-xs font-medium text-gray-600 uppercase">
            <div className="col-span-1"></div>
            <div className="col-span-6">Team</div>
            <div className="col-span-1 text-center">Pl</div>
            <div className="col-span-2 text-center">W/D/L</div>
            <div className="col-span-2 text-center">Pts</div>
          </div>
          <div>
            {selectedLeague.standings.map((team) => (
              <div
                key={team.position}
                className="group grid grid-cols-12 gap-1 px-4 py-2 border-b border-gray-100 hover:bg-gray-50 transition-colors items-center"
              >
                <div className="col-span-1 flex justify-start">
                  <div
                    className={`w-5 h-5 ${getPositionColor(
                      team.position
                    )} rounded flex items-center justify-center text-white text-xs font-bold`}
                  >
                    {team.position}
                  </div>
                </div>
                <div className="col-span-6 flex items-center gap-2">
                  <img
                    src={team.logo}
                    alt={team.team}
                    className="w-4 h-4 object-contain"
                  />
                  <span 
                    className="text-sm font-normal text-gray-900 group-hover:text-blue-600 transition-colors cursor-pointer"
                    onClick={() => handleTeamClick(team.team)}
                  >
                    {team.team}
                  </span>
                </div>
                <div className="col-span-1 text-center text-sm text-gray-700">
                  {team.played}
                </div>
                <div className="col-span-2 text-center text-sm text-gray-700">
                  {team.record}
                </div>
                <div className="col-span-2 text-center text-sm font-bold text-gray-900">
                  {team.points}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed League Table Button */}
        <button 
          onClick={handleDetailedLeagueTableClick}
          className="w-full bg-gray-500 text-white font-medium text-sm sm:text-base py-1 sm:py-1 mt-2 sm:mt-3 rounded-md hover:bg-red-600 cursor-pointer transition-colors duration-200"
        >
          Detailed League Table
        </button>

        {/* ====================== Bookmaker Rating Section ====================== */}
        <div className="mt-6 px-4">
          <h2 className="text-lg font-bold mb-4">
            <span className="text-red-600">▶</span> ODDS.AM BOOKMAKER RATING
          </h2>
          <p className="text-sm text-gray-600 mb-3">
            This unique rating is based on several criteria, including: traffic
            rank, user reviews and payout.
          </p>
          <div className="space-y-3">
            {bookmakerRating.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-white border rounded-lg p-3 shadow-sm hover:shadow-md transition"
              >
                {/* Logo */}
                <div className="flex items-center gap-3">
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="w-24 h-8 object-contain cursor-pointer"
                    onClick={() => handleBookmakerClick(item.website)}
                  />
                </div>
                {/* Rating */}
                <div className="flex items-center gap-2">
                  <span className="text-gray-900 font-medium text-base">
                    {item.rating}
                  </span>
                  <div className="flex">
                    {Array(5)
                      .fill()
                      .map((_, i) => (
                        <FaStar
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.round(item.rating)
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* ===================================================================== */}
      </div>
    </>
  );
};

export default EventsAndTables;