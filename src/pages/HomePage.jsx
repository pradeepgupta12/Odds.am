

import React, { useState, useEffect } from 'react';
import oddshome from '../data/oddshome';
import league from '../data/league';
import { FaFootballBall } from 'react-icons/fa';
import offersData from '../data/offersData';
import recommendOdds from '../data/recommendOdds';
import topsureBets from '../data/topsureBets';
import LiveScoreSection from "../pages/LiveScoreSection";
import EventsAndTables from './EventsAndTables';

const HomePage = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: oddshome.matches[0].countdown.hours,
    minutes: oddshome.matches[0].countdown.minutes,
    seconds: oddshome.matches[0].countdown.seconds
  });
  const [currentMatchIndex, setCurrentMatchIndex] = useState(0);
  const [selectedOffer, setSelectedOffer] = useState(offersData.offers.find(offer => offer.name === 'Dafabet')); // Default to Dafabet
  const [selectedSport, setSelectedSport] = useState('Football');

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        let { hours, minutes, seconds } = prevTime;
      
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          const nextIndex = (currentMatchIndex + 1) % oddshome.matches.length;
          setCurrentMatchIndex(nextIndex);
          return {
            hours: oddshome.matches[nextIndex].countdown.hours,
            minutes: oddshome.matches[nextIndex].countdown.minutes,
            seconds: oddshome.matches[nextIndex].countdown.seconds
          };
        }
        return { hours, minutes, seconds };
      });
    }, 1000);
    const matchInterval = setInterval(() => {
      const nextIndex = (currentMatchIndex + 1) % oddshome.matches.length;
      setCurrentMatchIndex(nextIndex);
      setTimeLeft({
        hours: oddshome.matches[nextIndex].countdown.hours,
        minutes: oddshome.matches[nextIndex].countdown.minutes,
        seconds: oddshome.matches[nextIndex].countdown.seconds
      });
    }, 10000);
    return () => {
      clearInterval(timer);
      clearInterval(matchInterval);
    };
  }, [currentMatchIndex]);

  const currentMatch = oddshome.matches[currentMatchIndex];

  return (
    <div className="min-h-screen pt-[120px]">
      <div className="max-w-7xl mx-auto px-4 py-10 md:py-10 min-h-screen">
        <div className="grid grid-cols-1 2xl:grid-cols-12 gap-6 min-h-screen overflow-visible">
          {/* Main Content Area */}
          <div className="2xl:col-span-9">
            {/* Main Match Card */}
            <div className="relative bg-transparent rounded-lg overflow-hidden shadow-xl mb-6 h-auto min-h-[300px] md:h-96">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${currentMatch.background_image})`, backgroundSize: 'cover' }}
              ></div>
              <div className="absolute inset-0 bg-black/30"></div>
            
              <div className="relative z-10 p-4 sm:p-6 md:p-8 h-full flex flex-col justify-between">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                  <div className="text-white mb-4 md:mb-0">
                    <div className="text-right md:text-left mb-2">
                      <span className="bg-black/30 px-3 py-1 rounded text-xs sm:text-sm font-medium">
                        {currentMatch.teams}. {currentMatch.competition}. {currentMatch.matchday}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-end flex-grow">
                  <div className="text-white">
                    <div className="mb-4">
                      <span className="text-sm sm:text-lg md:text-xl font-medium">Match starts in </span>
                      <div className="inline-flex items-baseline space-x-1">
                        <span className="text-3xl sm:text-4xl md:text-6xl font-bold">{timeLeft.hours}</span>
                        <span className="text-xl sm:text-2xl md:text-3xl font-medium">H.</span>
                        <span className="text-3xl sm:text-4xl md:text-6xl font-bold">{timeLeft.minutes}</span>
                        <span className="text-xl sm:text-2xl md:text-3xl font-medium">M.</span>
                        <span className="text-3xl sm:text-4xl md:text-6xl font-bold">{timeLeft.seconds}</span>
                        <span className="text-xl sm:text-2xl md:text-3xl font-medium">S.</span>
                      </div>
                    </div>
                    <p className="text-sm sm:text-lg md:text-xl font-medium">{currentMatch.prediction}</p>
                  </div>
                  <div className="flex flex-wrap gap-3 justify-center lg:justify-end">
                    {currentMatch.odds.map((odd, index) => (
                      <div key={index} className="text-center">
                        <div className="bg-red-700 text-white px-2 sm:px-4 py-2 rounded-t font-bold text-lg sm:text-xl min-w-[50px] sm:min-w-[60px]">
                          {odd.result}
                        </div>
                        <div className="bg-white text-red-700 px-2 sm:px-4 py-2 font-bold text-lg sm:text-xl border-x border-gray-200">
                          {odd.value}
                        </div>
                        <div className="bg-gray-800 text-white px-2 py-1 text-xs font-semibold rounded-b uppercase">
                          {odd.bookmaker}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute right-4 bottom-0 hidden md:block opacity-20">
                <div className="w-32 h-48 bg-gradient-to-t from-black/50 to-transparent rounded-t-full"></div>
              </div>
            </div>
            {/* Other Matches */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Other Matches</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {oddshome.other_matches.map((match, index) => (
                  <div key={index} className="flex items-center space-x-2 p-3 hover:bg-gray-50 rounded-lg transition-colors border border-gray-200">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-gray-800 font-medium text-sm uppercase tracking-wide">{match}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Competition Tabs */}
            <div className="flex flex-wrap gap-4 mb-6">
              {league.competitions.map((competition, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-sm border hover:shadow-md transition-shadow cursor-pointer"
                >
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                    <img src={competition.icon} alt={`${competition.name} Logo`} className="w-full h-full object-cover-contain rounded-full" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{competition.name}</span>
                  <button className="w-5 h-5 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300">
                    <FaFootballBall className="text-sm" />
                  </button>
                </div>
              ))}
            </div>
            {/* Matches Table */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-12 gap-4 px-4 py-3 bg-gray-50 border-b text-xs sm:text-sm font-medium text-gray-600">
                <div className="col-span-2 sm:col-span-1">Time</div>
                <div className="col-span-6">Match</div>
                <div className="col-span-1 text-center">1</div>
                <div className="col-span-1 text-center">X</div>
                <div className="col-span-1 text-center">2</div>
                <div className="col-span-1 sm:col-span-2"></div>
              </div>
              {league.matches.map((match, index) => (
                <div
                  key={index}
                  className="grid grid-cols-12 gap-4 px-4 py-3 border-b hover:bg-gray-50 transition-colors"
                >
                  <div className="col-span-2 sm:col-span-1 text-xs sm:text-sm text-gray-600 font-medium">
                    {match.time}
                  </div>
                  <div className="col-span-6">
                    <div className="flex items-center space-x-3 sm:space-x-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 hidden sm:block">
                          <img
                            src={match.home_logo}
                            alt="Home Logo"
                            className="w-full h-full object-cover-contain rounded-full"
                          />
                        </div>
                        <div className="w-6 h-6 hidden sm:block">
                          <img
                            src={match.away_logo}
                            alt="Away Logo"
                            className="w-full h-full object-cover-contain rounded-full"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-medium text-xs sm:text-sm text-gray-900">
                          {match.teams}
                        </div>
                        <div className="flex items-center space-x-2 text-xs text-gray-500">
                          <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
                          <span>{match.competition}. {match.matchday}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1 text-center">
                    <span className="text-xs sm:text-sm font-bold text-blue-600">
                      {match.odds['1']}
                    </span>
                  </div>
                  <div className="col-span-1 text-center">
                    <span className="text-xs sm:text-sm font-bold text-blue-600">
                      {match.odds['X']}
                    </span>
                  </div>
                  <div className="col-span-1 text-center">
                    <span className="text-xs sm:text-sm font-bold text-blue-600">
                      {match.odds['2']}
                    </span>
                  </div>
                  <div className="col-span-1 sm:col-span-2 flex items-center justify-end"></div>
                </div>
              ))}
            </div>
            {/* Hot Offers Section */}
            <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
              <h3 className="text-xl font-bold mb-4 text-gray-800">🔥 Today's Hot Offers</h3>
              <div className="mb-4">
                <div className="bg-gray-200 max-w-5xl mx-auto px-4 py-2 rounded">
                  {offersData.offers.map((offer, index) => (
                    <span
                      key={index}
                      className="cursor-pointer text-blue-600 font-semibold hover:underline"
                      onClick={() => setSelectedOffer(offer)}
                    >
                      {offer.name}
                      {index < offersData.offers.length - 1 && " / "}
                    </span>
                  ))}
                </div>
              </div>
              {/* Single card that updates on click */}
              <div className="p-4 bg-white border border-gray-300 rounded-lg shadow-md">
                <div className="flex items-start">
                  <img
                    src={selectedOffer.logo}
                    alt={`${selectedOffer.name} Logo`}
                    className="w-32 h-32 object-contain rounded-lg mr-6"
                  />
                  <p className="text-sm text-gray-600 leading-relaxed">{selectedOffer.description}</p>
                </div>
              </div>
            </div>
            {/* Recommended Odds Section */}
            <div className="bg-white rounded-lg shadow-lg mt-6 overflow-hidden">
              {/* Header */}
              <div className="bg-gray-100 px-4 py-3">
                <h3 className="text-lg font-bold text-gray-800">
                  <span className="text-red-600">▶</span> RECOMMENDED ODDS
                </h3>
              </div>
              {/* Table Header */}
              <div className="grid grid-cols-12 gap-2 sm:gap-4 px-4 py-3 bg-gray-50 border-b text-xs sm:text-sm font-medium text-gray-500 uppercase">
                <div className="col-span-6 sm:col-span-3">Match</div>
                <div className="col-span-6 sm:col-span-3 text-center">Recommended Odd ▲</div>
                <div className="hidden sm:block sm:col-span-3 text-center">Bookmaker ▲</div>
                <div className="hidden sm:block sm:col-span-3 text-center">Starts In ▲</div>
              </div>
              {/* Table Rows */}
              {recommendOdds.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-12 gap-2 sm:gap-4 px-4 py-4 border-b hover:bg-gray-50 transition-colors items-center"
                >
                  {/* Match Column */}
                  <div className="col-span-6 sm:col-span-3">
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-1">
                        <div className="w-6 h-6 flex-shrink-0">
                          <img
                            src={item.matchLogos?.[0] || '/placeholder-logo.jpg'}
                            alt="Team 1 Logo"
                            className="w-full h-full object-contain rounded-full"
                          />
                        </div>
                        <div className="w-6 h-6 flex-shrink-0">
                          <img
                            src={item.matchLogos?.[1] || '/placeholder-logo.jpg'}
                            alt="Team 2 Logo"
                            className="w-full h-full object-contain rounded-full"
                          />
                        </div>
                      </div>
                      <div className="min-w-0">
                        <div className="font-medium text-xs sm:text-sm text-gray-900 truncate">
                          {item.match}
                        </div>
                        <div className="flex items-center space-x-1 text-xs text-gray-500">
                          <div className="w-3 h-3 bg-gray-300 rounded-full flex-shrink-0"></div>
                          <span className="truncate">{item.competition}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Recommended Odd Column */}
                  <div className="col-span-6 sm:col-span-3 text-center">
                    <div className="flex items-center justify-center space-x-2">
                      <div className="bg-red-600 text-white px-2 py-1 rounded text-sm font-bold min-w-[40px]">
                        {item.recommendedOdd.value}
                      </div>
                      <div className="bg-green-600 text-white px-2 py-1 rounded text-xs font-medium">
                        +
                      </div>
                    </div>
                    <div className="text-xs text-gray-600 mt-1 truncate">
                      {item.recommendedOdd.type}
                    </div>
                  </div>
                  {/* Bookmaker Column */}
                  <div className="hidden sm:block sm:col-span-3 text-center">
                    <div className="flex flex-col items-center space-y-1">
                      <div className="w-12 h-6 flex-shrink-0 flex justify-center">
                        <img
                          src={item.bookmaker?.logo || '/placeholder-logo.jpg'}
                          alt={`${item.bookmaker?.name || 'Bookmaker'} Logo`}
                          className="w-full h-full object-contain rounded"
                        />
                      </div>
                      <div className="text-sm font-bold text-gray-900">
                        {item.bookmaker.odd}
                      </div>
                    </div>
                  </div>
                  {/* Starts In Column */}
                  <div className="hidden sm:block sm:col-span-3 text-center text-xs sm:text-sm text-gray-600">
                    <div className="font-medium">
                      {item.startsIn.split(' ').map((word, i) => (
                        <div key={i} className="leading-tight">
                          {word}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Top Sure Bets Section */}
            <div className="bg-white rounded-lg shadow-lg mt-6 overflow-hidden">
              {/* Header */}
              <div className="bg-gray-100 px-4 py-3">
                <h3 className="text-lg font-bold text-gray-800">
                  <span className="text-red-600">▶</span> TOP SURE BETS
                </h3>
              </div>
              {/* Sport Tabs */}
              <div className="bg-gray-600 px-4 py-2 overflow-x-auto">
                <div className="flex space-x-1 min-w-max">
                  {Object.keys(topsureBets).map((sport, index) => (
                    <button
                      key={sport}
                      onClick={() => setSelectedSport(sport)}
                      className={`px-3 py-1 text-sm font-medium rounded transition-colors whitespace-nowrap ${
                        selectedSport === sport ? 'bg-red-600 text-white' : 'text-gray-200 hover:bg-gray-500'
                      }`}
                    >
                      {sport}
                    </button>
                  ))}
                  
                </div>
              </div>
              {/* Table Container with Horizontal Scroll for Mobile */}
              <div className="overflow-x-auto sm:overflow-x-visible">
                <div className="min-w-[600px]">
                  {/* Table Header */}
                  <div className="grid grid-cols-12 gap-2 sm:gap-4 px-4 py-3 bg-gray-50 border-b text-xs sm:text-sm font-medium text-gray-500 uppercase">
                    <div className="col-span-4 sm:col-span-3">Date & Time ▲</div>
                    <div className="col-span-4 sm:col-span-3 text-center">Type of Bet ▲</div>
                    <div className="col-span-4 sm:col-span-4 text-center"></div>
                    <div className="hidden sm:block sm:col-span-2 text-center">Return ▼</div>
                  </div>
                  {/* Table Rows */}
                  {topsureBets[selectedSport]?.map((bet, index) => {
                    const date = new Date(bet.dateTime);
                    const timeString = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                    const dateString = date.toDateString().includes(new Date().toDateString()) ? 'Today' : date.toLocaleDateString();
                    return (
                      <div
                        key={bet.id}
                        className="grid grid-cols-12 gap-2 sm:gap-4 px-4 py-4 border-b hover:bg-gray-50 transition-colors items-center"
                      >
                        {/* Date & Time + Teams Column */}
                        <div className="col-span-4 sm:col-span-3">
                          <div className="text-xs sm:text-sm font-medium text-gray-900 mb-1">
                            {dateString}, {timeString}
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="flex items-center space-x-1">
                              <div className="w-5 h-5 flex-shrink-0">
                                <img
                                  src={bet.homeLogo || '/placeholder-logo.jpg'}
                                  alt="Home Team Logo"
                                  className="w-full h-full object-contain rounded-full"
                                />
                              </div>
                              <div className="w-5 h-5 flex-shrink-0">
                                <img
                                  src={bet.awayLogo || '/placeholder-logo.jpg'}
                                  alt="Away Team Logo"
                                  className="w-full h-full object-contain rounded-full"
                                />
                              </div>
                            </div>
                            <div className="min-w-0">
                              <div className="text-xs text-gray-700 truncate">
                                {bet.homeTeam} – {bet.awayTeam}
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Type of Bet Column */}
                        <div className="col-span-4 sm:col-span-3 text-center">
                          <div className="text-xs sm:text-sm font-medium text-gray-900">
                            {bet.typeOfBet}
                          </div>
                        </div>
                        {/* Bookmakers Column */}
                        <div className="col-span-4 sm:col-span-4">
                          <div className="flex justify-center sm:justify-start items-center space-x-1 sm:space-x-2">
                            {bet.bookmakers.map((bookmaker, bmIndex) => (
                              <div key={bmIndex} className="flex items-center space-x-1">
                                <div className="w-10 h-10 flex-shrink-0">
                                  <img
                                    src={bookmaker.logo || '/placeholder-logo.jpg'}
                                    alt={`${bookmaker.name} Logo`}
                                    className="w-full h-full object-contain rounded-full"
                                  />
                                </div>
                                <div className="text-xs sm:text-sm font-bold text-gray-900">
                                  {bookmaker.odds}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        {/* Return Column */}
                        <div className="hidden sm:block sm:col-span-2 text-center">
                          <div className="bg-red-600 text-white px-2 py-1 rounded text-xs font-bold inline-block">
                            {bet.returnPercent}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          {/* Right Sidebar */}
          <div className="2xl:col-span-3 min-h-screen h-full">
            <div className="sticky top-[10px] space-y-6">
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
              <div className="bg-teal-600 rounded-lg text-white overflow-hidden shadow-lg text-sm leading-tight">
                <div className="bg-teal-700 px-6 py-4 text-center">
                  <div className="w-10 h-10 mx-auto mb-2">
                    <img src="/contest-logo.jpg" alt="Contest Logo" className="w-full h-full object-contain rounded-full" />
                  </div>
                  <h3 className="font-bold text-lg">{league.betting_contest.title}</h3>
                  <p className="text-sm opacity-90">{league.betting_contest.subtitle}</p>
                </div>
                <div className="p-3">
                  {league.betting_contest.ranking.map((user, index) => (
                    <div key={index} className="flex items-center justify-between py-3 border-b border-teal-500/30 last:border-b-0">
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
                  <button className="bg-white text-teal-700 font-bold py-2 px-6 rounded hover:bg-gray-100 transition-colors">
                    {league.betting_contest.signup}
                  </button>
                </div>
              </div>

              <LiveScoreSection/>
              <EventsAndTables/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;