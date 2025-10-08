

import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams, Link, useNavigate } from 'react-router-dom';
import liveScoreDetails from '../data/liveScoreDetails';
import bettingContestDetail from '../data/bettingContestDetail'; 
import LiveScoreSection from "../pages/LiveScoreSection";
import EventsAndTables from '../pages/EventsAndTables';

const LiveScoreDetailsPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { liveEvents } = liveScoreDetails;

  const handleBettingContestUserClick = (username) => {
    navigate(`/betting-contest-details/${encodeURIComponent(username)}`);
  };

  const sidebarRanking = bettingContestDetail.fullRanking.slice(0, 6);

  if (id) {
    const event = liveEvents.find(e => e.id === id);

    if (!event) {
      return (
        <React.Fragment>
          <Helmet>
            <html lang="en" />
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Event Not Found - Live Score Details | Watchdogs.net</title>
            <meta name="description" content="The requested live event details could not be found on Watchdogs.net." />
            <meta name="keywords" content="live score details, event not found" />
            <meta name="author" content="Watchdogs Team" />
            <link rel="canonical" href={`https://watchdogs.net/live-score-details/${id}`} />
            <link rel="icon" href="/favicon.ico" />
            {/* Open Graph Tags */}
            <meta property="og:title" content="Event Not Found - Live Score Details | Watchdogs.net" />
            <meta property="og:description" content="The requested live event details could not be found on Watchdogs.net." />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={`https://watchdogs.net/live-score-details/${id}`} />
            <meta property="og:image" content="https://watchdogs.net/og-live-score.jpg" />
            <meta property="og:image:alt" content="Live Score Details - Watchdogs.net" />
            <meta property="og:site_name" content="Watchdogs.net" />
            {/* Structured Data: WebPage Schema */}
            <script type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebPage",
                "name": "Event Not Found - Live Score Details",
                "url": `https://watchdogs.net/live-score-details/${id}`,
                "description": "Live event not found.",
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
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">Event Not Found</h1>
                    <p className="text-gray-600">The requested live event details could not be found. ID: {id}</p>
                    <p className="text-gray-600">Available IDs: {liveEvents.map(e => e.id).join(', ')}</p>
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

    // Render details for the found event
    return (
      <React.Fragment>
        <Helmet>
          <html lang="en" />
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>{`${event.matchup} - Live Score Details | Watchdogs.net`}</title>
          <meta name="description" content={`Live score details for ${event.matchup} in ${event.sport}. View real-time stats, timeline, and in-play odds on Watchdogs.net.`} />
          <meta name="keywords" content={`live score ${event.matchup.replace(/\s+/g, '-').toLowerCase()}, ${event.sport.toLowerCase()} live scores, match stats`} />
          <meta name="author" content="Watchdogs Team" />
          <link rel="canonical" href={`https://watchdogs.net/live-score-details/${id}`} />
          <link rel="icon" href="/favicon.ico" />
          {/* Open Graph Tags */}
          <meta property="og:title" content={`${event.matchup} - Live Score Details | Watchdogs.net`} />
          <meta property="og:description" content={`Live score details for ${event.matchup} in ${event.sport}.`} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={`https://watchdogs.net/live-score-details/${id}`} />
          <meta property="og:image" content="https://watchdogs.net/og-live-score.jpg" />
          <meta property="og:image:alt" content={`${event.matchup} - Watchdogs.net`} />
          <meta property="og:site_name" content="Watchdogs.net" />
          {/* Structured Data: WebPage with SportsEvent Schema */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": `${event.matchup} - Live Score Details`,
              "url": `https://watchdogs.net/live-score-details/${id}`,
              "description": `Live score details for ${event.matchup}.`,
              "publisher": {
                "@type": "Organization",
                "name": "Watchdogs.net",
                "url": "https://watchdogs.net/"
              },
              "mainEntity": {
                "@type": "SportsEvent",
                "name": event.matchup,
                "sport": event.sport,
                "startDate": event.dateTime,
                "status": event.status,
                "homeTeam": event.teams ? event.teams.home.name : event.players.player1.name,
                "awayTeam": event.teams ? event.teams.away.name : event.players.player2.name
              }
            })}
          </script>
        </Helmet>
        <div className="pt-[120px] bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
              <div className="md:col-span-8 lg:col-span-9">
                <header className="text-center mb-8 bg-white rounded-lg shadow-md p-6">
                  <h1 className="text-3xl font-bold text-gray-800 mb-2">{event.matchup}</h1>
                  <p className="text-gray-600">{event.sport} - {event.status}</p>
                </header>

                <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="event-header bg-gray-500 text-white p-4">
                    <span className="bg-gray-600 px-3 py-1 rounded-full text-sm font-bold inline-block mr-2">{event.sport}</span>
                    <div className="flex-1">
                      <h2 className="text-xl font-semibold mb-1 truncate">{event.matchup}</h2>
                      <div className="flex flex-wrap gap-2 text-sm">
                        <span className="bg-gray-400 px-2 py-1 rounded truncate">{event.league || event.tournament || 'N/A'}</span>
                        <span className="bg-yellow-400 px-2 py-1 rounded">{event.status}</span>
                        {event.round && <span className="bg-blue-400 px-2 py-1 rounded">{event.round}</span>}
                        <span className="bg-gray-400 px-2 py-1 rounded truncate">{new Date(event.dateTime).toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  {event.sport === 'Tennis' ? (
                    <div className="players-section p-4 bg-gray-50 flex flex-col space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <img src={event.players.player1.logo} alt={event.players.player1.name} className="w-10 h-10 rounded-full object-cover" />
                          <div>
                            <span className="font-bold text-gray-800 truncate">{event.players.player1.name}</span>
                            <p className="text-xs text-gray-600">{event.players.player1.currentSetGames} games</p>
                          </div>
                        </div>
                        <span className="text-lg font-bold text-gray-800">{event.players.player1.setScore}</span>
                      </div>
                      <div className="text-center text-sm text-gray-600">Current Points: {event.players.player1.currentSetPoints}</div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="text-center">
                            <span className="font-bold text-gray-800">{event.players.player2.setScore}</span>
                            <p className="text-xs text-gray-600">{event.players.player2.currentSetGames} games</p>
                          </div>
                          <img src={event.players.player2.logo} alt={event.players.player2.name} className="w-10 h-10 rounded-full object-cover" />
                        </div>
                        <span className="text-lg font-bold text-gray-800 truncate">{event.players.player2.name}</span>
                      </div>
                      <div className="text-center text-sm text-gray-600">Current Points: {event.players.player2.currentSetPoints} | Serving: {event.players.player2.isServing ? event.players.player2.name : event.players.player1.name}</div>
                    </div>
                  ) : (
                    <div className="teams-section p-4 bg-gray-50 flex items-center justify-between">
                      <div className="team flex flex-col items-center flex-1">
                        <img src={event.teams.home.logo} alt={event.teams.home.name} className="w-12 h-12 rounded-full object-cover mb-2" />
                        <span className="font-bold text-gray-800 text-sm text-center truncate">{event.teams.home.name}</span>
                        <span className="text-lg font-bold text-red-600">{event.teams.home.score}</span>
                      </div>
                      <span className="text-lg font-bold text-gray-600 mx-4">vs</span>
                      <div className="team flex flex-col items-center flex-1">
                        <span className="text-lg font-bold text-red-600">{event.teams.away.score}</span>
                        <span className="font-bold text-gray-800 text-sm text-center truncate">{event.teams.away.name}</span>
                        <img src={event.teams.away.logo} alt={event.teams.away.name} className="w-12 h-12 rounded-full object-cover mb-2" />
                      </div>
                    </div>
                  )}

                  <div className="p-4 bg-blue-50">
                    <h4 className="font-semibold text-gray-700 mb-2">Match Status</h4>
                    <p className="text-sm text-gray-600">{event.matchTime || `${event.currentSet} Set` || (event.periodScores ? event.periodScores.currentPeriod : '')}</p>
                  </div>

                  {(event.liveStats || event.stats) && (
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-700 mb-2">Live Stats</h4>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        {Object.entries(event.liveStats || event.stats).map(([key, value]) => (
                          <div key={key} className="flex justify-between">
                            <span className="text-gray-600 capitalize truncate">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                            <span className="font-medium">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {(event.periodScores || event.scoreBreakdown) && (
                    <div className="p-4 bg-yellow-50">
                      <h4 className="font-semibold text-gray-700 mb-2">Period/Set Scores</h4>
                      {event.periodScores && (
                        <div className="text-sm space-y-1">
                          <p><span className="text-gray-600">Half Time:</span> {event.periodScores.halfTime}</p>
                          <p><span className="text-gray-600">Current:</span> {event.periodScores.currentPeriod}</p>
                        </div>
                      )}
                      {event.scoreBreakdown && (
                        <ul className="text-sm space-y-1">
                          {event.scoreBreakdown.map((set, idx) => (
                            <li key={idx}><span className="text-gray-600">Set {set.set}:</span> {set.score} ({set.winner})</li>
                          ))}
                        </ul>
                      )}
                      {event.scoreDetails && (
                        <div className="text-sm space-y-1 mt-2">
                          <p><span className="text-gray-600">Goals:</span> {event.scoreDetails.goals}</p>
                          <p><span className="text-gray-600">Behinds:</span> {event.scoreDetails.behinds}</p>
                        </div>
                      )}
                    </div>
                  )}

                  {event.inPlayOdds && (
                    <div className="p-4 bg-purple-50">
                      <h4 className="font-semibold text-gray-700 mb-2">In-Play Odds</h4>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        {Object.entries(event.inPlayOdds).map(([key, value]) => (
                          <div key={key} className="flex justify-between">
                            <span className="text-gray-600 capitalize truncate">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                            {typeof value === 'object' ? (
                              <div>
                                {Object.entries(value).map(([subKey, odd]) => (
                                  <p key={subKey} className="text-right">{subKey}: {odd}</p>
                                ))}
                              </div>
                            ) : (
                              <span className="font-medium">{value}</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {event.timeline && (
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-700 mb-2">Timeline</h4>
                      <ul className="space-y-1 text-sm">
                        {event.timeline.map((item, idx) => (
                          <li key={idx} className="flex justify-between">
                            <span className="text-gray-600">{item.time}</span>
                            <span className="font-medium truncate">{item.event} - {item.scorer || item.player}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </article>
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
        <title>Live Score Details - Comprehensive Match Stats Across Sports | Watchdogs.net</title>
        <meta name="description" content="Explore detailed live score information for football, tennis, basketball, and more on Watchdogs.net. View matchups, scores, timelines, stats, and in-play odds." />
        <meta name="keywords" content="live score details, match stats, football live scores, tennis scores, basketball stats, timeline, in-play odds" />
        <meta name="author" content="Watchdogs Team" />
        <link rel="canonical" href="https://watchdogs.net/live-score-details" />
        <link rel="icon" href="/favicon.ico" />
        {/* Open Graph Tags */}
        <meta property="og:title" content="Live Score Details - Comprehensive Match Stats Across Sports | Watchdogs.net" />
        <meta property="og:description" content="Explore detailed live score information for football, tennis, basketball, and more on Watchdogs.net. View matchups, scores, timelines, stats, and in-play odds." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://watchdogs.net/live-score-details" />
        <meta property="og:image" content="https://watchdogs.net/og-live-score.jpg" />
        <meta property="og:image:alt" content="Live Score Details - Watchdogs.net" />
        <meta property="og:site_name" content="Watchdogs.net" />
        {/* Structured Data: WebPage with ItemList for Live Events */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Live Score Details",
            "url": "https://watchdogs.net/live-score-details",
            "description": "Detailed live scores and match stats for various sports.",
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
              "itemListElement": liveEvents.slice(0, 5).map((event, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "name": event.matchup,
                "description": `${event.sport} - ${event.status}`,
                "url": `https://watchdogs.net/live-score-details/${event.id}`
              }))
            }
          })}
        </script>
      </Helmet>
      <div className="pt-[120px] bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
            <div className="md:col-span-8 lg:col-span-9">
              <header className="text-center mb-8 bg-white rounded-lg shadow-md p-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Live Score Details</h1>
                <p className="text-gray-600">Comprehensive live match details across various sports</p>
              </header>

              <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {liveEvents.map((event) => (
                  <article key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 min-h-[500px]">
                    <div className="event-header bg-gray-500 text-white p-4">
                      <span className="bg-gray-600 px-3 py-1 rounded-full text-sm font-bold inline-block mr-2">{event.sport}</span>
                      <div className="flex-1">
                        <h2 className="text-xl font-semibold mb-1 truncate">{event.matchup}</h2>
                        <div className="flex flex-wrap gap-2 text-sm">
                          <span className="bg-gray-400 px-2 py-1 rounded truncate">{event.league || event.tournament || 'N/A'}</span>
                          <span className="bg-yellow-400 px-2 py-1 rounded">{event.status}</span>
                          {event.round && <span className="bg-blue-400 px-2 py-1 rounded">{event.round}</span>}
                          <span className="bg-gray-400 px-2 py-1 rounded truncate">{new Date(event.dateTime).toLocaleString()}</span>
                        </div>
                      </div>
                    </div>

                    {event.sport === 'Tennis' ? (
                      <div className="players-section p-4 bg-gray-50 flex flex-col space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <img src={event.players.player1.logo} alt={event.players.player1.name} className="w-10 h-10 rounded-full object-cover" />
                            <div>
                              <span className="font-bold text-gray-800 truncate">{event.players.player1.name}</span>
                              <p className="text-xs text-gray-600">{event.players.player1.currentSetGames} games</p>
                            </div>
                          </div>
                          <span className="text-lg font-bold text-gray-800">{event.players.player1.setScore}</span>
                        </div>
                        <div className="text-center text-sm text-gray-600">Current Points: {event.players.player1.currentSetPoints}</div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="text-center">
                              <span className="font-bold text-gray-800">{event.players.player2.setScore}</span>
                              <p className="text-xs text-gray-600">{event.players.player2.currentSetGames} games</p>
                            </div>
                            <img src={event.players.player2.logo} alt={event.players.player2.name} className="w-10 h-10 rounded-full object-cover" />
                          </div>
                          <span className="text-lg font-bold text-gray-800 truncate">{event.players.player2.name}</span>
                        </div>
                        <div className="text-center text-sm text-gray-600">Current Points: {event.players.player2.currentSetPoints} | Serving: {event.players.player2.isServing ? event.players.player2.name : event.players.player1.name}</div>
                      </div>
                    ) : (
                      <div className="teams-section p-4 bg-gray-50 flex items-center justify-between">
                        <div className="team flex flex-col items-center flex-1">
                          <img src={event.teams.home.logo} alt={event.teams.home.name} className="w-12 h-12 rounded-full object-cover mb-2" />
                          <span className="font-bold text-gray-800 text-sm text-center truncate">{event.teams.home.name}</span>
                          <span className="text-lg font-bold text-red-600">{event.teams.home.score}</span>
                        </div>
                        <span className="text-lg font-bold text-gray-600 mx-4">vs</span>
                        <div className="team flex flex-col items-center flex-1">
                          <span className="text-lg font-bold text-red-600">{event.teams.away.score}</span>
                          <span className="font-bold text-gray-800 text-sm text-center truncate">{event.teams.away.name}</span>
                          <img src={event.teams.away.logo} alt={event.teams.away.name} className="w-12 h-12 rounded-full object-cover mb-2" />
                        </div>
                      </div>
                    )}

                    <div className="p-4 bg-blue-50">
                      <h4 className="font-semibold text-gray-700 mb-2">Match Status</h4>
                      <p className="text-sm text-gray-600">{event.matchTime || `${event.currentSet} Set` || (event.periodScores ? event.periodScores.currentPeriod : '')}</p>
                    </div>

                    {(event.liveStats || event.stats) && (
                      <div className="p-4">
                        <h4 className="font-semibold text-gray-700 mb-2">Live Stats</h4>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          {Object.entries(event.liveStats || event.stats).map(([key, value]) => (
                            <div key={key} className="flex justify-between">
                              <span className="text-gray-600 capitalize truncate">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                              <span className="font-medium">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {(event.periodScores || event.scoreBreakdown) && (
                      <div className="p-4 bg-yellow-50">
                        <h4 className="font-semibold text-gray-700 mb-2">Period/Set Scores</h4>
                        {event.periodScores && (
                          <div className="text-sm space-y-1">
                            <p><span className="text-gray-600">Half Time:</span> {event.periodScores.halfTime}</p>
                            <p><span className="text-gray-600">Current:</span> {event.periodScores.currentPeriod}</p>
                          </div>
                        )}
                        {event.scoreBreakdown && (
                          <ul className="text-sm space-y-1">
                            {event.scoreBreakdown.map((set, idx) => (
                              <li key={idx}><span className="text-gray-600">Set {set.set}:</span> {set.score} ({set.winner})</li>
                            ))}
                          </ul>
                        )}
                        {event.scoreDetails && (
                          <div className="text-sm space-y-1 mt-2">
                            <p><span className="text-gray-600">Goals:</span> {event.scoreDetails.goals}</p>
                            <p><span className="text-gray-600">Behinds:</span> {event.scoreDetails.behinds}</p>
                          </div>
                        )}
                      </div>
                    )}

                    {event.inPlayOdds && (
                      <div className="p-4 bg-purple-50">
                        <h4 className="font-semibold text-gray-700 mb-2">In-Play Odds</h4>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          {Object.entries(event.inPlayOdds).map(([key, value]) => (
                            <div key={key} className="flex justify-between">
                              <span className="text-gray-600 capitalize truncate">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                              {typeof value === 'object' ? (
                                <div>
                                  {Object.entries(value).map(([subKey, odd]) => (
                                    <p key={subKey} className="text-right">{subKey}: {odd}</p>
                                  ))}
                                </div>
                              ) : (
                                <span className="font-medium">{value}</span>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {event.timeline && (
                      <div className="p-4">
                        <h4 className="font-semibold text-gray-700 mb-2">Timeline</h4>
                        <ul className="space-y-1 text-sm">
                          {event.timeline.map((item, idx) => (
                            <li key={idx} className="flex justify-between">
                              <span className="text-gray-600">{item.time}</span>
                              <span className="font-medium truncate">{item.event} - {item.scorer || item.player}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </article>
                ))}
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
    </React.Fragment>
  );
};

export default LiveScoreDetailsPage;