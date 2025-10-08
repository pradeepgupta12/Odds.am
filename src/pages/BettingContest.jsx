


import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { bettingContestData } from '../data/bettingContestData';
import league from '../data/league';
import LiveScoreSection from "../pages/LiveScoreSection";
import EventsAndTables from '../pages/EventsAndTables';

const BettingContest = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Main Questions');
  const {
    page_title,
    description,
    contest_ranking,
    sections,
  } = bettingContestData;

  const handleBettingContestUserClick = (username) => {
    navigate(`/betting-contest-details/${encodeURIComponent(username)}`);
  };

  return (
    <>
      <Helmet>
        <html lang="en" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Betting Contest - September 2025 | Watchdogs.net - Join & Win Up to 100€ Prizes</title>
        <meta name="description" content="Join the Watchdogs.net Betting Contest for September 2025! Predict football matches, track ROI, climb rankings, and win cash prizes up to 100€. View live standings, rules, and FAQ." />
        <meta name="keywords" content="betting contest, football predictions contest, sports betting prizes, ROI contest, free betting competition, match predictions, cash prizes" />
        <meta name="author" content="Watchdogs Team" />
        <link rel="canonical" href="https://watchdogs.net/Betting-contest" />
        <link rel="icon" href="/favicon.ico" />
        {/* Open Graph Tags */}
        <meta property="og:title" content="Betting Contest - September 2025 | Watchdogs.net - Join & Win Up to 100€ Prizes" />
        <meta property="og:description" content="Join the Watchdogs.net Betting Contest for September 2025! Predict football matches, track ROI, climb rankings, and win cash prizes up to 100€. View live standings, rules, and FAQ." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://watchdogs.net/Betting-contest" />
        <meta property="og:image" content="https://watchdogs.net/og-contest.jpg" />
        <meta property="og:image:alt" content="Watchdogs.net Betting Contest - Win Cash Prizes" />
        <meta property="og:site_name" content="Watchdogs.net" />
        {/* Structured Data: WebPage Schema with Event for Contest */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Betting Contest - September 2025",
            "url": "https://watchdogs.net/Betting-contest",
            "description": "Monthly betting contest on football matches with cash prizes. View rankings, rules, and join to predict outcomes.",
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
              "@type": "Event",
              "name": "Watchdogs.net Betting Contest - September 2025",
              "startDate": "2025-09-01",
              "endDate": "2025-09-30",
              "eventStatus": "https://schema.org/EventScheduled",
              "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
              "description": "Predict football match outcomes to win cash prizes up to 100€. Track ROI and rankings.",
              "offers": {
                "@type": "AggregateOffer",
                "lowPrice": "10",
                "highPrice": "100",
                "priceCurrency": "EUR",
                "description": "Cash prizes for top predictors"
              },
              "organizer": {
                "@type": "Organization",
                "name": "Watchdogs.net"
              }
            }
          })}
        </script>
      </Helmet>
      <div className="min-h-screen bg-gray-100 mt-35">
        <div className="max-w-screen-xl mx-auto px-2 sm:px-4 py-2 sm:py-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
            {/* Main Content Area */}
            <div className="md:col-span-8 lg:col-span-9">
              {/* Title and Description */}
              <h1 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">{page_title}</h1>
              <p className="text-gray-700 text-xs sm:text-sm md:text-base mb-4 sm:mb-6">{description}</p>

              {/* Prizes Section */}
              <div className="bg-yellow-100 p-2 sm:p-4 rounded border-l-2 sm:border-l-4 border-yellow-500 mb-4 sm:mb-8">
                <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">🏆 PRIZES IN SEPTEMBER</h3>
                <ul className="list-disc ml-3 sm:ml-5 space-y-1 text-xs sm:text-base">
                  <li>1st Place – 100 €</li>
                  <li>2nd Place – 75 €</li>
                  <li>3rd Place – 50 €</li>
                  <li>Place 4 to 10 – 25 €</li>
                  <li>Place 11 to 20 – 10 €</li>
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
            {/* Right Sidebar */}
            <div className="md:col-span-4 lg:col-span-3">
              <div className="sticky top-[120px]">
                {/* Advertisement */}
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
                    <h3 className="font-bold text-lg">{league.betting_contest.title}</h3>
                    <p className="text-sm opacity-90">{league.betting_contest.subtitle}</p>
                  </div>
                  <div className="p-3">
                    {league.betting_contest.ranking.map((user, index) => (
                      <div 
                        key={index} 
                        className="flex items-center justify-between py-3 border-b border-teal-500/30 last:border-b-0 hover:text-blue-900 cursor-pointer transition-colors" 
                        onClick={() => handleBettingContestUserClick(user.username)}
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 flex items-center justify-center">
                            <span className="text-2xl font-bold">{user.position}</span>
                          </div>
                          <div className="w-10 h-10">
                            <img src={user.flag || '/placeholder-logo.jpg'} alt="User Flag" className="w-full h-full object-contain rounded-full" />
                          </div>
                          <div>
                            <div className="font-medium text-sm">{user.username}</div>
                            {user.country && (
                              <div className="text-xs opacity-75 flex items-center space-x-1">
                                <span>🇺🇦</span>
                                <span>{user.country}</span>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold mb-1">
                            {user.prize}
                          </div>
                          <div className="text-xs opacity-90">{user.points.toLocaleString()}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="bg-teal-700 px-6 py-4 text-center">
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
  );
};

export default BettingContest;