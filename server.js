git initconst express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// ── Security headers
app.use(helmet({
  contentSecurityPolicy: false // disabled so Google Fonts / WhatsApp links work
}));

// ── Gzip compression
app.use(compression());

// ── Request logging
app.use(morgan('dev'));

// ── Serve static files from /public
app.use(express.static(path.join(__dirname, 'public'), {
  maxAge: '1d', // cache static assets for 1 day
  etag: true
}));

// ── Health check endpoint (useful for deployments)
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    app: 'Admire Computer Website',
    timestamp: new Date().toISOString()
  });
});

// ── Fallback — serve index.html for any unknown route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// ── Start server
app.listen(PORT, () => {
  console.log('');
  console.log('  ✅  Admire Computer Website');
  console.log(`  🌐  Running at: http://localhost:${PORT}`);
  console.log(`  🏥  Health:     http://localhost:${PORT}/health`);
  console.log('');
  console.log('  Press Ctrl+C to stop.');
  console.log('');
});
