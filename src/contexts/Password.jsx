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
    onChange(password, strength);
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

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('');

  const handlePasswordChange = (password, strength) => {
    setPassword(password);
    setStrength(strength);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (strength === 'strong' || strength === 'very strong') {
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
      alert('Üyeliğiniz Başarı İle Gerçekleşti');
    } else {
      alert('Şifre Belirlerken "en az 1 büyük karakter, en az bir noktalama işareti ve minimum 6 karakter kullanın');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label required>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <PasswordStrength
          placeholder="Enter your password"
          onChange={handlePasswordChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SignupForm;
