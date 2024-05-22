import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { PasswordStrength } from '../contexts/Password';
import '../assets/Signup.css';
import Header from '../components/Header';

export const PasswordStrengthExample = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory();

  const handlePasswordChange = (password, strength) => {
    setPassword(password);
    setStrength(strength);
  };

  const handleSubmit = () => {
    
    setErrorMessage('');

    if (!email.includes('@')) {
      setErrorMessage('Lütfen geçerli bir e-mail adresi belirleyiniz.');
      return;
    }

    if (!password) {
      setErrorMessage('Lütfen geçerli bir şifre belirleyiniz.');
      return;
    }

    if (strength === 'strong' || strength === 'very strong') {
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
      alert('Data saved to local storage');
    
      setEmail('');
      setPassword('');
      setStrength('');
   
      history.push('/Login');
    } else {
      setErrorMessage('Password strength is not sufficient.');
    }
  };

  return (
    <div className='RegMain'>
      <Header />
      <div className="page">
        <div className="login-card shadow-2xl">
          <h2>Sign Up</h2>
          <form className="login-form text-white" onSubmit={(e) => e.preventDefault()}>
            <div className="username">
              <input
                autoComplete="off"
                spellCheck="false"
                className="control"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <div id="spinner" className="spinner"></div>
            </div>
            <PasswordStrength 
              placeholder="Password" 
              value={password}
              onChange={handlePasswordChange} 
            />
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            <button className="control" type="button" onClick={handleSubmit}>
              Join Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
