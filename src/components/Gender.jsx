import React from 'react';
import '../styles/Gender.css';
import { useNavigate } from 'react-router-dom';

function Gender({ onGenderSelect }) {

  const navigate = useNavigate();

  const handlemail = () => {
    navigate("/email");
  }

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
          onClick={handlemail} role='button' tabIndex={0}
        >
          <div className="gender-icon female-icon"></div>
          <div className="gender-label">FEMALE</div>
        </div>
        
        {/* Male option */}
        <div 
          className="gender-option" 
          // onClick={() => onGenderSelect('male')}
          onClick={handlemail} role='button' tabIndex={0}
        >
          <div className="gender-icon male-icon"></div>
          <div className="gender-label">MALE</div>
        </div>
      </div>
    </div>
  );
}

export default Gender;