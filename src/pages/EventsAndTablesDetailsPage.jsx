

import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams, Link, useNavigate } from 'react-router-dom';
import eventsAndTablesDetails from '../data/eventsAndTablesDetails';
import bettingContestDetail from '../data/bettingContestDetail'; 
import LiveScoreSection from "../pages/LiveScoreSection";
import EventsAndTables from '../pages/EventsAndTables';

const EventsAndTablesDetailsPage = () => {
  const { teamName: slug } = useParams(); // Using 'slug' for both team and league names
  const navigate = useNavigate();

  const handleBettingContestUserClick = (username) => {
    navigate(`/betting-contest-details/${encodeURIComponent(username)}`);
  };

  const sidebarRanking = bettingContestDetail.fullRanking.slice(0, 6);

  // Handle missing or empty param
  if (!slug || slug.trim() === '') {
    return (
      <>
        <Helmet>
          <html lang="en" />
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>No Selection - Events and Tables | Watchdogs.net</title>
          <meta name="description" content="Please select a team or league from the Events and Tables section on Watchdogs.net." />
          <meta name="keywords" content="events and tables, league details, team stats" />
          <meta name="author" content="Watchdogs Team" />
          <link rel="canonical" href="https://watchdogs.net/events-and-tables-details" />
          <link rel="icon" href="/favicon.ico" />
          {/* Open Graph Tags */}
          <meta property="og:title" content="No Selection - Events and Tables | Watchdogs.net" />
          <meta property="og:description" content="Please select a team or league from the Events and Tables section on Watchdogs.net." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://watchdogs.net/events-and-tables-details" />
          <meta property="og:image" content="https://watchdogs.net/og-tables.jpg" />
          <meta property="og:image:alt" content="Events and Tables - Watchdogs.net" />
          <meta property="og:site_name" content="Watchdogs.net" />
          {/* Structured Data: WebPage Schema */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "No Selection - Events and Tables",
              "url": "https://watchdogs.net/events-and-tables-details",
              "description": "Page for selecting teams or leagues in events and tables.",
              "publisher": {
                "@type": "Organization",
                "name": "Watchdogs.net",
                "url": "https://watchdogs.net/"
              }
            })}
          </script>
        </Helmet>
        <div className="pt-[120px] bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex items-center justify-center min-h-screen">
            <div className="text-center max-w-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">No Selection</h2>
              <p className="text-gray-600 mb-6">Please select a team or league from the Events and Tables section.</p>
              <Link 
                to="/" 
                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }

  // Normalize slug for matching
  const normalizedSlug = decodeURIComponent(slug).toLowerCase().trim();

  // Find the specific team across all leagues (case-insensitive match)
  let selectedTeam = null;
  let selectedLeague = null;
  let isLeagueView = false;

  // First, try to find as a team
  for (const league of eventsAndTablesDetails) {
    const team = league.details.find(t => t.team.toLowerCase() === normalizedSlug);
    if (team) {
      selectedTeam = team;
      selectedLeague = league;
      break;
    }
  }

  // If not a team, try as a league
  if (!selectedTeam) {
    selectedLeague = eventsAndTablesDetails.find(l => l.league.toLowerCase() === normalizedSlug);
    if (selectedLeague) {
      isLeagueView = true;
    }
  }

  if (!selectedLeague) {
    return (
      <>
        <Helmet>
          <html lang="en" />
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Not Found - Events and Tables | Watchdogs.net</title>
          <meta name="description" content="No data found for the selected team or league on Watchdogs.net." />
          <meta name="keywords" content="events and tables, league details, team stats" />
          <meta name="author" content="Watchdogs Team" />
          <link rel="canonical" href={`https://watchdogs.net/events-and-tables-details/${slug}`} />
          <link rel="icon" href="/favicon.ico" />
          {/* Open Graph Tags */}
          <meta property="og:title" content="Not Found - Events and Tables | Watchdogs.net" />
          <meta property="og:description" content="No data found for the selected team or league on Watchdogs.net." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={`https://watchdogs.net/events-and-tables-details/${slug}`} />
          <meta property="og:image" content="https://watchdogs.net/og-tables.jpg" />
          <meta property="og:image:alt" content="Events and Tables - Watchdogs.net" />
          <meta property="og:site_name" content="Watchdogs.net" />
          {/* Structured Data: WebPage Schema */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Not Found - Events and Tables",
              "url": `https://watchdogs.net/events-and-tables-details/${slug}`,
              "description": "Page not found for the selected item.",
              "publisher": {
                "@type": "Organization",
                "name": "Watchdogs.net",
                "url": "https://watchdogs.net/"
              }
            })}
          </script>
        </Helmet>
        <div className="pt-[120px] bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex items-center justify-center min-h-screen">
            <div className="text-center max-w-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Not Found</h2>
              <p className="text-gray-600 mb-6">No data found for "{decodeURIComponent(slug)}". Please check the selection.</p>
              <Link 
                to="/" 
                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }

  // Dynamic title and description based on view
  let pageTitle, pageDesc, schemaData;
  const pageUrl = `https://watchdogs.net/events-and-tables-details/${slug}`;
  if (isLeagueView) {
    pageTitle = `${selectedLeague.league} - Detailed Standings | Watchdogs.net`;
    pageDesc = `Comprehensive stats for all teams in ${selectedLeague.league}. Track positions, win percentages, average goals, and clean sheets.`;
    schemaData = {
      "@context": "https://schema.org",
      "@type": "SportsLeague",
      "name": selectedLeague.league,
      "url": pageUrl,
      "description": `Detailed standings for ${selectedLeague.league}.`,
      "sport": "Football",
      "numberOfTeams": selectedLeague.details.length,
      "governingBody": {
        "@type": "Organization",
        "name": "Watchdogs.net"
      }
    };
  } else {
    pageTitle = `${selectedTeam.team} - ${selectedLeague.league} Details | Watchdogs.net`;
    pageDesc = `Latest stats, next match, and betting odds for ${selectedTeam.team} in ${selectedLeague.league}. View position, win %, average goals, and more.`;
    schemaData = {
      "@context": "https://schema.org",
      "@type": "SportsTeam",
      "name": selectedTeam.team,
      "url": pageUrl,
      "description": `Team details for ${selectedTeam.team} in ${selectedLeague.league}.`,
      "sport": "Football",
      "league": {
        "@type": "SportsLeague",
        "name": selectedLeague.league
      },
      "athlete": selectedTeam.stats,  // Simplified; adapt if needed
      "coach": {
        "@type": "Person",
        "name": "Coach Name"  // From data if available
      }
    };
  }

  if (isLeagueView) {
    // League View: Show detailed table for all teams in the league
    return (
      <>
        <Helmet>
          <html lang="en" />
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>{pageTitle}</title>
          <meta name="description" content={pageDesc} />
          <meta name="keywords" content={`league standings, ${selectedLeague.league}, team stats, football tables, win percentage, average goals`} />
          <meta name="author" content="Watchdogs Team" />
          <link rel="canonical" href={pageUrl} />
          <link rel="icon" href="/favicon.ico" />
          {/* Open Graph Tags */}
          <meta property="og:title" content={pageTitle} />
          <meta property="og:description" content={pageDesc} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={pageUrl} />
          <meta property="og:image" content="https://watchdogs.net/og-league.jpg" />
          <meta property="og:image:alt" content={`${selectedLeague.league} Standings - Watchdogs.net`} />
          <meta property="og:site_name" content="Watchdogs.net" />
          {/* Structured Data */}
          <script type="application/ld+json">
            {JSON.stringify(schemaData)}
          </script>
        </Helmet>
        <div className="pt-[120px] bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Main Content Area with Sidebar */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
              {/* Main Content */}
              <div className="md:col-span-8 lg:col-span-9">
                {/* Page Header */}
                <div className="text-center mb-8">
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
                    {selectedLeague.league} - Detailed Standings
                  </h1>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Comprehensive stats for all teams in {selectedLeague.league}
                  </p>
                </div>

                {/* Detailed League Table */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  {/* League Header */}
                  <div className="bg-gradient-to-r from-gray-600 to-gray-800 text-white p-4 sm:p-6 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <img
                        src={selectedLeague.countryLogo}
                        alt={`${selectedLeague.league} flag`}
                        className="w-8 h-6 sm:w-10 sm:h-7 rounded-md object-cover"
                      />
                      <h2 className="text-lg sm:text-xl font-bold">{selectedLeague.league}</h2>
                    </div>
                    <div className="text-sm sm:text-base opacity-90">Detailed League Table</div>
                  </div>

                  {/* Stats Table for All Teams */}
                  <div className="p-4 sm:p-6">
                    <div className="overflow-x-auto">
                      <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Position</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Team</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Win %</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Avg Goals Scored</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Avg Goals Conceded</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Clean Sheets</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {selectedLeague.details
                            .sort((a, b) => a.position - b.position)
                            .map((team) => (
                              <tr key={team.position} className="hover:bg-gray-50">
                                <td className="px-4 py-3 text-sm font-medium text-gray-900 align-middle">#{team.position}</td>
                                <td className="px-4 py-3 text-sm text-gray-900 align-middle">
                                  <div className="flex items-center gap-2 min-w-0 flex-1">
                                    {team.logo && (
                                      <img
                                        src={team.logo}
                                        alt={team.team}
                                        className="w-6 h-6 object-contain rounded flex-shrink-0"
                                      />
                                    )}
                                    <span 
                                      className="text-sm font-normal text-gray-900 hover:text-blue-600 transition-colors cursor-pointer truncate"
                                      onClick={() => navigate(`/events-and-tables-details/${encodeURIComponent(team.team)}`)}
                                    >
                                      {team.team}
                                    </span>
                                  </div>
                                </td>
                                <td className="px-4 py-3 text-sm text-gray-600 align-middle">{team.stats.winPercentage}</td>
                                <td className="px-4 py-3 text-sm text-gray-600 align-middle">{team.stats.avgGoalsScored}</td>
                                <td className="px-4 py-3 text-sm text-gray-600 align-middle">{team.stats.avgGoalsConceded}</td>
                                <td className="px-4 py-3 text-sm text-gray-600 align-middle">{team.stats.cleanSheets}</td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Sidebar */}
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
                      <button 
  className="bg-white text-teal-700 font-bold py-2 px-6 rounded hover:bg-gray-100 transition-colors" 
  onClick={() => navigate('/signup')}
>
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

  // Team View: Original single team details
  return (
    <>
      <Helmet>
        <html lang="en" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <meta name="keywords" content={`${selectedTeam.team}, ${selectedLeague.league}, team stats, next match, betting odds, win percentage, average goals`} />
        <meta name="author" content="Watchdogs Team" />
        <link rel="canonical" href={pageUrl} />
        <link rel="icon" href="/favicon.ico" />
        {/* Open Graph Tags */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content="https://watchdogs.net/og-team.jpg" />
        <meta property="og:image:alt" content={`${selectedTeam.team} Details - Watchdogs.net`} />
        <meta property="og:site_name" content="Watchdogs.net" />
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>
      <div className="pt-[120px] bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Main Content Area with Sidebar */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
            {/* Main Content */}
            <div className="md:col-span-8 lg:col-span-9">
              {/* Page Header - Dynamic for selected team */}
              <div className="text-center mb-8">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
                  {selectedTeam.team} - {selectedLeague.league} Details
                </h1>
                <p className="text-gray-600 text-sm sm:text-base">
                  Latest stats, next match, and betting odds for {selectedTeam.team}
                </p>
              </div>

              {/* Single Team Data in Table Format */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                {/* League Header - Adjusted for single team */}
                <div className="bg-gradient-to-r from-gray-600 to-gray-800 text-white p-4 sm:p-6 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img
                      src={selectedLeague.countryLogo}
                      alt={`${selectedLeague.league} flag`}
                      className="w-8 h-6 sm:w-10 sm:h-7 rounded-md object-cover"
                    />
                    <h2 className="text-lg sm:text-xl font-bold">{selectedLeague.league}</h2>
                  </div>
                  <div className="text-sm sm:text-base opacity-90">Team Details</div>
                </div>

                {/* Team Info Table */}
                <div className="p-4 sm:p-6">
                  {/* Basic Info Table */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Basic Information</h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Attribute</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          <tr className="align-middle">
                            <td className="px-4 py-3 text-sm font-medium text-gray-900 align-middle">Position</td>
                            <td className="px-4 py-3 text-sm text-gray-600 align-middle">#{selectedTeam.position}</td>
                          </tr>
                          <tr className="align-middle">
                            <td className="px-4 py-3 text-sm font-medium text-gray-900 align-middle">Team Name</td>
                            <td className="px-4 py-3 text-sm text-gray-600 align-middle">
                              <div className="flex items-center gap-2 min-w-0">
                                {selectedTeam.logo && (
                                  <img
                                    src={selectedTeam.logo}
                                    alt={selectedTeam.team}
                                    className="w-6 h-6 object-contain rounded flex-shrink-0"
                                  />
                                )}
                                <span className="truncate">{selectedTeam.team}</span>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Stats Table */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Performance Stats</h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stat</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          <tr className="align-middle">
                            <td className="px-4 py-3 text-sm font-medium text-gray-900 align-middle">Win %</td>
                            <td className="px-4 py-3 text-sm text-gray-600 align-middle">{selectedTeam.stats.winPercentage}</td>
                          </tr>
                          <tr className="align-middle">
                            <td className="px-4 py-3 text-sm font-medium text-gray-900 align-middle">Avg Goals Scored</td>
                            <td className="px-4 py-3 text-sm text-gray-600 align-middle">{selectedTeam.stats.avgGoalsScored}</td>
                          </tr>
                          <tr className="align-middle">
                            <td className="px-4 py-3 text-sm font-medium text-gray-900 align-middle">Avg Goals Conceded</td>
                            <td className="px-4 py-3 text-sm text-gray-600 align-middle">{selectedTeam.stats.avgGoalsConceded}</td>
                          </tr>
                          <tr className="align-middle">
                            <td className="px-4 py-3 text-sm font-medium text-gray-900 align-middle">Clean Sheets</td>
                            <td className="px-4 py-3 text-sm text-gray-600 align-middle">{selectedTeam.stats.cleanSheets}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Next Match Table */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Next Match</h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Detail</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          <tr className="align-middle">
                            <td className="px-4 py-3 text-sm font-medium text-gray-900 align-middle">Opponent</td>
                            <td className="px-4 py-3 text-sm text-gray-600 align-middle truncate">{selectedTeam.nextMatch.opponent}</td>
                          </tr>
                          <tr className="align-middle">
                            <td className="px-4 py-3 text-sm font-medium text-gray-900 align-middle">Date</td>
                            <td className="px-4 py-3 text-sm text-gray-600 align-middle">{selectedTeam.nextMatch.date}</td>
                          </tr>
                          <tr className="align-middle">
                            <td className="px-4 py-3 text-sm font-medium text-gray-900 align-middle">Venue</td>
                            <td className="px-4 py-3 text-sm text-gray-600 align-middle truncate">{selectedTeam.nextMatch.venue}</td>
                          </tr>
                          <tr className="align-middle">
                            <td className="px-4 py-3 text-sm font-medium text-gray-900 align-middle">Status</td>
                            <td className="px-4 py-3 text-sm text-gray-600 align-middle">
                              <span className={`text-xs px-2 py-1 rounded-full ${
                                selectedTeam.nextMatch.status === 'Upcoming' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
                              }`}>
                                {selectedTeam.nextMatch.status}
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Betting Odds Table */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Betting Odds</h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Market</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Odds</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          <tr className="align-middle">
                            <td className="px-4 py-3 text-sm font-medium text-gray-900 align-middle">Home</td>
                            <td className="px-4 py-3 text-sm text-gray-600 align-middle">{selectedTeam.bettingOdds['1']}</td>
                          </tr>
                          <tr className="align-middle">
                            <td className="px-4 py-3 text-sm font-medium text-gray-900 align-middle">Draw</td>
                            <td className="px-4 py-3 text-sm text-gray-600 align-middle">{selectedTeam.bettingOdds['X']}</td>
                          </tr>
                          <tr className="align-middle">
                            <td className="px-4 py-3 text-sm font-medium text-gray-900 align-middle">Away</td>
                            <td className="px-4 py-3 text-sm text-gray-600 align-middle">{selectedTeam.bettingOdds['2']}</td>
                          </tr>
                          <tr className="align-middle">
                            <td className="px-4 py-3 text-sm font-medium text-gray-900 align-middle">Over 2.5</td>
                            <td className="px-4 py-3 text-sm text-gray-600 align-middle">{selectedTeam.bettingOdds['Over 2.5']}</td>
                          </tr>
                          <tr className="align-middle">
                            <td className="px-4 py-3 text-sm font-medium text-gray-900 align-middle">BTTS</td>
                            <td className="px-4 py-3 text-sm text-gray-600 align-middle">{selectedTeam.bettingOdds['Both Teams to Score']}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
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

export default EventsAndTablesDetailsPage;