// import React, { useState } from 'react';
// import { matchResults } from '../data/matchResults'; // Import data from the previous step

// // Component to render a single match row
// const MatchRow = ({ match, sportName }) => {
  
//   // Custom rendering for Tennis since it uses player names and set scores
//   if (sportName === 'Tennis') {
//     const isFinished = match.status === 'Finished';
//     const logoStyle = "w-5 h-5 mr-2 rounded-full"; // General logo style for all sports
//     const genericTennisLogo = "🎾"; // Using emoji as logo URL is generic
    
//     return (
//       <div className="flex items-center justify-between py-3 border-b border-gray-100 px-4 hover:bg-gray-50 transition-colors">
//         <div className="text-sm font-medium text-gray-500 w-12">{match.time || '--:--'}</div>
        
//         {/* Team/Player Display */}
//         <div className="flex flex-1 items-center justify-center space-x-2">
          
//           {/* Home Player */}
//           <div className="flex items-center w-1/3 justify-end text-sm">
//             <span className="text-right truncate">{match.home_player.name}</span>
//             <span className={`text-xl ml-2 ${logoStyle}`}>{genericTennisLogo}</span>
//           </div>

//           {/* Score Box */}
//           <div className="flex flex-col items-center w-28 mx-2">
//             <span className={`text-base font-bold ${isFinished ? 'text-gray-900' : 'text-gray-500'}`}>
//               {match.score_sets || 'VS'}
//             </span>
//             {match.score_details && (
//               <span className="text-xs text-gray-400 mt-0.5">{match.score_details}</span>
//             )}
//           </div>
          
//           {/* Away Player */}
//           <div className="flex items-center w-1/3 justify-start text-sm">
//             <span className={`text-xl mr-2 ${logoStyle}`}>{genericTennisLogo}</span>
//             <span className="text-left truncate">{match.away_player.name}</span>
//           </div>
//         </div>

//         {/* Status */}
//         {match.status === 'Scheduled' && (
//             <div className="text-xs font-semibold text-blue-500 w-12 text-center">Upcoming</div>
//         )}
//       </div>
//     );
//   }

//   // General Sports (Football, Hockey, Baseball, Basketball, Esports)
//   const homeTeam = match.home_team;
//   const awayTeam = match.away_team;
//   const isFinished = match.status === 'Finished';

//   const renderLogo = (team) => {
//     // If logo_url is available, use it, otherwise use a placeholder
//     const logoSrc = team.logo_url || team.logo_description; 
//     const logoStyle = "w-5 h-5";

//     if (logoSrc && logoSrc.startsWith('http')) {
//         return <img src={logoSrc} alt={`${team.name} logo`} className={logoStyle} />;
//     }
//     // Fallback placeholder (e.g., for dummy data without real URLs)
//     return <span className={`text-xl ${logoStyle}`}>🏟️</span>;
//   };

//   return (
//     <div className="flex items-center py-3 border-b border-gray-100 px-4 hover:bg-gray-50 transition-colors">
//       <div className="text-sm font-medium text-gray-500 w-12">{match.time || '--:--'}</div>
      
//       {/* Team Display */}
//       <div className="flex flex-1 justify-center items-center">
        
//         {/* Home Team */}
//         <div className="flex items-center w-1/3 justify-end space-x-2">
//           <span className="text-sm font-semibold text-gray-800 text-right truncate">{homeTeam.name}</span>
//           {renderLogo(homeTeam)}
//         </div>

//         {/* Score Box */}
//         <div className="flex flex-col items-center w-28 mx-4">
//           <span className={`text-lg font-extrabold ${isFinished ? 'text-black' : 'text-gray-400'}`}>
//             {match.score || (isFinished ? '0:0' : 'VS')}
//           </span>
//           {match.score_details && (
//             <span className="text-xs text-gray-500 mt-0.5">{match.score_details}</span>
//           )}
//         </div>
        
//         {/* Away Team */}
//         <div className="flex items-center w-1/3 justify-start space-x-2">
//           {renderLogo(awayTeam)}
//           <span className="text-sm font-semibold text-gray-800 text-left truncate">{awayTeam.name}</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Main Result Component
// const Result = () => {
//   // Set 'Football' as the default selected sport
//   const [selectedSport, setSelectedSport] = useState('Football');

//   // Get data for the currently selected sport
//   const currentSportData = matchResults.results_data[selectedSport] || [];

//   return (
//     <div className="max-w-7xl mx-auto bg-gray-50 shadow-xl  mt-35 rounded-lg overflow-hidden my-10">
      
//       {/* Header Bar */}
//       <div className="px-4 py-3 bg-white border-b border-gray-200 text-sm text-gray-600 font-medium">
//         <span className="text-gray-800 font-bold">Home</span> &gt; <span className="text-red-600">Archive of Results</span>
//       </div>

//       {/* Sport Navigation Tabs */}
//       <div className="flex bg-gray-800">
//         {matchResults.navigation_tabs.map((tab) => (
//           <button
//             key={tab.name}
//             className={`
//               px-5 py-3 text-sm font-semibold transition-colors
//               ${selectedSport === tab.name 
//                 ? 'bg-red-600 text-white shadow-lg' 
//                 : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
//               }
//             `}
//             onClick={() => setSelectedSport(tab.name)}
//           >
//             {tab.name}
//           </button>
//         ))}
//         {/* Spacer to push search to the right */}
//         <div className="flex-grow"></div> 
//       </div>

//       {/* Control Bar (Date Filters and Search) */}
//       <div className="flex justify-between items-center p-4 bg-white border-b border-gray-200">
//         <div className="flex space-x-2">
//           {matchResults.date_options.map((option) => (
//             <button
//               key={option.name}
//               className={`
//                 px-3 py-1.5 text-xs rounded-md font-medium transition-all
//                 ${option.name === 'Today' // Use 'Today' check based on screenshot active state
//                   ? 'bg-red-600 text-white border border-red-600' 
//                   : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
//                 }
//               `}
//             >
//               {option.name === 'By Date' ? '🗓️ By Date' : option.name}
//             </button>
//           ))}
//         </div>
//         <input
//           type="text"
//           placeholder={matchResults.search_box.placeholder}
//           className="px-3 py-1.5 border border-gray-300 rounded-md text-sm w-64 focus:ring-red-500 focus:border-red-500"
//         />
//       </div>

//       {/* Match Results List */}
//       <div className="p-0">
//         {currentSportData.length > 0 ? (
//           currentSportData.map((competition, index) => (
//             <div key={index} className="bg-white mb-2 shadow-sm rounded-lg overflow-hidden border border-gray-200">
              
//               {/* Competition Header */}
//               <div className="flex justify-between items-center p-3 bg-gray-100 font-bold text-sm text-gray-700 cursor-pointer hover:bg-gray-200 transition-colors">
//                 <span className="flex items-center">
//                   <span className="mr-1">
//                     {/* Placeholder for Flag/League Icon */}
//                     {selectedSport === 'Football' && '⚽'} 
//                   </span>
//                   {competition.competition}
//                   {competition.matchday && <span className="ml-1 font-normal text-gray-500"> – {competition.matchday}</span>}
//                 </span>
//                 <span className="text-xs text-gray-400">^</span> {/* Arrow icon */}
//               </div>

//               {/* Match Rows */}
//               {competition.matches.map((match, matchIndex) => (
//                 <MatchRow 
//                   key={matchIndex} 
//                   match={match} 
//                   sportName={selectedSport}
//                 />
//               ))}
//             </div>
//           ))
//         ) : (
//           <div className="p-8 text-center text-gray-500">
//             {selectedSport} के लिए कोई परिणाम उपलब्ध नहीं है।
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Result;

import React, { useState } from 'react';
import { matchResults } from '../data/matchResults'; // Import data from the previous step

// Component to render a single match row
const MatchRow = ({ match, sportName }) => {
  
  // Custom rendering for Tennis since it uses player names and set scores
  if (sportName === 'Tennis') {
    const isFinished = match.status === 'Finished';
    const logoStyle = "w-5 h-5 mr-2 rounded-full"; // General logo style for all sports
    const genericTennisLogo = "🎾"; // Using emoji as logo URL is generic
    
    return (
      <div className="flex items-center justify-between py-3 border-b border-gray-100 px-4 hover:bg-gray-50 transition-colors">
        <div className="text-sm font-medium text-gray-500 w-12">{match.time || '--:--'}</div>
        
        {/* Team/Player Display */}
        <div className="flex flex-1 items-center justify-center space-x-2">
          
          {/* Home Player */}
          <div className="flex items-center w-1/3 justify-end text-sm">
            <span className="text-right truncate">{match.home_player.name}</span>
            <span className={`text-xl ml-2 ${logoStyle}`}>{genericTennisLogo}</span>
          </div>

          {/* Score Box */}
          <div className="flex flex-col items-center w-28 mx-2">
            <span className={`text-base font-bold ${isFinished ? 'text-gray-900' : 'text-gray-500'}`}>
              {match.score_sets || 'VS'}
            </span>
            {match.score_details && (
              <span className="text-xs text-gray-400 mt-0.5">{match.score_details}</span>
            )}
          </div>
          
          {/* Away Player */}
          <div className="flex items-center w-1/3 justify-start text-sm">
            <span className={`text-xl mr-2 ${logoStyle}`}>{genericTennisLogo}</span>
            <span className="text-left truncate">{match.away_player.name}</span>
          </div>
        </div>

        {/* Status */}
        {match.status === 'Scheduled' && (
            <div className="text-xs font-semibold text-blue-500 w-12 text-center">Upcoming</div>
        )}
      </div>
    );
  }

  // General Sports (Football, Hockey, Baseball, Basketball, Esports)
  const homeTeam = match.home_team;
  const awayTeam = match.away_team;
  const isFinished = match.status === 'Finished';

  const renderLogo = (team) => {
    // If logo_url is available, use it, otherwise use a placeholder
    const logoSrc = team.logo_url || team.logo_description; 
    const logoStyle = "w-5 h-5";

    if (logoSrc && logoSrc.startsWith('http')) {
        return <img src={logoSrc} alt={`${team.name} logo`} className={logoStyle} />;
    }
    // Fallback placeholder (e.g., for dummy data without real URLs)
    return <span className={`text-xl ${logoStyle}`}>🏟️</span>;
  };

  return (
    <div className="flex items-center py-3 border-b border-gray-100 px-4 hover:bg-gray-50 transition-colors">
      <div className="text-sm font-medium text-gray-500 w-12">{match.time || '--:--'}</div>
      
      {/* Team Display */}
      <div className="flex flex-1 justify-center items-center">
        
        {/* Home Team */}
        <div className="flex items-center w-1/3 justify-end space-x-2">
          <span className="text-sm font-semibold text-gray-800 text-right truncate">{homeTeam.name}</span>
          {renderLogo(homeTeam)}
        </div>

        {/* Score Box */}
        <div className="flex flex-col items-center w-28 mx-4">
          <span className={`text-lg font-extrabold ${isFinished ? 'text-black' : 'text-gray-400'}`}>
            {match.score || (isFinished ? '0:0' : 'VS')}
          </span>
          {match.score_details && (
            <span className="text-xs text-gray-500 mt-0.5">{match.score_details}</span>
          )}
        </div>
        
        {/* Away Team */}
        <div className="flex items-center w-1/3 justify-start space-x-2">
          {renderLogo(awayTeam)}
          <span className="text-sm font-semibold text-gray-800 text-left truncate">{awayTeam.name}</span>
        </div>
      </div>
    </div>
  );
};

// Main Result Component
const Result = () => {
  // Set 'Football' as the default selected sport
  const [selectedSport, setSelectedSport] = useState('Football');

  // Get data for the currently selected sport
  const currentSportData = matchResults.results_data[selectedSport] || [];

  return (
    <div className="max-w-7xl mx-auto bg-gray-50 shadow-xl mt-35 rounded-lg overflow-hidden my-10">
      
      {/* Header Bar */}
      <div className="px-4 py-3 bg-white border-b border-gray-200 text-sm text-gray-600 font-medium">
        <span className="text-gray-800 font-bold">Home</span> &gt; <span className="text-red-600">Archive of Results</span>
      </div>

      {/* Sport Navigation Tabs */}
      <div className="flex bg-gray-800">
        {matchResults.navigation_tabs.map((tab) => (
          <button
            key={tab.name}
            className={`
              px-5 py-3 text-sm font-semibold transition-colors
              ${selectedSport === tab.name 
                ? 'bg-red-600 text-white shadow-lg' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }
            `}
            onClick={() => setSelectedSport(tab.name)}
          >
            {tab.name}
          </button>
        ))}
        {/* Spacer to push content to the left */}
        <div className="flex-grow"></div> 
      </div>

      {/* Match Results List */}
      <div className="p-0">
        {currentSportData.length > 0 ? (
          currentSportData.map((competition, index) => (
            <div key={index} className="bg-white mb-2 shadow-sm rounded-lg overflow-hidden border border-gray-200">
              
              {/* Competition Header */}
              <div className="flex justify-between items-center p-3 bg-gray-100 font-bold text-sm text-gray-700 cursor-pointer hover:bg-gray-200 transition-colors">
                <span className="flex items-center">
                  <span className="mr-1">
                    {/* Placeholder for Flag/League Icon */}
                    {selectedSport === 'Football' && '⚽'} 
                  </span>
                  {competition.competition}
                  {competition.matchday && <span className="ml-1 font-normal text-gray-500"> – {competition.matchday}</span>}
                </span>
                <span className="text-xs text-gray-400">^</span> {/* Arrow icon */}
              </div>

              {/* Match Rows */}
              {competition.matches.map((match, matchIndex) => (
                <MatchRow 
                  key={matchIndex} 
                  match={match} 
                  sportName={selectedSport}
                />
              ))}
            </div>
          ))
        ) : (
          <div className="p-8 text-center text-gray-500">
            {selectedSport} 
          </div>
        )}
      </div>
    </div>
  );
};

export default Result;