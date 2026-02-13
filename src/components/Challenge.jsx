import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../styles/Challenge.css';

const Challenge = () => {
  const navigate = useNavigate();

  const handleNavClick = (path) => {
    navigate(path);
  };

  return (
    <div className="challenge-page">
      {}
          <div className="level-header">
          <div className="level-header1">
         <div className="level-indicator">
          <img src="/Pixel Star.svg" alt="Niveau" className="star-icon" />
          <div className="level-header2" >
          <span className="level-text">Level 01</span>
          <div className="level-bar">
            <div className="level-progress" style={{ width: '40%' }}></div>
          </div>
          </div>
        </div>
        <div className="coins">
          <img src="/Coins.svg" alt="Pièces" className="coins-icon" />
          <span className="coins-amount">1870</span>
        </div>
        </div>
          <div className="avatar">
          <img src="/Brain.svg" alt="Brain" className="Brain-icon" />
        </div>
      </div>
       
      {/* Section des défis */}
      <h2 className="section-title">Challenges :</h2>
      <div className="challenges-list">
        <div className="challenge-card">
          <div className="challenge-icon">
            <img src="/HealthyFood.svg" alt="Régime sain" />
          </div>
          <div className="challenge-info">
            <h3>HEALTHY DIET</h3>
            <span className="challenge-level">LVL 3</span>
          </div>
          <div className="progress-bar">
            <div className="progress" style={{ width: '40%' }}></div>
          </div>
        </div>

        <div className="challenge-card">
          <div className="challenge-icon">
            <img src="/mindfulness.svg" alt="Pleine conscience" />
          </div>
          <div className="challenge-info">
            <h3>MINDFULNESS</h3>
            <span className="challenge-level">LVL 1</span>
          </div>
          <div className="progress-bar">
            <div className="progress" style={{ width: '30%' }}></div>
          </div>
        </div>

        <div className="challenge-card">
          <div className="challenge-icon">
            <img src="/Physical.svg" alt="Bien-être physique" />
          </div>
          <div className="challenge-info">
            <h3>PHYSICAL WELLNESS</h3>
            <span className="challenge-level">LVL 10</span>
          </div>
          <div className="progress-bar">
            <div className="progress" style={{ width: '100%' }}></div>
          </div>
        </div>
      </div>

      {/* Section collaboration entre amis */}
      <h2 className="section-title">Friends collaboration:</h2>
      <div className="collaboration-card">
        <h3 className="invite-title">INVITE TO CHALLENGE</h3>
        <p className="invite-description">
          Open challenges that you may participate with ATHAR
        </p>
        
        <div className="challenge-options">
          <label>
            <input type="radio" name="challenge" value="recipe" />
            Collaborative Recipe
          </label>
        </div>
        
        <button className="invite-button">INVITE FRIEND</button>
      </div>

      {/* Barre de navigation en bas */}
      <div className="bottom-nav">
        <img 
          src="/Paint Palette.svg" 
          alt="Cerveau" 
          className="nav-icon" 
          onClick={() => handleNavClick('/brain')}
        />
        <img 
          src="/Goal.svg" 
          alt="Pleine conscience" 
          className="nav-icon active" 
          onClick={() => handleNavClick('/challenge')}
        />
        <img 
          src="/LOL.svg" 
          alt="Rire" 
          className="nav-icon" 
          onClick={() => handleNavClick('/Profile')
          }
        />
        <img 
          src="/People.svg" 
          alt="Amis" 
          className="nav-icon" 
          onClick={() => handleNavClick('/Communication')}
        />
      </div>
    </div>
  );
};

export default Challenge;