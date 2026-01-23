const fs = require('fs');
const path = require('path');

const routes = [
  '/',
  '/projects',
  '/experience',
  '/home',
];

const host = process.env.SITE_URL || 'http://localhost:3000';
const urls = routes.map(r => `<url><loc>${host}${r}</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>`).join('');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;
fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), xml);
console.log('Sitemap generated at public/sitemap.xml');
