

import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Login = () => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Login to Watchdogs.net - Secure Account Access</title>
        <meta name="description" content="Sign in to your Watchdogs.net account to access betting contests, live scores, upcoming matches, and more. Quick and secure login for sports enthusiasts." />
        <meta name="keywords" content="login, sign in, watchdogs login, betting account access, sports betting login" />
        <meta name="author" content="Watchdogs Team" />
        <link rel="canonical" href="https://watchdogs.net/login" />
        <link rel="icon" href="/favicon.ico" />
        {/* Open Graph Tags */}
        <meta property="og:title" content="Login to Watchdogs.net - Secure Account Access" />
        <meta property="og:description" content="Sign in to your Watchdogs.net account to access betting contests, live scores, upcoming matches, and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://watchdogs.net/login" />
        <meta property="og:image" content="https://watchdogs.net/og-login.jpg" />
        <meta property="og:image:alt" content="Login - Watchdogs.net" />
        <meta property="og:site_name" content="Watchdogs.net" />
        {/* Structured Data: WebPage for Login */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Login",
            "url": "https://watchdogs.net/login",
            "description": "Login page for Watchdogs.net users to access their accounts.",
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
                  "name": "Login"
                }
              ]
            }
          })}
        </script>
      </Helmet>
      <div className="min-h-screen bg-white flex items-center justify-center p-5">
        <div className="w-full max-w-md">
          <div className="bg-gray-100 rounded-lg shadow-md border border-black p-6 md:p-8">
            <div className="text-center mb-6">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Welcome Back</h1>
              <p className="text-gray-600">Sign in to your account</p>
            </div>
            <form className="space-y-4">
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
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
              >
                Sign In
              </button>
            </form>
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{' '}
                <Link to="/signup" className="text-blue-600 hover:underline font-medium">Sign up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login