

// import React, { useState } from 'react';
// import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
// import { BsCalendar3 } from 'react-icons/bs';
// import { MdExpandMore, MdExpandLess } from 'react-icons/md';
// import upcomingMatches from '../data/UpcomingMatchesPage';

// const UpcomingMatchesPage = () => {
//   const [activeSport, setActiveSport] = useState('football');
//   const [expandedLeagues, setExpandedLeagues] = useState({ 'England. Premier League-0': true, 'England. Premier League-1': true });
//   const [activeFilter, setActiveFilter] = useState(null);
//   const sports = [
//     { id: 'football', name: 'Football' },
//     { id: 'tennis', name: 'Tennis' },
//     { id: 'iceHockey', name: 'Ice Hockey' },
//     { id: 'rugbyUnion', name: 'Rugby Union' },
//     { id: 'cricket', name: 'Cricket' },
//     { id: 'floorball', name: 'Floorball' },
//     { id: 'baseball', name: 'Baseball' },
//     { id: 'rugbyLeague', name: 'Rugby League' },
//     { id: 'tableTennis', name: 'Table Tennis' },
//     { id: 'handball', name: 'Handball' },
//   ];
//   const toggleLeague = (leagueName) => {
//     setExpandedLeagues(prev => ({
//       ...prev,
//       [leagueName]: !prev[leagueName]
//     }));
//   };
//   const renderMatch = (match, sportType) => {
//     const isTennis = sportType === 'tennis' || sportType === 'tableTennis';
   
//     return (
//       <div key={`${match.time}-${match.homeTeam?.name || match.player1?.name}`} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
//         <div className="flex items-center px-3 py-2.5">
//           {/* Time */}
//           <div className="w-16 flex-shrink-0">
//             <span className="text-sm font-semibold text-gray-800">{match.time}</span>
//           </div>
//           {/* Teams/Players */}
//           <div className="flex-1 min-w-0 px-3">
//             {isTennis ? (
//               <div className="flex flex-col gap-1">
//                 <div className="flex items-center gap-2">
//                   <img src={match.player1.logo} alt={match.player1.name} className="w-5 h-5 object-contain flex-shrink-0" onError={(e) => { e.target.src = 'https://via.placeholder.com/20'; e.target.onerror = null; }} />
//                   <span className="text-sm text-gray-800 truncate">{match.player1.name}</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <img src={match.player2.logo} alt={match.player2.name} className="w-5 h-5 object-contain flex-shrink-0" onError={(e) => { e.target.src = 'https://via.placeholder.com/20'; e.target.onerror = null; }} />
//                   <span className="text-sm text-gray-800 truncate">{match.player2.name}</span>
//                 </div>
//               </div>
//             ) : (
//               <div className="flex items-center gap-2">
//                 <img src={match.homeTeam.logo} alt={match.homeTeam.name} className="w-6 h-6 object-contain flex-shrink-0" onError={(e) => { e.target.src = 'https://via.placeholder.com/20'; e.target.onerror = null; }} />
//                 <span className="text-sm text-gray-800 truncate">{match.homeTeam.name}</span>
//                 <span className="text-gray-400 mx-1 flex-shrink-0">–</span>
//                 <img src={match.awayTeam.logo} alt={match.awayTeam.name} className="w-6 h-6 object-contain flex-shrink-0" onError={(e) => { e.target.src = 'https://via.placeholder.com/20'; e.target.onerror = null; }} />
//                 <span className="text-sm text-gray-800 truncate">{match.awayTeam.name}</span>
//               </div>
//             )}
//           </div>
//           {/* Odds Section */}
//           <div className="flex items-center gap-2 flex-shrink-0">
//             {isTennis ? (
//               <>
//                 <div className="w-16 text-center">
//                   <div className="bg-blue-50 hover:bg-blue-100 py-2 px-3 rounded cursor-pointer transition-colors">
//                     <span className="text-sm font-bold text-blue-900">{match.odds.player1}</span>
//                   </div>
//                 </div>
//                 <div className="w-16"></div>
//                 <div className="w-16 text-center">
//                   <div className="bg-blue-50 hover:bg-blue-100 py-2 px-3 rounded cursor-pointer transition-colors">
//                     <span className="text-sm font-bold text-blue-900">{match.odds.player2}</span>
//                   </div>
//                 </div>
//               </>
//             ) : sportType === 'cricket' || sportType === 'baseball' ? (
//               <>
//                 <div className="w-16 text-center">
//                   <div className="bg-blue-50 hover:bg-blue-100 py-2 px-3 rounded cursor-pointer transition-colors">
//                     <span className="text-sm font-bold text-blue-900">{match.odds.home}</span>
//                   </div>
//                 </div>
//                 <div className="w-16"></div>
//                 <div className="w-16 text-center">
//                   <div className="bg-blue-50 hover:bg-blue-100 py-2 px-3 rounded cursor-pointer transition-colors">
//                     <span className="text-sm font-bold text-blue-900">{match.odds.away}</span>
//                   </div>
//                 </div>
//               </>
//             ) : (
//               <>
//                 <div className="w-16 text-center">
//                   <div className="bg-blue-50 hover:bg-blue-100 py-2 px-3 rounded cursor-pointer transition-colors">
//                     <span className="text-sm font-bold text-blue-900">{match.odds.home}</span>
//                   </div>
//                 </div>
//                 <div className="w-16 text-center">
//                   <div className="bg-blue-50 hover:bg-blue-100 py-2 px-3 rounded cursor-pointer transition-colors">
//                     <span className="text-sm font-bold text-blue-900">{match.odds.draw}</span>
//                   </div>
//                 </div>
//                 <div className="w-16 text-center">
//                   <div className="bg-blue-50 hover:bg-blue-100 py-2 px-3 rounded cursor-pointer transition-colors">
//                     <span className="text-sm font-bold text-blue-900">{match.odds.away}</span>
//                   </div>
//                 </div>
//               </>
//             )}
//             {/* Over/Under */}
//             {match.overUnder && (
//               <>
//                 <div className="w-12 text-center">
//                   <div className="bg-gray-100 py-2 px-2 rounded">
//                     <span className="text-xs text-gray-600 font-medium">{match.overUnder.line}</span>
//                   </div>
//                 </div>
//                 <div className="w-16 text-center">
//                   <div className="bg-blue-50 hover:bg-blue-100 py-2 px-3 rounded cursor-pointer transition-colors">
//                     <span className="text-sm font-bold text-blue-900">{match.overUnder.under}</span>
//                   </div>
//                 </div>
//                 <div className="w-16 text-center">
//                   <div className="bg-blue-50 hover:bg-blue-100 py-2 px-3 rounded cursor-pointer transition-colors">
//                     <span className="text-sm font-bold text-blue-900">{match.overUnder.over}</span>
//                   </div>
//                 </div>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const currentSportData = upcomingMatches[activeSport] || [];

//   // Aggregate all matches based on the active filter
//   const aggregatedMatches = activeFilter ? currentSportData.reduce((acc, league) => {
//     return [...acc, ...league.matches];
//   }, []) : null;

//   return (
//     <div className="min-h-screen bg-gray-100 mt-35">
//       {/* Header */}
//       <div className="bg-white shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 py-4">
//           <h1 className="text-xl font-bold text-gray-800 flex items-center gap-2">
//             <span className="text-red-600">▶</span>
//             <span>UPCOMING MATCHES</span>
//           </h1>
//         </div>
//         {/* Sports Navigation */}
//         <div className="border-t border-gray-200 bg-gray-800">
//           <div className="max-w-7xl mx-auto">
//             <div className="flex items-center overflow-x-auto scrollbar-hide">
//               {sports.slice(0, 10).map((sport, index) => (
//                 <button
//                   key={sport.id}
//                   onClick={() => {
//                     setActiveSport(sport.id);
//                     setActiveFilter(null); // Reset filter when changing sport
//                   }}
//                   className={`px-5 py-3 whitespace-nowrap text-sm font-medium transition-colors relative ${
//                     activeSport === sport.id
//                       ? 'bg-red-600 text-white'
//                       : 'text-gray-300 hover:bg-gray-700'
//                   } ${index !== sports.length - 1 ? 'border-r border-gray-700' : ''}`}
//                 >
//                   {sport.name}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//         {/* Filter Tabs */}
//         <div className="border-t border-b border-gray-200 bg-white">
//           <div className="max-w-7xl mx-auto px-4">
//             <div className="flex gap-2 overflow-x-auto scrollbar-hide py-3">
//               <button
//                 className={`px-4 py-2 text-sm rounded text-gray-700 transition-colors whitespace-nowrap ${
//                   activeFilter === 'All Matches' ? 'bg-red-600 text-white' : 'bg-white border border-gray-300 hover:bg-gray-50'
//                 }`}
//                 onClick={() => setActiveFilter('All Matches')}
//               >
//                 All Matches
//               </button>
//               <button
//                 className={`px-4 py-2 text-sm rounded font-medium whitespace-nowrap ${
//                   activeFilter === 'Next 7 Days' ? 'bg-red-600 text-white' : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
//                 }`}
//                 onClick={() => setActiveFilter('Next 7 Days')}
//               >
//                 Next 7 Days
//               </button>
//               <button
//                 className={`px-4 py-2 text-sm rounded text-gray-700 transition-colors whitespace-nowrap ${
//                   activeFilter === '24 Hours' ? 'bg-red-600 text-white' : 'bg-white border border-gray-300 hover:bg-gray-50'
//                 }`}
//                 onClick={() => setActiveFilter('24 Hours')}
//               >
//                 24 Hours
//               </button>
//               <button
//                 className={`px-4 py-2 text-sm rounded text-gray-700 transition-colors whitespace-nowrap ${
//                   activeFilter === '3 Hours' ? 'bg-red-600 text-white' : 'bg-white border border-gray-300 hover:bg-gray-50'
//                 }`}
//                 onClick={() => setActiveFilter('3 Hours')}
//               >
//                 3 Hours
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 py-4">
//         {activeFilter ? (
//           aggregatedMatches.length === 0 ? (
//             <div className="bg-white rounded shadow-sm p-8 text-center">
//               <p className="text-gray-500 text-base">No upcoming matches available for {sports.find(s => s.id === activeSport)?.name}</p>
//             </div>
//           ) : (
//             <div className="space-y-3">
//               {aggregatedMatches.map((match) => (
//                 <div key={`${match.time}-${match.homeTeam?.name || match.player1?.name}`} className="bg-white shadow-sm overflow-hidden">
//                   {renderMatch(match, activeSport)}
//                 </div>
//               ))}
//             </div>
//           )
//         ) : currentSportData.length === 0 ? (
//           <div className="bg-white rounded shadow-sm p-8 text-center">
//             <p className="text-gray-500 text-base">No upcoming matches available for {sports.find(s => s.id === activeSport)?.name}</p>
//           </div>
//         ) : (
//           currentSportData.map((league, idx) => (
//             <div key={idx} className="mb-3">
//               <div className="bg-white shadow-sm overflow-hidden">
//                 {/* League Header */}
//                 <div
//                   onClick={() => toggleLeague(`${league.league || league.tournament}-${idx}`)}
//                   className="bg-gray-100 px-4 py-2.5 flex items-center justify-between cursor-pointer hover:bg-gray-200 transition-colors border-b border-gray-200"
//                 >
//                   <div className="flex items-center gap-3">
//                     <span className="text-red-600 font-bold text-lg">+</span>
//                     <h2 className="font-bold text-gray-800 text-sm">{league.league || league.tournament}</h2>
//                     <div className="flex gap-2 ml-4">
//                       <button className="px-3 py-1 text-xs bg-white border border-gray-300 rounded text-gray-700 hover:bg-gray-50">
//                         MATCHDAY 6
//                       </button>
//                       <button className="px-3 py-1 text-xs bg-white border border-gray-300 rounded text-gray-700 hover:bg-gray-50">
//                         MATCHDAY 7
//                       </button>
//                       <button className="px-3 py-1 text-xs bg-white border border-gray-300 rounded text-gray-700 hover:bg-gray-50">
//                         TABLE & FIXTURES
//                       </button>
//                     </div>
//                   </div>
//                   <div className="flex items-center gap-4">
//                     {expandedLeagues[`${league.league || league.tournament}-${idx}`] ? (
//                       <MdExpandLess className="text-gray-600" size={24} />
//                     ) : (
//                       <MdExpandMore className="text-gray-600" size={24} />
//                     )}
//                   </div>
//                 </div>
//                 {/* Date Header */}
//                 {expandedLeagues[`${league.league || league.tournament}-${idx}`] && (
//                   <>
//                     <div className="bg-white px-4 py-2 border-b border-gray-200">
//                       <span className="text-sm font-semibold text-gray-700">{league.date}</span>
//                     </div>
//                     {/* Column Headers */}
//                     <div className="flex items-center px-3 py-2 bg-gray-50 border-b border-gray-200">
//                       <div className="w-16 flex-shrink-0"></div>
//                       <div className="flex-1 px-3"></div>
//                       <div className="flex items-center gap-2 flex-shrink-0">
//                         <div className="w-16 text-center text-xs font-semibold text-gray-600">1</div>
//                         <div className="w-16 text-center text-xs font-semibold text-gray-600">X</div>
//                         <div className="w-16 text-center text-xs font-semibold text-gray-600">2</div>
//                         <div className="w-12 text-center text-xs font-semibold text-gray-600">2.5</div>
//                         <div className="w-16 text-center text-xs font-semibold text-gray-600">Under</div>
//                         <div className="w-16 text-center text-xs font-semibold text-gray-600">Over</div>
//                       </div>
//                     </div>
                   
//                     {/* Matches */}
//                     {league.matches.map((match) => renderMatch(match, activeSport))}
//                   </>
//                 )}
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };
// export default UpcomingMatchesPage;

import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { BsCalendar3 } from 'react-icons/bs';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';
import upcomingMatches from '../data/UpcomingMatchesPage';

const UpcomingMatchesPage = () => {
  const [activeSport, setActiveSport] = useState('football');
  const [expandedLeagues, setExpandedLeagues] = useState({ 'England. Premier League-0': true, 'England. Premier League-1': true });
  const [activeFilter, setActiveFilter] = useState(null);
  const sports = [
    { id: 'football', name: 'Football' },
    { id: 'tennis', name: 'Tennis' },
    { id: 'iceHockey', name: 'Ice Hockey' },
    { id: 'rugbyUnion', name: 'Rugby Union' },
    { id: 'cricket', name: 'Cricket' },
    { id: 'floorball', name: 'Floorball' },
    { id: 'baseball', name: 'Baseball' },
    { id: 'rugbyLeague', name: 'Rugby League' },
    { id: 'tableTennis', name: 'Table Tennis' },
    { id: 'handball', name: 'Handball' },
  ];
  const toggleLeague = (leagueName) => {
    setExpandedLeagues(prev => ({
      ...prev,
      [leagueName]: !prev[leagueName]
    }));
  };
  const renderMatch = (match, sportType) => {
    const isTennis = sportType === 'tennis' || sportType === 'tableTennis';
   
    return (
      <div key={`${match.time}-${match.homeTeam?.name || match.player1?.name}`} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
        <div className="flex items-center px-2 py-1.5 sm:px-3 sm:py-2.5">
          {/* Time */}
          <div className="w-12 sm:w-16 flex-shrink-0">
            <span className="text-xs sm:text-sm font-semibold text-gray-800">{match.time}</span>
          </div>
          {/* Teams/Players */}
          <div className="flex-1 min-w-0 px-1 sm:px-3">
            {isTennis ? (
              <div className="flex flex-col gap-0.5 sm:gap-1">
                <div className="flex items-center gap-1 sm:gap-2">
                  <img src={match.player1.logo} alt={match.player1.name} className="w-3 sm:w-5 h-3 sm:h-5 object-contain flex-shrink-0" onError={(e) => { e.target.src = 'https://via.placeholder.com/20'; e.target.onerror = null; }} />
                  <span className="text-xs sm:text-sm text-gray-800 truncate">{match.player1.name}</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2">
                  <img src={match.player2.logo} alt={match.player2.name} className="w-3 sm:w-5 h-3 sm:h-5 object-contain flex-shrink-0" onError={(e) => { e.target.src = 'https://via.placeholder.com/20'; e.target.onerror = null; }} />
                  <span className="text-xs sm:text-sm text-gray-800 truncate">{match.player2.name}</span>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-1 sm:gap-2">
                <img src={match.homeTeam.logo} alt={match.homeTeam.name} className="w-4 sm:w-6 h-4 sm:h-6 object-contain flex-shrink-0" onError={(e) => { e.target.src = 'https://via.placeholder.com/20'; e.target.onerror = null; }} />
                <span className="text-xs sm:text-sm text-gray-800 truncate">{match.homeTeam.name}</span>
                <span className="text-gray-400 mx-0.5 sm:mx-1 flex-shrink-0">–</span>
                <img src={match.awayTeam.logo} alt={match.awayTeam.name} className="w-4 sm:w-6 h-4 sm:h-6 object-contain flex-shrink-0" onError={(e) => { e.target.src = 'https://via.placeholder.com/20'; e.target.onerror = null; }} />
                <span className="text-xs sm:text-sm text-gray-800 truncate">{match.awayTeam.name}</span>
              </div>
            )}
          </div>
          {/* Odds Section */}
          <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
            {isTennis ? (
              <>
                <div className="w-12 sm:w-16 text-center">
                  <div className="bg-blue-50 hover:bg-blue-100 py-1 sm:py-2 px-1 sm:px-3 rounded cursor-pointer transition-colors">
                    <span className="text-xs sm:text-sm font-bold text-blue-900">{match.odds.player1}</span>
                  </div>
                </div>
                <div className="w-12 sm:w-16"></div>
                <div className="w-12 sm:w-16 text-center">
                  <div className="bg-blue-50 hover:bg-blue-100 py-1 sm:py-2 px-1 sm:px-3 rounded cursor-pointer transition-colors">
                    <span className="text-xs sm:text-sm font-bold text-blue-900">{match.odds.player2}</span>
                  </div>
                </div>
              </>
            ) : sportType === 'cricket' || sportType === 'baseball' ? (
              <>
                <div className="w-12 sm:w-16 text-center">
                  <div className="bg-blue-50 hover:bg-blue-100 py-1 sm:py-2 px-1 sm:px-3 rounded cursor-pointer transition-colors">
                    <span className="text-xs sm:text-sm font-bold text-blue-900">{match.odds.home}</span>
                  </div>
                </div>
                <div className="w-12 sm:w-16"></div>
                <div className="w-12 sm:w-16 text-center">
                  <div className="bg-blue-50 hover:bg-blue-100 py-1 sm:py-2 px-1 sm:px-3 rounded cursor-pointer transition-colors">
                    <span className="text-xs sm:text-sm font-bold text-blue-900">{match.odds.away}</span>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="w-12 sm:w-16 text-center">
                  <div className="bg-blue-50 hover:bg-blue-100 py-1 sm:py-2 px-1 sm:px-3 rounded cursor-pointer transition-colors">
                    <span className="text-xs sm:text-sm font-bold text-blue-900">{match.odds.home}</span>
                  </div>
                </div>
                <div className="w-12 sm:w-16 text-center">
                  <div className="bg-blue-50 hover:bg-blue-100 py-1 sm:py-2 px-1 sm:px-3 rounded cursor-pointer transition-colors">
                    <span className="text-xs sm:text-sm font-bold text-blue-900">{match.odds.draw}</span>
                  </div>
                </div>
                <div className="w-12 sm:w-16 text-center">
                  <div className="bg-blue-50 hover:bg-blue-100 py-1 sm:py-2 px-1 sm:px-3 rounded cursor-pointer transition-colors">
                    <span className="text-xs sm:text-sm font-bold text-blue-900">{match.odds.away}</span>
                  </div>
                </div>
              </>
            )}
            {/* Over/Under */}
            {match.overUnder && (
              <>
                <div className="w-8 sm:w-12 text-center">
                  <div className="bg-gray-100 py-1 sm:py-2 px-0.5 sm:px-2 rounded">
                    <span className="text-xs sm:text-xs text-gray-600 font-medium">{match.overUnder.line}</span>
                  </div>
                </div>
                <div className="w-12 sm:w-16 text-center">
                  <div className="bg-blue-50 hover:bg-blue-100 py-1 sm:py-2 px-1 sm:px-3 rounded cursor-pointer transition-colors">
                    <span className="text-xs sm:text-sm font-bold text-blue-900">{match.overUnder.under}</span>
                  </div>
                </div>
                <div className="w-12 sm:w-16 text-center">
                  <div className="bg-blue-50 hover:bg-blue-100 py-1 sm:py-2 px-1 sm:px-3 rounded cursor-pointer transition-colors">
                    <span className="text-xs sm:text-sm font-bold text-blue-900">{match.overUnder.over}</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    );
  };

  const currentSportData = upcomingMatches[activeSport] || [];

  // Aggregate all matches based on the active filter
  const aggregatedMatches = activeFilter ? currentSportData.reduce((acc, league) => {
    return [...acc, ...league.matches];
  }, []) : null;

  return (
    <div className="min-h-screen bg-gray-100 mt-35">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 py-2 sm:py-4">
          <h1 className="text-lg sm:text-xl font-bold text-gray-800 flex items-center gap-1 sm:gap-2">
            <span className="text-red-600">▶</span>
            <span>UPCOMING MATCHES</span>
          </h1>
        </div>
        {/* Sports Navigation */}
        <div className="border-t border-gray-200 bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center overflow-x-auto scrollbar-hide">
              {sports.slice(0, 10).map((sport, index) => (
                <button
                  key={sport.id}
                  onClick={() => {
                    setActiveSport(sport.id);
                    setActiveFilter(null); // Reset filter when changing sport
                  }}
                  className={`px-2 sm:px-5 py-1 sm:py-3 whitespace-nowrap text-xs sm:text-sm font-medium transition-colors relative ${
                    activeSport === sport.id
                      ? 'bg-red-600 text-white'
                      : 'text-gray-300 hover:bg-gray-700'
                  } ${index !== sports.length - 1 ? 'border-r border-gray-700' : ''}`}
                >
                  {sport.name}
                </button>
              ))}
            </div>
          </div>
        </div>
        {/* Filter Tabs */}
        <div className="border-t border-b border-gray-200 bg-white">
          <div className="max-w-7xl mx-auto px-2 sm:px-4">
            <div className="flex gap-1 sm:gap-2 overflow-x-auto scrollbar-hide py-1 sm:py-3">
              <button
                className={`px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm rounded text-gray-700 transition-colors whitespace-nowrap ${
                  activeFilter === 'All Matches' ? 'bg-red-600 text-white' : 'bg-white border border-gray-300 hover:bg-gray-50'
                }`}
                onClick={() => setActiveFilter('All Matches')}
              >
                All Matches
              </button>
              <button
                className={`px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm rounded font-medium whitespace-nowrap ${
                  activeFilter === 'Next 7 Days' ? 'bg-red-600 text-white' : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setActiveFilter('Next 7 Days')}
              >
                Next 7 Days
              </button>
              <button
                className={`px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm rounded text-gray-700 transition-colors whitespace-nowrap ${
                  activeFilter === '24 Hours' ? 'bg-red-600 text-white' : 'bg-white border border-gray-300 hover:bg-gray-50'
                }`}
                onClick={() => setActiveFilter('24 Hours')}
              >
                24 Hours
              </button>
              <button
                className={`px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm rounded text-gray-700 transition-colors whitespace-nowrap ${
                  activeFilter === '3 Hours' ? 'bg-red-600 text-white' : 'bg-white border border-gray-300 hover:bg-gray-50'
                }`}
                onClick={() => setActiveFilter('3 Hours')}
              >
                3 Hours
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-2 sm:px-4 py-2 sm:py-4">
        {activeFilter ? (
          aggregatedMatches.length === 0 ? (
            <div className="bg-white rounded shadow-sm p-4 sm:p-8 text-center">
              <p className="text-sm sm:text-base text-gray-500">No upcoming matches available for {sports.find(s => s.id === activeSport)?.name}</p>
            </div>
          ) : (
            <div className="space-y-1 sm:space-y-3">
              {aggregatedMatches.map((match) => (
                <div key={`${match.time}-${match.homeTeam?.name || match.player1?.name}`} className="bg-white shadow-sm overflow-hidden">
                  {renderMatch(match, activeSport)}
                </div>
              ))}
            </div>
          )
        ) : currentSportData.length === 0 ? (
          <div className="bg-white rounded shadow-sm p-4 sm:p-8 text-center">
            <p className="text-sm sm:text-base text-gray-500">No upcoming matches available for {sports.find(s => s.id === activeSport)?.name}</p>
          </div>
        ) : (
          currentSportData.map((league, idx) => (
            <div key={idx} className="mb-1 sm:mb-3">
              <div className="bg-white shadow-sm overflow-hidden">
                {/* League Header */}
                <div
                  onClick={() => toggleLeague(`${league.league || league.tournament}-${idx}`)}
                  className="bg-gray-100 px-2 sm:px-4 py-1.5 sm:py-2.5 flex items-center justify-between cursor-pointer hover:bg-gray-200 transition-colors border-b border-gray-200"
                >
                  <div className="flex items-center gap-1 sm:gap-3">
                    <span className="text-red-600 font-bold text-base sm:text-lg">+</span>
                    <h2 className="text-xs sm:text-sm font-bold text-gray-800">{league.league || league.tournament}</h2>
                    <div className="flex gap-0.5 sm:gap-2 ml-2 sm:ml-4">
                      <button className="px-1 sm:px-3 py-0.5 sm:py-1 text-xs bg-white border border-gray-300 rounded text-gray-700 hover:bg-gray-50">
                        MATCHDAY 6
                      </button>
                      <button className="px-1 sm:px-3 py-0.5 sm:py-1 text-xs bg-white border border-gray-300 rounded text-gray-700 hover:bg-gray-50">
                        MATCHDAY 7
                      </button>
                      <button className="px-1 sm:px-3 py-0.5 sm:py-1 text-xs bg-white border border-gray-300 rounded text-gray-700 hover:bg-gray-50">
                        TABLE & FIXTURES
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-4">
                    {expandedLeagues[`${league.league || league.tournament}-${idx}`] ? (
                      <MdExpandLess className="text-gray-600" size={16} sm:size={24} />
                    ) : (
                      <MdExpandMore className="text-gray-600" size={16} sm:size={24} />
                    )}
                  </div>
                </div>
                {/* Date Header */}
                {expandedLeagues[`${league.league || league.tournament}-${idx}`] && (
                  <>
                    <div className="bg-white px-2 sm:px-4 py-1 sm:py-2 border-b border-gray-200">
                      <span className="text-xs sm:text-sm font-semibold text-gray-700">{league.date}</span>
                    </div>
                    {/* Column Headers */}
                    <div className="flex items-center px-2 sm:px-3 py-1 sm:py-2 bg-gray-50 border-b border-gray-200">
                      <div className="w-12 sm:w-16 flex-shrink-0"></div>
                      <div className="flex-1 px-1 sm:px-3"></div>
                      <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
                        <div className="w-12 sm:w-16 text-center text-xs font-semibold text-gray-600">1</div>
                        <div className="w-12 sm:w-16 text-center text-xs font-semibold text-gray-600">X</div>
                        <div className="w-12 sm:w-16 text-center text-xs font-semibold text-gray-600">2</div>
                        <div className="w-8 sm:w-12 text-center text-xs font-semibold text-gray-600">2.5</div>
                        <div className="w-12 sm:w-16 text-center text-xs font-semibold text-gray-600">Under</div>
                        <div className="w-12 sm:w-16 text-center text-xs font-semibold text-gray-600">Over</div>
                      </div>
                    </div>
                   
                    {/* Matches */}
                    {league.matches.map((match) => renderMatch(match, activeSport))}
                  </>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
export default UpcomingMatchesPage;