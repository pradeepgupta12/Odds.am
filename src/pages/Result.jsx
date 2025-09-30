

import React, { useState } from 'react';
import { matchResults } from '../data/matchResults'; // Assuming this is your data import
import { FaFootballBall } from 'react-icons/fa';
import league from '../data/league'; // Import league data for betting contest
import LiveScoreSection from "../pages/LiveScoreSection";
import EventsAndTables from '../pages/EventsAndTables';

// MatchRow Component
const MatchRow = ({ match, sportName }) => {
  const isFinished = match.status === 'Finished';
  const logoStyle = "w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2 rounded-full";

  // Tennis-specific rendering
  if (sportName === 'Tennis') {
    const genericTennisLogo = "🎾";
    return (
      <div className="flex items-center justify-between py-2 sm:py-3 border-b border-gray-100 px-2 sm:px-4 hover:bg-gray-50 transition-colors">
        <div className="text-xs sm:text-sm font-medium text-gray-500 w-10 sm:w-12">{match.time || '--:--'}</div>
        <div className="flex flex-1 items-center justify-center space-x-1 sm:space-x-2">
          {/* Home Player */}
          <div className="flex items-center w-1/3 justify-end text-xs sm:text-sm">
            <span className="text-right truncate max-w-[80px] sm:max-w-[120px]">{match.home_player.name}</span>
            <span className={`text-base sm:text-xl ml-1 sm:ml-2 ${logoStyle}`}>{genericTennisLogo}</span>
          </div>
          {/* Score Box */}
          <div className="flex flex-col items-center w-16 sm:w-28 mx-1 sm:mx-2">
            <span className={`text-sm sm:text-base font-bold ${isFinished ? 'text-gray-900' : 'text-gray-500'}`}>
              {match.score_sets || 'VS'}
            </span>
            {match.score_details && (
              <span className="text-[10px] sm:text-xs text-gray-400 mt-0.5 hidden sm:block">{match.score_details}</span>
            )}
          </div>
          {/* Away Player */}
          <div className="flex items-center w-1/3 justify-start text-xs sm:text-sm">
            <span className={`text-base sm:text-xl mr-1 sm:mr-2 ${logoStyle}`}>{genericTennisLogo}</span>
            <span className="text-left truncate max-w-[80px] sm:max-w-[120px]">{match.away_player.name}</span>
          </div>
        </div>
        {match.status === 'Scheduled' && (
          <div className="text-[10px] sm:text-xs font-semibold text-blue-500 w-10 sm:w-12 text-center">Upcoming</div>
        )}
      </div>
    );
  }

  // General Sports (Football, Ice Hockey, etc.)
  const { home_team: homeTeam, away_team: awayTeam } = match;
  const renderLogo = (team) => {
    const logoSrc = team.logo_url || team.logo_description;
    return logoSrc && logoSrc.startsWith('http') ? (
      <img src={logoSrc} alt={`${team.name} logo`} className={logoStyle} />
    ) : (
      <span className={`text-base sm:text-xl ${logoStyle}`}>🏟️</span>
    );
  };

  return (
    <div className="flex items-center py-2 sm:py-3 border-b border-gray-100 px-2 sm:px-4 hover:bg-gray-50 transition-colors">
      <div className="text-xs sm:text-sm font-medium text-gray-500 w-10 sm:w-12">{match.time || '--:--'}</div>
      <div className="flex flex-1 justify-center items-center space-x-1 sm:space-x-2">
        {/* Home Team */}
        <div className="flex items-center w-1/3 justify-end">
          <span className="text-xs sm:text-sm font-semibold text-gray-800 text-right truncate max-w-[80px] sm:max-w-[120px]">
            {homeTeam.name}
          </span>
          {renderLogo(homeTeam)}
        </div>
        {/* Score Box */}
        <div className="flex flex-col items-center w-16 sm:w-28 mx-1 sm:mx-4">
          <span className={`text-sm sm:text-lg font-extrabold ${isFinished ? 'text-black' : 'text-gray-400'}`}>
            {match.score || (isFinished ? '0:0' : 'VS')}
          </span>
          {match.score_details && (
            <span className="text-[10px] sm:text-xs text-gray-500 mt-0.5 hidden sm:block">{match.score_details}</span>
          )}
        </div>
        {/* Away Team */}
        <div className="flex items-center w-1/3 justify-start">
          {renderLogo(awayTeam)}
          <span className="text-xs sm:text-sm font-semibold text-gray-800 text-left truncate max-w-[80px] sm:max-w-[120px]">
            {awayTeam.name}
          </span>
        </div>
      </div>
    </div>
  );
};

// Main Result Component
const Result = () => {
  const [selectedSport, setSelectedSport] = useState('Football');
  const currentSportData = matchResults.results_data[selectedSport] || [];

  return (
    <div className="pt-[120px]">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-8 lg:py-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {/* Main Content Area (Left Sidebar) */}
          <div className="md:col-span-8 lg:col-span-9">
            <div className="max-w-full sm:max-w-7xl mx-auto bg-gray-50 shadow-lg rounded-lg overflow-hidden">
              {/* Header Bar */}
              <div className="px-3 sm:px-4 py-2 sm:py-3 bg-white border-b border-gray-200 text-xs sm:text-sm text-gray-600 font-medium">
                <span className="text-gray-800 font-bold">Home</span> &gt; <span className="text-red-600">Archive of Results</span>
              </div>

              {/* Sport Navigation Tabs */}
              <div className="flex bg-gray-800 overflow-x-auto flex-nowrap whitespace-nowrap">
                {['Football', 'Tennis', 'Ice Hockey', 'e-Sports', 'Baseball', 'Basketball'].map((sport) => (
                  <button
                    key={sport}
                    className={`
                      px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold transition-colors
                      ${selectedSport === sport ? 'bg-red-600 text-white shadow-md' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}
                    `}
                    onClick={() => setSelectedSport(sport)}
                  >
                    {sport}
                  </button>
                ))}
              </div>

              {/* Match Results List */}
              <div className="p-0">
                {currentSportData.length > 0 ? (
                  currentSportData.map((competition, index) => (
                    <div key={index} className="bg-white mb-1 sm:mb-2 shadow-sm rounded-md border border-gray-200">
                      {/* Competition Header */}
                      <div className="flex justify-between items-center p-2 sm:p-3 bg-gray-100 font-bold text-xs sm:text-sm text-gray-700 cursor-pointer hover:bg-gray-200 transition-colors">
                        <span className="flex items-center">
                          <span className="mr-1 text-sm sm:text-base">
                            {selectedSport === 'Football' ? '⚽' : 
                             selectedSport === 'Tennis' ? '🎾' : 
                             selectedSport === 'Ice Hockey' ? '🏒' : 
                             selectedSport === 'e-Sports' ? '🎮' : 
                             selectedSport === 'Baseball' ? '⚾' : 
                             selectedSport === 'Basketball' ? '🏀' : '🏟️'}
                          </span>
                          <span className="truncate max-w-[200px] sm:max-w-[400px]">{competition.competition}</span>
                          {competition.matchday && (
                            <span className="ml-1 font-normal text-gray-500 text-[10px] sm:text-xs">
                              – {competition.matchday}
                            </span>
                          )}
                        </span>
                        <span className="text-[10px] sm:text-xs text-gray-400">^</span>
                      </div>
                      {/* Match Rows */}
                      {competition.matches.map((match, matchIndex) => (
                        <MatchRow key={matchIndex} match={match} sportName={selectedSport} />
                      ))}
                    </div>
                  ))
                ) : (
                  <div className="p-4 sm:p-8 text-center text-gray-500 text-xs sm:text-sm">
                    No results available for {selectedSport}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="md:col-span-4 lg:col-span-3">
            <div className="sticky top-[120px]">
              {/* Advertisement Section */}
              <div className="rounded-lg p-6 shadow-2xl">
                <h4 className="text-lg text-black font-bold mb-2">Advertisement</h4>
                <p className="text-sm text-black opacity-90 mb-4">Place your ad content here.</p>
                <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                  <div className="w-full h-48 bg-gray-300 rounded flex items-center justify-center cursor-pointer">
                    <span className="text-gray-500">Ad Image Placeholder</span>
                  </div>
                </a>
                <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                  <button className="w-full bg-white text-blue-600 font-bold py-2 px-4 rounded hover:bg-gray-100 transition-colors mt-4">
                    Click Here
                  </button>
                </a>
              </div>

              {/* Betting Contest Section */}
              <div className="bg-teal-600 rounded-lg text-white overflow-hidden shadow-lg text-sm leading-tight mt-6">
                <div className="bg-teal-700 px-6 py-4 text-center">
                  <div className="w-10 h-10 mx-auto mb-2">
                    <img src="/contest-logo.jpg" alt="Contest Logo" className="w-full h-full object-contain rounded-full" />
                  </div>
                  <h3 className="font-bold text-lg">{league.betting_contest.title}</h3>
                  <p className="text-sm opacity-90">{league.betting_contest.subtitle}</p>
                </div>
                <div className="p-3">
                  {league.betting_contest.ranking.map((user, index) => (
                    <div key={index} className="flex items-center justify-between py-3 border-b border-teal-500/30 last:border-b-0">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 flex items-center justify-center">
                          <span className="text-2xl font-bold">{user.position}</span>
                        </div>
                        <div className="w-10 h-10">
                          <img src={user.flag || '/placeholder-logo.jpg'} alt="User Flag" className="w-full h-full object-contain rounded-full" />
                        </div>
                        <div>
                          <div className="font-medium text-sm">{user.username}</div>
                          {user.country && (
                            <div className="text-xs opacity-75 flex items-center space-x-1">
                              <span>🇺🇦</span>
                              <span>{user.country}</span>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold mb-1">
                          {user.prize}
                        </div>
                        <div className="text-xs opacity-90">{user.points.toLocaleString()}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-teal-700 px-6 py-4 text-center">
                  <div className="text-2xl font-bold mb-2">{league.betting_contest.prizes}</div>
                  <button className="bg-white text-teal-700 font-bold py-2 px-6 rounded hover:bg-gray-100 transition-colors">
                    {league.betting_contest.signup}
                  </button>
                </div>
              </div>

              {/* Live Score and Events Sections */}
              <LiveScoreSection />
              <EventsAndTables />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;