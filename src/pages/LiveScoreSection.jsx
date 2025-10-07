

import React, { useState } from "react";
import { Helmet } from 'react-helmet';
import { useNavigate } from "react-router-dom";
import liveScore from "../data/liveScore";

const LiveScoreSection = () => {
  const [activeTab, setActiveTab] = useState("Football");
  const navigate = useNavigate();

  const handleFullLiveScoreClick = () => {
    navigate("/live-score-details");
  };

  const handleMatchClick = (matchId) => {
    // Navigate using the id from match data
    navigate(`/live-score-details/${matchId}`);
  };

  const renderFootball = () =>
    liveScore.Football.map((match, i) => (
      <div
        key={match.id || i}  // Use id if available
        className="flex items-center justify-between py-1 border-b border-gray-200 text-xs sm:text-sm md:text-base hover:bg-blue-50 cursor-pointer transition-colors duration-200"
        onClick={() => handleMatchClick(match.id || `football-${i}`)}  // Fallback to old composite if no id
      >
        <div className="flex items-center space-x-1 sm:space-x-2 min-w-0">
          <img
            src={match.team1.logo}
            alt={match.team1.name}
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full flex-shrink-0"
          />
          <span className="truncate hover:text-blue-600 cursor-pointer transition-colors duration-200">{match.team1.name}</span>
        </div>
        <span className="font-bold mx-1 sm:mx-2 md:mx-4 flex-shrink-0">
          {match.team1.score}:{match.team2.score}
        </span>
        <div className="flex items-center space-x-1 sm:space-x-2 min-w-0">
          <span className="truncate hover:text-blue-600 cursor-pointer transition-colors duration-200">{match.team2.name}</span>
          <img
            src={match.team2.logo}
            alt={match.team2.name}
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full flex-shrink-0"
          />
        </div>
      </div>
    ));

  const renderTennis = () =>
    Object.entries(liveScore.Tennis).map(([tournament, matches], idx) => (
      <div key={idx} className="mb-2 sm:mb-3">
        <h4 className="font-semibold text-gray-700 text-xs sm:text-sm mb-1">
          {tournament.replace("_", " ")}
        </h4>
        {matches.map((match, i) => (
          <div
            key={match.id || i}
            className="flex items-center justify-between py-1 border-b border-gray-200 text-xs sm:text-sm md:text-base hover:bg-blue-50 cursor-pointer transition-colors duration-200"
            onClick={() => handleMatchClick(match.id || `tennis-${tournament.toLowerCase().replace(/ /g, '_')}-${i}`)}
          >
            <div className="flex items-center space-x-1 sm:space-x-2 min-w-0">
              <img
                src={match.player1.logo}
                alt={match.player1.name}
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full flex-shrink-0"
              />
              <span className="truncate hover:text-blue-600 cursor-pointer transition-colors duration-200">{match.player1.name}</span>
            </div>
            <span className="font-bold mx-1 sm:mx-2 md:mx-4 flex-shrink-0">
              {match.player1.score}:{match.player2.score}
            </span>
            <div className="flex items-center space-x-1 sm:space-x-2 min-w-0">
              <span className="truncate hover:text-blue-600 cursor-pointer transition-colors duration-200">{match.player2.name}</span>
              <img
                src={match.player2.logo}
                alt={match.player2.name}
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full flex-shrink-0"
              />
            </div>
          </div>
        ))}
      </div>
    ));

  const renderAussie = () =>
    liveScore.AussieRules.map((match, i) => (
      <div
        key={match.id || i}
        className="flex items-center justify-between py-1 border-b border-gray-200 text-xs sm:text-sm md:text-base hover:bg-blue-50 cursor-pointer transition-colors duration-200"
        onClick={() => handleMatchClick(match.id || `aussierules-${i}`)}
      >
        <div className="flex items-center space-x-1 sm:space-x-2 min-w-0">
          <img
            src={match.team1.logo}
            alt={match.team1.name}
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full flex-shrink-0"
          />
          <span className="truncate hover:text-blue-600 cursor-pointer transition-colors duration-200">{match.team1.name}</span>
        </div>
        <span className="font-bold mx-1 sm:mx-2 md:mx-4 flex-shrink-0">
          {match.team1.score}:{match.team2.score}
        </span>
        <div className="flex items-center space-x-1 sm:space-x-2 min-w-0">
          <span className="truncate hover:text-blue-600 cursor-pointer transition-colors duration-200">{match.team2.name}</span>
          <img
            src={match.team2.logo}
            alt={match.team2.name}
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full flex-shrink-0"
          />
        </div>
      </div>
    ));

  return (
    <React.Fragment>
      <Helmet>
        <html lang="en" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Live Scores - Real-time Updates for Football, Tennis, Aussie Rules | Watchdogs.net</title>
        <meta name="description" content="Stay updated with real-time live scores for Football, Tennis, Aussie Rules, and more sports on Watchdogs.net. Quick access to ongoing matches and results." />
        <meta name="keywords" content="live scores, football live scores, tennis scores, aussie rules, real-time updates, match results" />
        <meta name="author" content="Watchdogs Team" />
        <link rel="canonical" href="https://watchdogs.net/live-scores" />
        <link rel="icon" href="/favicon.ico" />
        {/* Open Graph Tags */}
        <meta property="og:title" content="Live Scores - Real-time Updates for Football, Tennis, Aussie Rules | Watchdogs.net" />
        <meta property="og:description" content="Stay updated with real-time live scores for Football, Tennis, Aussie Rules, and more sports on Watchdogs.net." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://watchdogs.net/live-scores" />
        <meta property="og:image" content="https://watchdogs.net/og-live-scores.jpg" />
        <meta property="og:image:alt" content="Live Scores - Watchdogs.net" />
        <meta property="og:site_name" content="Watchdogs.net" />
        {/* Structured Data: WebPage with ItemList for Live Events */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Live Scores",
            "url": "https://watchdogs.net/live-scores",
            "description": "Real-time live scores for various sports including Football, Tennis, and Aussie Rules.",
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
              "name": "Live Events",
              "itemListElement": [
                ...liveScore.Football.slice(0, 3).map((event, index) => ({
                  "@type": "ListItem",
                  "position": index + 1,
                  "name": `${event.team1.name} vs ${event.team2.name}`,
                  "description": `Football - Live Score: ${event.team1.score}-${event.team2.score}`,
                  "url": `https://watchdogs.net/live-score-details/${event.id || `football-${index}`}`
                })),
                ...Object.values(liveScore.Tennis).flat().slice(0, 2).map((event, index) => ({
                  "@type": "ListItem",
                  "position": index + 4,
                  "name": `${event.player1.name} vs ${event.player2.name}`,
                  "description": `Tennis - Live Score: ${event.player1.score}-${event.player2.score}`,
                  "url": `https://watchdogs.net/live-score-details/${event.id || `tennis-${index}`}`
                }))
              ]
            }
          })}
        </script>
      </Helmet>
      <div className="bg-white rounded-lg shadow-lg p-2 sm:p-3 md:p-4 mt-3 sm:mt-4 w-full max-w-full mx-auto box-border">
        <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-800 mb-1 sm:mb-2">
          ▶ LIVE SCORE
        </h3>

        {/* Tabs */}
        <div className="flex space-x-2 sm:space-x-3 md:space-x-4 border-b mb-2 sm:mb-3 overflow-x-auto">
          {["Football", "Tennis", "AussieRules"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-2 py-1 font-medium text-xs sm:text-sm whitespace-nowrap ${
                activeTab === tab
                  ? "border-b-2 border-red-600 text-red-600"
                  : "text-gray-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Matches */}
        <div className="overflow-x-auto">
          {activeTab === "Football" && renderFootball()}
          {activeTab === "Tennis" && renderTennis()}
          {activeTab === "AussieRules" && renderAussie()}
        </div>

        {/* Full Live Score Button */}
        <button
          className="w-full bg-gray-500 text-white font-medium text-xs sm:text-sm md:text-base py-1 sm:py-2.5 md:py-1 mt-2 sm:mt-3 rounded-md hover:bg-red-600 cursor-pointer transition-colors duration-200"
          onClick={handleFullLiveScoreClick}
        >
          Full Live Score
        </button>
      </div>
    </React.Fragment>
  );
};

export default LiveScoreSection;