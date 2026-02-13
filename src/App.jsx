<<<<<<< HEAD
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Challenge from './components/Challenge';
import Profile from './components/Profile'; 
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Questionnaire from './pages/questionnaire/Questionnaire'
import Sondage from './pages/sondage/sondage'
import Sondage2 from './pages/sondage2/sondage2'
import Character from './pages/Character/character'
import Greenchar from './pages/greenchar/greenchar'
import Dragaccs from './pages/Character/dragaccs'
import Dragaccsgreen from './pages/greenchar/dragaccgreen'
import Cappink from './pages/accessories/cappink'
import Capgreen from './pages/accessories/capgreen'
import WelcomePink from './pages/welcomepink/welcomepink'
import Welcomegreen from './pages/welcomegreen/welcomegreen'
import Login from './components/login';
import Challenge from './components/Challenge';
import Profile from './components/Profile';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Character />} />
      <Route path="/greenchar" element={<Greenchar />} />
      <Route path="/dragaccs" element={<Dragaccs />} />
      <Route path="/dragaccgreen" element={<Dragaccsgreen />} />
      <Route path="/cappink" element={<Cappink />} />
      <Route path="/capgreen" element={<Capgreen />} />
      <Route path="/welcomegreen" element={<Welcomegreen />} />
      <Route path="/welcomepink" element={<WelcomePink />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/challenge" element={<Challenge />} />
      <Route path="/Profile" element={<Profile />} />
    </Routes>
  )
}

export default App;
