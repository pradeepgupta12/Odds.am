

import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams, useNavigate } from 'react-router-dom';
// मान लीजिए कि OddsHomeDetails.js फाइल इसी डायरेक्टरी में उपलब्ध है
import OddsHomeDetails from '../data/OddsHomeDetails';
import bettingContestDetail from '../data/bettingContestDetail'; 
import LiveScoreSection from "../pages/LiveScoreSection";
import EventsAndTables from '../pages/EventsAndTables';

// एक सहायक कॉम्पोनेंट जो प्लेयर लिस्ट को रेंडर करता है
const PlayerList = ({ players, title }) => (
  <div className="text-sm">
    <h3 className="text-lg font-bold mb-2">{title}</h3>
    
    {/* Heading Row for Nat, No, Name, Pos */}
    <div className="flex items-center justify-between py-1 border-b-2 border-gray-400 font-semibold text-xs uppercase text-gray-600 mb-1">
      <div className="flex items-center space-x-2 w-3/4">
        <span className="w-5 text-center">Nat</span>
        <span className="w-6 text-right">No</span>
        <span className="truncate">Name</span>
      </div>
      <div className="w-1/4 text-right">
        <span>Pos</span>
      </div>
    </div>
    {/* End Heading Row */}

    {players.map((player, index) => (
      <div key={index} className="flex items-center justify-between py-1 border-b border-gray-200 last:border-b-0">
        {/* Flag, Number, Name */}
        <div className="flex items-center space-x-2 w-3/4">
          {/* Flag (Assuming Nat is a URL) */}
          <img src={player.Nat} alt="Nat Flag" className="w-5 h-4 object-cover-contain" onError={(e) => { e.target.onerror = null; e.target.src="https://via.placeholder.com/20x16?text=?" }} />
          <span className="w-6 text-right font-medium">{player.No}</span>
          <span className="truncate">{player.Name}</span>
        </div>
        
        {/* Position (Pos) */}
        <div className="w-1/4 text-right">
          <span className="text-gray-500">{player.Pos}</span>
        </div>
      </div>
    ))}
  </div>
);

// एक सहायक कॉम्पोनेंट जो अनुपलब्ध खिलाड़ियों को रेंडर करता है (Do Not Play)
const DoNotPlayList = ({ players }) => (
  <div className="mt-4 text-sm">
    <h3 className="text-lg font-bold mb-2 border-t pt-2">Do Not Play</h3>
    {players.map((player, index) => (
      <div key={index} className="flex items-center justify-between py-1">
        <div className="flex items-center space-x-2">
          {/* Flag */}
          <img src={player.Nat} alt="Nat Flag" className="w-5 h-4 object-cover" onError={(e) => { e.target.onerror = null; e.target.src="https://via.placeholder.com/20x16?text=?" }} />
          <span className="w-6 text-right font-medium">{player.No}</span>
          <span className="truncate">{player.Name}</span>
        </div>
        
        {/* Status Icon (Red Cross or similar) */}
        <div className="text-red-500 font-bold text-xl">
          + {/* This mimics the cross icon in the screenshot */}
        </div>
      </div>
    ))}
  </div>
);

const MainCardDetailsPage = () => {
  const navigate = useNavigate();
  const { homeTeam, awayTeam } = useParams();

  const handleBettingContestUserClick = (username) => {
    navigate(`/betting-contest-details/${encodeURIComponent(username)}`);
  };

  const sidebarRanking = bettingContestDetail.fullRanking.slice(0, 6);

  // URL से डीकोड करें और मैच डेटा खोजें
  const decodedHomeTeam = decodeURIComponent(homeTeam || '');
  const decodedAwayTeam = decodeURIComponent(awayTeam || '');

  const matchData = OddsHomeDetails.match_details.find(match => 
    match.home_team.name === decodedHomeTeam && 
    match.away_team.name === decodedAwayTeam
  );

  if (!matchData) {
    return (
      <React.Fragment>
        <Helmet>
          <html lang="en" />
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Match Not Found - Details | Watchdogs.net</title>
          <meta name="description" content="The requested match details could not be found on Watchdogs.net." />
          <meta name="keywords" content="match details, not found" />
          <meta name="author" content="Watchdogs Team" />
          <link rel="canonical" href={`https://watchdogs.net/main-card-details/${homeTeam}/${awayTeam}`} />
          <link rel="icon" href="/favicon.ico" />
          {/* Open Graph Tags */}
          <meta property="og:title" content="Match Not Found - Details | Watchdogs.net" />
          <meta property="og:description" content="The requested match details could not be found on Watchdogs.net." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={`https://watchdogs.net/main-card-details/${homeTeam}/${awayTeam}`} />
          <meta property="og:image" content="https://watchdogs.net/og-match-details.jpg" />
          <meta property="og:image:alt" content="Match Details - Watchdogs.net" />
          <meta property="og:site_name" content="Watchdogs.net" />
          {/* Structured Data: WebPage Schema */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Match Not Found - Details",
              "url": `https://watchdogs.net/main-card-details/${homeTeam}/${awayTeam}`,
              "description": "Match details not found.",
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
                <div className="flex justify-center items-center h-screen">
                  <p className="text-xl text-gray-700">Match data not found for {decodedHomeTeam} vs {decodedAwayTeam}.</p>
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
  }

  const { home_team, away_team } = matchData;

  return (
    <React.Fragment>
      <Helmet>
        <html lang="en" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{`${home_team.name} vs ${away_team.name} - Match Details | Watchdogs.net`}</title>
        <meta name="description" content={`Detailed match information for ${home_team.name} vs ${away_team.name}. View playing squads, do not play list, and coaches on Watchdogs.net.`} />
        <meta name="keywords" content={`match details, ${home_team.name}, ${away_team.name}, playing squad, coach`} />
        <meta name="author" content="Watchdogs Team" />
        <link rel="canonical" href={`https://watchdogs.net/main-card-details/${homeTeam}/${awayTeam}`} />
        <link rel="icon" href="/favicon.ico" />
        {/* Open Graph Tags */}
        <meta property="og:title" content={`${home_team.name} vs ${away_team.name} - Match Details | Watchdogs.net`} />
        <meta property="og:description" content={`Detailed match information for ${home_team.name} vs ${away_team.name}.`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://watchdogs.net/main-card-details/${homeTeam}/${awayTeam}`} />
        <meta property="og:image" content="https://watchdogs.net/og-match-details.jpg" />
        <meta property="og:image:alt" content={`${home_team.name} vs ${away_team.name} - Watchdogs.net`} />
        <meta property="og:site_name" content="Watchdogs.net" />
        {/* Structured Data: WebPage with SportsEvent Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": `${home_team.name} vs ${away_team.name} - Match Details`,
            "url": `https://watchdogs.net/main-card-details/${homeTeam}/${awayTeam}`,
            "description": `Detailed match information for ${home_team.name} vs ${away_team.name}.`,
            "publisher": {
              "@type": "Organization",
              "name": "Watchdogs.net",
              "url": "https://watchdogs.net/"
            },
            "mainEntity": {
              "@type": "SportsEvent",
              "name": `${home_team.name} vs ${away_team.name}`,
              "homeTeam": {
                "@type": "SportsTeam",
                "name": home_team.name
              },
              "awayTeam": {
                "@type": "SportsTeam",
                "name": away_team.name
              }
            }
          })}
        </script>
      </Helmet>
      <div className="pt-[130px] bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
            <div className="md:col-span-8 lg:col-span-9">
              <div className="bg-white shadow-xl rounded-lg overflow-hidden border">
                
                {/* Header: Match Teams - Full width on small screens, two columns on large */}
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  
                  {/* Home Team (Left Column) */}
                  <div className="p-4 sm:p-6 border-r lg:border-r border-gray-300">
                    <h2 className="text-2xl font-extrabold text-gray-900 mb-4 truncate">{home_team.name}</h2>
                    
                    {/* Playing Squad */}
                    <PlayerList players={home_team.players} title=" " /> 
                    
                    {/* Do Not Play List */}
                    <DoNotPlayList players={home_team.do_not_play} />

                    {/* Coach */}
                    <div className="mt-6 border-t pt-4 flex items-center justify-end">
                      <span className="text-sm font-semibold mr-3">Coach</span>
                      {/* Coach Flag */}
                      <img src={home_team.coach.Nat} alt="Coach Flag" className="w-5 h-4 object-cover mr-2" onError={(e) => { e.target.onerror = null; e.target.src="https://via.placeholder.com/20x16?text=?" }} />
                      <span className="font-semibold text-lg truncate">{home_team.coach.Name}</span>
                    </div>
                  </div>
                  
                  {/* Away Team (Right Column) */}
                  <div className="p-4 sm:p-6">
                    <h2 className="text-2xl font-extrabold text-gray-900 mb-4 truncate">{away_team.name}</h2>
                    
                    {/* Playing Squad */}
                    <PlayerList players={away_team.players} title=" " />
                    
                    {/* Do Not Play List */}
                    <DoNotPlayList players={away_team.do_not_play} />

                    {/* Coach */}
                    <div className="mt-6 border-t pt-4 flex items-center">
                      <span className="font-semibold text-lg mr-2 truncate">{away_team.coach.Name}</span>
                      {/* Coach Flag */}
                      <img src={away_team.coach.Nat} alt="Coach Flag" className="w-5 h-4 object-cover ml-2" onError={(e) => { e.target.onerror = null; e.target.src="https://via.placeholder.com/20x16?text=?" }} />
                      <span className="text-sm font-semibold ml-3">Coach</span>
                    </div>
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

export default MainCardDetailsPage;