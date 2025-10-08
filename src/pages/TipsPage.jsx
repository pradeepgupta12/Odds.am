

import React, { useState, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { TipsData } from '../data/TipsData';
import { ChevronRight, ChevronDown, HelpCircle } from 'lucide-react';
import league from '../data/league';
import { FaFootballBall } from 'react-icons/fa';
import LiveScoreSection from '../pages/LiveScoreSection';
import EventsAndTables from '../pages/EventsAndTables';

// --- Helper Components ---

// Renders the image or a placeholder if the URL is invalid
const ImagePlaceholder = ({ src, alt, className = 'w-6 h-6 rounded-full' }) => {
  const isValidUrl = src && src.trim() !== '' && !src.includes('<image_url_');
  
  return isValidUrl ? (
    <img src={src} alt={alt || 'Image'} className={`object-cover ${className}`} onError={(e) => (e.target.style.display = 'none')} />
  ) : (
    <div className={`flex items-center justify-center bg-gray-300 text-gray-600 font-bold text-xs ${className}`}>
      {alt ? alt.substring(0, 2).toUpperCase() : '?'}
    </div>
  );
};

// Renders the tipster avatar or a placeholder
const TipsterAvatar = ({ url, name }) => (
  <ImagePlaceholder 
    src={url} 
    alt={name} 
    className="w-10 h-10 rounded-full border-2 border-gray-200" 
  />
);

// Renders the team logo or a placeholder
const TeamLogo = ({ url, name }) => (
  <ImagePlaceholder 
    src={url} 
    alt={name} 
    className="w-6 h-6 rounded-none" 
  />
);

// --- Main Sections ---

const TipstersRating = ({ data }) => {
  if (!data || !data.tipsters) return <div className="text-red-600 mb-8">No tipster data available</div>;

  const getHitRateColor = (color) => {
    const validColors = ['bg-green-500', 'bg-yellow-500', 'bg-red-500', 'bg-gray-500'];
    return validColors.includes(color) ? color : 'bg-gray-500';
  };

  return (
    <section className="mb-8">
      <div className="flex flex-wrap justify-between items-center mb-4 pb-3 border-b-2 border-red-500">
        <h2 className="text-red-600 font-bold text-base md:text-lg flex items-center">
          <ChevronRight className="w-5 h-5 mr-1" />
          {data.title || 'CURRENT MONTH\'S TIPSTERS RATING'}
        </h2>
      </div>

      {/* Rating Table Header */}
      <div className="grid grid-cols-12 gap-2 text-xs font-semibold text-gray-600 bg-gray-50 py-3 px-3 border-b border-gray-300">
        <div className="col-span-1">Place</div>
        <div className="col-span-5 md:col-span-3">Tipster</div>
        <div className="hidden md:block md:col-span-2">Total Bets <HelpCircle className="w-3 h-3 inline ml-1" /></div>
        <div className="hidden md:block md:col-span-2">Average Odd</div>
        <div className="col-span-3 md:col-span-2">Hit Rate</div>
        <div className="col-span-3 md:col-span-2">Last Tips</div>
      </div>

      {/* Rating Table Rows */}
      {data.tipsters.map((tipster, index) => (
        <div key={index} className="grid grid-cols-12 gap-2 items-center py-4 px-3 border-b border-gray-200 hover:bg-gray-50 transition-colors">
          <div className="col-span-1 font-bold text-gray-800 text-lg">{tipster.place || 'N/A'}</div>
          
          <div className="col-span-5 md:col-span-3 flex items-center gap-3">
            <TipsterAvatar url={tipster.avatar_url} name={tipster.name} />
            <div className="flex flex-col">
              <a href="#" className="text-gray-800 hover:text-red-600 font-semibold text-sm" aria-label={`View profile of ${tipster.name || 'Unknown Tipster'}`}>
                {tipster.name || 'Unknown Tipster'}
              </a>
              <span className="text-xs text-gray-500 flex items-center">
                <span className="mr-1">🇷🇺</span>
                {tipster.location || 'N/A'}
              </span>
            </div>
          </div>
          
          <div className="hidden md:block md:col-span-2 text-sm font-semibold">
            <span className="text-green-600">{tipster.total_bets?.split('-')[0]?.trim() || '0'}</span>
            <span className="text-gray-400 mx-1">-</span>
            <span className="text-gray-600">{tipster.total_bets?.split('-')[1]?.trim() || '0'}</span>
            <span className="text-gray-400 mx-1">-</span>
            <span className="text-red-600">{tipster.total_bets?.split('-')[2]?.trim() || '0'}</span>
          </div>
          
          <div className="hidden md:block md:col-span-2 text-sm font-semibold text-gray-700">{tipster.average_odd || '0.0'}</div>
          
          <div className="col-span-3 md:col-span-2">
            <span className={`px-3 py-1 rounded text-white font-bold text-sm ${getHitRateColor(tipster.hit_rate_color)}`}>
              {tipster.hit_rate || 'N/A'}
            </span>
          </div>
          
          <div className="col-span-3 md:col-span-2 flex items-center gap-1">
            {(tipster.last_tips_trend || '').split('').map((char, i) => (
              <span key={i} className={char === '>' ? 'text-green-500 text-2xl font-bold' : 'text-red-500 text-2xl font-bold'}>
                {char === '>' ? '›' : '‹'}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

const UpcomingTips = ({ data }) => {
  const [showAll, setShowAll] = React.useState(false);

  if (!data || !data.tips) return <div className="text-red-600 mb-8">No upcoming tips available</div>;

  const visibleTips = showAll ? data.tips : data.tips.slice(0, 3);

  return (
    <section className="mb-8">
      <div className="flex items-center text-red-600 font-bold text-base md:text-lg mb-4 pb-3 border-b-2 border-red-500">
        <ChevronRight className="w-5 h-5 mr-1" />
        <h2>{data.title || 'UPCOMING TIPS'}</h2>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-12 gap-2 text-xs font-semibold text-gray-600 bg-gray-50 py-3 px-3 border-b border-gray-300">
        <div className="col-span-5 md:col-span-4">Match</div>
        <div className="col-span-3 md:col-span-2 flex items-center">
          Tip <ChevronDown className="w-3 h-3 ml-1" />
        </div>
        <div className="hidden md:block md:col-span-3">Author <ChevronDown className="w-3 h-3 ml-1 inline" /></div>
        <div className="col-span-4 md:col-span-3">Starts in <ChevronDown className="w-3 h-3 ml-1 inline" /></div>
      </div>

      {/* Tips Rows */}
      {visibleTips.map((tip, index) => (
        <div key={index} className="grid grid-cols-12 gap-2 items-center py-4 px-3 border-b border-gray-200 hover:bg-gray-50 transition-colors">
          <div className="col-span-5 md:col-span-4 flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <TeamLogo url={tip.team_logo_kairat || tip.team_logo_pafos || tip.team_logo_saint_gilloise || tip.team_logo_barcelona || tip.team_logo_monaco || tip.team_logo_arsenal} name={tip.match?.split(' - ')[0]} />
              <TeamLogo url={tip.team_logo_real_madrid || tip.team_logo_bayern_munich || tip.team_logo_newcastle || tip.team_logo_psg || tip.team_logo_manchester_city || tip.team_logo_olympiacos} name={tip.match?.split(' - ')[1]} />
              <span className="text-gray-800 font-semibold text-sm">{tip.match || 'Unknown Match'}</span>
            </div>
            <span className="text-xs text-gray-500 flex items-center ml-12">
              <span className="mr-1">⚽</span>
              {tip.tournament || 'N/A'}
            </span>
          </div>
          
          <div className="col-span-3 md:col-span-2 flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="bg-red-600 text-white px-2 py-1 text-xs font-bold rounded">{tip.tip_odd || 'N/A'}</span>
              <span className="text-green-600 font-bold text-lg">+</span>
            </div>
            <span className="text-xs text-gray-700 font-medium">{tip.tip_type || 'N/A'}</span>
          </div>
          
          <div className="hidden md:flex md:col-span-3 items-center gap-2">
            <TipsterAvatar url={tip.author_avatar_url} name={tip.author} />
            <a href="#" className="text-gray-800 hover:text-red-600 font-semibold text-sm" aria-label={`View profile of ${tip.author || 'Unknown Author'}`}>
              {tip.author || 'Unknown Author'}
            </a>
          </div>
          
          <div className="col-span-4 md:col-span-3 text-sm font-semibold text-gray-700">{tip.starts_in || 'N/A'}</div>
        </div>
      ))}

      {!showAll && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setShowAll(true)}
            className="px-8 py-2 bg-gray-200 text-gray-700 font-semibold text-sm hover:bg-gray-300 transition-colors rounded cursor-pointer"
            aria-label="Show more upcoming tips"
          >
            Show More
          </button>
        </div>
      )}
    </section>
  );
};

const ArchivedTips = ({ data }) => {
  if (!data || !data.tips) return <div className="text-red-600">No archived tips available</div>;

  return (
    <section>
      <div className="flex items-center text-red-600 font-bold text-base md:text-lg mb-4 pb-3 border-b-2 border-red-500">
        <ChevronRight className="w-5 h-5 mr-1" />
        <h2>{data.title || 'ARCHIVED TIPS'}</h2>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-12 gap-2 text-xs font-semibold text-gray-600 bg-gray-50 py-3 px-3 border-b border-gray-300">
        <div className="col-span-2 md:col-span-1">Score</div>
        <div className="col-span-4 md:col-span-4">Match</div>
        <div className="col-span-3 md:col-span-2 flex items-center">
          Tip <ChevronDown className="w-3 h-3 ml-1" />
        </div>
        <div className="hidden md:block md:col-span-3">Author <ChevronDown className="w-3 h-3 ml-1 inline" /></div>
        <div className="col-span-3 md:col-span-2">Outcome <ChevronDown className="w-3 h-3 ml-1 inline" /></div>
      </div>

      {/* Tips Rows */}
      {data.tips.map((tip, index) => (
        <div key={index} className="grid grid-cols-12 gap-2 items-center py-4 px-3 border-b border-gray-200 hover:bg-gray-50 transition-colors">
          <div className="col-span-2 md:col-span-1 flex flex-col items-center">
            <span className="text-green-600 font-bold text-base">{tip.score || 'N/A'}</span>
            <span className="text-xs text-gray-500">({tip.half_time_score || 'N/A'})</span>
          </div>
          
          <div className="col-span-4 md:col-span-4 flex flex-col gap-1">
            <span className="text-xs text-gray-500 flex items-center">
              <span className="mr-1">⚽</span>
              {tip.league || 'N/A'}
            </span>
            <div className="flex items-center gap-2">
              <TeamLogo url={tip.match_logo_geno || tip.match_logo_parma || tip.match_logo_milan} name={tip.match?.split(' - ')[0]} />
              <TeamLogo url={tip.match_logo_lazio || tip.match_logo_torino || tip.match_logo_napoli} name={tip.match?.split(' - ')[1]} />
              <span className="text-gray-800 font-semibold text-sm">{tip.match || 'Unknown Match'}</span>
            </div>
          </div>
          
          <div className="col-span-3 md:col-span-2 flex flex-col gap-1">
            <span className="bg-red-600 text-white px-2 py-1 text-xs font-bold rounded self-start">{tip.tip_odd || 'N/A'}</span>
            <span className="text-xs text-gray-700 font-medium">{tip.tip_type || 'N/A'}</span>
          </div>
          
          <div className="hidden md:flex md:col-span-3 items-center gap-2">
            <TipsterAvatar url={tip.author_avatar_url} name={tip.author} />
            <a href="#" className="text-gray-800 hover:text-red-600 font-semibold text-sm" aria-label={`View profile of ${tip.author || 'Unknown Author'}`}>
              {tip.author || 'Unknown Author'}
            </a>
          </div>
          
          <div className="col-span-3 md:col-span-2 flex flex-col">
            <span className="text-green-600 font-bold text-sm">{tip.outcome?.split(' ')[0] || 'N/A'}</span>
            <span className="text-xs text-gray-500">{tip.outcome?.split(' ')[1]?.replace(/[()]/g, '') || ''}</span>
          </div>
        </div>
      ))}
    </section>
  );
};

// --- Main Component ---
const TipsPage = () => {
  const navigate = useNavigate();
  const data = TipsData;

  const handleBettingContestUserClick = (username) => {
    navigate(`/betting-contest-details/${encodeURIComponent(username)}`);
  };

  if (!data || !data.rating_section || !data.upcoming_tips_section || !data.archived_tips_section) {
    return <div className="text-red-600 text-center p-4">Error: No data available</div>;
  }

  return (
    <Fragment>
      <Helmet>
        <html lang="en" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Betting Tips - Expert Tipsters Ratings & Upcoming Tips | Watchdogs.net</title>
        <meta name="description" content="Access expert betting tips, tipsters ratings, upcoming tips, and archived results on Watchdogs.net. Find reliable predictions for football and more sports." />
        <meta name="keywords" content="betting tips, tipsters ratings, upcoming tips, archived tips, football predictions, sports betting" />
        <meta name="author" content="Watchdogs Team" />
        <link rel="canonical" href="https://watchdogs.net/tips" />
        <link rel="icon" href="/favicon.ico" />
        {/* Open Graph Tags */}
        <meta property="og:title" content="Betting Tips - Expert Tipsters Ratings & Upcoming Tips | Watchdogs.net" />
        <meta property="og:description" content="Access expert betting tips, tipsters ratings, upcoming tips, and archived results on Watchdogs.net." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://watchdogs.net/tips" />
        <meta property="og:image" content="https://watchdogs.net/og-tips.jpg" />
        <meta property="og:image:alt" content="Betting Tips - Watchdogs.net" />
        <meta property="og:site_name" content="Watchdogs.net" />
        {/* Structured Data: WebPage with ItemList for Tips */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Betting Tips",
            "url": "https://watchdogs.net/tips",
            "description": "Expert betting tips and tipsters ratings for sports betting.",
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
              "name": "Betting Tips",
              "itemListElement": TipsData?.rating_section?.tipsters?.slice(0, 5).map((tipster, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "name": tipster.name,
                "description": `Tipster ${tipster.name} with hit rate ${tipster.hit_rate}`,
                "url": `https://watchdogs.net/tips#tipster-${tipster.name.toLowerCase().replace(/\s+/g, '-')}`
              })) || []
            }
          })}
        </script>
      </Helmet>
      <div className="flex justify-center mt-33 w-full bg-white min-h-screen">
        <div className="w-full max-w-7xl p-4 md:p-6 lg:p-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
            {/* Main Content Area */}
            <div className="md:col-span-8 lg:col-span-9">
              <div className="text-sm text-gray-500 mb-6">
                <a href="#" className="hover:text-red-600" aria-label="Go to home page">Home</a> 
                <span className="mx-2">›</span> 
                <span className="font-semibold text-gray-800">{data.page_title || 'Tips'}</span>
              </div>
              <TipstersRating data={data.rating_section} />
              <UpcomingTips data={data.upcoming_tips_section} />
              <ArchivedTips data={data.archived_tips_section} />
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
    </Fragment>
  );
};

export default TipsPage;