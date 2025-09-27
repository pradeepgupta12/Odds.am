import React, { useState } from "react";
import liveScore from "../data/liveScore";

const LiveScoreSection = () => {
  const [activeTab, setActiveTab] = useState("Football");

  const renderFootball = () =>
    liveScore.Football.map((match, i) => (
      <div
        key={i}
        className="flex items-center justify-between py-1 border-b border-gray-200 text-xs sm:text-sm md:text-base"
      >
        <div className="flex items-center space-x-1 sm:space-x-2 min-w-0">
          <img
            src={match.team1.logo}
            alt={match.team1.name}
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full flex-shrink-0"
          />
          <span className="truncate">{match.team1.name}</span>
        </div>
        <span className="font-bold mx-1 sm:mx-2 md:mx-4 flex-shrink-0">
          {match.team1.score}:{match.team2.score}
        </span>
        <div className="flex items-center space-x-1 sm:space-x-2 min-w-0">
          <span className="truncate">{match.team2.name}</span>
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
            key={i}
            className="flex items-center justify-between py-1 border-b border-gray-200 text-xs sm:text-sm md:text-base"
          >
            <div className="flex items-center space-x-1 sm:space-x-2 min-w-0">
              <img
                src={match.player1.logo}
                alt={match.player1.name}
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full flex-shrink-0"
              />
              <span className="truncate">{match.player1.name}</span>
            </div>
            <span className="font-bold mx-1 sm:mx-2 md:mx-4 flex-shrink-0">
              {match.player1.score}:{match.player2.score}
            </span>
            <div className="flex items-center space-x-1 sm:space-x-2 min-w-0">
              <span className="truncate">{match.player2.name}</span>
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
        key={i}
        className="flex items-center justify-between py-1 border-b border-gray-200 text-xs sm:text-sm md:text-base"
      >
        <div className="flex items-center space-x-1 sm:space-x-2 min-w-0">
          <img
            src={match.team1.logo}
            alt={match.team1.name}
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full flex-shrink-0"
          />
          <span className="truncate">{match.team1.name}</span>
        </div>
        <span className="font-bold mx-1 sm:mx-2 md:mx-4 flex-shrink-0">
          {match.team1.score}:{match.team2.score}
        </span>
        <div className="flex items-center space-x-1 sm:space-x-2 min-w-0">
          <span className="truncate">{match.team2.name}</span>
          <img
            src={match.team2.logo}
            alt={match.team2.name}
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full flex-shrink-0"
          />
        </div>
      </div>
    ));

  return (
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
      >
        Full Live Score
      </button>
    </div>
  );
};

export default LiveScoreSection;