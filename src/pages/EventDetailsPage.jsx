

import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useParams, useNavigate } from 'react-router-dom';
// सुनिश्चित करें कि यह पाथ आपके प्रोजेक्ट स्ट्रक्चर के अनुसार सही है
import { topEventDetails } from '../data/topEventDetails'; 
import league from '../data/league';
import LiveScoreSection from "../pages/LiveScoreSection";
import EventsAndTables from '../pages/EventsAndTables';

// --- सहायक कॉम्पोनेंट: ऑड्स और फिक्स्चर को डिस्प्ले करने के लिए (UPDATED for Mobile Table) ---
const OddsAndFixturesTable = ({ eventData }) => {
    // ... (यह कॉम्पोनेंट अपरिवर्तित है)
    const { tournamentTitle, matches } = eventData.oddsAndFixtures;

    return (
        <div className="bg-white shadow-xl rounded-lg p-2 sm:p-4 md:p-6 mb-8 border border-gray-100">
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 border-b pb-2">{tournamentTitle} Fixtures & Odds</h3>
            
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-2 sm:px-3 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                            <th className="px-4 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Matchup</th>
                            <th className="px-2 sm:px-3 py-2 sm:py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
                            <th className="px-1 sm:px-2 py-2 sm:py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">1</th>
                            <th className="px-1 sm:px-2 py-2 sm:py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">X</th>
                            <th className="px-1 sm:px-2 py-2 sm:py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">2</th>
                            <th className="px-4 sm:px-6 py-2 sm:py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">Total Goals/Runs</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {matches?.map((match, index) => (
                            <tr key={index} className={match.score ? 'bg-gray-50' : 'hover:bg-yellow-50/50'}>
                                <td className="px-2 sm:px-3 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900 font-medium"> {match.time}</td>
                                <td className="px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium text-gray-900 flex items-center min-w-0">
                                    <img src={match.logo} alt="Logo" className="w-4 h-4 sm:w-6 sm:h-6 mr-1 sm:mr-2 flex-shrink-0 object-contain" />
                                    <span className="min-w-0 flex-1 truncate">{match.matchup}</span>
                                </td>
                                <td className="px-2 sm:px-3 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-center font-bold text-red-600">{match.score || '-'}</td>
                                {/* ऑड्स को डायनामिक रूप से हैंडल करना */}
                                {match.odds["1"] && <td className={`px-1 sm:px-2 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-center bg-green-50/70 font-semibold text-green-700`}>{match.odds["1"]}</td>}
                                {match.odds["X"] && <td className={`px-1 sm:px-2 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-center bg-blue-50/70 font-semibold text-blue-700`}>{match.odds["X"]}</td>}
                                {match.odds["2"] && <td className={`px-1 sm:px-2 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-center bg-green-50/70 font-semibold text-green-700`}>{match.odds["2"]}</td>}
                                
                                {/* Total Goals/Runs (Simplified for display) */}
                                <td className="px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-right text-gray-700 hidden md:table-cell">
                                    {Object.keys(match.odds).find(key => key.includes("Over")) || ''}: <span className="font-semibold">{Object.values(match.odds).find((_, i) => Object.keys(match.odds)[i].includes("Over"))}</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

// --- सहायक कॉम्पोनेंट: लाइनअप विवरण को डिस्प्ले करने के लिए (UPDATED for Mobile Alignment) ---
const LineupDetailsCard = ({ team, teamType = 'home' }) => {
    // फुटबॉल के लिए 'Pos' या क्रिकेट के लिए 'Role' के आधार पर हेडिंग तय करें
    const isFootball = !!team.startingXI; 
    const roleHeading = isFootball ? 'Pos' : 'Role';

    return (
        <div className={`w-full p-2 sm:p-3 ${teamType === 'home' ? 'md:pr-2' : 'md:pl-2'}`}>
            <div className="bg-white rounded-lg shadow-md border border-gray-100 h-full flex flex-col">
                <div className="flex items-center justify-between p-3 sm:p-4 border-b bg-gray-50 rounded-t-lg">
                    <div className="flex items-center">
                        <img src={team.logo} alt={`${team.name} Logo`} className="w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-3 object-contain" />
                        <h4 className="text-base sm:text-lg font-extrabold text-gray-900 truncate">{team.name}</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 font-medium hidden sm:block">Coach: {team.coach}</p>
                </div>

                {/* Starting XI Table */}
                <div className="p-3 sm:p-4 flex-grow">
                    <h5 className="font-bold text-xs sm:text-sm uppercase text-indigo-600 mb-2 border-b pb-1">Starting XI / Squad</h5>
                    
                    {/* --- Desktop: Column Headings --- */}
                    <div className="hidden sm:flex justify-between py-1 bg-gray-100 rounded-sm font-semibold text-xs text-gray-600 uppercase border-b border-gray-200">
                        <span className="w-1/5 pl-2">No</span>
                        <span className="w-3/5">Player Name</span>
                        <span className="w-1/5 text-right pr-2">{roleHeading}</span>
                    </div>
                    {/* --- Mobile: Stacked Headings (Grid for Equal Columns) --- */}
                    <div className="sm:hidden grid grid-cols-[1fr_2fr_1fr] gap-0 mb-2 text-xs text-gray-600 uppercase border-b border-gray-200 pb-1 bg-gray-100">
                        <span className="font-semibold text-center px-1">No</span>
                        <span className="font-semibold text-center px-1">Player Name</span>
                        <span className="font-semibold text-center px-1">{roleHeading}</span>
                    </div>
                    {/* --- END NEW --- */}

                    <div className="space-y-2 text-xs sm:text-sm">
                        {/* Football Lineup */}
                        {isFootball && team.startingXI?.map((player, idx) => (
                            <div key={idx} className="py-1 sm:py-2 hover:bg-indigo-50/20 rounded">
                                {/* Mobile: Grid Layout for Alignment */}
                                <div className="sm:hidden grid grid-cols-[1fr_2fr_1fr] gap-0 text-center border-b border-gray-100 last:border-b-0">
                                    <span className="font-semibold px-1 text-gray-900">{player.No}</span>
                                    <span className="px-1 text-gray-800 truncate">{player.Name}</span>
                                    <span className={`font-medium px-1 ${player.Pos === 'G' || player.Pos === 'BOWL' ? 'text-red-500' : 'text-green-600'}`}>
                                        {player.Pos}
                                    </span>
                                </div>
                                {/* Desktop: Inline Flex */}
                                <div className="hidden sm:flex justify-between w-full">
                                    <span className="font-semibold w-1/5 pl-2 text-gray-900">{player.No}</span>
                                    <span className="w-3/5 text-gray-800 truncate px-1">{player.Name}</span>
                                    <span className={`w-1/5 text-right font-medium pr-2 ${player.Pos === 'G' || player.Pos === 'BOWL' ? 'text-red-500' : 'text-green-600'}`}>
                                        {player.Pos}
                                    </span>
                                </div>
                            </div>
                        ))}
                        
                        {/* Cricket Squad */}
                        {!isFootball && team.squad?.map((player, idx) => (
                            <div key={idx} className="py-1 sm:py-2 hover:bg-indigo-50/20 rounded">
                                {/* Mobile: Grid Layout for Alignment */}
                                <div className="sm:hidden grid grid-cols-[1fr_2fr_1fr] gap-0 text-center border-b border-gray-100 last:border-b-0">
                                    <span className="font-semibold px-1 text-gray-900">{player.No}</span>
                                    <span className="px-1 text-gray-800 truncate">{player.Name}</span>
                                    <span className={`font-medium px-1 ${player.Role === 'BOWL' ? 'text-red-500' : 'text-green-600'}`}>
                                        {player.Role}
                                    </span>
                                </div>
                                {/* Desktop: Inline Flex */}
                                <div className="hidden sm:flex justify-between w-full">
                                    <span className="font-semibold w-1/5 pl-2 text-gray-900">{player.No}</span>
                                    <span className="w-3/5 text-gray-800 truncate px-1">{player.Name}</span>
                                    <span className={`w-1/5 text-right font-medium pr-2 ${player.Role === 'BOWL' ? 'text-red-500' : 'text-green-600'}`}>
                                        {player.Role}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Do Not Play Section */}
                {team.doNotPlay && team.doNotPlay.length > 0 && (
                    <div className="p-3 sm:p-4 border-t bg-yellow-50/20 rounded-b-lg">
                        <h5 className="font-bold text-xs sm:text-sm uppercase text-red-600 mb-2">Do Not Play / Unavailable</h5>
                        <ul className="text-xs text-gray-700 space-y-1">
                            {team.doNotPlay.map((player, idx) => (
                                <li key={idx} className="flex justify-between flex-wrap gap-1">
                                    <span className="font-semibold truncate flex-1">{player.No}. {player.Name}</span>
                                    <span className="text-red-500">Injury</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};


const EventDetailsPage = () => {
    const navigate = useNavigate();
    // URL params से index प्राप्त करें (string के रूप में)
    const { id: eventIndexParam } = useParams();
    
    // Keys array बनाएं ताकि order maintain रहे
    const eventKeys = Object.keys(topEventDetails);
    
    // Index को number में convert करें, fallback 0
    const eventIndex = parseInt(eventIndexParam) || 0;
    
    // Valid index सुनिश्चित करें
    const validIndex = Math.max(0, Math.min(eventIndex, eventKeys.length - 1));
    const initialEventKey = eventKeys[validIndex];
    
    const [selectedEventKey, setSelectedEventKey] = useState(initialEventKey);

    // useEffect से URL change पर selectedEventKey अपडेट करें
    useEffect(() => {
        if (eventIndexParam !== undefined) {
            const newIndex = parseInt(eventIndexParam) || 0;
            const newValidIndex = Math.max(0, Math.min(newIndex, eventKeys.length - 1));
            setSelectedEventKey(eventKeys[newValidIndex]);
        }
    }, [eventIndexParam, eventKeys]);

    const currentEventData = topEventDetails[selectedEventKey];
    const lineupData = currentEventData?.squadDetails;
    const oddsData = currentEventData?.odds;
    const matchupTitle = currentEventData?.matchup;

    const handleBettingContestUserClick = (username) => {
        navigate(`/betting-contest-details/${encodeURIComponent(username)}`);
    };

    const pageUrl = `https://watchdogs.net/event/${eventIndexParam || 0}`;
    const pageTitle = `${currentEventData?.eventName || 'Event Details'} | ${matchupTitle || 'Matchup'} - Lineups, Odds & Fixtures | Watchdogs.net`;

    return (
        <>
            <Helmet>
                <html lang="en" />
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>{pageTitle}</title>
                <meta name="description" content={`Detailed view of ${currentEventData?.eventName || 'event'}: ${matchupTitle || 'matchup'}. Check lineups, starting XI, odds, fixtures, context, and statistics for ${currentEventData?.context?.venue || 'venue'}.`} />
                <meta name="keywords" content="event details, match lineups, football fixtures, cricket squad, betting odds, starting XI, do not play, pitch report, H2H record" />
                <meta name="author" content="Watchdogs Team" />
                <link rel="canonical" href={pageUrl} />
                <link rel="icon" href="/favicon.ico" />
                {/* Open Graph Tags */}
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={`Detailed view of ${currentEventData?.eventName || 'event'}: ${matchupTitle || 'matchup'}. Check lineups, starting XI, odds, fixtures, context, and statistics for ${currentEventData?.context?.venue || 'venue'}.`} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={pageUrl} />
                <meta property="og:image" content="https://watchdogs.net/og-event.jpg" />
                <meta property="og:image:alt" content={`${currentEventData?.eventName || 'Event'} Details - Watchdogs.net`} />
                <meta property="og:site_name" content="Watchdogs.net" />
                {/* Structured Data: SportsEvent Schema */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "SportsEvent",
                        "name": `${currentEventData?.eventName || 'Event'} - ${matchupTitle || 'Matchup'}`,
                        "url": pageUrl,
                        "description": `Event details including lineups, odds, fixtures, and statistics for ${matchupTitle || 'matchup'}.`,
                        "startDate": currentEventData?.context?.date || "2025-10-06",
                        "location": {
                            "@type": "Place",
                            "name": currentEventData?.context?.venue || "Venue"
                        },
                        "homeTeam": {
                            "@type": "SportsTeam",
                            "name": lineupData?.homeTeam?.name || lineupData?.teamA?.name || "Home Team"
                        },
                        "awayTeam": {
                            "@type": "SportsTeam",
                            "name": lineupData?.awayTeam?.name || lineupData?.teamB?.name || "Away Team"
                        },
                        "offers": {
                            "@type": "AggregateOffer",
                            "lowPrice": oddsData?.betting_options?.[0]?.options?.["1"] || "1.50",
                            "highPrice": oddsData?.betting_options?.[0]?.options?.["2"] || "3.00",
                            "priceCurrency": "EUR",
                            "description": "Betting odds for the event"
                        },
                        "organizer": {
                            "@type": "Organization",
                            "name": "Watchdogs.net"
                        }
                    })}
                </script>
            </Helmet>
            <div className="pt-[120px]">
                <div className="max-w-7xl mx-auto px-2 sm:px-4 py-4 sm:py-8 md:py-8 lg:py-10">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
                        {/* Main Content Area (Enhanced Responsive) */}
                        <div className="md:col-span-8 lg:col-span-9 bg-gray-50 p-2 sm:p-4 md:p-6 lg:p-8">
                            {/* --- मुख्य हेडर (Matchup Title) --- */}
                            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4 sm:mb-6 border-b-4 border-indigo-600 pb-2 sm:pb-3 leading-tight">
                                {currentEventData.eventName} | <span className="text-indigo-600">{matchupTitle}</span>
                            </h1>

                            {/* --- ऑड्स और फिक्स्चर सेक्शन (La Liga Screenshot Style) --- */}
                            {currentEventData.oddsAndFixtures ? (
                                <OddsAndFixturesTable eventData={currentEventData} />
                            ) : (
                                // यदि 'oddsAndFixtures' मौजूद नहीं है तो केवल मुख्य मैच ऑड्स दिखाएं
                                <div className="bg-white shadow-xl rounded-lg p-2 sm:p-4 md:p-6 mb-8 border border-gray-100">
                                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 border-b pb-2">Match Odds ({oddsData?.homeTeam || oddsData?.team_a} vs {oddsData?.awayTeam || oddsData?.team_b})</h3>
                                    <div className="flex flex-wrap gap-2 sm:gap-4">
                                        {oddsData?.betting_options.map((option, idx) => (
                                            <div key={idx} className="flex flex-col bg-gray-50 p-2 sm:p-3 rounded-lg border w-full sm:w-auto">
                                                <span className="text-xs sm:text-sm font-semibold text-gray-600 mb-1">{option.type}</span>
                                                <div className="flex flex-wrap space-x-1 sm:space-x-3 justify-center">
                                                    {Object.entries(option.options).map(([key, value]) => (
                                                        <div key={key} className="text-center flex-1 sm:flex-none min-w-[80px]">
                                                            <span className="block text-xs uppercase font-medium text-indigo-500 truncate">{key}</span>
                                                            <span className="block text-base sm:text-lg font-extrabold text-green-700">{value}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}


                            {/* --- लाइनअप सेक्शन (Chelsea vs Liverpool Screenshot Style) --- */}
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 border-b pb-2">
                                {lineupData?.tournamentStage || 'Squad Details'}
                            </h2>
                            
                            <div className="flex flex-col sm:flex-row flex-wrap -mx-2 sm:-mx-3 gap-2 sm:gap-0">
                                {lineupData && (
                                    <>
                                        {/* होम टीम / टीम A */}
                                        <LineupDetailsCard team={lineupData.homeTeam || lineupData.teamA} teamType="home" />

                                        {/* अवे टीम / टीम B */}
                                        <LineupDetailsCard team={lineupData.awayTeam || lineupData.teamB} teamType="away" />
                                    </>
                                )}
                            </div>

                            {/* --- संदर्भ और सांख्यिकी (Context) --- */}
                            <div className="mt-4 sm:mt-8 bg-white shadow-xl rounded-lg p-2 sm:p-4 md:p-6 border border-gray-100">
                                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 border-b pb-2">Context & Statistics</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4 text-xs sm:text-sm text-gray-700">
                                    <p><strong>Venue:</strong> <span className="truncate block sm:inline">{currentEventData?.context?.venue}</span></p>
                                    {currentEventData?.context?.referee && <p><strong>Referee:</strong> <span className="truncate block sm:inline">{currentEventData?.context?.referee}</span></p>}
                                    {currentEventData?.context?.pitchReport && <p><strong>Pitch Report:</strong> <span className="truncate block sm:inline">{currentEventData?.context?.pitchReport}</span></p>}
                                    {currentEventData?.context?.h2hRecord && <p><strong>H2H Record:</strong> <span className="truncate block sm:inline">{currentEventData?.context?.h2hRecord}</span></p>}
                                    {currentEventData?.context?.recentForm && (
                                        <div className="sm:col-span-2 space-y-1">
                                            <strong>Recent Form:</strong>
                                            <div className="flex flex-wrap gap-1">
                                                {Object.entries(currentEventData.context.recentForm).map(([team, form]) => (
                                                    <span key={team} className="font-mono text-xs inline-block bg-gray-200 px-2 py-0.5 rounded-full">{team}: {form}</span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        {/* Right Sidebar */}
                        <div className="md:col-span-4 lg:col-span-3">
                            <div className="sticky top-[120px] space-y-6">
                                <div className="rounded-lg p-4 md:p-6 shadow-2xl overflow-hidden">
                                    <h4 className="text-lg text-black font-bold mb-2">Advertisement</h4>
                                    <p className="text-sm text-black opacity-90 mb-4">Place your ad content here.</p>
                                    <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                                        <div className="w-full h-48 bg-gray-300 rounded flex items-center justify-center cursor-pointer overflow-hidden">
                                            <span className="text-gray-500 px-2 truncate text-center">Ad Image Placeholder</span>
                                        </div>
                                    </a>
                                    <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                                        <button className="w-full bg-white text-blue-600 font-bold py-2 px-4 rounded hover:bg-gray-100 transition-colors mt-4">
                                            Click Here
                                        </button>
                                    </a>
                                </div>
                                {/* Betting Contest */}
                                <div className="bg-teal-600 rounded-lg text-white overflow-hidden shadow-lg text-sm leading-tight">
                                    <div className="bg-teal-700 px-4 md:px-6 py-4 text-center">
                                        <div className="w-10 h-10 mx-auto mb-2">
                                            <img src="/contest-logo.jpg" alt="Contest Logo" className="w-full h-full object-contain rounded-full" />
                                        </div>
                                        <h3 className="font-bold text-lg">{league.betting_contest.title}</h3>
                                        <p className="text-sm opacity-90">{league.betting_contest.subtitle}</p>
                                    </div>
                                    <div className="p-3 max-h-[400px] md:max-h-none overflow-y-auto md:overflow-visible">
                                        {league.betting_contest.ranking.map((user, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center justify-between py-3 border-b border-teal-500/30 last:border-b-0 hover:text-blue-900 cursor-pointer transition-colors min-w-0"
                                                onClick={() => handleBettingContestUserClick(user.username)}
                                            >
                                                <div className="flex items-center space-x-2 md:space-x-3 min-w-0 flex-1">
                                                    <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                                                        <span className="text-2xl font-bold">{user.position}</span>
                                                    </div>
                                                    <div className="w-10 h-10 flex-shrink-0">
                                                        <img src={user.flag || '/placeholder-logo.jpg'} alt="User Flag" className="w-full h-full object-contain rounded-full" />
                                                    </div>
                                                    <div className="min-w-0 flex-1">
                                                        <div className="font-medium text-sm truncate">{user.username}</div>
                                                        {user.country && (
                                                            <div className="text-xs opacity-75 flex items-center space-x-1 truncate">
                                                                <span>🇺🇦</span>
                                                                <span className="truncate">{user.country}</span>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="text-right flex-shrink-0 ml-2 md:ml-0">
                                                    <div className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold mb-1 truncate">
                                                        {user.prize}
                                                    </div>
                                                    <div className="text-xs opacity-90 truncate">{user.points.toLocaleString()}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="bg-teal-700 px-4 md:px-6 py-4 text-center">
                                        <div className="text-2xl font-bold mb-2">{league.betting_contest.prizes}</div>
                                        <button className="bg-white text-teal-700 font-bold py-2 px-6 rounded hover:bg-gray-100 transition-colors" onClick={() => navigate('/signup')}>
  {league.betting_contest.signup}
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
    )
}

export default EventDetailsPage;