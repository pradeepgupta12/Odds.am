

import React from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import bookmakerData from '../data/bookmakerData';
import league from '../data/league';
import LiveScoreSection from "../pages/LiveScoreSection";
import EventsAndTables from '../pages/EventsAndTables';

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, i) => (
        <span key={`full-${i}`} className="text-yellow-400 text-base sm:text-lg">★</span>
      ))}
      {hasHalfStar && <span className="text-yellow-400 text-base sm:text-lg">½</span>}
      {[...Array(emptyStars)].map((_, i) => (
        <span key={`empty-${i}`} className="text-gray-300 text-base sm:text-lg">★</span>
      ))}
    </div>
  );
};

const BookMaker = () => {
  const navigate = useNavigate();
  const { page_title, top_free_bets, bookmaker_rating } = bookmakerData;

  const handleBettingContestUserClick = (username) => {
    navigate(`/betting-contest-details/${encodeURIComponent(username)}`);
  };

  const renderLogo = (imageUrl, altText, sizeClass = 'h-10') => {
    return (
      <img
        src={imageUrl || "/images/placeholder-logo.png"}
        alt={altText}
        className={`${sizeClass} object-contain`}
        onError={(e) => { e.target.onerror = null; e.target.src = "/images/placeholder-logo.png"; }}
      />
    );
  };

  return (
    <>
      <Helmet>
        <html lang="en" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>BookMaker - Top Bookmakers, Free Bets & Ratings | Watchdogs.net</title>
        <meta name="description" content="Compare top bookmakers on Watchdogs.net. Explore free bets, welcome bonuses up to 40,000 INR, ratings, average payouts, and expert reviews for sports betting sites like Dafabet." />
        <meta name="keywords" content="bookmakers, free bets, sports betting sites, bookmaker ratings, welcome bonuses, Dafabet, betting offers, football odds comparison" />
        <meta name="author" content="Watchdogs Team" />
        <link rel="canonical" href="https://watchdogs.net/Book-maker" />
        <link rel="icon" href="/favicon.ico" />
        {/* Open Graph Tags */}
        <meta property="og:title" content="BookMaker - Top Bookmakers, Free Bets & Ratings | Watchdogs.net" />
        <meta property="og:description" content="Compare top bookmakers on Watchdogs.net. Explore free bets, welcome bonuses up to 40,000 INR, ratings, average payouts, and expert reviews for sports betting sites like Dafabet." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://watchdogs.net/Book-maker" />
        <meta property="og:image" content="https://watchdogs.net/og-bookmaker.jpg" />
        <meta property="og:image:alt" content="Top Bookmakers & Free Bets - Watchdogs.net" />
        <meta property="og:site_name" content="Watchdogs.net" />
        {/* Structured Data: WebPage with ItemList for Bookmakers */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "BookMaker - Top Bookmakers & Free Bets",
            "url": "https://watchdogs.net/Book-maker",
            "description": "Compare leading bookmakers with free bets, ratings, and bonuses for sports betting.",
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
              "name": "Top Bookmakers",
              "itemListElement": bookmaker_rating.table_data.slice(0, 5).map((item, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "name": item.bookmaker_name,
                "description": `${item.offer_type} - ${item.welcome_bonus}`,
                "image": item.image_url,
                "url": "https://watchdogs.net/review/" + item.bookmaker_name.toLowerCase().replace(/\s+/g, '-')
              }))
            }
          })}
        </script>
      </Helmet>
      <div className="min-h-screen bg-gray-100 mt-35">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-8 py-2 sm:py-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
            {/* Main Content Area */}
            <div className="md:col-span-8 lg:col-span-9">
              <h1 className="text-xl sm:text-2xl md:text-2xl font-bold mb-4 sm:mb-6 text-gray-800 hidden">
                {page_title}
              </h1>
              {/* Top Free Bets Section */}
              <section className="mb-6 sm:mb-8 md:mb-10">
                <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-3 sm:mb-4 text-red-600 border-b-2 border-red-600 pb-2 flex items-center">
                  <span className="mr-2 text-lg sm:text-xl md:text-2xl">❯</span> TOP FREE BETS
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                  {top_free_bets.map((bet, index) => (
                    <div
                      key={index}
                      className="bg-gray-400 text-white rounded-lg shadow-lg p-3 sm:p-4 flex flex-col items-center text-center min-h-[220px] sm:min-h-[250px]"
                    >
                      <div className="mb-2 sm:mb-3">
                        {renderLogo(bet.image_url, bet.bookmaker_name, 'h-12 sm:h-14 w-auto')}
                      </div>
                      <p className="text-base sm:text-lg font-bold mb-1">{bet.offer_type}</p>
                      <p className="text-lg sm:text-xl md:text-2xl font-extrabold text-yellow-400 mb-2">
                        {bet.bonus_amount || 'UP TO 40,000 INR'}
                      </p>
                      <p className="text-xs sm:text-sm mb-3 flex-grow">{bet.offer_details}</p>
                      <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-1.5 sm:py-2 px-4 sm:px-5 rounded-md uppercase text-xs sm:text-sm transition duration-300 ease-in-out w-full">
                        {bet.call_to_action}
                      </button>
                    </div>
                  ))}
                </div>
              </section>
              {/* Bookmaker Rating Section */}
              <section>
                <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-3 sm:mb-4 text-red-600 border-b-2 border-red-600 pb-2 flex items-center">
                  <span className="mr-2 text-lg sm:text-xl md:text-2xl">❯</span> BOOKMAKER RATING
                </h2>
                <div className="overflow-x-auto bg-white rounded-lg shadow-md">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Bookmaker
                        </th>
                        <th scope="col" className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Rating
                        </th>
                        <th scope="col" className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">
                          Average Payout
                        </th>
                        <th scope="col" className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          &nbsp;
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {bookmaker_rating.table_data.map((item, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 w-8 sm:w-10 h-8 sm:h-10 mr-2 sm:mr-3">
                                {renderLogo(item.image_url, item.bookmaker_name, 'w-8 sm:w-10 h-8 sm:h-10')}
                              </div>
                              <div className="text-xs sm:text-sm font-medium text-gray-900">
                                {item.bookmaker_name}
                              </div>
                            </div>
                          </td>
                          <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <StarRating rating={item.rating_stars} />
                              <a href="#" className="ml-2 sm:ml-3 text-blue-600 hover:underline text-xs">{item.review_link}</a>
                            </div>
                          </td>
                          <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-500 hidden sm:table-cell">
                            {item.average_payout}
                          </td>
                          <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-right text-sm font-medium">
                            <div className="flex flex-col items-end">
                              <p className="text-xs text-gray-600 mb-2">{item.welcome_bonus}</p>
                              <button className={`py-1.5 sm:py-2 px-3 sm:px-4 rounded-md text-white font-semibold text-xs
                                ${item.call_to_action === 'CLAIM NOW!' ? 'bg-red-600 hover:bg-red-700' : 'bg-orange-500 hover:bg-orange-600'}`}>
                                {item.call_to_action}
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
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
                      <div 
                        key={index} 
                        className="flex items-center justify-between py-2 sm:py-3 border-b border-teal-500/30 last:border-b-0 hover:text-blue-900 cursor-pointer transition-colors" 
                        onClick={() => handleBettingContestUserClick(user.username)}
                      >
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

export default BookMaker;