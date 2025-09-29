


// import React, { useState } from 'react';
// import { bettingContestData } from '../data/bettingContestData';

// const BettingContest = () => {
//   const [activeTab, setActiveTab] = useState('Main Questions');
//   const {
//     page_title,
    
//     description,
//     contest_ranking,
//     sections,
//   } = bettingContestData;

//   return (
//     <div className="p-4 max-w-screen-xl mt-35 mx-auto text-sm md:text-base">
//       {/* Title and Description */}
//       <h1 className="text-2xl font-bold mb-2">{page_title}</h1>
//       <p className="text-gray-700 mb-6">{description}</p>

//       {/* Prizes Section */}
//       <div className="bg-yellow-100 p-4 rounded border-l-4 border-yellow-500 mb-8">
//         <h3 className="font-semibold text-lg mb-2">🏆 PRIZES IN SEPTEMBER</h3>
//         <ul className="list-disc ml-5 space-y-1">
//           <li>1st Place – 100 €</li>
//           <li>2nd Place – 75 €</li>
//           <li>3rd Place – 50 €</li>
//           <li>Place 4 to 10 – 25 €</li>
//           <li>Place 11 to 20 – 10 €</li>
//         </ul>
//       </div>

//       {/* Ranking Table */}
//       <div className="overflow-x-auto mb-10">
//         <h2 className="text-xl font-semibold mb-4">📊 Betting Contest Ranking – September 2025</h2>
//         <table className="min-w-full text-center border border-gray-300 rounded shadow-sm">
//           <thead className="bg-gray-200">
//             <tr>
//               <th className="p-2">Place</th>
//               <th className="p-2">Username</th>
//               <th className="p-2">Bets</th>
//               <th className="p-2">Unsettled</th>
//               <th className="p-2">ROI / Prizes</th>
//               <th className="p-2">Total Balance</th>
//             </tr>
//           </thead>
//           <tbody>
//             {contest_ranking.rows.map((user, index) => (
//               <tr key={index} className="border-t border-gray-200">
//                 <td className="p-2">{user.rank}</td>
//                 <td className="flex items-center gap-2 justify-center p-2">
//                   <img
//                     src={user.profile_image}
//                     alt={user.username}
//                     className="w-6 h-6 rounded-full"
//                   />
//                   {user.username}
//                 </td>
//                 <td className="p-2">{user.bets}</td>
//                 <td className="p-2">{user.unsettled}</td>
//                 <td className="p-2">{user.iou_phase}</td>
//                 <td className="p-2 font-semibold">{user.total_balance}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* FAQ Tabs */}
//       <div className="mb-6">
//         <div className="flex flex-wrap gap-2 mb-4">
//           {['OVERVIEW', 'CONTEST RANKING', 'RULES & FAQ'].map((tab, index) => (
//             <button
//               key={index}
//               onClick={() => setActiveTab(tab)}
//               className={`px-4 py-2 rounded font-medium transition ${
//                 activeTab === tab
//                   ? 'bg-red-600 text-white'
//                   : 'bg-gray-600 text-white hover:bg-gray-700'
//               }`}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>

//         {/* Active Tab Content */}
//         <div className="space-y-6">
//           {activeTab === 'OVERVIEW' && (
//             sections.find(section => section.title === 'Main Questions')?.questions_and_answers.map((qa, idx) => (
//               <div key={idx} className="bg-white p-4 border rounded shadow-sm">
//                 <h4 className="font-semibold mb-2">❓ {qa.question}</h4>
//                 <p
//                   className="text-gray-700"
//                   dangerouslySetInnerHTML={{ __html: qa.answer.replace(/\n/g, '<br/>') }}
//                 />
//               </div>
//             ))
//           )}
//           {activeTab === 'CONTEST RANKING' && (
//             <div className="bg-white p-4 border rounded shadow-sm">
//               <h4 className="font-semibold mb-2">📊 Betting Contest Ranking – September 2025</h4>
//               <table className="min-w-full text-center border border-gray-300 rounded shadow-sm mt-4">
//                 <thead className="bg-gray-200">
//                   <tr>
//                     <th className="p-2">Place</th>
//                     <th className="p-2">Username</th>
//                     <th className="p-2">Bets</th>
//                     <th className="p-2">Unsettled</th>
//                     <th className="p-2">ROI / Prizes</th>
//                     <th className="p-2">Total Balance</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {contest_ranking.rows.map((user, index) => (
//                     <tr key={index} className="border-t border-gray-200">
//                       <td className="p-2">{user.rank}</td>
//                       <td className="flex items-center gap-2 justify-center p-2">
//                         <img
//                           src={user.profile_image}
//                           alt={user.username}
//                           className="w-6 h-6 rounded-full"
//                         />
//                         {user.username}
//                       </td>
//                       <td className="p-2">{user.bets}</td>
//                       <td className="p-2">{user.unsettled}</td>
//                       <td className="p-2">{user.iou_phase}</td>
//                       <td className="p-2 font-semibold">{user.total_balance}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )}
//           {activeTab === 'RULES & FAQ' && (
//             sections.flatMap(section => section.questions_and_answers).map((qa, idx) => (
//               <div key={idx} className="bg-white p-4 border rounded shadow-sm">
//                 <h4 className="font-semibold mb-2">❓ {qa.question}</h4>
//                 <p
//                   className="text-gray-700"
//                   dangerouslySetInnerHTML={{ __html: qa.answer.replace(/\n/g, '<br/>') }}
//                 />
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BettingContest;

import React, { useState } from 'react';
import { bettingContestData } from '../data/bettingContestData';

const BettingContest = () => {
  const [activeTab, setActiveTab] = useState('Main Questions');
  const {
    page_title,
    description,
    contest_ranking,
    sections,
  } = bettingContestData;

  return (
    <div className="p-2 sm:p-4 max-w-screen-xl mx-auto text-xs  mt-35 sm:text-sm md:text-base">
      {/* Title and Description */}
      <h1 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">{page_title}</h1>
      <p className="text-gray-700 mb-4 sm:mb-6">{description}</p>

      {/* Prizes Section */}
      <div className="bg-yellow-100 p-2 sm:p-4 rounded border-l-2 sm:border-l-4 border-yellow-500 mb-4 sm:mb-8">
        <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">🏆 PRIZES IN SEPTEMBER</h3>
        <ul className="list-disc ml-3 sm:ml-5 space-y-1">
          <li className="text-xs sm:text-base">1st Place – 100 €</li>
          <li className="text-xs sm:text-base">2nd Place – 75 €</li>
          <li className="text-xs sm:text-base">3rd Place – 50 €</li>
          <li className="text-xs sm:text-base">Place 4 to 10 – 25 €</li>
          <li className="text-xs sm:text-base">Place 11 to 20 – 10 €</li>
        </ul>
      </div>

      {/* Ranking Table */}
      <div className="overflow-x-auto mb-4 sm:mb-10">
        <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4">📊 Betting Contest Ranking – September 2025</h2>
        <table className="min-w-full text-center border border-gray-300 rounded shadow-sm">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-1 sm:p-2 text-[10px] sm:text-sm">Place</th>
              <th className="p-1 sm:p-2 text-[10px] sm:text-sm">Username</th>
              <th className="p-1 sm:p-2 text-[10px] sm:text-sm">Bets</th>
              <th className="p-1 sm:p-2 text-[10px] sm:text-sm">Unsettled</th>
              <th className="p-1 sm:p-2 text-[10px] sm:text-sm">ROI / Prizes</th>
              <th className="p-1 sm:p-2 text-[10px] sm:text-sm">Total Balance</th>
            </tr>
          </thead>
          <tbody>
            {contest_ranking.rows.map((user, index) => (
              <tr key={index} className="border-t border-gray-200">
                <td className="p-1 sm:p-2 text-[10px] sm:text-sm">{user.rank}</td>
                <td className="flex items-center gap-1 sm:gap-2 justify-center p-1 sm:p-2">
                  <img
                    src={user.profile_image}
                    alt={user.username}
                    className="w-4 sm:w-6 h-4 sm:h-6 rounded-full"
                  />
                  {user.username}
                </td>
                <td className="p-1 sm:p-2 text-[10px] sm:text-sm">{user.bets}</td>
                <td className="p-1 sm:p-2 text-[10px] sm:text-sm">{user.unsettled}</td>
                <td className="p-1 sm:p-2 text-[10px] sm:text-sm">{user.iou_phase}</td>
                <td className="p-1 sm:p-2 text-[10px] sm:text-sm font-semibold">{user.total_balance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* FAQ Tabs */}
      <div className="mb-4 sm:mb-6">
        <div className="flex flex-wrap gap-1 sm:gap-2 mb-2 sm:mb-4">
          {['OVERVIEW', 'CONTEST RANKING', 'RULES & FAQ'].map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(tab)}
              className={`px-2 sm:px-4 py-1 sm:py-2 rounded font-medium transition text-xs sm:text-sm ${
                activeTab === tab
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-600 text-white hover:bg-gray-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Active Tab Content */}
        <div className="space-y-2 sm:space-y-6">
          {activeTab === 'OVERVIEW' && (
            sections.find(section => section.title === 'Main Questions')?.questions_and_answers.map((qa, idx) => (
              <div key={idx} className="bg-white p-2 sm:p-4 border rounded shadow-sm">
                <h4 className="font-semibold mb-1 sm:mb-2 text-base sm:text-lg">❓ {qa.question}</h4>
                <p
                  className="text-gray-700 text-xs sm:text-base"
                  dangerouslySetInnerHTML={{ __html: qa.answer.replace(/\n/g, '<br/>') }}
                />
              </div>
            ))
          )}
          {activeTab === 'CONTEST RANKING' && (
            <div className="bg-white p-2 sm:p-4 border rounded shadow-sm">
              <h4 className="font-semibold mb-1 sm:mb-2 text-base sm:text-lg">📊 Betting Contest Ranking – September 2025</h4>
              <table className="min-w-full text-center border border-gray-300 rounded shadow-sm mt-2 sm:mt-4">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="p-1 sm:p-2 text-[10px] sm:text-sm">Place</th>
                    <th className="p-1 sm:p-2 text-[10px] sm:text-sm">Username</th>
                    <th className="p-1 sm:p-2 text-[10px] sm:text-sm">Bets</th>
                    <th className="p-1 sm:p-2 text-[10px] sm:text-sm">Unsettled</th>
                    <th className="p-1 sm:p-2 text-[10px] sm:text-sm">ROI / Prizes</th>
                    <th className="p-1 sm:p-2 text-[10px] sm:text-sm">Total Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {contest_ranking.rows.map((user, index) => (
                    <tr key={index} className="border-t border-gray-200">
                      <td className="p-1 sm:p-2 text-[10px] sm:text-sm">{user.rank}</td>
                      <td className="flex items-center gap-1 sm:gap-2 justify-center p-1 sm:p-2">
                        <img
                          src={user.profile_image}
                          alt={user.username}
                          className="w-4 sm:w-6 h-4 sm:h-6 rounded-full"
                        />
                        {user.username}
                      </td>
                      <td className="p-1 sm:p-2 text-[10px] sm:text-sm">{user.bets}</td>
                      <td className="p-1 sm:p-2 text-[10px] sm:text-sm">{user.unsettled}</td>
                      <td className="p-1 sm:p-2 text-[10px] sm:text-sm">{user.iou_phase}</td>
                      <td className="p-1 sm:p-2 text-[10px] sm:text-sm font-semibold">{user.total_balance}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {activeTab === 'RULES & FAQ' && (
            sections.flatMap(section => section.questions_and_answers).map((qa, idx) => (
              <div key={idx} className="bg-white p-2 sm:p-4 border rounded shadow-sm">
                <h4 className="font-semibold mb-1 sm:mb-2 text-base sm:text-lg">❓ {qa.question}</h4>
                <p
                  className="text-gray-700 text-xs sm:text-base"
                  dangerouslySetInnerHTML={{ __html: qa.answer.replace(/\n/g, '<br/>') }}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default BettingContest;