import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import { authService } from '../api/authService';

const LoginPage = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        // Kullanıcı zaten giriş yapmışsa direkt yönlendir
        if (authService.isAuthenticated()) {
            history.push('/');
        }
    }, [history]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        // Basic validation
        if (!email.trim()) {
            setError('E-posta adresi zorunludur.');
            toast.error('E-posta adresi zorunludur!', {
                position: "top-right",
                autoClose: 3000,
            });
            setIsLoading(false);
            return;
        }

        if (!email.includes('@')) {
            setError('Geçerli bir e-posta adresi giriniz.');
            toast.error('Geçerli bir e-posta adresi giriniz!', {
                position: "top-right",
                autoClose: 3000,
            });
            setIsLoading(false);
            return;
        }

        if (!password.trim()) {
            setError('Şifre zorunludur.');
            toast.error('Şifre zorunludur!', {
                position: "top-right",
                autoClose: 3000,
            });
            setIsLoading(false);
            return;
        }

        try {
            const credentials = {
                email: email.toLowerCase().trim(),
                password: password
            };

            const response = await authService.login(credentials);

            if (response.success) {
                toast.success('Giriş başarılı! Yönlendiriliyorsunuz...', {
                    position: "top-right",
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });

                // Form'u temizle
                setEmail('');
                setPassword('');

                setTimeout(() => {
                    history.push('/');
                }, 1500);
            }
        } catch (error) {
            console.error('Login error:', error);
            
            if (error.errors && error.errors.length > 0) {
                setError(error.errors.join(' '));
                error.errors.forEach(err => {
                    toast.error(err, {
                        position: "top-right",
                        autoClose: 3000,
                    });
                });
            } else {
                const errorMessage = error.message || 'Giriş işlemi başarısız oldu.';
                setError(errorMessage);
                toast.error(errorMessage, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            }
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
                    
                    {/* Left Side - Image */}
                    <div className="hidden lg:block">
                        <div className="relative h-full min-h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                                alt="Shopping Experience"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                            <div className="absolute bottom-8 left-8 text-white">
                                <h2 className="text-3xl font-bold mb-2">Welcome Back!</h2>
                                <p className="text-lg opacity-90">Continue your amazing shopping journey with us</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Login Form */}
                    <div className="flex items-center justify-center">
                        <div className="w-full max-w-md">
                            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                                <div className="text-center mb-8">
                                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Giriş Yap</h1>
                                    <p className="text-gray-600">Hesabınıza giriş yapın</p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
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

                                    <div>
                                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                                            Şifre
                                        </label>
                                        <div className="relative">
                                            <input
                                                id="password"
                                                type={showPassword ? "text" : "password"}
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                placeholder="Şifrenizi giriniz"
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
                                    </div>

                                    {error && (
                                        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                                            {error}
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="w-full bg-slate-800 text-white py-3 px-4 rounded-lg font-medium hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                                    >
                                        {isLoading ? (
                                            <>
                                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Giriş yapılıyor...
                                            </>
                                        ) : (
                                            'Giriş Yap'
                                        )}
                                    </button>

                                    <div className="text-center">
                                        <p className="text-gray-600">
                                            Üye değil misiniz?{' '}
                                            <button
                                                type="button"
                                                onClick={() => history.push('/Register')}
                                                className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                                            >
                                                Hesap oluşturun
                                            </button>
                                        </p>
                                    </div>

                                    <div className="text-center">
                                        <button
                                            type="button"
                                            onClick={() => {
                                                // Şifre sıfırlama sayfasına yönlendir
                                                toast.info('Şifre sıfırlama özelliği yakında aktif olacak.', {
                                                    position: "top-right",
                                                    autoClose: 3000,
                                                });
                                            }}
                                            className="text-blue-600 hover:text-blue-700 text-sm transition-colors duration-200"
                                        >
                                            Şifrenizi mi unuttunuz?
                                        </button>
                                    </div>
                                </form>
                            </div>

                            {/* Social Login */}
                            <div className="mt-6">
                                <div className="relative">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-gray-300"></div>
                                    </div>
                                    <div className="relative flex justify-center text-sm">
                                        <span className="px-2 bg-gray-50 text-gray-500">veya</span>
                                    </div>
                                </div>

                                <div className="mt-6 grid grid-cols-2 gap-3">
                                    <button 
                                        onClick={() => {
                                            toast.info('Google ile giriş özelliği yakında aktif olacak.', {
                                                position: "top-right",
                                                autoClose: 3000,
                                            });
                                        }}
                                        className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors duration-200"
                                    >
                                        <i className="fab fa-google text-red-500 mr-2"></i>
                                        Google
                                    </button>
                                    <button 
                                        onClick={() => {
                                            toast.info('Facebook ile giriş özelliği yakında aktif olacak.', {
                                                position: "top-right",
                                                autoClose: 3000,
                                            });
                                        }}
                                        className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors duration-200"
                                    >
                                        <i className="fab fa-facebook text-blue-600 mr-2"></i>
                                        Facebook
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer />
        </div>
    );
};

export default LoginPage;