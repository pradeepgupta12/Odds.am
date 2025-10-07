


import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams, useNavigate } from 'react-router-dom';
import topsureBetsDetails from '../data/topsureBetsDetails'; // Assuming the JSON data is exported from topsureBetsDetailsPage.js
import bettingContestDetail from '../data/bettingContestDetail'; 
import LiveScoreSection from "../pages/LiveScoreSection";
import EventsAndTables from '../pages/EventsAndTables';

const TopSureBetsDetailsPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { betsDetails } = topsureBetsDetails;
  const bet = betsDetails.find(b => b.id.toString() === id.toString());

  const handleBettingContestUserClick = (username) => {
    navigate(`/betting-contest-details/${encodeURIComponent(username)}`);
  };

  const sidebarRanking = bettingContestDetail.fullRanking.slice(0, 6);

  if (!bet) {
    return (
      <React.Fragment>
        <Helmet>
          <html lang="en" />
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Bet Not Found - Sure Bets Details | Watchdogs.net</title>
          <meta name="description" content="The requested sure bet details could not be found on Watchdogs.net." />
          <meta name="keywords" content="sure bets details, bet not found" />
          <meta name="author" content="Watchdogs Team" />
          <link rel="canonical" href={`https://watchdogs.net/top-sure-bets-details/${id}`} />
          <link rel="icon" href="/favicon.ico" />
          {/* Open Graph Tags */}
          <meta property="og:title" content="Bet Not Found - Sure Bets Details | Watchdogs.net" />
          <meta property="og:description" content="The requested sure bet details could not be found on Watchdogs.net." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={`https://watchdogs.net/top-sure-bets-details/${id}`} />
          <meta property="og:image" content="https://watchdogs.net/og-sure-bets.jpg" />
          <meta property="og:image:alt" content="Sure Bets Details - Watchdogs.net" />
          <meta property="og:site_name" content="Watchdogs.net" />
          {/* Structured Data: WebPage Schema */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Bet Not Found - Sure Bets Details",
              "url": `https://watchdogs.net/top-sure-bets-details/${id}`,
              "description": "Sure bet details not found.",
              "publisher": {
                "@type": "Organization",
                "name": "Watchdogs.net",
                "url": "https://watchdogs.net/"
              }
            })}
          </script>
        </Helmet>
        <div className="pt-[120px] bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
              <div className="md:col-span-8 lg:col-span-9">
                <header className="text-center mb-8 bg-white rounded-lg shadow-md p-6">
                  <h1 className="text-3xl font-bold text-gray-800 mb-2">Bet Not Found</h1>
                  <p className="text-gray-600">The requested sure bet details could not be found.</p>
                </header>
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
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <Helmet>
        <html lang="en" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{`${bet.matchup} - Top Sure Bets Details | Watchdogs.net`}</title>
        <meta name="description" content={`Detailed sure bet information for ${bet.matchup} in ${bet.sport}. View betting options, best odds, and arbitrage return on Watchdogs.net.`} />
        <meta name="keywords" content={`sure bets details, ${bet.matchup.replace(/\s+/g, '-').toLowerCase()}, ${bet.sport.toLowerCase()} arbitrage, betting odds`} />
        <meta name="author" content="Watchdogs Team" />
        <link rel="canonical" href={`https://watchdogs.net/top-sure-bets-details/${id}`} />
        <link rel="icon" href="/favicon.ico" />
        {/* Open Graph Tags */}
        <meta property="og:title" content={`${bet.matchup} - Top Sure Bets Details | Watchdogs.net`} />
        <meta property="og:description" content={`Detailed sure bet for ${bet.matchup} in ${bet.sport}.`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://watchdogs.net/top-sure-bets-details/${id}`} />
        <meta property="og:image" content="https://watchdogs.net/og-sure-bets.jpg" />
        <meta property="og:image:alt" content={`${bet.matchup} - Watchdogs.net`} />
        <meta property="og:site_name" content="Watchdogs.net" />
        {/* Structured Data: WebPage with SportsEvent Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": `${bet.matchup} - Top Sure Bets Details`,
            "url": `https://watchdogs.net/top-sure-bets-details/${id}`,
            "description": `Sure bet details for ${bet.matchup}.`,
            "publisher": {
              "@type": "Organization",
              "name": "Watchdogs.net",
              "url": "https://watchdogs.net/"
            },
            "mainEntity": {
              "@type": "SportsEvent",
              "name": bet.matchup,
              "sport": bet.sport,
              "startDate": bet.scheduledTime,
              "homeTeam": {
                "@type": "SportsTeam",
                "name": bet.teams.home
              },
              "awayTeam": {
                "@type": "SportsTeam",
                "name": bet.teams.away
              }
            }
          })}
        </script>
      </Helmet>
      <div className="pt-[120px] bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
            <div className="md:col-span-8 lg:col-span-9">
              <header className="text-center mb-8 bg-white rounded-lg shadow-md p-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Sure Bet Details</h1>
                <p className="text-gray-600">Detailed arbitrage opportunity for {bet.matchup}</p>
              </header>

              <main className="grid grid-cols-1 gap-6 mb-8">
                <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="bet-header bg-blue-500 text-white p-4 flex items-start gap-4">
                    <span className="bg-blue-600 px-3 py-1 rounded-full text-sm font-bold">{bet.sport}</span>
                    <div className="flex-1">
                      <h2 className="text-xl font-semibold mb-2 truncate">{bet.matchup}</h2>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <span className="bg-blue-400 px-2 py-1 rounded truncate">{new Date(bet.scheduledTime).toLocaleString()}</span>
                        <span className="bg-blue-400 px-2 py-1 rounded truncate">Type: {bet.betType}</span>
                        <span className="bg-green-400 px-2 py-1 rounded">Best Return: {bet.bestReturn}</span>
                      </div>
                    </div>
                  </div>

                  <div className="teams-section p-4 bg-gray-50 flex items-center justify-between">
                    <div className="team flex flex-col items-center flex-1">
                      <img src={bet.teams.homeLogo} alt={bet.teams.home} className="w-12 h-12 rounded-full object-cover mb-2" />
                      <span className="font-bold text-gray-800 text-sm text-center truncate">{bet.teams.home}</span>
                    </div>
                    <span className="text-lg font-bold text-gray-600 mx-4">vs</span>
                    <div className="team flex flex-col items-center flex-1">
                      <img src={bet.teams.awayLogo} alt={bet.teams.away} className="w-12 h-12 rounded-full object-cover mb-2" />
                      <span className="font-bold text-gray-800 text-sm text-center truncate">{bet.teams.away}</span>
                    </div>
                  </div>

                  <div className="betting-options p-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">Betting Options</h3>
                    {bet.bettingOptions.map((option, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-4 mb-4 border-l-4 border-blue-500">
                        <div className="flex justify-between items-start mb-3">
                          <h4 className="text-base font-medium text-gray-800 flex-1 truncate">{option.outcome}</h4>
                          <div className="text-right ml-4">
                            <span className="block text-lg font-bold text-green-600">Best Odd: {option.bestOdd}</span>
                            <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-bold truncate">{option.bookmaker}</span>
                          </div>
                        </div>
                        <ul className="space-y-2">
                          {option.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-center gap-3 p-2 bg-white rounded shadow-sm">
                              <a href={detail.website} target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:opacity-80 transition-opacity">
                                <img src={detail.logo} alt={detail.bookmakerName} className="w-16 h-8 rounded object-cover" />
                              </a>
                              <span className="text-sm text-gray-600 truncate">{detail.bookmakerName}: {detail.odds}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </article>
              </main>
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
    </React.Fragment>
  );
};

export default TopSureBetsDetailsPage;