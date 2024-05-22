import React from 'react';
import { PasswordStrength } from '../contexts/Password';
import '../assets/Signup.css';
import logo from '../assets/logo.svg'

export const PasswordStrengthExample = () => {
  const handleChange = (value) => console.log(value);

  return (
    <div className="page">
      <div className="login-card">
        <img  src={logo} alt="Logo" />
        <h2>Sign Up</h2>
        <form className="login-form ">
          <div className="username">
            <input
              autoComplete="off"
              spellCheck="false"
              className="control"
              type="email"
              placeholder="Email"
            />
            <div id="spinner" className="spinner"></div>
          </div>
          <PasswordStrength placeholder="Password" onChange={handleChange} />
          <button className="control" type="button">
            Join Now
          </button>
        </form>
      </div>
    </div>
  );
};
