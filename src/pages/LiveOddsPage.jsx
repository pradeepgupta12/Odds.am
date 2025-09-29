import React, { useState } from 'react';
import { LiveOdds } from '../data/LiveOdds'; // Import the data from your JS file
import league from '../data/league';
import LiveScoreSection from "../pages/LiveScoreSection";
import EventsAndTables from '../pages/EventsAndTables';

const LiveOddsPage = () => {
  const [activeSport, setActiveSport] = useState('Football');
  const [activeTab, setActiveTab] = useState('All Matches');

  const activeSportData = LiveOdds.sports.find(sport => sport.name === activeSport);

  // Team logo component for displaying actual images or placeholders
  const TeamLogo = ({ team }) => (
    <img 
      src={team.logo} 
      alt={team.name}
      className="w-6 h-6 object-contain"
      onError={(e) => {
        e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiByeD0iNCIgZmlsbD0iI0Y1RjVGNSIvPgo8cGF0aCBkPSJNOCAxMkwxMiA4TDE2IDEyTDEyIDE2TDggMTJaIiBmaWxsPSIjOTQ5NEE0Ii8+Cjwvc3ZnPgo=';
      }}
    />
  );

  return (
    <div className="min-h-screen bg-gray-50 pt-[120px] mt-5">
      {/* Breadcrumb */}
      <div className="bg-white px-4 py-3">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center text-sm text-gray-600">
            <span className="hover:text-blue-600 cursor-pointer">Home</span>
            <span className="mx-2">›</span>
            <span className="hover:text-blue-600 cursor-pointer">Live Odds</span>
            <span className="mx-2">›</span>
            <span className="text-gray-900">{activeSport}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {/* Main Content Area */}
          <div className="md:col-span-8 lg:col-span-9">
            {/* Sports Navigation Tabs */}
            <div className="mb-6 overflow-x-auto">
              <div className="flex bg-gray-600 min-w-max">
                {LiveOdds.sports.map((sport, index) => (
                  <div
                    key={sport.name}
                    className="relative"
                    style={{ 
                      clipPath: index === LiveOdds.sports.length - 1 ? 'none' : 'polygon(0 0, calc(100% - 20px) 0, 100% 100%, 0 100%)',
                      marginRight: index === LiveOdds.sports.length - 1 ? '0' : '-20px',
                      zIndex: LiveOdds.sports.length - index
                    }}
                  >
                    <button
                      onClick={() => setActiveSport(sport.name)}
                      className={`px-6 py-3 text-sm font-medium transition-colors duration-200 whitespace-nowrap ${
                        activeSport === sport.name
                          ? 'bg-red-600 text-white'
                          : 'bg-gray-600 text-white hover:bg-gray-500'
                      }`}
                    >
                      {sport.name}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Filter Tabs */}
            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                {['All Matches', 'Only with Odds', 'Betting Contest'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 text-sm font-medium rounded transition-colors duration-200 ${
                      activeTab === tab
                        ? ' implantable bg-red-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
                <input
                  type="text"
                  placeholder="Search for a Team or Competition"
                  className="px-4 py-2 border border-gray-300 rounded text-sm flex-1 min-w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <select className="px-4 py-2 border border-gray-300 rounded text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>3 Way</option>
                  <option>2 Way</option>
                </select>
              </div>
            </div>

            {/* Matches Content */}
            {activeSportData && activeSportData.leagues.map((league, leagueIndex) => (
              <div key={leagueIndex} className="bg-white rounded-lg shadow-sm mb-6 overflow-hidden">
                {/* League Header */}
                <div className="bg-gray-100 px-4 py-3 border-b">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">🇰🇷</span>
                      <span className="font-medium text-gray-900">{league.country}. {league.league}</span>
                      <span className="text-gray-600">- Matchday {league.matchday}</span>
                    </div>
                    <div className="hidden sm:flex items-center gap-8 text-sm font-medium text-gray-700">
                      <span>1</span>
                      <span>X</span>
                      <span>2</span>
                    </div>
                  </div>
                </div>

                {/* Matches */}
                {league.matches.map((match, matchIndex) => (
                  <div key={matchIndex} className="border-b last:border-b-0 hover:bg-gray-50 transition-colors duration-200">
                    <div className="px-4 py-4">
                      <div className="flex items-center justify-between">
                        {/* Left Section - Time and Duration */}
                        <div className="flex flex-col items-center min-w-0 w-16">
                          <div className="text-sm font-medium text-gray-900">{match.time}</div>
                          <div className="text-xs text-red-600 font-medium whitespace-nowrap">{match.duration}</div>
                        </div>

                        {/* Middle Section - Teams and Scores */}
                        <div className="flex-1 mx-4">
                          <div className="space-y-2">
                            {/* Team 1 */}
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2 min-w-0 flex-1">
                                <TeamLogo team={match.team1} />
                                <span className="font-medium text-gray-900 text-sm truncate">{match.team1.name}</span>
                              </div>
                              <div className="text-lg font-bold text-red-600 ml-2">
                                {match.team1.score === '2.0' ? '1:0' : '0:0'}
                              </div>
                            </div>
                            
                            {/* Team 2 */}
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2 min-w-0 flex-1">
                                <TeamLogo team={match.team2} />
                                <span className="font-medium text-gray-900 text-sm truncate">{match.team2.name}</span>
                                {match.team2.name === 'Pohang Steelers' && (
                                  <div className="w-3 h-3 bg-red-600 rounded-sm flex-shrink-0"></div>
                                )}
                              </div>
                              <div className="text-lg font-bold text-red-600 ml-2">
                                {match.team2.score === '0.0' ? '0:0' : '0:0'}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Right Section - Odds */}
                        <div className="flex gap-2 flex-shrink-0">
                          <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded text-sm font-medium transition-colors duration-200 min-w-12">
                            {match.odds['1']}
                          </button>
                          {match.odds.X && (
                            <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded text-sm font-medium transition-colors duration-200 min-w-12">
                              {match.odds.X}
                            </button>
                          )}
                          <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded text-sm font-medium transition-colors duration-200 min-w-12">
                            {match.odds['2']}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}

            {/* No matches message */}
            {!activeSportData || !activeSportData.leagues.length && (
              <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                <div className="text-gray-500 text-lg">No matches available for {activeSport}</div>
              </div>
            )}
          </div>

          {/* Right Sidebar */}
          <div className="md:col-span-4 lg:col-span-3">
            <div className="sticky top-[120px]">
              {/* Advertisement */}
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

              {/* Betting Contest */}
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

              {/* LiveScoreSection and EventsAndTables */}
              <LiveScoreSection />
              <EventsAndTables />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveOddsPage;