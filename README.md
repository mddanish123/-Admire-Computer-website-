# 💻 Admire Computer — Website

> Laptop Repair Website for **Admire Computer**, Mukherjee Nagar, New Delhi.

---

## 🚀 Quick Start (for developers)

### Prerequisites
- [Node.js](https://nodejs.org/) v16 or higher
- npm (comes with Node.js)

### 1. Install dependencies
```bash
npm install
```

### 2. Start the development server
```bash
npm run dev
```

### 3. Open in browser
```
http://localhost:3000
```

---

## 📁 Project Structure

```
admire-computer-website/
├── public/
│   └── index.html        # Main website (all HTML, CSS, JS in one file)
├── server.js             # Express server
├── package.json          # Dependencies & scripts
├── .env.example          # Environment variable template
├── .gitignore
└── README.md
```

---

## 🛠️ Available Scripts

| Command | Description |
|---|---|
| `npm start` | Start production server |
| `npm run dev` | Start dev server with auto-reload (nodemon) |

---

## ⚙️ Configuration

Copy `.env.example` to `.env` and update values:

```bash
cp .env.example .env
```

| Variable | Default | Description |
|---|---|---|
| `PORT` | `3000` | Port the server runs on |
| `NODE_ENV` | `development` | `development` or `production` |

---

## 🌍 Deployment Options

### Option A — Render / Railway (free, recommended)
1. Push code to GitHub
2. Connect repo to [Render](https://render.com) or [Railway](https://railway.app)
3. Set start command: `npm start`
4. Done — live URL provided automatically

### Option B — VPS / DigitalOcean
```bash
# On your server
git clone <your-repo>
cd admire-computer-website
npm install --production
PORT=80 npm start
```

### Option C — Netlify / GitHub Pages (static only)
Just upload the `public/index.html` file directly — no Node.js needed.

---

## ✏️ Customisation Checklist

Before going live, update these in `public/index.html`:

- [ ] Phone number — search `9876543210`, replace with real number (appears ~6 times)
- [ ] WhatsApp number — same as above
- [ ] Email — replace `admirecomputer.in`
- [ ] Shop address (line ~370)
- [ ] Opening hours (line ~375)
- [ ] Service prices — update `From ₹X,XXX` in the services array (~line 480)
- [ ] Google Maps link — replace `Mukherjee+Nagar+New+Delhi` with exact address
- [ ] Trust stats in hero — devices repaired, years experience, rating
- [ ] Add real customer reviews

---

## 🔧 Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Vanilla HTML5, CSS3, JavaScript |
| Fonts | Google Fonts (Syne + DM Sans) |
| Server | Node.js + Express |
| Compression | compression middleware |
| Security | helmet middleware |
| Logging | morgan middleware |

---

## 📞 Contact

**Admire Computer**
Mukherjee Nagar, New Delhi — 110009
