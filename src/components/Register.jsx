import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { PasswordStrength } from '../contexts/Password';
import '../assets/Signup.css';
import Header from '../components/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HiCheck, HiX } from 'react-icons/hi';

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
      toast.error(
        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200">
          <HiX className="h-5 w-5" />
          <div className="ml-3 text-sm font-normal">Lütfen geçerli bir e-mail adresi belirleyiniz.</div>
        </div>
      );
      return;
    }

    if (!password) {
      setErrorMessage('Lütfen geçerli bir şifre belirleyiniz.');
      toast.error(
        <div className="inline-flex h-8 w-60 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200">
          <HiX className="h-5 w-5" />
          <div className="ml-3 text-sm font-normal">Lütfen geçerli bir şifre belirleyiniz.</div>
        </div>
      );
      return;
    }

    if (strength === 'strong' || strength === 'very strong') {
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
      toast.success(
        <div className="inline-flex h-8 w-60 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
          <HiCheck className="h-5 w-5" />
          <div className="ml-3 text-sm font-normal">Hesabınız Oluşturuldu</div>
        </div>
      );

      setEmail('');
      setPassword('');
      setStrength('');

      setTimeout(() => {
        history.push('/Login');
      }, 1500); 
    } else {
      setErrorMessage('Lütfen geçerli bir şifre belirleyiniz.');
      toast.error(
        <div className="inline-flex h-8 w-60 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200">
          <HiX className="h-5 w-5" />
          <div className="ml-3 text-sm font-normal">Lütfen geçerli bir şifre belirleyiniz.</div>
        </div>
      );
    }
  };

  return (
    <div className='RegMain'>
      <Header />
      <ToastContainer />
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
