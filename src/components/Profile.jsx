import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Profile.css';

const Profile = () => {
  const navigate = useNavigate();

  const handleNavClick = (path) => {
    navigate(path);
  };

  return (
    <div className="profile-page">
      {/* Profile Header */}
      <div className="profile-header">
        <div className="header-top">
          <h1 className="profile-name">athar lolaa</h1>
          <img src="/Grid.svg" alt="Menu" className="menu-icon" />
        </div>
        
        <img src="/Brain.svg" alt="Profile Avatar" className="profile-avatar" />
          </div>
        <div className="stats-bar">
          <div className="user-info">
            <span className="username">@atharlolaa</span>
            <span className="join-date">· Joined 2026</span>
          </div>
          <div className="stats">
            <span className="stat-item">5 following</span>
            <span className="stat-item">25 followers</span>
          </div>
        </div>
        
        <div className="action-buttons">
          <div className="level-badge">level 5</div>
          <button className="add-friends-btn">
            <img src="/UserPlus.svg" alt="Add" className="add-icon" />
            add friends
          </button>
          <img src="/Qr Code.svg" alt="QR Code" className="qr-icon" />
        </div>

       <div className="friends-streak">
         <h3 className="streak-title">friends streak</h3>
  
        <div className="streak-avatars">
    <div className="streak-avatar">
      <img src="/Avatar-Pink.svg" alt="Friend 1" />
         </div>
    <div className="streak-avatar">
      <img src="/Avatar-Purple.svg" alt="Friend 2" />
    </div>
    <div className="streak-avatar">
      <img src="/Avatar-Yellow.svg" alt="Friend 3" />
     
    </div>
    
    <div className="streak-avatar add-more">
      <span className="add-icon">+</span>
    </div>
  </div>
</div>
    

      {/* Monthly Badges */}
      <div className="monthly-badges">
        <h3 className="section-title">monthly badges</h3>
        <div className="badges-grid">
          <img src="/Water Bottle.svg" alt="Water Bottle" className="badge-icon" />
          <img src="/Strawberry.svg" alt="Strawberry" className="badge-icon" />
          <img src="/Sleep.svg" alt="Sleep" className="badge-icon" />
          <img src="/Sneakers.svg" alt="Sneakers" className="badge-icon" />
          <img src="/Praying Beads.svg" alt="Praying Beads" className="badge-icon" />
        </div>
      </div>

      {/* Achievements */}
      <div className="achievements">
        <h3 className="section-title">achievements</h3>
        <div className="achievements-list">
          <div className="achievement-item">
            <img src="/Water Bottle.svg" alt="Water Bottle" className="achievement-icon" />
            <span className="achievement-progress">15/50</span>
          </div>
          <div className="achievement-item">
            <img src="/Strawberry.svg" alt="Strawberry" className="achievement-icon" />
            <span className="achievement-progress">20/20</span>
          </div>
          <div className="achievement-item">
            <img src="/Sleep.svg" alt="Sleep" className="achievement-icon" />
            <span className="achievement-progress">83/100</span>
          </div>
          <div className="achievement-item">
            <img src="/Sneakers.svg" alt="Sneakers" className="achievement-icon" />
            <span className="achievement-progress">48/75</span>
          </div>
          <div className="achievement-item">
            <img src="/Praying Beads.svg" alt="Praying Beads" className="achievement-icon" />
            <span className="achievement-progress">15/50</span>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bottom-nav">
        <img 
          src="/Paint Palette.svg" 
          alt="Brain" 
          className="nav-icon active" 
          onClick={() => handleNavClick('/brain')}
        />
        <img 
          src="/Goal.svg" 
          alt="Goal" 
          className="nav-icon" 
          onClick={() => handleNavClick('/challenge')}
        />
        <img 
          src="/LOL.svg" 
          alt="LOL" 
          className="nav-icon" 
          onClick={() => handleNavClick('/profile')}
        />
        <img 
          src="/People.svg" 
          alt="People" 
          className="nav-icon" 
          onClick={() => handleNavClick('/people')}
        />
      </div>
    </div>
  );
};

export default Profile;