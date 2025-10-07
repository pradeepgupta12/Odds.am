import { SitemapStream } from 'sitemap';
import { Readable } from 'stream';
import { createWriteStream } from 'fs';
import { resolve } from 'path';

// आज की डेट (lastmod के लिए, YYYY-MM-DD फॉर्मेट)
const today = new Date().toISOString().split('T')[0];  // 2025-10-06

// आपके AppRoutes से स्टेटिक रूट्स
const links = [
  { url: '/', changefreq: 'daily', priority: 1.0, lastmod: today },  // होम
  { url: '/live-odds', changefreq: 'daily', priority: 0.9, lastmod: today },  // लाइव ऑड्स
  { url: '/Upcoming-match', changefreq: 'daily', priority: 0.8, lastmod: today },  // अपकमिंग मैच
  { url: '/Betting-contest', changefreq: 'weekly', priority: 0.7, lastmod: today },  // बेटिंग कॉन्टेस्ट
  { url: '/Sure-bets', changefreq: 'daily', priority: 0.9, lastmod: today },  // श्योर बेट्स
  { url: '/Book-maker', changefreq: 'weekly', priority: 0.6, lastmod: today },  // बुकमेकर
  { url: '/Result', changefreq: 'daily', priority: 0.8, lastmod: today },  // रिजल्ट
  { url: '/Faq', changefreq: 'monthly', priority: 0.5, lastmod: today },  // FAQ
  { url: '/Tips', changefreq: 'weekly', priority: 0.6, lastmod: today },  // टिप्स
  { url: '/login', changefreq: 'monthly', priority: 0.4, lastmod: today },  // लॉगिन
  { url: '/signup', changefreq: 'monthly', priority: 0.4, lastmod: today },  // साइनअप
  { url: '/privacy-policy', changefreq: 'yearly', priority: 0.3, lastmod: today },  // प्राइवेसी
  { url: '/terms-and-condition', changefreq: 'yearly', priority: 0.3, lastmod: today },  // टर्म्स
  { url: '/advertise', changefreq: 'monthly', priority: 0.4, lastmod: today },  // एडवरटाइज
  { url: '/feedback', changefreq: 'monthly', priority: 0.4, lastmod: today },  // फीडबैक
  // डायनामिक examples (optional)
  // { url: '/main-card-details/TeamA/TeamB', changefreq: 'daily', priority: 0.7, lastmod: today },
  // { url: '/event/123', changefreq: 'daily', priority: 0.8, lastmod: today },
];

// Sitemap stream बनाएँ (अपना डोमेन)
const smStream = new SitemapStream({ hostname: 'https://watchdogs.net' });

// Links को stream में pipe करें
Readable.from(links).pipe(smStream).pipe(createWriteStream(resolve('./public/sitemap.xml')));

smStream.on('finish', () => {
  console.log('Sitemap generated and saved to public/sitemap.xml with domain https://watchdogs.net!');
});