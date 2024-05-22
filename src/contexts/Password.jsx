import React, { useState } from 'react';
import classNames from 'classnames';
import '../assets/Signup.css';

const strengthLabels = ['weak', 'medium', 'medium', 'strong', 'very strong'];

export const PasswordStrength = ({ placeholder, onChange }) => {
  const [strength, setStrength] = useState('');

  const getStrength = (password) => {
    let strengthIndicator = -1;

    if (/[a-z]/.test(password)) strengthIndicator++;
    if (/[A-Z]/.test(password)) strengthIndicator++;
    if (/\d/.test(password)) strengthIndicator++;
    if (/[^a-zA-Z0-9]/.test(password)) strengthIndicator++;

    if (password.length >= 16) strengthIndicator++;

    return strengthLabels[strengthIndicator] || '';
  };

  const handleChange = (event) => {
    const password = event.target.value;
    const strength = getStrength(password);
    setStrength(strength);
    onChange(password);
  };

  return (
    <>
      <input
        name="password"
        spellCheck="false"
        className="control"
        type="password"
        placeholder={placeholder}
        onChange={handleChange}
      />
      <div className={classNames('bars', strength)}>
        <div></div>
      </div>
      <div className="strength">{strength && `${strength} password`}</div>
    </>
  );
};
