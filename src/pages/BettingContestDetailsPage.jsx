

import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams, Link, useNavigate } from 'react-router-dom';
import bettingContestDetail from '../data/bettingContestDetail'; 
import LiveScoreSection from "../pages/LiveScoreSection";
import EventsAndTables from '../pages/EventsAndTables';

const SummaryBox = ({ label, value, percentage = '', unit = '', isPositive = false, isNegative = false, isNeutral = true }) => {
  let valueStyle = 'text-gray-900';
  if (isPositive) valueStyle = 'text-green-600';
  if (isNegative) valueStyle = 'text-red-600';

  let labelBgColor = 'bg-gray-500';
  if (isPositive) labelBgColor = 'bg-green-700';
  if (isNegative) labelBgColor = 'bg-red-600';

  return (
    <div className="p-0 rounded-lg bg-white shadow-md border border-gray-200 h-24 flex flex-col">
      <div className={`p-1.5 rounded-t-lg text-center text-xs font-semibold text-white ${labelBgColor} flex justify-center items-center`}>
        {label} <span className="ml-1 text-xs text-white cursor-help" title={`Info about ${label}`}>?</span>
      </div>
      <div className="flex flex-col flex-grow items-center justify-center p-2">
        <div className={`text-xl font-bold ${valueStyle}`}>
          {value} 
          {unit && <span className="text-lg font-normal ml-1">{unit}</span>}
        </div>
        {percentage && <div className={`text-sm font-semibold ${valueStyle}`}>{percentage}</div>}
      </div>
    </div>
  );
};

const BettingContestDetailsPage = () => {
  const navigate = useNavigate();
  const { username: paramUsername } = useParams();
  
  if (!paramUsername || paramUsername.trim() === '') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 pt-[120px]">
        <div className="text-center p-8 max-w-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">No User Selected</h2>
          <p className="text-gray-600 mb-6">Please select a user from the Betting Contest ranking.</p>
          <Link 
            to="/" 
            className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors"
          >
            Go to Home
          </Link>
        </div>
      </div>
    );
  }
  
  const userProfile = bettingContestDetail.allUserProfiles.find(profile => profile.username === paramUsername.trim());

  if (!userProfile) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 pt-[120px]">
        <div className="text-center p-8 max-w-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">User Not Found</h2>
          <p className="text-gray-600 mb-6">No profile data found for "{paramUsername}". Please check the username.</p>
          <Link 
            to="/" 
            className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors"
          >
            Go to Home
          </Link>
        </div>
      </div>
    );
  }

  const { 
    username, lastOnline, registeredSince, profileImage, 
    timePeriodSelected, performanceDashboard, betSummaryDashboard, 
    bestPerformances, lastBetsGraphic 
  } = userProfile;

  const handleBettingContestUserClick = (username) => {
    navigate(`/betting-contest-details/${encodeURIComponent(username)}`);
  };

  const sidebarRanking = bettingContestDetail.fullRanking.slice(0, 6);

  const getBoxProps = (item, type) => {
    let isPositive = false, isNegative = false, isNeutral = true;
    
    if (type === 'performance') {
      isPositive = ['Rank', 'ROI', 'Net Profit'].includes(item.label);
    } else if (type === 'summary') {
      if (item.label === 'Total Balance' || item.label === 'Won') isPositive = true;
      if (item.label === 'Lost') isNegative = true;
      if (['Number of Bets', 'Back'].includes(item.label)) isNeutral = true;
    }

    const isPercentage = item.unit === '%';
    const percentage = (type === 'performance' && item.label === 'ROI') || isPercentage ? item.value : item.percentage || '';

    return {
      ...item,
      value: typeof item.value === 'number' ? item.value.toString() : item.value,
      percentage,
      unit: !isPercentage ? item.unit : '',
      isPositive,
      isNegative,
      isNeutral
    };
  };

  const pageUrl = `https://watchdogs.net/betting-contest-details/${paramUsername}`;
  const pageTitle = `Betting Contest Profile: ${username} - ROI, Bets & Performance | Watchdogs.net`;

  return (
    <>
      <Helmet>
        <html lang="en" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{pageTitle}</title>
        <meta name="description" content={`View ${username}'s detailed profile in the Watchdogs.net Betting Contest. Track ROI, net profit, bets summary, best performances, and last bets. See rankings and stats for September 2025.`} />
        <meta name="keywords" content="betting contest profile, user betting stats, ROI tracker, football bet performance, contest rankings, user dashboard, betting history" />
        <meta name="author" content={`${username} - Watchdogs Team`} />
        <link rel="canonical" href={pageUrl} />
        <link rel="icon" href="/favicon.ico" />
        {/* Open Graph Tags */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={`View ${username}'s detailed profile in the Watchdogs.net Betting Contest. Track ROI, net profit, bets summary, best performances, and last bets. See rankings and stats for September 2025.`} />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content="https://watchdogs.net/og-profile.jpg" />
        <meta property="og:image:alt" content={`${username} Betting Contest Profile - Watchdogs.net`} />
        <meta property="og:site_name" content="Watchdogs.net" />
        {/* Structured Data: Person Schema for User Profile */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": username,
            "url": pageUrl,
            "description": `Betting contest profile for ${username} on Watchdogs.net. Includes performance metrics like ROI, net profit, and bet summary.`,
            "affiliation": {
              "@type": "Organization",
              "name": "Watchdogs.net"
            },
            "knowsAbout": "Sports Betting, Football Predictions, ROI Analysis",
            "sameAs": [
              `https://watchdogs.net/betting-contest-details/${paramUsername}`
            ],
            "mainEntityOfPage": {
              "@type": "WebPage",
              "name": pageTitle,
              "@id": pageUrl
            }
          })}
        </script>
      </Helmet>
      <div className="pt-[120px] bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header - Username only */}
          <div className="mb-1">
            <div className="text-3xl font-bold text-gray-800">
              {username}
            </div>
          </div>

          {/* User Meta Data */}
          <div className="mb-6 text-sm text-gray-500">
            Was online **{lastOnline}** | Registered **{registeredSince}**
          </div>
          
          {/* Main Content Area with Sidebar */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
            {/* Main Content */}
            <div className="md:col-span-8 lg:col-span-9">
              {/* Profile Picture and Dashboards */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
                {/* Profile Picture */}
                <div className="lg:col-span-2 flex justify-center lg:justify-start">
                  <div className="w-full max-w-[200px] aspect-square rounded-xl bg-pink-600 flex items-center justify-center shadow-lg overflow-hidden">
                    {profileImage ? (
                      <img src={profileImage} alt={`${username} profile`} className="w-full h-full object-cover p-4" />
                    ) : (
                      <span className="text-white text-6xl font-extrabold">{username[0]}</span>
                    )}
                  </div>
                </div>

                {/* Performance & Summary Dashboards */}
                <div className="lg:col-span-10 space-y-3">
                  
                  {/* Performance Dashboard */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                    {performanceDashboard.map((item) => (
                      <SummaryBox 
                        key={item.label} 
                        {...getBoxProps(item, 'performance')}
                      />
                    ))}
                  </div>

                  {/* Bet Summary Dashboard */}
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                    {betSummaryDashboard.map((item) => (
                      <SummaryBox 
                        key={item.label}
                        {...getBoxProps(item, 'summary')}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Best Performances and Last Bets */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Best Performances */}
                <div className="lg:col-span-5">
                  <h3 className="text-sm font-semibold text-gray-700 mb-3 border-b-2 border-gray-200 pb-1">
                    {bestPerformances.title}
                  </h3>
                  <div className="p-4 rounded-lg bg-white shadow-md min-h-[180px] flex items-center border border-gray-200">
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {bestPerformances.message}
                    </p>
                  </div>
                </div>

                {/* Last Bets Graphic */}
                <div className="lg:col-span-7">
                  <h3 className="text-sm font-semibold text-gray-700 mb-3 border-b-2 border-gray-200 pb-1">
                    {lastBetsGraphic.title}
                  </h3>
                  <div className="p-4 rounded-lg bg-white shadow-md min-h-[180px] flex flex-col justify-between border border-gray-200">
                    <div className="flex h-24 space-x-1 items-end pt-4">
                      {lastBetsGraphic.data.map((bar, index) => (
                        <div
                          key={index}
                          style={{ height: `${(bar.value / 20) * 100}%` }}
                          className={`w-1/4 rounded-t-sm ${bar.color === 'green' ? 'bg-green-600' : 'bg-red-600'} transition-all duration-500`}
                        />
                      ))}
                    </div>
                    <p className="text-xs text-gray-400 mt-4 self-end">
                      {lastBetsGraphic.hoverInstruction}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
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
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 flex items-center justify-center">
                            <span className="text-2xl font-bold">{user.position}</span>
                          </div>
                          <div className="w-10 h-10">
                            <img src={'/placeholder-logo.jpg'} alt="User Flag" className="w-full h-full object-contain rounded-full" />
                          </div>
                          <div>
                            <div className="font-medium text-sm">{user.username}</div>
                            {user.country && (
                              <div className="text-xs opacity-75 flex items-center space-x-1">
                                <span className="text-xs opacity-75">{user.country}</span>
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
          
          {/* Full Leaderboard */}
          <div className="mt-12 pt-6 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {bettingContestDetail.contestMetadata.subtitle}
            </h2>
            <div className="overflow-x-auto rounded-lg shadow-md">
              <table className="min-w-full bg-white">
                <thead>
                  <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-3 px-6 text-left">Rank</th>
                    <th className="py-3 px-6 text-left">Username</th>
                    <th className="py-3 px-6 text-center">Points</th>
                    <th className="py-3 px-6 text-center">Country</th>
                    <th className="py-3 px-6 text-center">Prize</th>
                  </tr>
                </thead>
                <tbody className="text-gray-800 text-sm font-light">
                  {bettingContestDetail.fullRanking.map((rank) => (
                    <tr key={rank.position} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="py-3 px-6 text-left whitespace-nowrap font-medium">{rank.position}</td>
                      <td className="py-3 px-6 text-left font-semibold">{rank.username}</td>
                      <td className="py-3 px-6 text-center">{rank.points}</td>
                      <td className="py-3 px-6 text-center">{rank.country || 'N/A'}</td>
                      <td className="py-3 px-6 text-center text-green-600 font-bold">{rank.prize}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BettingContestDetailsPage;