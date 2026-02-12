import React from 'react';
import '../styles/Gender.css';

function Gender({ onGenderSelect }) {
  return (
    <div className="gender-container">
      {/* Logo at top */}
      <div className="gender-logo"></div>
      
      {/* Header text */}
      <div className="gender-header">
        <h1>WHAT IS YOUR GENDER</h1>
      </div>
      
      {/* Gender options */}
      <div className="gender-options">
        {/* Female option */}
        <div 
          className="gender-option" 
          onClick={() => onGenderSelect('female')}
        >
          <div className="gender-icon female-icon"></div>
          <div className="gender-label">FEMALE</div>
        </div>
        
        {/* Male option */}
        <div 
          className="gender-option" 
          onClick={() => onGenderSelect('male')}
        >
          <div className="gender-icon male-icon"></div>
          <div className="gender-label">MALE</div>
        </div>
      </div>
    </div>
  );
}

export default Gender;