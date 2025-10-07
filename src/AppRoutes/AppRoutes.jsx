


import React, { useLayoutEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Helmet } from 'react-helmet';
import Navbar from "../components/Navbar"; // Path to Navbar
import Footer from "../components/Footer"; // Path to Footer

// Scroll handler
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AppRoutes = () => {
  const LazyHomePage = lazy(() => import("../pages/HomePage"));
  const LazyMainCardDetailsPage = lazy(() => import("../pages/MainCardDetailsPage"));
  const LazyLiveOddsPage = lazy(() => import("../pages/LiveOddsPage"));
  const LazyUpcomingMatchesPage = lazy(() => import("../pages/UpcomingMatchesPage"));
  const LazyBettingContest = lazy(() => import("../pages/BettingContest"));
  const LazySureBets = lazy(() => import("../pages/SureBets"));
  const LazyBookMaker = lazy(() => import("../pages/BookMaker"));
  const LazyResult = lazy(() => import("../pages/Result"));
  const LazyFAQPage = lazy(() => import("../pages/FAQPage"));
  const LazyTipsPage = lazy(() => import("../pages/TipsPage"));
  const LazyLeagueDetailsPage = lazy(() => import("../pages/LeagueDetailsPage"));
  const LazyRecommendedDetailsPage = lazy(() => import("../pages/RecommendedDetailsPage"));
  const LazyTopSureBetsDetailsPage = lazy(() => import("../pages/TopSureBetsDetailsPage"));
  const LazyLiveScoreDetailsPage = lazy(() => import("../pages/LiveScoreDetailsPage"));
  const LazyBettingContestDetailsPage = lazy(() => import("../pages/BettingContestDetailsPage"));
  const LazyEventsAndTablesDetailsPage = lazy(() => import("../pages/EventsAndTablesDetailsPage"));
  const LazyLogin = lazy(() => import("../components/Login"));
  const LazySignUp = lazy(() => import("../components/SignUp").then(module => ({ default: module.SignUp })));
  const LazyPrivacyPolicy = lazy(() => import("../pages/PrivacyPolicy"));
  const LazyTermsAndConditions = lazy(() => import("../pages/TermsAndConditions"));
  const LazyAdvertise = lazy(() => import("../pages/Advertise"));
  const LazyFeedback = lazy(() => import("../pages/Feedback"));
  const LazyEventDetailsPage = lazy(() => import("../pages/EventDetailsPage"));
  const LazyNotFound = lazy(() => import("../components/NotFound"));

  return (
    <>
      <Helmet>
        <html lang="en" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Watchdogs.net - Sports Betting, Live Scores & Odds</title>
        <meta name="description" content="Watchdogs.net - Your go-to source for sports betting, live scores, upcoming matches, sure bets, and more. Join contests and get expert tips." />
        <meta name="keywords" content="sports betting, live scores, upcoming matches, sure bets, betting contests, football odds, tennis odds" />
        <meta name="author" content="Watchdogs Team" />
        <link rel="canonical" href="https://watchdogs.net/" />
        <link rel="icon" href="/favicon.ico" />
        {/* Open Graph Defaults */}
        <meta property="og:title" content="Watchdogs.net - Sports Betting, Live Scores & Odds" />
        <meta property="og:description" content="Watchdogs.net - Your go-to source for sports betting, live scores, upcoming matches, and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://watchdogs.net/" />
        <meta property="og:image" content="https://watchdogs.net/og-default.jpg" />
        <meta property="og:image:alt" content="Watchdogs.net Homepage" />
        <meta property="og:site_name" content="Watchdogs.net" />
        {/* Structured Data: Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Watchdogs.net",
            "url": "https://watchdogs.net/",
            "logo": {
              "@type": "ImageObject",
              "url": "https://watchdogs.net/logo.jpg"
            },
            "description": "Sports betting platform with live scores, odds, and contests.",
            "sameAs": [
              "https://twitter.com/watchdogsnet",
              "https://facebook.com/watchdogsnet"
            ]
          })}
        </script>
      </Helmet>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">
            <Suspense fallback={<div className="flex-1 flex items-center justify-center">Loading...</div>}>
              <Routes>
                <Route path="/" element={<LazyHomePage />} />
                <Route path="/main-card-details/:homeTeam/:awayTeam" element={<LazyMainCardDetailsPage />} />
                 <Route path="/live-odds" element={<LazyLiveOddsPage />} />
                 <Route path="/Upcoming-match" element={<LazyUpcomingMatchesPage/>} />
                 <Route path="/Betting-contest" element={<LazyBettingContest/>} />
                 <Route path="/Sure-bets" element={<LazySureBets/>} />
                 <Route path="/Book-maker" element={<LazyBookMaker/>} />
                 <Route path="/Result" element={<LazyResult/>} />
                 <Route path="/Faq" element={<LazyFAQPage/>} />
                 <Route path="/Tips" element={<LazyTipsPage/>} />
                 <Route path="/league-details/:homeTeam/:awayTeam" element={<LazyLeagueDetailsPage/>} />
                 <Route path="/recommended-details/:index" element={<LazyRecommendedDetailsPage />} />
                 <Route path="/sure-bet-details/:id" element={<LazyTopSureBetsDetailsPage/>} />
                 <Route path="/live-score-details/:id" element={<LazyLiveScoreDetailsPage/>} />
                 <Route path="/live-score-details" element={<LazyLiveScoreDetailsPage/>} />
                 <Route path="/betting-contest-details/:username" element={<LazyBettingContestDetailsPage/>} />
                  <Route path="/events-and-tables-details/:teamName" element={<LazyEventsAndTablesDetailsPage/>} />
                  <Route path="/login" element={<LazyLogin />} />
                  <Route path="/signup" element={<LazySignUp />} />
                  <Route path="/privacy-policy" element={<LazyPrivacyPolicy />} />
                  <Route path="/terms-and-condition" element={<LazyTermsAndConditions />} />
                  <Route path="/advertise" element={<LazyAdvertise />} />
                  <Route path="/feedback" element={<LazyFeedback />} />
                  <Route path="/event/:id" element={<LazyEventDetailsPage />} />
                  <Route path="*" element={<LazyNotFound />} />
              {/* yaha aur pages add kar sakte ho */}

              </Routes>
              <Footer />
            </Suspense>
          </main>
        </div>
      </Router>
    </>
  );
};

export default AppRoutes;