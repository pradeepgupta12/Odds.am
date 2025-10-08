

import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams, useNavigate } from 'react-router-dom';
import { recommendedOddsDetail } from '../data/recommendedOddsDetail';
import bettingContestDetail from '../data/bettingContestDetail'; 
import LiveScoreSection from "../pages/LiveScoreSection";
import EventsAndTables from '../pages/EventsAndTables';

const RecommendedDetailsPage = () => {
  const { index } = useParams();
  const navigate = useNavigate();
  // Get match data based on index from URL params
  const matchData = recommendedOddsDetail[parseInt(index) || 0];

  const handleBettingContestUserClick = (username) => {
    navigate(`/betting-contest-details/${encodeURIComponent(username)}`);
  };

  const sidebarRanking = bettingContestDetail.fullRanking.slice(0, 6);

  if (!matchData) {
    return (
      <React.Fragment>
        <Helmet>
          <html lang="en" />
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Recommended Odds Not Found - Details | Watchdogs.net</title>
          <meta name="description" content="The requested recommended odds details could not be found on Watchdogs.net." />
          <meta name="keywords" content="recommended odds details, not found" />
          <meta name="author" content="Watchdogs Team" />
          <link rel="canonical" href={`https://watchdogs.net/recommended-details/${index}`} />
          <link rel="icon" href="/favicon.ico" />
          {/* Open Graph Tags */}
          <meta property="og:title" content="Recommended Odds Not Found - Details | Watchdogs.net" />
          <meta property="og:description" content="The requested recommended odds details could not be found on Watchdogs.net." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={`https://watchdogs.net/recommended-details/${index}`} />
          <meta property="og:image" content="https://watchdogs.net/og-recommended-odds.jpg" />
          <meta property="og:image:alt" content="Recommended Odds Details - Watchdogs.net" />
          <meta property="og:site_name" content="Watchdogs.net" />
          {/* Structured Data: WebPage Schema */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Recommended Odds Not Found - Details",
              "url": `https://watchdogs.net/recommended-details/${index}`,
              "description": "Recommended odds details not found.",
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
                <div className="min-h-screen bg-gray-50 p-4 flex justify-center items-center">
                  <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="p-4 md:p-6 border-b">
                      <button 
                        onClick={() => navigate('/')} 
                        className="text-blue-600 hover:text-blue-800 font-medium self-start md:self-center text-sm md:text-base"
                      >
                        ← Back to Home
                      </button>
                      <p className="text-xl text-gray-700 mt-4">Match data not found for index {index}.</p>
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
  }

  return (
    <React.Fragment>
      <Helmet>
        <html lang="en" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{`${matchData.match_title} - Recommended Odds Details | Watchdogs.net`}</title>
        <meta name="description" content={`Detailed recommended odds for ${matchData.match_title}. View match preview, lineups, and key insights on Watchdogs.net.`} />
        <meta name="keywords" content={`recommended odds, ${matchData.match_title.replace(/\s+/g, '-').toLowerCase()}, ${matchData.competition_details.toLowerCase()}, betting tips`} />
        <meta name="author" content="Watchdogs Team" />
        <link rel="canonical" href={`https://watchdogs.net/recommended-details/${index}`} />
        <link rel="icon" href="/favicon.ico" />
        {/* Open Graph Tags */}
        <meta property="og:title" content={`${matchData.match_title} - Recommended Odds Details | Watchdogs.net`} />
        <meta property="og:description" content={`Detailed recommended odds for ${matchData.match_title}.`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://watchdogs.net/recommended-details/${index}`} />
        <meta property="og:image" content="https://watchdogs.net/og-recommended-odds.jpg" />
        <meta property="og:image:alt" content={`${matchData.match_title} - Watchdogs.net`} />
        <meta property="og:site_name" content="Watchdogs.net" />
        {/* Structured Data: WebPage with SportsEvent Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": `${matchData.match_title} - Recommended Odds Details`,
            "url": `https://watchdogs.net/recommended-details/${index}`,
            "description": `Recommended odds details for ${matchData.match_title}.`,
            "publisher": {
              "@type": "Organization",
              "name": "Watchdogs.net",
              "url": "https://watchdogs.net/"
            },
            "mainEntity": {
              "@type": "SportsEvent",
              "name": matchData.match_title,
              "startDate": matchData.dateTime || new Date().toISOString(),
              "homeTeam": {
                "@type": "SportsTeam",
                "name": matchData.lineups.home_team
              },
              "awayTeam": {
                "@type": "SportsTeam",
                "name": matchData.lineups.away_team
              }
            }
          })}
        </script>
      </Helmet>
      <div className="pt-[120px] bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
            <div className="md:col-span-8 lg:col-span-9">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                {/* Header Section */}
                <div className="bg-white p-4 md:p-6 border-b">
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4 w-full">
                    <button 
                      onClick={() => navigate('/')} 
                      className="text-blue-600 hover:text-blue-800 font-medium self-start md:self-center text-sm md:text-base"
                    >
                      ← Back to Home
                    </button>
                    {/* Team Logos and Title */}
                    <div className="flex items-center gap-3 md:gap-4 flex-shrink-0">
                      <img 
                        src={matchData.match_logos[0]} 
                        alt="Home Team"
                        className="w-12 h-12 md:w-16 md:h-16 object-contain"
                      />
                      <span className="text-lg md:text-2xl font-bold text-gray-800">–</span>
                      <img 
                        src={matchData.match_logos[1]} 
                        alt="Away Team"
                        className="w-12 h-12 md:w-16 md:h-16 object-contain"
                      />
                    </div>
                  </div>
                  
                  {/* Match Title */}
                  <h1 className="text-xl md:text-3xl font-bold text-gray-900 mb-2 truncate">
                    {matchData.match_title}
                  </h1>
                  
                  {/* Competition Details */}
                  <p className="text-sm md:text-base text-gray-600 truncate">
                    {matchData.competition_details}
                  </p>
                </div>

                {/* Main Headline */}
                <div className="bg-gray-800 text-white px-4 md:px-6 py-3 md:py-4">
                  <h2 className="text-base md:text-xl font-semibold truncate">
                    {matchData.main_headline}
                  </h2>
                </div>

                {/* Match Preview */}
                <div className="p-4 md:p-6">
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    {matchData.match_preview}
                  </p>
                </div>

                {/* Lineups Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 p-4 md:p-6 bg-gray-50">
                  {/* Home Team */}
                  <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <h3 className="bg-gray-100 px-4 py-3 font-bold text-base md:text-lg text-gray-800 border-b truncate">
                      {matchData.lineups.home_team}
                    </h3>
                    
                    {/* Table Headers */}
                    <div className="grid grid-cols-12 gap-2 px-4 py-2 bg-gray-50 text-xs md:text-sm font-semibold text-gray-600 border-b">
                      <div className="col-span-2">Nat</div>
                      <div className="col-span-2">No</div>
                      <div className="col-span-6">Name</div>
                      <div className="col-span-2">Pos</div>
                    </div>

                    {/* Players */}
                    <div className="divide-y">
                      {matchData.lineups.home_players.map((player, index) => (
                        <div key={index} className="grid grid-cols-12 gap-2 px-4 py-3 hover:bg-gray-50 transition-colors items-center">
                          <div className="col-span-2">
                            <img 
                              src={player.Nat} 
                              alt="Flag"
                              className="w-5 h-4 md:w-6 md:h-5 object-cover"
                            />
                          </div>
                          <div className="col-span-2 text-sm md:text-base font-medium text-gray-700">
                            {player.No}
                          </div>
                          <div className="col-span-6 text-sm md:text-base text-gray-800 truncate">
                            {player.Name}
                          </div>
                          <div className="col-span-2 text-sm md:text-base font-semibold text-gray-600">
                            {player.Pos}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Do Not Play */}
                    <div className="bg-red-50 border-t">
                      <h4 className="px-4 py-2 font-semibold text-sm text-red-800">
                        Do not Play
                      </h4>
                      {matchData.lineups.home_do_not_play.map((player, index) => (
                        <div key={index} className="px-4 py-2 flex items-center justify-between text-sm">
                          <span className="text-gray-800 truncate">{player.Name}</span>
                          <span className="text-red-600 font-medium flex items-center gap-2">
                            {player.Role === 'Injured' && '🏥'}
                            {player.Role === 'Suspended' && '🟥'}
                            {player.Role === 'Fatigue' && '😓'}
                            {player.Role === 'Injury doubt' && '❓'}
                            {player.Role}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Away Team */}
                  <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <h3 className="bg-gray-100 px-4 py-3 font-bold text-base md:text-lg text-gray-800 border-b truncate">
                      {matchData.lineups.away_team}
                    </h3>
                    
                    {/* Table Headers */}
                    <div className="grid grid-cols-12 gap-2 px-4 py-2 bg-gray-50 text-xs md:text-sm font-semibold text-gray-600 border-b">
                      <div className="col-span-2">Nat</div>
                      <div className="col-span-2">No</div>
                      <div className="col-span-6">Name</div>
                      <div className="col-span-2">Pos</div>
                    </div>

                    {/* Players */}
                    <div className="divide-y">
                      {matchData.lineups.away_players.map((player, index) => (
                        <div key={index} className="grid grid-cols-12 gap-2 px-4 py-3 hover:bg-gray-50 transition-colors items-center">
                          <div className="col-span-2">
                            <img 
                              src={player.Nat} 
                              alt="Flag"
                              className="w-5 h-4 md:w-6 md:h-5 object-cover"
                            />
                          </div>
                          <div className="col-span-2 text-sm md:text-base font-medium text-gray-700">
                            {player.No}
                          </div>
                          <div className="col-span-6 text-sm md:text-base text-gray-800 truncate">
                            {player.Name}
                          </div>
                          <div className="col-span-2 text-sm md:text-base font-semibold text-gray-600">
                            {player.Pos}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Do Not Play */}
                    <div className="bg-red-50 border-t">
                      <h4 className="px-4 py-2 font-semibold text-sm text-red-800">
                        Do not Play
                      </h4>
                      {matchData.lineups.away_do_not_play.map((player, index) => (
                        <div key={index} className="px-4 py-2 flex items-center justify-between text-sm">
                          <span className="text-gray-800 truncate">{player.Name}</span>
                          <span className="text-red-600 font-medium flex items-center gap-2">
                            {player.Role === 'Injured' && '🏥'}
                            {player.Role === 'Suspended' && '🟥'}
                            {player.Role === 'Fatigue' && '😓'}
                            {player.Role === 'Injury doubt' && '❓'}
                            {player.Role}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Coach */}
                    {matchData.lineups.away_team === 'Newcastle United' && (
                      <div className="bg-gray-50 px-4 py-3 border-t flex items-center gap-2">
                        <img 
                          src="https://flagcdn.com/w20/gb-eng.png" 
                          alt="Flag"
                          className="w-5 h-4 md:w-6 md:h-5 object-cover"
                        />
                        <span className="text-sm md:text-base font-semibold text-gray-700 truncate">Eddie Howe</span>
                        <span className="text-sm text-gray-500 ml-auto">Coach</span>
                      </div>
                    )}
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
    </React.Fragment>
  );
};

export default RecommendedDetailsPage;