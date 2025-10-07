

import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { useParams, useNavigate } from 'react-router-dom';
import { LeagueMatchesDetail } from '../data/LeagueMatchesDetail';
import bettingContestDetail from '../data/bettingContestDetail'; 
import LiveScoreSection from "../pages/LiveScoreSection";
import EventsAndTables from '../pages/EventsAndTables';

const LeagueDetailsPage = () => {
  const { homeTeam, awayTeam } = useParams();
  const navigate = useNavigate();
  const activeTab = 'h2h';

  const team1 = homeTeam ? decodeURIComponent(homeTeam) : 'Team 1';
  const team2 = awayTeam ? decodeURIComponent(awayTeam) : 'Team 2';

  const mainMatch = useMemo(() => (
    LeagueMatchesDetail.find(match => (
      match.teams.home.name === team1 && match.teams.away.name === team2
    ))
  ), [team1, team2]);

  // Filter matches based on active tab, excluding main match for the list
  const getFilteredMatches = () => {
    let matches = LeagueMatchesDetail;
    if (activeTab === 'all') {
      matches = matches.filter(match => (
        [match.teams.home.name, match.teams.away.name].includes(team1) ||
        [match.teams.home.name, match.teams.away.name].includes(team2)
      ));
    } else if (activeTab === 'home') {
      matches = matches.filter(match => (
        match.teams.home.name === team1
      ));
    } else if (activeTab === 'away') {
      matches = matches.filter(match => (
        match.teams.away.name === team1
      ));
    } else if (activeTab === 'h2h') {
      matches = matches.filter(match => (
        ((match.teams.home.name === team1 && match.teams.away.name === team2) ||
         (match.teams.home.name === team2 && match.teams.away.name === team1))
      ));
    }
    return matches.filter(match => match.id !== mainMatch?.id);
  };

  const filteredMatches = useMemo(() => getFilteredMatches(), [activeTab, team1, team2, mainMatch?.id]);

  const h2hStats = useMemo(() => {
    if (!mainMatch || !mainMatch.head_to_head) return { played: 0, team1Wins: 0, team2Wins: 0, draws: 0 };
    const h2h = mainMatch.head_to_head;
    const team1Key = team1.toLowerCase();
    const team2Key = team2.toLowerCase().split(' ')[0];
    const team1Wins = h2h[`${team1Key}_wins`] || 0;
    const team2Wins = h2h[`${team2Key}_wins`] || 0;
    return {
      played: h2h.played || 0,
      [`${team1} Wins`]: team1Wins,
      [`${team2} Wins`]: team2Wins,
      Draws: h2h.draws || 0
    };
  }, [mainMatch, team1, team2]);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${months[date.getMonth()]} ${date.getDate()}`;
  };

  const handleBettingContestUserClick = (username) => {
    navigate(`/betting-contest-details/${encodeURIComponent(username)}`);
  };

  const sidebarRanking = bettingContestDetail.fullRanking.slice(0, 6);

  const pageUrl = `https://watchdogs.net/league-details/${homeTeam}/${awayTeam}`;
  const pageTitle = `League Details: ${team1} vs ${team2} | Lineups, Odds & H2H | Watchdogs.net`;

  if (!mainMatch) {
    return (
      <>
        <Helmet>
          <html lang="en" />
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>No Match Found - League Details | Watchdogs.net</title>
          <meta name="description" content="No match details found for the selected teams on Watchdogs.net." />
          <meta name="keywords" content="league details, match not found" />
          <meta name="author" content="Watchdogs Team" />
          <link rel="canonical" href={pageUrl} />
          <link rel="icon" href="/favicon.ico" />
          {/* Open Graph Tags */}
          <meta property="og:title" content="No Match Found - League Details | Watchdogs.net" />
          <meta property="og:description" content="No match details found for the selected teams on Watchdogs.net." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={pageUrl} />
          <meta property="og:image" content="https://watchdogs.net/og-league.jpg" />
          <meta property="og:image:alt" content="League Details - Watchdogs.net" />
          <meta property="og:site_name" content="Watchdogs.net" />
          {/* Structured Data: WebPage Schema */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "No Match Found - League Details",
              "url": pageUrl,
              "description": "Match details not available.",
              "publisher": {
                "@type": "Organization",
                "name": "Watchdogs.net",
                "url": "https://watchdogs.net/"
              }
            })}
          </script>
        </Helmet>
        <div className="pt-[120px] bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
              <div className="md:col-span-8 lg:col-span-9">
                <div className="bg-white rounded-lg shadow-sm p-2 sm:p-4">
                  <button
                    onClick={() => navigate('/')}
                    className="mb-4 text-blue-600 hover:text-blue-800 flex items-center gap-1 text-xs sm:text-sm font-medium"
                  >
                    ← Back to Home
                  </button>
                  <p className="text-sm">No match details found for {team1} vs {team2}.</p>
                </div>
              </div>
              <div className="md:col-span-4 lg:col-span-3">
                <div className="sticky top-[120px]">
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
                      <h3 className="font-bold text-lg">Betting Contest</h3>
                      <p className="text-sm opacity-90">Top Performers</p>
                    </div>
                    <div className="p-3">
                      {sidebarRanking.map((user, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between py-3 border-b border-teal-500/30 last:border-b-0 hover:text-blue-900 cursor-pointer transition-colors"
                          onClick={() => handleBettingContestUserClick(user.username)}
                        >
                          <div className="flex items-center space-x-3 flex-1 min-w-0">
                            <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                              <span className="text-2xl font-bold">{user.position}</span>
                            </div>
                            <div className="w-10 h-10 flex-shrink-0">
                              <img src={'/placeholder-logo.jpg'} alt="User Flag" className="w-full h-full object-contain rounded-full" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="font-medium text-sm truncate">{user.username}</div>
                              {user.country && (
                                <div className="text-xs opacity-75 flex items-center space-x-1 truncate">
                                  <span className="text-xs opacity-75">{user.country}</span>
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="text-right flex-shrink-0 ml-2">
                            <div className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold mb-1">
                              {user.prize}
                            </div>
                            <div className="text-xs opacity-90">{user.points.toLocaleString()}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="bg-teal-700 px-6 py-4 text-center">
                      <div className="text-2xl font-bold mb-2">Total Prizes: $10,000</div>
                      <button className="bg-white text-teal-700 font-bold py-2 px-6 rounded hover:bg-gray-100 transition-colors">
                        Join Now
                      </button>
                    </div>
                  </div>
                  <LiveScoreSection />
                  <EventsAndTables />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <html lang="en" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{pageTitle}</title>
        <meta name="description" content={`League details for ${team1} vs ${team2}: Lineups, odds, H2H stats, predicted possession, and upcoming match info on Watchdogs.net.`} />
        <meta name="keywords" content={`${team1} vs ${team2}, league details, match lineups, betting odds, H2H statistics, football predictions`} />
        <meta name="author" content="Watchdogs Team" />
        <link rel="canonical" href={pageUrl} />
        <link rel="icon" href="/favicon.ico" />
        {/* Open Graph Tags */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={`League details for ${team1} vs ${team2}: Lineups, odds, H2H stats, predicted possession, and upcoming match info on Watchdogs.net.`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content="https://watchdogs.net/og-league.jpg" />
        <meta property="og:image:alt" content={`${team1} vs ${team2} League Details - Watchdogs.net`} />
        <meta property="og:site_name" content="Watchdogs.net" />
        {/* Structured Data: SportsEvent Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SportsEvent",
            "name": `${team1} vs ${team2}`,
            "url": pageUrl,
            "description": `League match details including lineups, odds, and H2H for ${team1} vs ${team2}.`,
            "startDate": mainMatch?.date || "2025-10-06",
            "location": {
              "@type": "Place",
              "name": mainMatch?.venue || "Venue"
            },
            "homeTeam": {
              "@type": "SportsTeam",
              "name": team1
            },
            "awayTeam": {
              "@type": "SportsTeam",
              "name": team2
            },
            "offers": {
              "@type": "AggregateOffer",
              "lowPrice": mainMatch?.odds?.['1'] || "1.50",
              "highPrice": mainMatch?.odds?.['2'] || "3.00",
              "priceCurrency": "EUR",
              "description": "Betting odds for the match"
            },
            "organizer": {
              "@type": "Organization",
              "name": "Watchdogs.net"
            }
          })}
        </script>
      </Helmet>
      <div className="pt-[120px] bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
            <div className="md:col-span-8 lg:col-span-9">
              <div className="bg-white rounded-lg shadow-sm">
                {/* Team Headers */}
                <div className="flex flex-col gap-4 p-2 sm:p-4 bg-gray-50 border-b">
                  <button
                    onClick={() => navigate('/')}
                    className="self-start px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm font-medium text-blue-600 hover:text-blue-800 flex items-center gap-1"
                  >
                    ← Back to Home
                  </button>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
                    <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3">
                      <img 
                        src={mainMatch.teams.home.logo} 
                        alt={team1}
                        className="w-10 h-10 sm:w-12 sm:h-12 object-contain rounded-full border-2 border-gray-200 flex-shrink-0"
                      />
                      <div className="bg-red-600 text-white px-2 sm:px-4 py-1 rounded font-semibold text-xs sm:text-sm truncate max-w-[150px] sm:max-w-none">
                        {team1}
                      </div>
                    </div>
                    <div className="flex items-center justify-center sm:justify-end gap-2 sm:gap-3">
                      <div className="bg-red-600 text-white px-2 sm:px-4 py-1 rounded font-semibold text-xs sm:text-sm truncate max-w-[150px] sm:max-w-none">
                        {team2}
                      </div>
                      <img 
                        src={mainMatch.teams.away.logo} 
                        alt={team2}
                        className="w-10 h-10 sm:w-12 sm:h-12 object-contain rounded-full border-2 border-gray-200 flex-shrink-0"
                      />
                    </div>
                  </div>
                </div>

                {/* Main Match Details - Always shown */}
                <div className="p-2 sm:p-4 border-b">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">Upcoming Match Details</h3>
                  
                  {/* Basic Info Table */}
                  <div className="overflow-x-auto mb-4 sm:mb-6">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-2 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Attribute</th>
                          <th className="px-2 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-2 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-medium text-gray-900">Date & Time</td>
                          <td className="px-2 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">{formatDate(mainMatch.date)} {mainMatch.time}</td>
                        </tr>
                        <tr>
                          <td className="px-2 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-medium text-gray-900">Venue</td>
                          <td className="px-2 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900 truncate max-w-[200px]">{mainMatch.venue}</td>
                        </tr>
                        <tr>
                          <td className="px-2 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-medium text-gray-900">Referee</td>
                          <td className="px-2 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">{mainMatch.referee}</td>
                        </tr>
                        <tr>
                          <td className="px-2 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-medium text-gray-900">Competition</td>
                          <td className="px-2 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">{mainMatch.competition} - {mainMatch.matchday}</td>
                        </tr>
                        <tr>
                          <td className="px-2 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-medium text-gray-900">Attendance (Expected)</td>
                          <td className="px-2 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">{mainMatch.attendance}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Odds Table */}
                  <div className="overflow-x-auto mb-4 sm:mb-6">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-2 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bet Type</th>
                          <th className="px-2 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Odds</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-2 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-medium text-gray-900">1 (Home Win)</td>
                          <td className="px-2 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">{mainMatch.odds['1']}</td>
                        </tr>
                        <tr>
                          <td className="px-2 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-medium text-gray-900">X (Draw)</td>
                          <td className="px-2 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">{mainMatch.odds['X']}</td>
                        </tr>
                        <tr>
                          <td className="px-2 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-medium text-gray-900">2 (Away Win)</td>
                          <td className="px-2 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">{mainMatch.odds['2']}</td>
                        </tr>
                        <tr>
                          <td className="px-2 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-medium text-gray-900">Over 2.5 Goals</td>
                          <td className="px-2 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">{mainMatch.odds['over_2.5']}</td>
                        </tr>
                        <tr>
                          <td className="px-2 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-medium text-gray-900">Under 2.5 Goals</td>
                          <td className="px-2 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">{mainMatch.odds['under_2.5']}</td>
                        </tr>
                        <tr>
                          <td className="px-2 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-medium text-gray-900">BTTS Yes</td>
                          <td className="px-2 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">{mainMatch.odds.btts_yes}</td>
                        </tr>
                        <tr>
                          <td className="px-2 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-medium text-gray-900">BTTS No</td>
                          <td className="px-2 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">{mainMatch.odds.btts_no}</td>
                        </tr>
                        <tr>
                          <td className="px-2 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-medium text-gray-900">Tip</td>
                          <td className="px-2 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-bold text-green-600">{mainMatch.tip}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Lineups */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-2 sm:mb-4">
                    <div>
                      <h4 className="font-bold mb-1 sm:mb-2 text-sm sm:text-base">{team1} Lineup ({mainMatch.teams.home.formation}) - Coach: {mainMatch.teams.home.coach}</h4>
                      
                      {/* Starting XI Table */}
                      <div className="overflow-x-auto mb-2 sm:mb-4">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-gray-50">
                            <tr>
                              <th className="px-2 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Position</th>
                              <th className="px-2 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Player</th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {mainMatch.teams.home.lineup.map(function(player, i) {
                              return (
                                <tr key={i}>
                                  <td className="px-2 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-medium text-gray-900">Player {i + 1}</td>
                                  <td className="px-2 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-900 truncate max-w-[150px]">{player}</td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>

                      {/* Bench Table */}
                      <h5 className="font-semibold mb-1 text-xs sm:text-sm">Bench</h5>
                      <div className="overflow-x-auto mb-1 sm:mb-2">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-gray-50">
                            <tr>
                              <th className="px-2 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Player</th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {mainMatch.teams.home.bench.map(function(player, i) {
                              return (
                                <tr key={i}>
                                  <td className="px-2 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-900 truncate max-w-[150px]">{player}</td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                      <p className="text-xs font-medium">Recent Form: {mainMatch.teams.home.recent_form.join(' ')}</p>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1 sm:mb-2 text-sm sm:text-base">{team2} Lineup ({mainMatch.teams.away.formation}) - Coach: {mainMatch.teams.away.coach}</h4>
                      
                      {/* Starting XI Table */}
                      <div className="overflow-x-auto mb-2 sm:mb-4">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-gray-50">
                            <tr>
                              <th className="px-2 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Position</th>
                              <th className="px-2 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Player</th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {mainMatch.teams.away.lineup.map(function(player, i) {
                              return (
                                <tr key={i}>
                                  <td className="px-2 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-medium text-gray-900">Player {i + 1}</td>
                                  <td className="px-2 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-900 truncate max-w-[150px]">{player}</td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>

                      {/* Bench Table */}
                      <h5 className="font-semibold mb-1 text-xs sm:text-sm">Bench</h5>
                      <div className="overflow-x-auto mb-1 sm:mb-2">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-gray-50">
                            <tr>
                              <th className="px-2 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Player</th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {mainMatch.teams.away.bench.map(function(player, i) {
                              return (
                                <tr key={i}>
                                  <td className="px-2 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-900 truncate max-w-[150px]">{player}</td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                      <p className="text-xs font-medium">Recent Form: {mainMatch.teams.away.recent_form.join(' ')}</p>
                    </div>
                  </div>

                  {/* Predicted Stats */}
                  {mainMatch.stats && (
                    <div className="p-2 sm:p-4 bg-blue-50 rounded">
                      <h4 className="font-bold mb-1 sm:mb-2 text-sm sm:text-base">Predicted Stats</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4 text-xs sm:text-sm">
                        <div>
                          <p><strong>Possession:</strong> {team1}: {mainMatch.stats.possession.home}% | {team2}: {mainMatch.stats.possession.away}%</p>
                        </div>
                        {mainMatch.stats.shots_on_target && (
                          <div>
                            <p><strong>Shots on Target:</strong> {team1}: {mainMatch.stats.shots_on_target.home} | {team2}: {mainMatch.stats.shots_on_target.away}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* H2H Stats if h2h tab */}
                {activeTab === 'h2h' && (
                  <div className="p-2 sm:p-4 border-b bg-yellow-50">
                    <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-4">Head to Head Statistics</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 text-center p-2 sm:p-4 bg-white rounded shadow-sm">
                      <div>
                        <h4 className="font-semibold text-gray-600 text-xs sm:text-sm">Total Played</h4>
                        <p className="text-xl sm:text-2xl font-bold">{h2hStats.played}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-600 text-xs sm:text-sm truncate">{team1} Wins</h4>
                        <p className="text-xl sm:text-2xl font-bold text-blue-600">{h2hStats[`${team1} Wins`]}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-600 text-xs sm:text-sm truncate">{team2} Wins</h4>
                        <p className="text-xl sm:text-2xl font-bold text-red-600">{h2hStats[`${team2} Wins`]}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-600 text-xs sm:text-sm">Draws</h4>
                        <p className="text-xl sm:text-2xl font-bold text-gray-600">{h2hStats.Draws}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Matches List Table - Changes based on tab */}
                <div className="p-2 sm:p-4">
                  <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-4">Head to Head Matches ({filteredMatches.length})</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="px-2 sm:px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Date</th>
                          <th className="px-2 sm:px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Match</th>
                          <th className="px-2 sm:px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Competition</th>
                          <th className="hidden lg:table-cell px-2 sm:px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Odds (1/X/2)</th>
                          <th className="hidden lg:table-cell px-2 sm:px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Tip</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {filteredMatches.length > 0 ? (
                          filteredMatches.map(function(match) {
                            return (
                              <tr key={match.id} className="hover:bg-gray-50">
                                <td className="px-2 sm:px-4 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-medium text-gray-900">
                                  {formatDate(match.date)}
                                </td>
                                <td className="px-2 sm:px-4 py-3 sm:py-4">
                                  <div className="flex flex-col xs:flex-row items-center justify-between gap-1 xs:gap-2 min-w-[250px]">
                                    <div className="flex items-center gap-1 xs:gap-2 flex-shrink-0">
                                      <img 
                                        src={match.teams.home.logo} 
                                        alt={match.teams.home.name}
                                        className="w-5 h-5 xs:w-6 xs:h-6 object-contain rounded-full"
                                      />
                                      <span className="text-xs sm:text-sm font-medium text-gray-900 truncate max-w-[80px] xs:max-w-none">
                                        {match.teams.home.name}
                                      </span>
                                    </div>
                                    <div className="flex items-center gap-1 px-1 sm:px-3 py-0.5 sm:py-1 bg-gray-100 rounded font-bold text-xs sm:text-sm">
                                      <span className="text-green-600 truncate">{match.time}</span>
                                    </div>
                                    <div className="flex items-center gap-1 xs:gap-2 flex-shrink-0">
                                      <span className="text-xs sm:text-sm font-medium text-gray-900 truncate max-w-[80px] xs:max-w-none">
                                        {match.teams.away.name}
                                      </span>
                                      <img 
                                        src={match.teams.away.logo} 
                                        alt={match.teams.away.name}
                                        className="w-5 h-5 xs:w-6 xs:h-6 object-contain rounded-full"
                                      />
                                    </div>
                                  </div>
                                </td>
                                <td className="px-2 sm:px-4 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-500 truncate max-w-[100px]">
                                  {match.competition}
                                </td>
                                <td className="hidden lg:table-cell px-2 sm:px-4 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-600">
                                  {match.odds['1']}/{match.odds['X']}/{match.odds['2']}
                                </td>
                                <td className="hidden lg:table-cell px-2 sm:px-4 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-bold text-green-600">
                                  {match.tip}
                                </td>
                              </tr>
                            );
                          })
                        ) : (
                          <tr>
                            <td colSpan="5" className="px-2 sm:px-4 py-3 sm:py-4 text-center text-gray-500 text-xs sm:text-sm">
                              No matches found for this head-to-head selection.
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-4 lg:col-span-3">
              <div className="sticky top-[120px]">
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
                    <h3 className="font-bold text-lg">Betting Contest</h3>
                    <p className="text-sm opacity-90">Top Performers</p>
                  </div>
                  <div className="p-3">
                    {sidebarRanking.map((user, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between py-3 border-b border-teal-500/30 last:border-b-0 hover:text-blue-900 cursor-pointer transition-colors"
                        onClick={() => handleBettingContestUserClick(user.username)}
                      >
                        <div className="flex items-center space-x-3 flex-1 min-w-0">
                          <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                            <span className="text-2xl font-bold">{user.position}</span>
                          </div>
                          <div className="w-10 h-10 flex-shrink-0">
                            <img src={'/placeholder-logo.jpg'} alt="User Flag" className="w-full h-full object-contain rounded-full" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="font-medium text-sm truncate">{user.username}</div>
                            {user.country && (
                              <div className="text-xs opacity-75 flex items-center space-x-1 truncate">
                                <span className="text-xs opacity-75">{user.country}</span>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="text-right flex-shrink-0 ml-2">
                          <div className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold mb-1">
                            {user.prize}
                          </div>
                          <div className="text-xs opacity-90">{user.points.toLocaleString()}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="bg-teal-700 px-6 py-4 text-center">
                    <div className="text-2xl font-bold mb-2">Total Prizes: $10,000</div>
                    <button className="bg-white text-teal-700 font-bold py-2 px-6 rounded hover:bg-gray-100 transition-colors">
                      Join Now
                    </button>
                  </div>
                </div>
                <LiveScoreSection />
                <EventsAndTables />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeagueDetailsPage;