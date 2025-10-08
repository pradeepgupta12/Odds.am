

import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { LiveOdds } from '../data/LiveOdds';
import league from '../data/league';
import LiveScoreSection from "../pages/LiveScoreSection";
import EventsAndTables from '../pages/EventsAndTables';

const LiveOddsPage = () => {
  const navigate = useNavigate();
  const [activeSport, setActiveSport] = useState(null);
  const [activeTab, setActiveTab] = useState(null);

  const allowedSports = [
    'Football',
    'Tennis',
    'Ice Hockey',
    'Water Polo',
    'Futsal',
    'Basketball',
    'Table Tennis',
    'Volleyball'
  ];

  const handleBettingContestUserClick = (username) => {
    navigate(`/betting-contest-details/${encodeURIComponent(username)}`);
  };

  const getDisplayData = () => {
    if (!activeSport && !activeTab) {
      return [];
    }

    if (activeTab === 'Betting Contest') {
      return league.betting_contest.matches ? [{ ...league.betting_contest, league: 'Betting Contest' }] : [];
    }

    let filteredSports = activeSport
      ? LiveOdds.sports.filter(sport => sport.name === activeSport && allowedSports.includes(sport.name))
      : LiveOdds.sports.filter(sport => allowedSports.includes(sport.name));

    if (activeTab === 'Only with Odds') {
      return filteredSports
        .flatMap(sport => sport.leagues.map(league => ({
          ...league,
          matches: league.matches.filter(match => match.odds && match.odds['1'] && match.odds['2'])
        })))
        .filter(league => league.matches.length > 0);
    }

    return filteredSports.flatMap(sport => sport.leagues);
  };

  const displayLeagues = getDisplayData();

  const TeamLogo = ({ team }) => (
    <img
      src={team.logo}
      alt={team.name}
      className="w-6 h-6 object-contain flex-shrink-0"
      onError={(e) => {
        e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiByeD0iNCIgZmlsbD0iI0Y1RjVGNSIvPgo8cGF0aCBkPSJNOCAxMkwxMiA4TDE2IDEyTDEyIDE2TDggMTJaIiBmaWxsPSIjOTQ5NEE0Ii8+Cjwvc3ZnPgo=';
      }}
    />
  );

  const pageUrl = 'https://watchdogs.net/live-odds';

  return (
    <React.Fragment>
      <Helmet>
        <html lang="en" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Live Odds - Real-Time Betting Odds for Football, Tennis & More | Watchdogs.net</title>
        <meta name="description" content="View live odds for football, tennis, basketball, and more on Watchdogs.net. Track real-time betting odds, filters for sports and contests, and join betting contests." />
        <meta name="keywords" content="live odds, real-time betting, football live odds, tennis odds, basketball betting, sure bets live, betting contests" />
        <meta name="author" content="Watchdogs Team" />
        <link rel="canonical" href={pageUrl} />
        <link rel="icon" href="/favicon.ico" />
        {/* Open Graph Tags */}
        <meta property="og:title" content="Live Odds - Real-Time Betting Odds for Football, Tennis & More | Watchdogs.net" />
        <meta property="og:description" content="View live odds for football, tennis, basketball, and more on Watchdogs.net. Track real-time betting odds, filters for sports and contests, and join betting contests." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content="https://watchdogs.net/og-live-odds.jpg" />
        <meta property="og:image:alt" content="Live Odds - Watchdogs.net" />
        <meta property="og:site_name" content="Watchdogs.net" />
        {/* Structured Data: WebPage with ItemList for Live Odds */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Live Odds - Real-Time Betting",
            "url": pageUrl,
            "description": "Real-time live odds for various sports including football, tennis, and basketball.",
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
              "name": "Live Odds Leagues",
              "itemListElement": LiveOdds.sports.slice(0, 5).flatMap(sport => sport.leagues.slice(0, 2).map((league, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "name": `${sport.name} - ${league.league}`,
                "description": `${league.matches.length} matches with live odds`,
                "url": "https://watchdogs.net/live-odds"
              })))
            }
          })}
        </script>
      </Helmet>
      <div className="min-h-screen bg-gray-50 pt-[120px] mt-5">
        {/* Breadcrumb */}
        <div className="bg-white px-4 py-3">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center text-xs sm:text-sm text-gray-600">
              <span className="hover:text-blue-600 cursor-pointer">Home</span>
              <span className="mx-2">›</span>
              <span className="hover:text-blue-600 cursor-pointer">Live Odds</span>
              <span className="mx-2">›</span>
              <span className="text-gray-900">{activeSport || 'Select a Sport'}</span>
            </div>
          </div>
        </div>
        <div className="max-w-full sm:max-w-7xl mx-auto px-2 sm:px-4 py-4 sm:py-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-2 sm:gap-6">
            {/* Main Content Area */}
            <div className="md:col-span-8 lg:col-span-9">
              {/* Sports Navigation Tabs */}
              <div className="mb-4 sm:mb-6 overflow-x-auto">
                <div className="flex bg-gray-600 min-w-max flex-nowrap whitespace-nowrap">
                  {LiveOdds.sports
                    .filter(sport => allowedSports.includes(sport.name))
                    .map((sport, index) => (
                      <div
                        key={sport.name}
                        className="relative"
                        style={{
                          clipPath: index === allowedSports.length - 1 ? 'none' : 'polygon(0 0, calc(100% - 16px) 0, 100% 100%, 0 100%)',
                          marginRight: index === allowedSports.length - 1 ? '0' : '-16px',
                          zIndex: allowedSports.length - index
                        }}
                      >
                        <button
                          onClick={() => {
                            setActiveSport(sport.name);
                            setActiveTab('All Matches');
                          }}
                          className={`px-3 sm:px-5 py-2 sm:py-3 text-xs sm:text-sm font-medium transition-colors duration-200 ${
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
              {activeSport && (
                <div className="mb-4 sm:mb-6">
                  <div className="flex flex-wrap gap-1 sm:gap-2 items-center">
                    {['All Matches', 'Only with Odds', 'Betting Contest'].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded transition-colors duration-200 ${
                          activeTab === tab
                            ? 'bg-red-600 text-white'
                            : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              {/* Matches Content */}
              {displayLeagues.length > 0 ? (
                displayLeagues.map((league, leagueIndex) => (
                  <div key={leagueIndex} className="bg-white rounded-lg shadow-sm mb-6 overflow-hidden">
                    {/* League Header */}
                    <div className="bg-gray-100 px-3 sm:px-4 py-3 border-b">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2 min-w-0 flex-1">
                          <span className="text-base sm:text-lg flex-shrink-0">🇰🇷</span>
                          <span className="font-medium text-gray-900 text-sm sm:text-base truncate">
                            {league.country || 'South Korea'}. {league.league}
                          </span>
                          <span className="text-gray-600 text-xs sm:text-sm whitespace-nowrap">- Matchday {league.matchday || 'N/A'}</span>
                        </div>
                        <div className="flex items-center gap-8 sm:gap-20 text-sm sm:text-base font-medium text-gray-700 flex-shrink-0">
                          <span>1</span>
                          <span>X</span>
                          <span>2</span>
                        </div>
                      </div>
                    </div>
                    {/* Matches */}
                    <div className="overflow-x-auto">
                      <div className="min-w-[600px]">
                        {league.matches.map((match, matchIndex) => (
                          <div key={matchIndex} className="border-b last:border-b-0 hover:bg-gray-50 transition-colors duration-200">
                            <div className="px-3 sm:px-4 py-3 sm:py-4">
                              <div className="flex items-center gap-3 sm:gap-4">
                                {/* Time and Duration */}
                                <div className="flex flex-col items-center w-14 sm:w-16 flex-shrink-0">
                                  <div className="text-sm sm:text-base font-medium text-gray-900">{match.time}</div>
                                  <div className="text-xs sm:text-sm text-red-600 font-medium whitespace-nowrap">{match.duration}</div>
                                </div>
                                
                                {/* Teams and Scores */}
                                <div className="flex-1 min-w-0">
                                  <div className="space-y-2">
                                    {/* Team 1 */}
                                    <div className="flex items-center justify-between gap-2">
                                      <div className="flex items-center gap-2 min-w-0 flex-1">
                                        <TeamLogo team={match.team1} />
                                        <span className="font-medium text-gray-900 text-sm sm:text-base truncate">{match.team1.name}</span>
                                      </div>
                                      <div className="text-lg sm:text-xl font-bold text-red-600 w-12 text-right flex-shrink-0">
                                        {match.team1.score !== undefined ? match.team1.score : '0'}
                                      </div>
                                    </div>
                                    {/* Team 2 */}
                                    <div className="flex items-center justify-between gap-2">
                                      <div className="flex items-center gap-2 min-w-0 flex-1">
                                        <TeamLogo team={match.team2} />
                                        <span className="font-medium text-gray-900 text-sm sm:text-base truncate">{match.team2.name}</span>
                                        {match.team2.redCard && (
                                          <div className="w-3 h-3 bg-red-600 rounded-sm flex-shrink-0"></div>
                                        )}
                                      </div>
                                      <div className="text-lg sm:text-xl font-bold text-red-600 w-12 text-right flex-shrink-0">
                                        {match.team2.score !== undefined ? match.team2.score : '0'}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                
                                {/* Odds Buttons */}
                                <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
                                  <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-2 sm:px-3 rounded text-xs sm:text-sm font-medium transition-colors duration-200 w-12 sm:w-14 text-center">
                                    {match.odds['1'] || '-'}
                                  </button>
                                  {match.odds.X ? (
                                    <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-2 sm:px-3 rounded text-xs sm:text-sm font-medium transition-colors duration-200 w-12 sm:w-14 text-center">
                                      {match.odds.X}
                                    </button>
                                  ) : (
                                    <div className="w-12 sm:w-14"></div>
                                  )}
                                  <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-2 sm:px-3 rounded text-xs sm:text-sm font-medium transition-colors duration-200 w-12 sm:w-14 text-center">
                                    {match.odds['2'] || '-'}
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                  <div className="text-gray-500 text-lg">
                    {activeSport ? `No data available for ${activeSport} - ${activeTab || 'All Matches'}` : 'Please select a sport'}
                  </div>
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
                      <div 
                        key={index} 
                        className="flex items-center justify-between py-3 border-b border-teal-500/30 last:border-b-0 hover:text-blue-900 cursor-pointer transition-colors" 
                        onClick={() => handleBettingContestUserClick(user.username)}
                      >
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
                    <button className="bg-white text-teal-700 font-bold py-2 px-6 rounded hover:bg-gray-100 transition-colors" onClick={() => navigate('/signup')}>
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
    </React.Fragment>
  );
};

export default LiveOddsPage;