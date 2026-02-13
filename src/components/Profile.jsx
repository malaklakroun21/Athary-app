import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Profile.css';

const Profile = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Fermer le menu en cliquant en dehors
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleNavClick = (path) => {
    navigate(path);
  };

  const handleMenuItemClick = (item) => {
    setMenuOpen(false);
    console.log(`${item} clicked`);
    
    // Ajoutez ici votre logique métier
    switch (item) {
      case 'streak':
        // Logique pour My Streak
        break;
      case 'puzzle':
        // Logique pour Puzzle Album
        break;
      case 'save':
        // Logique pour Save Image
        break;
      default:
        break;
    }
  };

  return (
    <div className="profile-page">
      {/* Profile Header */}
      <div className="profile-header">
        <div className="header-top">
          <h1 className="profile-name">athar lolaa</h1>
          
          {/* Menu Container */}
          <div 
            ref={menuRef}
            className="menu-container" 
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <img src="/Menu.svg" alt="Menu" className="menu-icon" />
            
            {/* Menu déroulant */}
            {menuOpen && (
              <div className="menu-dropdown">
                <div 
                  className="menu-item" 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleMenuItemClick('streak');
                  }}
                >
                  <img src="/Fi.svg" alt="My Streak" />
                  <span>My Streak</span>
                </div>
                <div 
                  className="menu-item" 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleMenuItemClick('puzzle');
                  }}
                >
                  <img src="/Puzzle.svg" alt="Puzzle Album" />
                  <span>Puzzle Album</span>
                </div>
                <div 
                  className="menu-item" 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleMenuItemClick('save');
                  }}
                >
                  <img src="/save.svg" alt="Save Image" />
                  <span>Save Image</span>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <img src="/Brain.svg" alt="Profile Avatar" className="profile-avatar" />
      </div>

      {/* Stats Bar */}
      <div className="stats-bar">
        <div className="stats">
          <span className="stat-item">@atharlolaa</span>
          <span className="stat-item">· Joined 2026</span>
        </div>
       
        <div className="user-info">
          <span className="username">5</span>
          <span className="join-date">following</span>
        </div>
     
        <div className="user-info">
          <span className="username">25</span>
          <span className="join-date">followers</span>
        </div>
      </div>
        
      {/* Action Buttons */}
      <div className="action-buttons">
        <div className="level-badge">level 5</div>
        <button className="add-friends-btn">
          <img src="/UserPlus.svg" alt="Add" className="add-icon" />
          add friends
        </button>
        <img src="/Qr Code.svg" alt="QR Code" className="qr-icon" />
      </div>

      {/* Friends Streak Section */}
      <div className="section-container">
        <div className="friends-streak">
          <h3 className="section-title">friends streak</h3>
          <div className="streak-avatars">
            <div className="combined-badge">
              <img 
                src="/1.svg" 
                alt="Friend1" 
                className="badge-background" 
              />
            </div>
            <div className="combined-badge">
              <img 
                src="/2.svg" 
                alt="Friend2" 
                className="badge-background" 
              />
            </div>
            <div className="combined-badge">
              <img 
                src="/01.svg" 
                alt="Friend3" 
                className="badge-background" 
              />
            </div>
            <div className="combined-badge">
              <img 
                src="/Story4.svg" 
                alt="Add" 
                className="badge-background1" 
              />
            </div>
          </div>
        </div>
      </div>

      {/* Monthly Badges Section */}
      <div className="section-container">
        <h3 className="section-title">Monthly badges</h3>
        <div className="monthly-badges">
          <div className="combined-badge">
            <img 
              src="/Image.svg" 
              alt="Badge background" 
              className="badge-background" 
            />
          </div>
          <div className="combined-badge">
            <img 
              src="/Image3.svg" 
              alt="Badge background" 
              className="badge-background" 
            />
          </div>
          <div className="combined-badge">
            <img 
              src="/Zz.svg" 
              alt="Sleep" 
              className="badge-background" 
            />
          </div>
          <div className="combined-badge">
            <img 
              src="/Image4.svg" 
              alt="Badge background" 
              className="badge-background" 
            />
          </div>
          <div className="combined-badge">
            <img 
              src="/Image5.svg" 
              alt="Badge background" 
              className="badge-background" 
            />
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="section-container">
        <h3 className="section-title">achievements</h3>
        <div className="achievements">
          <div className="achievements-list">
            <div className="achievement-item">
              <img src="/Image.svg" alt="Water Bottle" className="achievement-icon" />
              <span className="achievement-progress">15/50</span>
            </div>
            <div className="achievement-item">
              <img src="/Image3.svg" alt="Strawberry" className="achievement-icon" />
              <span className="achievement-progress">20/20</span>
            </div>
            <div className="achievement-item">
              <img src="/Zz.svg" alt="Sleep" className="achievement-icon" />
              <span className="achievement-progress">83/100</span>
            </div>
            <div className="achievement-item">
              <img src="/Image4.svg" alt="Sneakers" className="achievement-icon" />
              <span className="achievement-progress">48/75</span>
            </div>
            <div className="achievement-item">
              <img src="/Image5.svg" alt="Praying Beads" className="achievement-icon" />
              <span className="achievement-progress">15/50</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bottom-nav">
        <img 
          src="/Paint Palette.svg" 
          alt="Brain" 
          className="nav-icon" 
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
          className="nav-icon active" 
          onClick={() => handleNavClick('/profile')}
        />
        <img 
          src="/People.svg" 
          alt="People" 
          className="nav-icon" 
          onClick={() => handleNavClick('/Communication')}
        />
      </div>
    </div>
  );
};

export default Profile;