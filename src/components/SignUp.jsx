

import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export const SignUp = () => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Sign Up for Watchdogs.net - Create Your Betting Account</title>
        <meta name="description" content="Create a new account on Watchdogs.net to join betting contests, view live scores, upcoming matches, and more. Quick signup for sports betting enthusiasts." />
        <meta name="keywords" content="signup, create account, watchdogs signup, sports betting registration, join watchdogs" />
        <meta name="author" content="Watchdogs Team" />
        <link rel="canonical" href="https://watchdogs.net/signup" />
        <link rel="icon" href="/favicon.ico" />
        {/* Open Graph Tags */}
        <meta property="og:title" content="Sign Up for Watchdogs.net - Create Your Betting Account" />
        <meta property="og:description" content="Create a new account on Watchdogs.net to join betting contests, view live scores, upcoming matches, and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://watchdogs.net/signup" />
        <meta property="og:image" content="https://watchdogs.net/og-signup.jpg" />
        <meta property="og:image:alt" content="Sign Up - Watchdogs.net" />
        <meta property="og:site_name" content="Watchdogs.net" />
        {/* Structured Data: WebPage for Sign Up */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Sign Up",
            "url": "https://watchdogs.net/signup",
            "description": "Sign up page for new users to create accounts on Watchdogs.net.",
            "publisher": {
              "@type": "Organization",
              "name": "Watchdogs.net",
              "url": "https://watchdogs.net/",
              "logo": {
                "@type": "ImageObject",
                "url": "https://watchdogs.net/logo.jpg"
              }
            },
            "inLanguage": "en-US",
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://watchdogs.net/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Sign Up"
                }
              ]
            }
          })}
        </script>
      </Helmet>
      <div className="min-h-screen bg-white flex items-center justify-center mt-20 p-4">
        <div className="w-full max-w-md">
          <div className="bg-gray-100 rounded-lg shadow-md border border-black p-6 md:p-8">
            <div className="text-center mb-6">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Create Account</h1>
              <p className="text-gray-600">Sign up for a new account</p>
            </div>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your password"
                />
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Confirm your password"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
              >
                Sign Up
              </button>
            </form>
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{' '}
                <Link to="/login" className="text-blue-600 hover:underline font-medium">Sign in</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}