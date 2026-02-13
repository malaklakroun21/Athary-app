import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getAnalytics, isSupported } from 'firebase/analytics';
import './index.css';
import App from './App.jsx';

const firebaseConfig = {
  apiKey: 'AIzaSyAs6cvHLWQpCYMw4hnZgJj5LPLQxlCqOTM',
  authDomain: 'athar-4f0b0.firebaseapp.com',
  projectId: 'athar-4f0b0',
  storageBucket: 'athar-4f0b0.firebasestorage.app',
  messagingSenderId: '935873795091',
  appId: '1:935873795091:web:9a9ab5df818e3e204a1be6',
  measurementId: 'G-5T89LBJPWZ',
};

const app = initializeApp(firebaseConfig);

if (import.meta.env.PROD) {
  isSupported().then((ok) => {
    if (ok) {
      getAnalytics(app);
    }
  });
}

ReactDOM.createRoot(document.getElementById('root')).render(

    <BrowserRouter>
      <App />
    </BrowserRouter>

);
