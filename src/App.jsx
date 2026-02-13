import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Challenge from './components/Challenge';
import Profile from './components/Profile';
import StreakPage from './components/streak';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/challenge" element={<Challenge />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/streak" element={<StreakPage />} />
      </Routes>
    </Router>
  );
}

export default App;