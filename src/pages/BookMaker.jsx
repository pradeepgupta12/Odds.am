import React from 'react';
import bookmakerData from '../data/bookmakerData'; // BookmakerData.js फ़ाइल इम्पोर्ट करें

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, i) => (
        <span key={`full-${i}`} className="text-yellow-400 text-lg">★</span>
      ))}
      {hasHalfStar && <span className="text-yellow-400 text-lg">½</span>}
      {[...Array(emptyStars)].map((_, i) => (
        <span key={`empty-${i}`} className="text-gray-300 text-lg">★</span>
      ))}
    </div>
  );
};

const BookMaker = () => {
  const { page_title, top_free_bets, bookmaker_rating } = bookmakerData;

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
    <div className="container max-w-7xl mx-auto p-4 mt-32 md:p-8">
      <h1 className="text-xl md:text-2xl font-bold mb-6 text-gray-800 hidden">
        {page_title}
      </h1>
      {/* Top Free Bets Section */}
      <section className="mb-10">
        <h2 className="text-lg md:text-xl font-semibold mb-4 text-red-600 border-b-2 border-red-600 pb-2 flex items-center">
          <span className="mr-2 text-2xl">❯</span> TOP FREE BETS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {top_free_bets.map((bet, index) => (
            <div
              key={index}
              className="bg-gray-400 text-white rounded-lg shadow-lg p-4 flex flex-col items-center text-center min-h-[250px]"
            >
              <div className="mb-3">
                {renderLogo(bet.image_url, bet.bookmaker_name, 'h-14 w-auto')}
              </div>
              <p className="text-lg font-bold mb-1">{bet.offer_type}</p>
              <p className="text-2xl font-extrabold text-yellow-400 mb-2">
                {bet.bonus_amount || 'UP TO 40,000 INR'}
              </p>
              <p className="text-sm mb-3 flex-grow">{bet.offer_details}</p>
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-5 rounded-md uppercase text-sm transition duration-300 ease-in-out w-full">
                {bet.call_to_action}
              </button>
            </div>
          ))}
        </div>
      </section>
      {/* Bookmaker Rating Section */}
      <section>
        <h2 className="text-lg md:text-xl font-semibold mb-4 text-red-600 border-b-2 border-red-600 pb-2 flex items-center">
          <span className="mr-2 text-2xl">❯</span> BOOKMAKER RATING
        </h2>
        {/* Rating Table */}
        <div className="overflow-x-auto bg-white rounded-lg shadow-md">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Bookmaker
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rating
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">
                  Average Payout
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  &nbsp;
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {bookmaker_rating.table_data.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-10 h-10 mr-3">
                        {renderLogo(item.image_url, item.bookmaker_name, 'w-10 h-10')}
                      </div>
                      <div className="text-sm font-medium text-gray-900">
                        {item.bookmaker_name}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <StarRating rating={item.rating_stars} />
                      <a href="#" className="ml-3 text-blue-600 hover:underline text-xs">{item.review_link}</a>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 hidden sm:table-cell">
                    {item.average_payout}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex flex-col items-end">
                      <p className="text-xs text-gray-600 mb-2">{item.welcome_bonus}</p>
                      <button className={`py-2 px-4 rounded-md text-white font-semibold text-xs
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
  );
};

export default BookMaker;