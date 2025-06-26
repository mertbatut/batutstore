// contexts/Password.js
import React, { createContext, useContext } from 'react';

// PropTypes yerine basit validasyon (prop-types paketi gerekmez)
const validateProps = (props, componentName) => {
  if (process.env.NODE_ENV !== 'production') {
    console.log(`${componentName} props:`, props);
  }
};

// Password strength hesaplama fonksiyonu
const calculatePasswordStrength = (password) => {
  if (!password) return '';
  
  let score = 0;
  const checks = {
    length: password.length >= 8,
    lowercase: /[a-z]/.test(password),
    uppercase: /[A-Z]/.test(password),
    numbers: /\d/.test(password),
    symbols: /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password),
    longLength: password.length >= 12
  };

  // Her kriter için puan hesapla
  if (checks.length) score += 1;
  if (checks.lowercase) score += 1;
  if (checks.uppercase) score += 1;
  if (checks.numbers) score += 1;
  if (checks.symbols) score += 1;
  if (checks.longLength) score += 1;

  // Puana göre güç seviyesi belirle
  if (score <= 1) return 'very weak';
  if (score <= 2) return 'weak';
  if (score <= 3) return 'medium';
  if (score <= 4) return 'strong';
  if (score >= 5) return 'very strong';
  
  return 'weak';
};

// Password strength kriterleri
const getPasswordCriteria = (password) => {
  if (!password) return [];
  
  return [
    {
      label: 'En az 8 karakter',
      met: password.length >= 8,
      required: true
    },
    {
      label: 'Küçük harf (a-z)',
      met: /[a-z]/.test(password),
      required: true
    },
    {
      label: 'Büyük harf (A-Z)',
      met: /[A-Z]/.test(password),
      required: true
    },
    {
      label: 'Rakam (0-9)',
      met: /\d/.test(password),
      required: true
    },
    {
      label: 'Özel karakter (!@#$%^&*)',
      met: /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password),
      required: false
    },
    {
      label: 'En az 12 karakter',
      met: password.length >= 12,
      required: false
    }
  ];
};

// Password strength renkleri
const getStrengthColor = (strength) => {
  switch (strength) {
    case 'very weak': return '#ef4444'; // red-500
    case 'weak': return '#f97316'; // orange-500
    case 'medium': return '#eab308'; // yellow-500
    case 'strong': return '#22c55e'; // green-500
    case 'very strong': return '#16a34a'; // green-600
    default: return '#d1d5db'; // gray-300
  }
};

// Password strength Türkçe çeviriler
const getStrengthText = (strength) => {
  switch (strength) {
    case 'very weak': return 'Çok Zayıf';
    case 'weak': return 'Zayıf';
    case 'medium': return 'Orta';
    case 'strong': return 'Güçlü';
    case 'very strong': return 'Çok Güçlü';
    default: return '';
  }
};

// Password Context
const PasswordContext = createContext();

// Password Provider
export const PasswordProvider = ({ children }) => {
  validateProps({ children }, 'PasswordProvider');
  
  const value = {
    calculatePasswordStrength,
    getPasswordCriteria,
    getStrengthColor,
    getStrengthText
  };

  return (
    <PasswordContext.Provider value={value}>
      {children}
    </PasswordContext.Provider>
  );
};

// Hook to use password context
export const usePassword = () => {
  const context = useContext(PasswordContext);
  if (!context) {
    throw new Error('usePassword must be used within a PasswordProvider');
  }
  return context;
};

// Password Strength Component
export const PasswordStrength = ({ password, onStrengthChange, showCriteria = false }) => {
  validateProps({ password, onStrengthChange, showCriteria }, 'PasswordStrength');
  
  const strength = calculatePasswordStrength(password);
  const criteria = getPasswordCriteria(password);
  const strengthText = getStrengthText(strength);
  const strengthColor = getStrengthColor(strength);

  // Parent component'e strength değerini gönder
  React.useEffect(() => {
    if (onStrengthChange) {
      onStrengthChange(strength);
    }
  }, [strength, onStrengthChange]);

  const getStrengthWidth = (strength) => {
    switch (strength) {
      case 'very weak': return '20%';
      case 'weak': return '40%';
      case 'medium': return '60%';
      case 'strong': return '80%';
      case 'very strong': return '100%';
      default: return '0%';
    }
  };

  if (!password) return null;

  return (
    <div className="mt-2">
      {/* Strength Bar */}
      <div className="flex items-center justify-between mb-1">
        <span className="text-xs text-gray-600">Şifre Gücü</span>
        <span 
          className="text-xs font-medium"
          style={{ color: strengthColor }}
        >
          {strengthText}
        </span>
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
        <div 
          className="h-2 rounded-full transition-all duration-300"
          style={{ 
            width: getStrengthWidth(strength),
            backgroundColor: strengthColor
          }}
        ></div>
      </div>

      {/* Criteria List (Optional) */}
      {showCriteria && (
        <div className="mt-3 space-y-1">
          <p className="text-xs font-medium text-gray-700 mb-2">Şifre Kriterleri:</p>
          {criteria.map((criterion, index) => (
            <div key={index} className="flex items-center text-xs">
              <div className={`w-3 h-3 rounded-full mr-2 flex items-center justify-center ${
                criterion.met ? 'bg-green-500' : 'bg-gray-300'
              }`}>
                {criterion.met && (
                  <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
              <span className={`${criterion.met ? 'text-green-600' : 'text-gray-500'} ${
                criterion.required ? 'font-medium' : ''
              }`}>
                {criterion.label}
                {criterion.required && <span className="text-red-500 ml-1">*</span>}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Sadece strength hesaplama için utility fonksiyon
export const checkPasswordStrength = (password) => {
  return calculatePasswordStrength(password);
};

export default PasswordStrength;