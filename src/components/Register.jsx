import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { PasswordStrength } from '../contexts/Password';
import Header from '../components/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HiCheck, HiX, HiEye, HiEyeOff } from 'react-icons/hi';

export const PasswordStrengthExample = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [strength, setStrength] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const history = useHistory();

  const handlePasswordChange = (password, strength) => {
    setPassword(password);
    setStrength(strength);
  };

  const getStrengthColor = (strength) => {
    switch (strength) {
      case 'very weak': return 'bg-red-500';
      case 'weak': return 'bg-orange-500';
      case 'medium': return 'bg-yellow-500';
      case 'strong': return 'bg-green-500';
      case 'very strong': return 'bg-green-600';
      default: return 'bg-gray-300';
    }
  };

  const getStrengthWidth = (strength) => {
    switch (strength) {
      case 'very weak': return 'w-1/5';
      case 'weak': return 'w-2/5';
      case 'medium': return 'w-3/5';
      case 'strong': return 'w-4/5';
      case 'very strong': return 'w-full';
      default: return 'w-0';
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');
    setIsLoading(true);

    if (!firstName || !lastName) {
      setErrorMessage('Lütfen ad ve soyadınızı giriniz.');
      toast.error('Ad ve soyad alanları zorunludur!', {
        position: "top-right",
        autoClose: 3000,
      });
      setIsLoading(false);
      return;
    }

    if (!email.includes('@')) {
      setErrorMessage('Lütfen geçerli bir e-mail adresi belirleyiniz.');
      toast.error('Lütfen geçerli bir e-mail adresi giriniz!', {
        position: "top-right",
        autoClose: 3000,
      });
      setIsLoading(false);
      return;
    }

    if (!password) {
      setErrorMessage('Lütfen geçerli bir şifre belirleyiniz.');
      toast.error('Şifre alanı zorunludur!', {
        position: "top-right",
        autoClose: 3000,
      });
      setIsLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Şifreler eşleşmiyor.');
      toast.error('Şifreler eşleşmiyor!', {
        position: "top-right",
        autoClose: 3000,
      });
      setIsLoading(false);
      return;
    }

    if (!acceptTerms) {
      setErrorMessage('Lütfen kullanım koşullarını kabul ediniz.');
      toast.error('Kullanım koşullarını kabul etmelisiniz!', {
        position: "top-right",
        autoClose: 3000,
      });
      setIsLoading(false);
      return;
    }

    if (strength === 'strong' || strength === 'very strong') {
      setTimeout(() => {
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        localStorage.setItem('firstName', firstName);
        localStorage.setItem('lastName', lastName);
        
        toast.success('Hesabınız başarıyla oluşturuldu! Giriş sayfasına yönlendiriliyorsunuz...', {
          position: "top-right",
          autoClose: 2000,
        });

        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setFirstName('');
        setLastName('');
        setStrength('');
        setIsLoading(false);

        setTimeout(() => {
          history.push('/Login');
        }, 2000);
      }, 1000);
    } else {
      setErrorMessage('Lütfen daha güçlü bir şifre belirleyiniz.');
      toast.error('Şifreniz yeterince güçlü değil!', {
        position: "top-right",
        autoClose: 3000,
      });
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <ToastContainer />
      
      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl w-full">
          
          {/* Left Side - Form */}
          <div className="flex items-center justify-center order-2 lg:order-1">
            <div className="w-full max-w-md">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="text-center mb-8">
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">Hesap Oluştur</h1>
                  <p className="text-gray-600">Alışveriş deneyiminizi başlatın</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Fields */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        Ad
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="Adınız"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Soyad
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Soyadınız"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-posta Adresi
                    </label>
                    <div className="relative">
                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="ornek@email.com"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 pl-12"
                      />
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                        <i className="fa-regular fa-envelope text-gray-400"></i>
                      </div>
                    </div>
                  </div>

                  {/* Password */}
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                      Şifre
                    </label>
                    <div className="relative">
                      <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => handlePasswordChange(e.target.value, strength)}
                        placeholder="Güçlü bir şifre oluşturun"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 pl-12 pr-12"
                      />
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                        <i className="fa-solid fa-lock text-gray-400"></i>
                      </div>
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <HiEyeOff size={20} /> : <HiEye size={20} />}
                      </button>
                    </div>
                    
                    {/* Password Strength Indicator */}
                    {password && (
                      <div className="mt-2">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs text-gray-600">Şifre Gücü</span>
                          <span className={`text-xs font-medium ${strength === 'very strong' || strength === 'strong' ? 'text-green-600' : 'text-orange-600'}`}>
                            {strength}
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className={`h-2 rounded-full transition-all duration-300 ${getStrengthWidth(strength)} ${getStrengthColor(strength)}`}></div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Confirm Password */}
                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                      Şifre Tekrar
                    </label>
                    <div className="relative">
                      <input
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Şifrenizi tekrar giriniz"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 pl-12 pr-12"
                      />
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                        <i className="fa-solid fa-lock text-gray-400"></i>
                      </div>
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showConfirmPassword ? <HiEyeOff size={20} /> : <HiEye size={20} />}
                      </button>
                    </div>
                    {confirmPassword && password !== confirmPassword && (
                      <p className="text-red-500 text-xs mt-1">Şifreler eşleşmiyor</p>
                    )}
                  </div>

                  {/* Terms and Conditions */}
                  <div className="flex items-center">
                    <input
                      id="acceptTerms"
                      type="checkbox"
                      checked={acceptTerms}
                      onChange={(e) => setAcceptTerms(e.target.checked)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="acceptTerms" className="ml-2 block text-sm text-gray-900">
                      <a href="#" className="text-blue-600 hover:text-blue-700">Kullanım koşullarını</a> ve{' '}
                      <a href="#" className="text-blue-600 hover:text-blue-700">gizlilik politikasını</a> kabul ediyorum
                    </label>
                  </div>

                  {errorMessage && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                      {errorMessage}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Hesap oluşturuluyor...
                      </>
                    ) : (
                      'Hesap Oluştur'
                    )}
                  </button>

                  <div className="text-center">
                    <p className="text-gray-600">
                      Zaten hesabınız var mı?{' '}
                      <button
                        type="button"
                        onClick={() => history.push('/Login')}
                        className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                      >
                        Giriş yapın
                      </button>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="hidden lg:block order-1 lg:order-2">
            <div className="relative h-full min-h-[700px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                alt="Join our community"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <h2 className="text-3xl font-bold mb-2">Join Our Community!</h2>
                <p className="text-lg opacity-90">Discover amazing products and exclusive deals</p>
                <div className="flex items-center mt-4 space-x-4">
                  <div className="flex items-center">
                    <i className="fa-solid fa-users mr-2"></i>
                    <span>10K+ Happy Customers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};