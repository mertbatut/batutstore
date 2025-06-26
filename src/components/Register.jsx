import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { PasswordStrength, checkPasswordStrength } from '../contexts/Password';
import Header from '../components/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import { authService, cities } from '../api/authService'; // ✅ DÜZELT

export const PasswordStrengthExample = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    tcKimlikNo: '',
    phoneNumber: '',
    address: '',
    gender: '',
    city: '',
    birthDate: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [strength, setStrength] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const history = useHistory();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setFormData(prev => ({ ...prev, password: newPassword }));
    const newStrength = checkPasswordStrength(newPassword);
    setStrength(newStrength);
  };

  const validateForm = () => {
    const { firstName, lastName, tcKimlikNo, phoneNumber, address, gender, city, birthDate, email, password, confirmPassword } = formData;

    if (!firstName.trim() || !lastName.trim()) {
      setErrorMessage('Ad ve soyad alanları zorunludur.');
      return false;
    }

    if (!tcKimlikNo || tcKimlikNo.length !== 11 || !/^\d{11}$/.test(tcKimlikNo)) {
      setErrorMessage('TC Kimlik Numarası 11 haneli olmalı ve sadece rakam içermelidir.');
      return false;
    }

    if (!phoneNumber.trim()) {
      setErrorMessage('Telefon numarası zorunludur.');
      return false;
    }

    if (!address.trim()) {
      setErrorMessage('Adres zorunludur.');
      return false;
    }

    if (!gender) {
      setErrorMessage('Cinsiyet seçimi zorunludur.');
      return false;
    }

    if (!city) {
      setErrorMessage('Şehir seçimi zorunludur.');
      return false;
    }

    if (!birthDate) {
      setErrorMessage('Doğum tarihi zorunludur.');
      return false;
    }

    // Yaş kontrolü
    const birthDateObj = new Date(birthDate);
    const today = new Date();
    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDiff = today.getMonth() - birthDateObj.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateObj.getDate())) {
      age--;
    }

    if (age < 18) {
      setErrorMessage('18 yaşından küçük kullanıcılar kayıt olamaz.');
      return false;
    }

    if (!email.includes('@')) {
      setErrorMessage('Geçerli bir e-posta adresi giriniz.');
      return false;
    }

    if (!password) {
      setErrorMessage('Şifre zorunludur.');
      return false;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Şifreler eşleşmiyor.');
      return false;
    }

    if (!acceptTerms) {
      setErrorMessage('Kullanım koşullarını kabul etmelisiniz.');
      return false;
    }

    if (strength === 'very weak' || strength === 'weak') {
      setErrorMessage('Lütfen daha güçlü bir şifre belirleyiniz.');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setIsLoading(true);

    if (!validateForm()) {
      setIsLoading(false);
      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    try {
      // API'ye gönderilecek veri formatı
      const registerData = {
        firstName: formData.firstName.trim(),
        lastName: formData.lastName.trim(),
        tcKimlikNo: formData.tcKimlikNo,
        phoneNumber: formData.phoneNumber.trim(),
        address: formData.address.trim(),
        gender: formData.gender,
        city: formData.city,
        birthDate: formData.birthDate,
        email: formData.email.toLowerCase().trim(),
        password: formData.password,
        confirmPassword: formData.confirmPassword
      };

      console.log('Sending register data:', registerData); // Debug log

      const response = await authService.register(registerData);
      
      console.log('Register response:', response); // Debug log

      if (response.success) {
        toast.success('Hesabınız başarıyla oluşturuldu! Giriş sayfasına yönlendiriliyorsunuz...', {
          position: "top-right",
          autoClose: 2000,
        });

        // Form'u temizle
        setFormData({
          firstName: '',
          lastName: '',
          tcKimlikNo: '',
          phoneNumber: '',
          address: '',
          gender: '',
          city: '',
          birthDate: '',
          email: '',
          password: '',
          confirmPassword: ''
        });
        setStrength('');
        setAcceptTerms(false);

        setTimeout(() => {
          history.push('/Login');
        }, 2000);
      } else {
        // Backend'den gelen hata mesajı
        setErrorMessage(response.message || 'Kayıt işlemi başarısız oldu.');
        toast.error(response.message || 'Kayıt işlemi başarısız oldu!', {
          position: "top-right",
          autoClose: 3000,
        });
        
        // Eğer detaylı hatalar varsa onları da göster
        if (response.errors && response.errors.length > 0) {
          response.errors.forEach(err => {
            toast.error(err, {
              position: "top-right",
              autoClose: 3000,
            });
          });
        }
      }
    } catch (error) {
      console.error('Registration error:', error);
      setErrorMessage('Beklenmeyen bir hata oluştu.');
      toast.error('Beklenmeyen bir hata oluştu!', {
        position: "top-right",
        autoClose: 3000,
      });
    } finally {
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
                        Ad *
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="Adınız"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Soyad *
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Soyadınız"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* TC Kimlik No */}
                  <div>
                    <label htmlFor="tcKimlikNo" className="block text-sm font-medium text-gray-700 mb-2">
                      TC Kimlik Numarası *
                    </label>
                    <input
                      id="tcKimlikNo"
                      name="tcKimlikNo"
                      type="text"
                      value={formData.tcKimlikNo}
                      onChange={handleInputChange}
                      placeholder="12345678901"
                      maxLength="11"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon Numarası *
                    </label>
                    <input
                      id="phoneNumber"
                      name="phoneNumber"
                      type="tel"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      placeholder="+90 555 123 45 67"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>

                  {/* Address */}
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                      Adres *
                    </label>
                    <textarea
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Tam adresinizi giriniz"
                      rows="3"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>

                  {/* Gender and City */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-2">
                        Cinsiyet *
                      </label>
                      <select
                        id="gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Seçiniz</option>
                        <option value="Erkek">Erkek</option>
                        <option value="Kadın">Kadın</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                        Şehir *
                      </label>
                      <select
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Şehir Seçiniz</option>
                        {cities.map(city => (
                          <option key={city} value={city}>{city}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Birth Date */}
                  <div>
                    <label htmlFor="birthDate" className="block text-sm font-medium text-gray-700 mb-2">
                      Doğum Tarihi *
                    </label>
                    <input
                      id="birthDate"
                      name="birthDate"
                      type="date"
                      value={formData.birthDate}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-posta Adresi *
                    </label>
                    <div className="relative">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
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
                      Şifre *
                    </label>
                    <div className="relative">
                      <input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        value={formData.password}
                        onChange={handlePasswordChange}
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
                    <PasswordStrength 
                      password={formData.password} 
                      showCriteria={false}
                    />
                  </div>

                  {/* Confirm Password */}
                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                      Şifre Tekrar *
                    </label>
                    <div className="relative">
                      <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
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
                    {formData.confirmPassword && formData.password !== formData.confirmPassword && (
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
                      <a href="#" className="text-blue-600 hover:text-blue-700">gizlilik politikasını</a> kabul ediyorum *
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

export default PasswordStrengthExample;