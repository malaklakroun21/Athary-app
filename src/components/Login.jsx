import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../styles/Login.css';
import Gender from './Gender';
import Challenge from './Challenge'; // Import Challenge component

function Login() {
  const navigate = useNavigate(); // Initialize navigate
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [step, setStep] = useState('login');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', { email, password });
    // Navigate to Challenge page after login
    navigate('/challenge');
  };

  const handleGenderSelect = (gender) => {
    console.log('Selected gender:', gender);
    setStep('login');
  };

  return (
    <div className="login-container">
      {step === 'login' ? (
        <>
          <div className="character-image"></div>
          <div className="logo"></div>
          
          <div className="greeting"> 
            Happy to see you <br />
            again &lt;3
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <label className="input-label">Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="email-input"
                required
              />
            </div>

            <div className="input-group1">
              <label className="input-label1">Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="password-input"
                required
              />
            </div>

            <button type="submit" className="button">
              ENJOY
            </button>
          </form>
          
          <div className="signup-text">
            don't have an account? <span 
              className="signup-link" 
              onClick={() => setStep('gender')}
            >Join us!</span>
          </div>
          
          <div className="divider">
            <span>Or continue with</span>
          </div>

          <div className="social-login">
            <div className="social-icon google"></div>
            <div className="social-icon apple"></div>
            <div className="social-icon facebook"></div>
          </div>
        </>
      ) : (
        <Gender onGenderSelect={handleGenderSelect} />
      )}
    </div>
  );
}

export default Login;