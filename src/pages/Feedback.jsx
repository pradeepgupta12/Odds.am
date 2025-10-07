

import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedbackType: '',
    message: '',
    rating: 0
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRatingChange = (newRating) => {
    setFormData(prev => ({ ...prev, rating: newRating }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to a backend API
    console.log('Feedback submitted:', formData);
    setSubmitted(true);
    // Reset form after submission
    setFormData({ name: '', email: '', feedbackType: '', message: '', rating: 0 });
  };

  if (submitted) {
    return (
      <>
        <Helmet>
          <html lang="en" />
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Thank You for Your Feedback | Watchdogs.net</title>
          <meta name="description" content="Thank you for submitting your feedback on Watchdogs.net. We appreciate your input and will review it shortly." />
          <meta name="keywords" content="feedback submitted, thank you, user input" />
          <meta name="author" content="Watchdogs Team" />
          <link rel="canonical" href="https://watchdogs.net/feedback" />
          <link rel="icon" href="/favicon.ico" />
          {/* Open Graph Tags */}
          <meta property="og:title" content="Thank You for Your Feedback | Watchdogs.net" />
          <meta property="og:description" content="Thank you for submitting your feedback on Watchdogs.net. We appreciate your input and will review it shortly." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://watchdogs.net/feedback" />
          <meta property="og:image" content="https://watchdogs.net/og-feedback.jpg" />
          <meta property="og:image:alt" content="Thank You - Feedback Submitted - Watchdogs.net" />
          <meta property="og:site_name" content="Watchdogs.net" />
          {/* Structured Data: WebPage Schema */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Thank You for Your Feedback",
              "url": "https://watchdogs.net/feedback",
              "description": "Confirmation page for submitted feedback.",
              "publisher": {
                "@type": "Organization",
                "name": "Watchdogs.net",
                "url": "https://watchdogs.net/"
              }
            })}
          </script>
        </Helmet>
        <div className="pt-[120px] min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="max-w-md w-full mx-auto px-4 py-8">
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 text-center">
              <h1 className="text-2xl font-bold text-green-600 mb-4">Thank You!</h1>
              <p className="text-gray-700 mb-6">Your feedback has been submitted successfully. We appreciate your input and will review it shortly.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="bg-blue-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Submit More Feedback
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <html lang="en" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Feedback - Share Your Thoughts on Watchdogs.net | Betting Platform</title>
        <meta name="description" content="Provide feedback on our sports betting platform. Report bugs, suggest features, or share your experience with Watchdogs.net." />
        <meta name="keywords" content="feedback, user suggestions, bug report, feature request, contact us" />
        <meta name="author" content="Watchdogs Team" />
        <link rel="canonical" href="https://watchdogs.net/feedback" />
        <link rel="icon" href="/favicon.ico" />
        {/* Open Graph Tags */}
        <meta property="og:title" content="Feedback - Share Your Thoughts on Watchdogs.net | Betting Platform" />
        <meta property="og:description" content="Provide feedback on our sports betting platform. Report bugs, suggest features, or share your experience with Watchdogs.net." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://watchdogs.net/feedback" />
        <meta property="og:image" content="https://watchdogs.net/og-feedback.jpg" />
        <meta property="og:image:alt" content="Feedback Form - Watchdogs.net" />
        <meta property="og:site_name" content="Watchdogs.net" />
        {/* Structured Data: ContactPage Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Feedback Form",
            "url": "https://watchdogs.net/feedback",
            "description": "Submit feedback, bug reports, or suggestions for Watchdogs.net.",
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "url": "https://watchdogs.net/feedback",
              "description": "Feedback submission form"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Watchdogs.net",
              "url": "https://watchdogs.net/"
            }
          })}
        </script>
      </Helmet>
      <div className="pt-[120px] min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
          <div className="bg-white rounded-lg shadow-lg border-2 border-gray-500 p-6 md:p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Provide Feedback</h1>
            <p className="text-gray-600 mb-4">We value your opinion! Your feedback helps us improve our sports betting and odds comparison platform. Share your thoughts below.</p>
            
            <div className="space-y-8">
              {/* Introduction */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why Your Feedback Matters</h2>
                <p className="text-gray-700 leading-relaxed">
                  Whether it's about our match odds, user interface, customer support, or new features you'd like to see, your input directly influences our updates. 
                  We aim to make betting safer, more enjoyable, and informative for everyone.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-4">
                  <li>Help us fix bugs or issues you're experiencing.</li>
                  <li>Suggest improvements for mobile responsiveness or live scores.</li>
                  <li>Rate our overall service to guide future enhancements.</li>
                </ul>
              </section>

              {/* Feedback Form */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Submit Your Feedback</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Your Name (Optional)</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Your Email (For follow-up, optional)</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="feedbackType" className="block text-sm font-medium text-gray-700 mb-2">Type of Feedback</label>
                    <select
                      id="feedbackType"
                      name="feedbackType"
                      value={formData.feedbackType}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="">Select an option</option>
                      <option value="bug-report">Bug Report</option>
                      <option value="feature-request">Feature Request</option>
                      <option value="general-suggestion">General Suggestion</option>
                      <option value="praise">Praise</option>
                      <option value="complaint">Complaint</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Overall Rating (1-5 Stars)</label>
                    <div className="flex items-center space-x-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => handleRatingChange(star)}
                          className={`text-2xl ${
                            formData.rating >= star ? 'text-yellow-400' : 'text-gray-300'
                          } hover:text-yellow-400 transition-colors`}
                        >
                          ★
                        </button>
                      ))}
                    </div>
                    <p className="text-sm text-gray-500 mt-1">Rate your experience with our platform</p>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your feedback..."
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Submit Feedback
                  </button>
                </form>
              </section>

              {/* Additional Ways to Provide Feedback */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Other Ways to Reach Us</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Prefer not to use the form? Contact us directly:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Email:</strong> <a href="mailto:feedback@example.com" className="text-blue-600 hover:underline">feedback@example.com</a></li>
                  <li><strong>Support Ticket:</strong> Log in to your account and submit a ticket via the Help Center.</li>
                  <li><strong>Social Media:</strong> Tweet us @YourPlatformHandle or message on Facebook/Instagram.</li>
                  <li><strong>Phone:</strong> +1-234-567-8900 (Mon-Fri, 9 AM - 5 PM EST)</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4 text-sm">
                  We aim to respond to all feedback within 48 hours. Your privacy is protected—see our <a href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</a> for details.
                </p>
              </section>

              {/* FAQ */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-semibold text-gray-900">Is my feedback anonymous?</h3>
                    <p className="text-sm text-gray-700 mt-1">Yes, you can submit anonymously by skipping name and email fields.</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-semibold text-gray-900">How will my feedback be used?</h3>
                    <p className="text-sm text-gray-700 mt-1">It helps us prioritize improvements, but individual responses aren't guaranteed unless you provide contact info.</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-semibold text-gray-900">Can I attach files to my feedback?</h3>
                    <p className="text-sm text-gray-700 mt-1">Currently, no. For screenshots or files, email us directly.</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;