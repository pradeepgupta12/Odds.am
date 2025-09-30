

// import React, { useState } from 'react';
// import { FaCalculator, FaChevronRight, FaSortUp } from 'react-icons/fa';
// import { MdSportsSoccer } from 'react-icons/md';
// import { sureBetsData } from '../data/sureBetsData';

// const SureBets = () => {
//   const [activeFilter, setActiveFilter] = useState('Tennis');
  
//   const { sections } = sureBetsData;
//   const topFreeBetsData = sections.find(s => s.title === "TOP FREE BETS");
//   const topSureBetsData = sections.find(s => s.title === "TOP SURE BETS");
//   const allSureBetsData = sections.find(s => s.title === "ALL SURE BETS");

//   // Filter data based on active sport or show all
//   const filteredBets = activeFilter === 'Show All' 
//     ? allSureBetsData?.all_bets_table || []
//     : allSureBetsData?.all_bets_table.filter(bet => bet.sport === activeFilter) || [];

//   return (
//     <div className="min-h-screen bg-white mt-35">
//       {/* Breadcrumb */}
//       <div className="bg-gray-100 px-4 sm:px-6 py-2 sm:py-3 border-b border-gray-200">
//         <div className="max-w-7xl mx-auto flex items-center gap-1 text-xs sm:text-sm text-gray-600">
//           <span className="hover:text-red-600 cursor-pointer">Home</span>
//           <FaChevronRight size={8} sm:size={10} className="text-gray-400" />
//           <span className="text-gray-800 font-medium">Sure Bets</span>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
//         {/* TOP FREE BETS Section */}
//         <section className="mb-4 sm:mb-8">
//           <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-4 flex items-center gap-1 sm:gap-2">
//             <span className="text-red-600">▶</span>
//             {topFreeBetsData?.title}
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4">
//             {topFreeBetsData?.items.map((item, index) => (
//               <div 
//                 key={index} 
//                 className="relative overflow-hidden rounded-lg shadow-lg"
//                 style={{
//                   background: index === 0 
//                     ? 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)'
//                     : index === 1 
//                     ? 'linear-gradient(135deg, #1e3a5f 0%, #2d5a8a 100%)'
//                     : 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
//                   minHeight: '180px'
//                 }}
//               >
//                 <div className="p-2 sm:p-4 h-full flex flex-col justify-between">
//                   <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-1 sm:mb-2">
//                     <div className="text-lg sm:text-2xl font-bold text-white">
//                       {item.bookmaker_name}
//                     </div>
//                     <div className="text-right">
//                       <div className="text-xs sm:text-sm text-gray-300 mb-0.5 sm:mb-1">
//                         {index === 0 ? 'WELCOME BONUS' : index === 1 ? '100% BONUS' : 'WELCOME BONUS'}
//                       </div>
//                       <div className="text-lg sm:text-2xl font-bold text-white">
//                         {item.bonus_info}
//                       </div>
//                     </div>
//                   </div>
                  
//                   <button className="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-1.5 sm:py-2 px-2 sm:px-4 rounded transition-colors uppercase text-xs sm:text-sm">
//                     {item.call_to_action}
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* TOP SURE BETS Section */}
//         <section className="mb-4 sm:mb-8">
//       {/* Section Title */}
//       <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-4 flex items-center gap-1 sm:gap-2">
//         <span className="text-red-600">▶</span>
//         {topSureBetsData?.title}
//       </h2>

//       {/* Grid Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 items-stretch">
//         {topSureBetsData?.items.map((item, index) => (
//           <div
//             key={index}
//             className="border border-gray-300 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden min-h-[320px] flex flex-col h-full"
//           >
//             {/* Match Header with Team Logos */}
//             <div className="p-2 sm:p-4 pb-1 sm:pb-3">
//               <div className="flex items-start gap-2">
//                 <img
//                   src={item.match_details.team1_logo || "https://via.placeholder.com/24"}
//                   alt={`${item.match_details.teams.split(" vs ")[0]} logo`}
//                   className="w-8 sm:w-12 h-8 sm:h-12 rounded-full object-cover flex-shrink-0"
//                   onError={(e) => {
//                     e.target.src = "https://via.placeholder.com/24";
//                     e.target.onerror = null;
//                   }}
//                 />
//                 <div className="flex-1 min-w-0">
//                   <h3
//                     className="text-sm sm:text-base font-bold text-gray-900 leading-tight line-clamp-2"
//                     title={item.match_details.teams}
//                   >
//                     {item.match_details.teams}
//                   </h3>
//                   <p className="text-xs sm:text-sm text-gray-500 mt-1 line-clamp-2">
//                     {item.match_details.time}. {item.match_details.tournament}
//                   </p>
//                 </div>
//                 <img
//                   src={item.match_details.team2_logo || "https://via.placeholder.com/24"}
//                   alt={`${item.match_details.teams.split(" vs ")[1]} logo`}
//                   className="w-8 sm:w-12 h-8 sm:h-12 rounded-full object-cover flex-shrink-0"
//                   onError={(e) => {
//                     e.target.src = "https://via.placeholder.com/24";
//                     e.target.onerror = null;
//                   }}
//                 />
//                 <div className="flex-shrink-0">
//                   <div className="w-6 sm:w-8 h-6 sm:h-8 rounded border border-gray-300 flex items-center justify-center cursor-pointer hover:bg-gray-50">
//                     <FaCalculator className="text-gray-500" size={12} />
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Bet Type */}
//             <div className="text-center py-2 bg-gray-50 border-t border-b border-gray-200">
//               <span className="text-xs sm:text-sm font-semibold text-gray-700">
//                 {item.match_details.bet_type || "2 Way"}
//               </span>
//             </div>

//             {/* Betting Options */}
//             <div
//               className={`grid ${
//                 item.betting_options.length === 3 ? "grid-cols-3" : "grid-cols-2"
//               } gap-2 p-2 sm:p-4 flex-1`}
//             >
//               {item.betting_options.map((option, idx) => (
//                 <div key={idx} className="flex flex-col items-center justify-center">
//                   <span className="inline-flex items-center justify-center w-6 h-6 rounded-full text-white text-xs sm:text-sm font-bold bg-red-600">
//                     {idx === 0
//                       ? "1"
//                       : idx === 1 && item.betting_options.length === 3
//                       ? "X"
//                       : "2"}
//                   </span>
//                   <div className="text-lg sm:text-2xl font-bold text-gray-900">
//                     {option.odds}
//                   </div>
//                   <div
//                     className={`px-2 py-1 rounded text-xs sm:text-sm font-bold text-white ${
//                       option.bookmaker_name === "MARATHON"
//                         ? "bg-red-600"
//                         : option.bookmaker_name === "Stake"
//                         ? "bg-black"
//                         : option.bookmaker_name === "PIN-UP"
//                         ? "bg-red-600"
//                         : option.bookmaker_name === "bet.com"
//                         ? "bg-green-600"
//                         : "bg-black"
//                     }`}
//                   >
//                     {option.bookmaker_name}
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Sure Return Button */}
//             <div className="px-4 pb-4 flex justify-center">
//               <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex items-center gap-2">
//                 <FaCalculator size={14} />
//                 Sure Return {item.sure_return}
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>

//         {/* ALL SURE BETS Section */}
//         <section>
//           <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-4 flex items-center gap-1 sm:gap-2">
//             <span className="text-red-600">▶</span>
//             {allSureBetsData?.title}
//           </h2>

//           {/* Sport Filter Tabs */}
//           <div className="bg-gray-800 flex items-center overflow-x-auto mb-2 sm:mb-4">
//             {allSureBetsData?.sports_filter.map((sport, index) => (
//               <button
//                 key={index}
//                 onClick={() => setActiveFilter(sport === 'Show All' ? sport : sport)}
//                 className={`px-3 sm:px-6 py-1.5 sm:py-3 text-xs sm:text-sm font-medium whitespace-nowrap transition-colors border-r border-gray-700 ${
//                   activeFilter === sport
//                     ? 'bg-gray-700 text-white'
//                     : 'text-gray-300 hover:bg-gray-700'
//                 }`}
//               >
//                 {sport}
//               </button>
//             ))}
//             <button
//               onClick={() => setActiveFilter('Show All')}
//               className="px-3 sm:px-6 py-1.5 sm:py-3 text-xs sm:text-sm font-medium text-white bg-red-600 hover:bg-red-700 whitespace-nowrap ml-auto"
//             >
//               Show All
//             </button>
//           </div>

//           {/* Table */}
//           <div className="overflow-x-auto bg-white shadow rounded-lg">
//             <table className="w-full text-xs sm:text-sm">
//               <thead>
//                 <tr className="bg-gray-50 border-b border-gray-200">
//                   <th className="px-2 sm:px-4 py-2 text-left font-semibold text-gray-700 uppercase">
//                     <div className="flex items-center gap-1">
//                       Start Time
//                       <FaSortUp className="text-gray-400" size={10} sm:size={12} />
//                     </div>
//                   </th>
//                   <th className="px-2 sm:px-4 py-2 text-left font-semibold text-gray-700 uppercase min-w-[200px] sm:min-w-[300px]">
//                     Match
//                   </th>
//                   <th className="px-2 sm:px-4 py-2 text-left font-semibold text-gray-700 uppercase">
//                     <div className="flex items-center gap-1">
//                       Type of Bet
//                       <FaSortUp className="text-gray-400" size={10} sm:size={12} />
//                     </div>
//                   </th>
//                   <th className="px-2 sm:px-4 py-2 text-center font-semibold text-gray-700 uppercase">
//                     Odds 1
//                   </th>
//                   <th className="px-2 sm:px-4 py-2 text-center font-semibold text-gray-700 uppercase">
//                     Odds 2
//                   </th>
//                   <th className="px-2 sm:px-4 py-2 text-right font-semibold text-gray-700 uppercase">
//                     <div className="flex items-center justify-end gap-1">
//                       Return
//                       <FaSortUp className="text-gray-400" size={10} sm:size={12} />
//                     </div>
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredBets.map((row, index) => (
//                   <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
//                     <td className="px-2 sm:px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
//                       {row.start_time}
//                     </td>
//                     <td className="px-2 sm:px-4 py-2">
//                       <div className="flex items-center gap-1 sm:gap-2">
//                         <img
//                           src={row.team1_logo || 'https://via.placeholder.com/20'}
//                           alt={`${row.match.split(' vs ')[0]} logo`}
//                           className="w-4 sm:w-7 h-4 sm:h-7 rounded-full object-cover flex-shrink-0"
//                           onError={(e) => { e.target.src = 'https://via.placeholder.com/20'; e.target.onerror = null; }}
//                         />
//                         <img
//                           src={row.team2_logo || 'https://via.placeholder.com/20'}
//                           alt={`${row.match.split(' vs ')[1]} logo`}
//                           className="w-4 sm:w-7 h-4 sm:h-7 rounded-full object-cover flex-shrink-0"
//                           onError={(e) => { e.target.src = 'https://via.placeholder.com/20'; e.target.onerror = null; }}
//                         />
//                         <span className="text-gray-900 font-medium">{row.match}</span>
//                       </div>
//                     </td>
//                     <td className="px-2 sm:px-4 py-2 text-gray-700">
//                       {row.type_of_bet}
//                     </td>
//                     <td className="px-2 sm:px-4 py-2">
//                       <div className="flex flex-col items-center gap-0.5 sm:gap-1">
//                         <div className="inline-block bg-red-600 text-white px-1 sm:px-2 py-0.5 sm:py-1 rounded text-xs font-bold min-w-[40px] sm:min-w-[60px] text-center">
//                           {row.bookmaker_1_name || 'MARATHON'}
//                         </div>
//                         <span className="text-sm sm:text-base font-bold text-gray-900">{row.odds_1}</span>
//                       </div>
//                     </td>
//                     <td className="px-2 sm:px-4 py-2">
//                       <div className="flex flex-col items-center gap-0.5 sm:gap-1">
//                         <div className="inline-block bg-black text-white px-1 sm:px-2 py-0.5 sm:py-1 rounded text-xs font-bold min-w-[40px] sm:min-w-[60px] text-center">
//                           {row.bookmaker_2_name || '1xBit'}
//                         </div>
//                         <span className="text-sm sm:text-base font-bold text-gray-900">{row.odds_2}</span>
//                       </div>
//                     </td>
//                     <td className="px-2 sm:px-4 py-2 text-right">
//                       <span className="inline-block bg-red-600 text-white px-1.5 sm:px-3 py-0.5 sm:py-1.5 rounded font-bold text-xs sm:text-sm">
//                         {row.return}
//                       </span>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default SureBets;

import React, { useState } from 'react';
import { FaCalculator, FaChevronRight, FaSortUp } from 'react-icons/fa';
import { MdSportsSoccer } from 'react-icons/md';
import { sureBetsData } from '../data/sureBetsData';
import league from '../data/league';
import LiveScoreSection from "../pages/LiveScoreSection";
import EventsAndTables from '../pages/EventsAndTables';

const SureBets = () => {
  const [activeFilter, setActiveFilter] = useState('Tennis');
  
  const { sections } = sureBetsData;
  const topFreeBetsData = sections.find(s => s.title === "TOP FREE BETS");
  const topSureBetsData = sections.find(s => s.title === "TOP SURE BETS");
  const allSureBetsData = sections.find(s => s.title === "ALL SURE BETS");

  // Filter data based on active sport or show all
  const filteredBets = activeFilter === 'Show All' 
    ? allSureBetsData?.all_bets_table || []
    : allSureBetsData?.all_bets_table.filter(bet => bet.sport === activeFilter) || [];

  return (
    <div className="min-h-screen bg-white mt-35">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 py-2 sm:py-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {/* Main Content Area */}
          <div className="md:col-span-8 lg:col-span-9">
            {/* Breadcrumb */}
            <div className="bg-gray-100 px-2 sm:px-4 py-1 sm:py-2 border-b border-gray-200">
              <div className="max-w-7xl mx-auto flex items-center gap-1 text-xs sm:text-sm text-gray-600">
                <span className="hover:text-red-600 cursor-pointer">Home</span>
                <FaChevronRight size={8} className="sm:h-5 sm:w-5 text-gray-400" />
                <span className="text-gray-800 font-medium">Sure Bets</span>
              </div>
            </div>

            <div className="py-2 sm:py-4">
              {/* TOP FREE BETS Section */}
              <section className="mb-2 sm:mb-4">
                <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-2 sm:mb-4 flex items-center gap-1 sm:gap-2">
                  <span className="text-red-600">▶</span>
                  {topFreeBetsData?.title}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4">
                  {topFreeBetsData?.items.map((item, index) => (
                    <div 
                      key={index} 
                      className="relative overflow-hidden rounded-lg shadow-lg"
                      style={{
                        background: index === 0 
                          ? 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)'
                          : index === 1 
                          ? 'linear-gradient(135deg, #1e3a5f 0%, #2d5a8a 100%)'
                          : 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
                        minHeight: '160px sm:min-h-[180px]'
                      }}
                    >
                      <div className="p-2 sm:p-4 h-full flex flex-col justify-between">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-1 sm:mb-2">
                          <div className="text-base sm:text-lg md:text-xl font-bold text-white">
                            {item.bookmaker_name}
                          </div>
                          <div className="text-right">
                            <div className="text-xs sm:text-sm text-gray-300 mb-0.5 sm:mb-1">
                              {index === 0 ? 'WELCOME BONUS' : index === 1 ? '100% BONUS' : 'WELCOME BONUS'}
                            </div>
                            <div className="text-base sm:text-lg md:text-xl font-bold text-white">
                              {item.bonus_info}
                            </div>
                          </div>
                        </div>
                        <button className="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-1.5 sm:py-2 px-2 sm:px-4 rounded transition-colors uppercase text-xs sm:text-sm">
                          {item.call_to_action}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* TOP SURE BETS Section */}
              <section className="mb-2 sm:mb-4">
                <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-2 sm:mb-4 flex items-center gap-1 sm:gap-2">
                  <span className="text-red-600">▶</span>
                  {topSureBetsData?.title}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 items-stretch">
                  {topSureBetsData?.items.map((item, index) => (
                    <div
                      key={index}
                      className="border border-gray-300 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden min-h-[300px] sm:min-h-[320px] flex flex-col h-full"
                    >
                      <div className="p-2 sm:p-4 pb-1 sm:pb-3">
                        <div className="flex items-start gap-2">
                          <img
                            src={item.match_details.team1_logo || "https://via.placeholder.com/24"}
                            alt={`${item.match_details.teams.split(" vs ")[0]} logo`}
                            className="w-6 sm:w-8 md:w-12 h-6 sm:h-8 md:h-12 rounded-full object-cover flex-shrink-0"
                            onError={(e) => {
                              e.target.src = "https://via.placeholder.com/24";
                              e.target.onerror = null;
                            }}
                          />
                          <div className="flex-1 min-w-0">
                            <h3
                              className="text-xs sm:text-sm md:text-base font-bold text-gray-900 leading-tight line-clamp-2"
                              title={item.match_details.teams}
                            >
                              {item.match_details.teams}
                            </h3>
                            <p className="text-xs sm:text-sm text-gray-500 mt-1 line-clamp-2">
                              {item.match_details.time}. {item.match_details.tournament}
                            </p>
                          </div>
                          <img
                            src={item.match_details.team2_logo || "https://via.placeholder.com/24"}
                            alt={`${item.match_details.teams.split(" vs ")[1]} logo`}
                            className="w-6 sm:w-8 md:w-12 h-6 sm:h-8 md:h-12 rounded-full object-cover flex-shrink-0"
                            onError={(e) => {
                              e.target.src = "https://via.placeholder.com/24";
                              e.target.onerror = null;
                            }}
                          />
                          <div className="flex-shrink-0">
                            <div className="w-6 sm:w-8 h-6 sm:h-8 rounded border border-gray-300 flex items-center justify-center cursor-pointer hover:bg-gray-50">
                              <FaCalculator className="text-gray-500" size={12} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-center py-2 bg-gray-50 border-t border-b border-gray-200">
                        <span className="text-xs sm:text-sm font-semibold text-gray-700">
                          {item.match_details.bet_type || "2 Way"}
                        </span>
                      </div>
                      <div
                        className={`grid ${
                          item.betting_options.length === 3 ? "grid-cols-3" : "grid-cols-2"
                        } gap-2 p-2 sm:p-4 flex-1`}
                      >
                        {item.betting_options.map((option, idx) => (
                          <div key={idx} className="flex flex-col items-center justify-center">
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full text-white text-xs sm:text-sm font-bold bg-red-600">
                              {idx === 0
                                ? "1"
                                : idx === 1 && item.betting_options.length === 3
                                ? "X"
                                : "2"}
                            </span>
                            <div className="text-base sm:text-lg md:text-2xl font-bold text-gray-900">
                              {option.odds}
                            </div>
                            <div
                              className={`px-2 py-1 rounded text-xs sm:text-sm font-bold text-white ${
                                option.bookmaker_name === "MARATHON"
                                  ? "bg-red-600"
                                  : option.bookmaker_name === "Stake"
                                  ? "bg-black"
                                  : option.bookmaker_name === "PIN-UP"
                                  ? "bg-red-600"
                                  : option.bookmaker_name === "bet.com"
                                  ? "bg-green-600"
                                  : "bg-black"
                              }`}
                            >
                              {option.bookmaker_name}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="px-2 sm:px-4 pb-2 sm:pb-4 flex justify-center">
                        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-1.5 sm:py-2 px-2 sm:px-4 rounded flex items-center gap-2 text-xs sm:text-sm">
                          <FaCalculator size={12} sm:size={14} />
                          Sure Return {item.sure_return}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* ALL SURE BETS Section */}
              <section>
                <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-2 sm:mb-4 flex items-center gap-1 sm:gap-2">
                  <span className="text-red-600">▶</span>
                  {allSureBetsData?.title}
                </h2>
                <div className="bg-gray-800 flex items-center overflow-x-auto mb-2 sm:mb-4">
                  {allSureBetsData?.sports_filter.map((sport, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveFilter(sport === 'Show All' ? sport : sport)}
                      className={`px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-medium whitespace-nowrap transition-colors border-r border-gray-700 ${
                        activeFilter === sport
                          ? 'bg-gray-700 text-white'
                          : 'text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      {sport}
                    </button>
                  ))}
                  <button
                    onClick={() => setActiveFilter('Show All')}
                    className="px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-medium text-white bg-red-600 hover:bg-red-700 whitespace-nowrap ml-auto"
                  >
                    Show All
                  </button>
                </div>
                <div className="overflow-x-auto bg-white shadow rounded-lg">
                  <table className="w-full text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-200">
                        <th className="px-2 sm:px-4 py-2 text-left font-semibold text-gray-700 uppercase">
                          <div className="flex items-center gap-1">
                            Start Time
                            <FaSortUp className="text-gray-400" size={10} sm:size={12} />
                          </div>
                        </th>
                        <th className="px-2 sm:px-4 py-2 text-left font-semibold text-gray-700 uppercase min-w-[180px] sm:min-w-[300px]">
                          Match
                        </th>
                        <th className="px-2 sm:px-4 py-2 text-left font-semibold text-gray-700 uppercase">
                          <div className="flex items-center gap-1">
                            Type of Bet
                            <FaSortUp className="text-gray-400" size={10} sm:size={12} />
                          </div>
                        </th>
                        <th className="px-2 sm:px-4 py-2 text-center font-semibold text-gray-700 uppercase">
                          Odds 1
                        </th>
                        <th className="px-2 sm:px-4 py-2 text-center font-semibold text-gray-700 uppercase">
                          Odds 2
                        </th>
                        <th className="px-2 sm:px-4 py-2 text-right font-semibold text-gray-700 uppercase">
                          <div className="flex items-center justify-end gap-1">
                            Return
                            <FaSortUp className="text-gray-400" size={10} sm:size={12} />
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredBets.map((row, index) => (
                        <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                          <td className="px-2 sm:px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                            {row.start_time}
                          </td>
                          <td className="px-2 sm:px-4 py-2">
                            <div className="flex items-center gap-1 sm:gap-2">
                              <img
                                src={row.team1_logo || 'https://via.placeholder.com/20'}
                                alt={`${row.match.split(' vs ')[0]} logo`}
                                className="w-4 sm:w-6 md:w-7 h-4 sm:h-6 md:h-7 rounded-full object-cover flex-shrink-0"
                                onError={(e) => { e.target.src = 'https://via.placeholder.com/20'; e.target.onerror = null; }}
                              />
                              <img
                                src={row.team2_logo || 'https://via.placeholder.com/20'}
                                alt={`${row.match.split(' vs ')[1]} logo`}
                                className="w-4 sm:w-6 md:w-7 h-4 sm:h-6 md:h-7 rounded-full object-cover flex-shrink-0"
                                onError={(e) => { e.target.src = 'https://via.placeholder.com/20'; e.target.onerror = null; }}
                              />
                              <span className="text-gray-900 font-medium text-xs sm:text-sm">{row.match}</span>
                            </div>
                          </td>
                          <td className="px-2 sm:px-4 py-2 text-gray-700 text-xs sm:text-sm">
                            {row.type_of_bet}
                          </td>
                          <td className="px-2 sm:px-4 py-2">
                            <div className="flex flex-col items-center gap-0.5 sm:gap-1">
                              <div className="inline-block bg-red-600 text-white px-1 sm:px-2 py-0.5 sm:py-1 rounded text-xs font-bold min-w-[40px] sm:min-w-[60px] text-center">
                                {row.bookmaker_1_name || 'MARATHON'}
                              </div>
                              <span className="text-sm sm:text-base font-bold text-gray-900">{row.odds_1}</span>
                            </div>
                          </td>
                          <td className="px-2 sm:px-4 py-2">
                            <div className="flex flex-col items-center gap-0.5 sm:gap-1">
                              <div className="inline-block bg-black text-white px-1 sm:px-2 py-0.5 sm:py-1 rounded text-xs font-bold min-w-[40px] sm:min-w-[60px] text-center">
                                {row.bookmaker_2_name || '1xBit'}
                              </div>
                              <span className="text-sm sm:text-base font-bold text-gray-900">{row.odds_2}</span>
                            </div>
                          </td>
                          <td className="px-2 sm:px-4 py-2 text-right">
                            <span className="inline-block bg-red-600 text-white px-1.5 sm:px-3 py-0.5 sm:py-1.5 rounded font-bold text-xs sm:text-sm">
                              {row.return}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
          </div>
          {/* Right Sidebar */}
          <div className="md:col-span-4 lg:col-span-3">
            <div className="sticky top-[120px] space-y-4 sm:space-y-6">
              {/* Advertisement */}
              <div className="rounded-lg p-4 sm:p-6 shadow-2xl bg-white">
                <h4 className="text-base sm:text-lg font-bold text-black mb-2">Advertisement</h4>
                <p className="text-xs sm:text-sm text-black opacity-90 mb-4">Place your ad content here.</p>
                <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                  <div className="w-full h-40 sm:h-48 bg-gray-300 rounded flex items-center justify-center cursor-pointer">
                    <span className="text-gray-500 text-xs sm:text-sm">Ad Image Placeholder</span>
                  </div>
                </a>
                <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                  <button className="w-full bg-white text-blue-600 font-bold py-1.5 sm:py-2 px-2 sm:px-4 rounded hover:bg-gray-100 transition-colors mt-4 text-xs sm:text-sm">
                    Click Here
                  </button>
                </a>
              </div>
              {/* Betting Contest */}
              <div className="bg-teal-600 rounded-lg text-white overflow-hidden shadow-lg text-xs sm:text-sm leading-tight">
                <div className="bg-teal-700 px-4 sm:px-6 py-3 sm:py-4 text-center">
                  <div className="w-8 sm:w-10 h-8 sm:h-10 mx-auto mb-2">
                    <img src="/contest-logo.jpg" alt="Contest Logo" className="w-full h-full object-contain rounded-full" />
                  </div>
                  <h3 className="font-bold text-base sm:text-lg">{league.betting_contest.title}</h3>
                  <p className="text-xs sm:text-sm opacity-90">{league.betting_contest.subtitle}</p>
                </div>
                <div className="p-2 sm:p-3">
                  {league.betting_contest.ranking.map((user, index) => (
                    <div key={index} className="flex items-center justify-between py-2 sm:py-3 border-b border-teal-500/30 last:border-b-0">
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <div className="w-6 sm:w-8 h-6 sm:h-8 flex items-center justify-center">
                          <span className="text-lg sm:text-2xl font-bold">{user.position}</span>
                        </div>
                        <div className="w-8 sm:w-10 h-8 sm:h-10">
                          <img src={user.flag || '/placeholder-logo.jpg'} alt="User Flag" className="w-full h-full object-contain rounded-full" />
                        </div>
                        <div>
                          <div className="font-medium text-xs sm:text-sm">{user.username}</div>
                          {user.country && (
                            <div className="text-xs opacity-75 flex items-center space-x-1">
                              <span>🇺🇦</span>
                              <span>{user.country}</span>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="bg-red-500 text-white px-1 sm:px-2 py-0.5 sm:py-1 rounded text-xs font-bold mb-1">
                          {user.prize}
                        </div>
                        <div className="text-xs opacity-90">{user.points.toLocaleString()}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-teal-700 px-4 sm:px-6 py-3 sm:py-4 text-center">
                  <div className="text-lg sm:text-2xl font-bold mb-2">{league.betting_contest.prizes}</div>
                  <button className="bg-white text-teal-700 font-bold py-1.5 sm:py-2 px-4 sm:px-6 rounded hover:bg-gray-100 transition-colors text-xs sm:text-sm">
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
  );
};

export default SureBets;