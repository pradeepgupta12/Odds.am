import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-700 py-Link px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* MAIN PAGES */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-semibold text-white uppercase mb-4">
              MAIN PAGES
            </h3>
            <ul className="space-y-2">
              <li><Link  to="/live-odds" className="text-sm text-white hover:text-gray-900">Live Odds</Link></li>
              <li><Link  to="/Upcoming-match" className="text-sm text-white hover:text-gray-900">Upcoming Matches</Link></li>
              <li><Link  to="/Betting-contest" className="text-sm text-white hover:text-gray-900">Betting Contest</Link></li>
              <li><Link  to="/Sure-bets" className="text-sm text-white hover:text-gray-900">Sure Bets</Link></li>
              <li><Link to="/Book-maker" className="text-sm text-white hover:text-gray-900">Bookmakers</Link></li>
              <li><Link  to="/Result" className="text-sm text-white hover:text-gray-900">Results</Link></li>
              <li><Link  to="/Tips" className="text-sm text-white hover:text-gray-900">Tips</Link></li>
            </ul>
          </div>

          {/* CURRENT TOP COMPETITIONS */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-semibold text-white uppercase mb-4">
              CURRENT TOP COMPETITIONS
            </h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-white hover:text-gray-900">World Cup Qualification. Europe</a></li>
              <li><a href="#" className="text-sm text-white hover:text-gray-900">England. Premier League</a></li>
              <li><a href="#" className="text-sm text-white hover:text-gray-900">Champions League</a></li>
              <li><a href="#" className="text-sm text-white hover:text-gray-900">Spain. La Liga</a></li>
              <li><a href="#" className="text-sm text-white hover:text-gray-900">Italy. Serie A</a></li>
              <li><a href="#" className="text-sm text-white hover:text-gray-900">England. FA Cup</a></li>
              <li><a href="#" className="text-sm text-white hover:text-gray-900">Europa League</a></li>
              <li><a href="#" className="text-sm text-white hover:text-gray-900">England. League Cup</a></li>
            </ul>
          </div>

          {/* TOP BONUS OFFERS */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-semibold text-white uppercase mb-4">
              TOP BONUS OFFERS
            </h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-white hover:text-gray-900">Cloudbet – Welcome Bonus up to $2,500</a></li>
              <li><a href="#" className="text-sm text-white hover:text-gray-900">Melbet – 150% bonus up to 40,000 INR</a></li>
              <li><a href="#" className="text-sm text-white hover:text-gray-900">22bet – Welcome Bonus 10,300 INR</a></li>
              <li><a href="#" className="text-sm text-white hover:text-gray-900">Megapari – Welcome Bonus 40,000 INR</a></li>
              <li><a href="#" className="text-sm text-white hover:text-gray-900">BeOnBet – 100% Bonus up to $100</a></li>
              <li><a href="#" className="text-sm text-white hover:text-gray-900">Stake – $100,000 every 24 hours</a></li>
              <li><a href="#" className="text-sm text-white hover:text-gray-900">Bettilt – 100% Bonus up to 80,000 INR</a></li>
              <li><a href="#" className="text-sm text-white hover:text-gray-900">1xBit – Welcome bonus up to 8.5 mBTC</a></li>
            </ul>
          </div>

          {/* HELP & CONTACT */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-semibold text-white uppercase mb-4">
              HELP & CONTACT
            </h3>
            <ul className="space-y-2">
              <li><Link to="/Faq" className="text-sm text-white hover:text-gray-900">ODDS.am FAQ</Link></li>
              <li><Link to="/Faq" className="text-sm text-white hover:text-gray-900">Online Betting FAQ</Link></li>
              <li><Link to="/privacy-policy" className="text-sm text-white hover:text-gray-900">Privacy Policy</Link></li>
              <li><Link to="/terms-and-condition" className="text-sm text-white hover:text-gray-900">Terms of Use</Link></li>
              <li><Link to="/advertise" className="text-sm text-white hover:text-gray-900">Advertising</Link></li>
              <li><Link to="/feedback" className="text-sm text-white hover:text-gray-900">Feedback</Link></li>
            </ul>
          </div>

          {/* ON SOCIAL NETWORKS */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-semibold text-white uppercase mb-4">
              ON SOCIAL NETWORKS
            </h3>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gray-400 rounded flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37.07.07 0 0 0 3.647 4.4c-3.093 4.617-3.936 9.117-3.521 13.551a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.029.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.029.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.331c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </div>
              <span className="text-sm text-white">t.me/ODDSam_World</span>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 pt-4 border-t border-gray-300">
          <p className="text-xs text-white text-center">
            © 2025 ODDS.am - All rights reserved. Data provided by Bookmakers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;