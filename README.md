# Athary App

A React-based progressive web application (PWA) for personal growth and habit tracking.

## 📋 Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the App](#running-the-app)
- [Accessing on Mobile](#accessing-on-mobile)
- [Deployment](#deployment)
- [Known Issues](#known-issues)
- [Project Structure](#project-structure)
- [Routes](#routes)

---

## Prerequisites

Before running the app, ensure you have:

- **Node.js** (version 20, 22, or 24 recommended)
  ```bash
  node -v
  ```
- **npm** (comes with Node.js)
  ```bash
  npm -v
  ```

### Switch Node Version (if using nvm-windows)

```bash
nvm install 22
nvm use 22
```

---

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/malaklakroun21/Athary-app.git
   cd Athary-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Firebase config**
   
   Open `src/main.jsx` and replace `firebaseConfig` with your Firebase credentials:
   ```js
   const firebaseConfig = {
     apiKey: "your-api-key",
     authDomain: "your-auth-domain",
     projectId: "athar-4f0b0",
     storageBucket: "your-storage-bucket",
     messagingSenderId: "your-sender-id",
     appId: "your-app-id"
   };
   ```

---

## Running the App

### Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## Accessing on Mobile

### Option 1: Local Network (Same Wi-Fi)

1. Start the dev server with host flag:
   ```bash
   npm run dev -- --host
   ```

2. Find your PC's IP address:
   ```bash
   ipconfig
   ```
   Look for **IPv4 Address** (e.g., `192.168.1.20`)

3. On your phone, open:
   ```
   http://192.168.1.20:5173
   ```

### Option 2: Firebase Hosting (Live URL)

1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

2. Login and deploy:
   ```bash
   firebase login
   firebase use athar-4f0b0
   npm run build
   firebase deploy
   ```

3. Access via the Firebase URL provided after deployment.

---

## Deployment

### Firebase Hosting Setup

1. **Initialize hosting** (first time only):
   ```bash
   firebase init hosting
   ```
   - Public directory: `dist`
   - Single-page app: `Yes`
   - Overwrite index.html: `No`

2. **Deploy**:
   ```bash
   npm run build
   firebase deploy
   ```

---

## Known Issues

### 1. Blank Page / Router Error
**Error**: `useRoutes() may be used only in the context of a <Router> component`

**Solution**: Ensure `<BrowserRouter>` wraps `<Routes>` in `App.jsx`:
```jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        {/* routes here */}
      </Routes>
    </Router>
  )
}
```

### 2. Manifest Syntax Error
**Error**: `Manifest: Line 1, column: 1, Syntax error`

**Solution**: Create/fix `public/manifest.webmanifest`:
```json
{
  "name": "Athary App",
  "short_name": "Athary",
  "theme_color": "#ffffff",
  "background_color": "#ffffff",
  "display": "standalone",
  "start_url": "/",
  "icons": [
    { "src": "/icon-192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/icon-512.png", "sizes": "512x512", "type": "image/png" }
  ]
}
```

### 3. Component Not Found (404)
**Error**: `GET .../components/xxx 404 (Not Found)`

**Solution**: Check import casing matches filename exactly:
- File: `BottomNav.jsx` → Import: `./BottomNav`
- File: `login.jsx` → Import: `./login`

### 4. Git Push Rejected
**Error**: `Updates were rejected because the tip of your current branch is behind`

**Solution**:
```bash
git pull --rebase origin main
git push origin main
```

### 5. Merge Conflict
**Error**: `You have not concluded your merge (MERGE_HEAD exists)`

**Solution**:
```bash
# Option A: Finish merge
git add .
git commit -m "Resolve merge"
git push origin main

# Option B: Abort merge
git merge --abort
```

---

## Project Structure

```
Athary-app/
├── public/
│   ├── manifest.webmanifest
│   ├── icon-192.png
│   ├── icon-512.png
│   └── ... (assets)
├── src/
│   ├── components/
│   │   ├── BottomNav.jsx
│   │   ├── Challenge.jsx
│   │   ├── Communication.jsx
│   │   ├── Gender.jsx
│   │   ├── Login.jsx
│   │   ├── Mosaic.jsx
│   │   ├── Profile.jsx
│   │   ├── streak.jsx
│   │   ├── streakPersonal.jsx
│   │   └── streakFriends.jsx
│   ├── pages/
│   │   ├── questionnaire/
│   │   ├── sondage/
│   │   ├── sondage2/
│   │   ├── Character/
│   │   ├── greenchar/
│   │   ├── accessories/
│   │   ├── welcomepink/
│   │   ├── welcomegreen/
│   │   ├── Album/
│   │   ├── TeamAlbum/
│   │   ├── Email/
│   │   └── Name/
│   ├── styles/
│   │   ├── streak.css
│   │   ├── streakPersonal.css
│   │   ├── streakFriends.css
│   │   └── mosaic.css
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```

---

## Routes

| Path | Component | Description |
|------|-----------|-------------|
| `/` | Questionnaire | Landing page |
| `/sondage` | Sondage | Survey page 1 |
| `/sondage2` | Sondage2 | Survey page 2 |
| `/gender` | Gender | Gender selection |
| `/email` | Email | Email input |
| `/name` | Name | Name input |
| `/character` | Character | Character selection (pink) |
| `/greenchar` | Greenchar | Character selection (green) |
| `/dragaccs` | Dragaccs | Accessories (pink) |
| `/dragaccgreen` | Dragaccsgreen | Accessories (green) |
| `/cappink` | Cappink | Cap accessory (pink) |
| `/capgreen` | Capgreen | Cap accessory (green) |
| `/welcomepink` | WelcomePink | Welcome page (pink) |
| `/welcomegreen` | Welcomegreen | Welcome page (green) |
| `/Login` | Login | Login page |
| `/challenge` | Challenge | Challenge page |
| `/Profile` | Profile | User profile |
| `/streak` | StreakPage | Streak tracking |
| `/Communication` | Communication | Communication page |
| `/album` | Album | Photo album |
| `/teamalbum` | TeamAlbum | Team album |
| `/mosaic` | Mosaic | Mosaic art page |

---

## Tech Stack

- **React** (v18+)
- **Vite** (build tool)
- **React Router** (v6)
- **Firebase** (hosting + analytics)
- **PWA** (via vite-plugin-pwa)

---

## License

MIT