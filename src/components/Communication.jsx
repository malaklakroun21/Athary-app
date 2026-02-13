import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Communication.css';

const Communication = () => {
  // Utiliser useNavigate pour la navigation
  const navigate = useNavigate();

  // Fonction de navigation
  const handleNavClick = (path) => {
    navigate(path);
  };

  return (
    <div className="communication-container">
     {/* Section des utilisateurs en haut */}
<section className="community-header">

    <div className="profile-header">
         <img src="/logo.svg" alt="Profile Avatar" className="profile-avatar" />
        <div className="header-top">
          <h1 className="profile-name">Community</h1>
        </div>
        
       
          </div>
  <div className="users-container">
          <img src="/Str0.svg" alt="add" />
          <img src="/Lina.svg" alt="Li-naa" />
          <img src="/str2.svg" alt="Emma" />
  </div>
</section>


{/* Section du post principal */}
<section className="main-post">
  <div className="post-header">
    <div className="post-avatar-container">
      <img src="/pdf.svg" alt="Steeeeeve" className="post-avatar" />
    </div>
    <div className="post-user-info">
        <div>
      <h2>Steeeeeve</h2>
      <p>Day 3 Healthy Food</p>
      </div>
      <div>
      <span className="level">Level 9</span>
      </div>
    </div>
  </div>
  
  <div className="post-image">
    <img src="/social.svg" alt="Healthy breakfast" className="breakfast-image" />
  </div>
  
  <div className="post-caption">
    <p>Nothing better than starting your day with a healthy breakfast</p>
  </div>
  
  <div className="post-reactions">
    <div className="reaction">
      <span className="reaction-icon">❤️</span>
      <span className="reaction-count">100</span>
    </div>
    <div className="reaction">
      <span className="reaction-icon">💬</span>
      <span className="reaction-count">13</span>
    </div>
    <div className="reaction">
      <span className="reaction-icon">💰</span>
      <span className="reaction-count">10</span>
    </div>
  </div>
</section>

{/* Section des commentaires */}
<section className="comments-section">
  <div className="comment-card">
    <div className="comment-avatar-container">
      <img src="/Goal.svg" alt="Lolaa" className="comment-avatar" />
    </div>
    <div className="comment-content">
      <div className="comment-header">
        <h3>Lolaa</h3>
        <span className="comment-reaction">2 ❤️</span>
      </div>
      <p>Looks so delicious Steve</p>
    </div>
  </div>
  
  <div className="comment-card">
    <div className="comment-avatar-container">
      <img src="/Paint Palette.svg" alt="Abdou" className="comment-avatar" />
    </div>
    <div className="comment-content">
      <div className="comment-header">
        <h3>Abdou</h3>
        <span className="comment-reaction">1 ❤️</span>
      </div>
      <p>Good luck! 🥑</p>
    </div>
  </div>
  
  <div className="comment-card">
    <div className="comment-avatar-container">
      <img src="/LOL.svg" alt="saraaa" className="comment-avatar" />
    </div>
    <div className="comment-content">
      <div className="comment-header">
        <h3>saraaa</h3>
        <span className="comment-reaction">3 ❤️</span>
      </div>
      <p>Mmm, I like it! ^^</p>
    </div>
  </div>
  
  <div className="comment-card">
    <div className="comment-avatar-container">
      <img src="/People.svg" alt="Anes" className="comment-avatar" />
    </div>
    <div className="comment-content">
      <div className="comment-header">
        <h3>Anes</h3>
        <span className="comment-reaction">5 ❤️</span>
      </div>
      <p>Keep Going Steve.</p>
    </div>
  </div>
</section>

      {/* Bottom Navigation */}
      <div className="bottom-nav">
        <img 
          src="/Paint Palette.svg" 
          alt="Cerveau" 
          className="nav-icon" 
          onClick={() => handleNavClick('/Paint')}
        />
        <img 
          src="/Goal.svg" 
          alt="Pleine conscience" 
          className="nav-icon" 
          onClick={() => handleNavClick('/challenge')}
        />
        <img 
          src="/LOL.svg" 
          alt="Rire" 
          className="nav-icon" 
          onClick={() => handleNavClick('/profile')}
        />
        <img 
          src="/People.svg" 
          alt="Amis" 
          className="nav-icon active" 
          onClick={() => handleNavClick('/communication')}
        />
      </div>
    </div>
  );
};

export default Communication;