

// NotFound.jsx - Updated to use React Router Link
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Page Not Found (404) | Watchdogs.net</title>
        <meta name="description" content="Sorry, the page you're looking for doesn't exist or has been moved. Return to Watchdogs.net homepage for upcoming matches, live scores, and betting contests." />
        <meta name="keywords" content="404 error, page not found, watchdogs 404, error page" />
        <meta name="author" content="Watchdogs Team" />
        <link rel="canonical" href="https://watchdogs.net/" />
        <link rel="icon" href="/favicon.ico" />
        {/* Open Graph Tags */}
        <meta property="og:title" content="Page Not Found (404) | Watchdogs.net" />
        <meta property="og:description" content="Sorry, the page you're looking for doesn't exist. Return to Watchdogs.net homepage." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://watchdogs.net/" />
        <meta property="og:image" content="https://watchdogs.net/og-404.jpg" />
        <meta property="og:image:alt" content="404 - Page Not Found | Watchdogs.net" />
        <meta property="og:site_name" content="Watchdogs.net" />
        {/* Structured Data: WebPage for 404 */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Page Not Found",
            "url": "https://watchdogs.net/",
            "description": "404 error page for Watchdogs.net.",
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
                }
              ]
            }
          })}
        </script>
      </Helmet>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 text-center">
          <div className="mx-auto h-12 w-12">
            <div className="h-full w-full border-4 border-dashed border-gray-200 rounded-full animate-spin"></div>
          </div>
          <div>
            <h1 className="mt-2 text-6xl font-extrabold text-gray-900 tracking-tight">404</h1>
            <p className="mt-2 text-lg text-gray-500">Page Not Found</p>
            <p className="mt-2 text-sm text-gray-500">The page you're looking for doesn't exist or has been moved.</p>
          </div>
          <div className="mt-6">
            <Link
              to="/"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Go back home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;