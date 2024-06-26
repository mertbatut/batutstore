import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HiCheck, HiX } from 'react-icons/hi';

const LoginPage = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        const storedEmail = localStorage.getItem('email');
        const storedPassword = localStorage.getItem('password');

        if (email === storedEmail && password === storedPassword) {
            setIsAuthenticated(true);
            toast.success(
                <div className="inline-flex h-8 w-60 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                    <HiCheck className="h-5 w-5" />
                    <div className="ml-3 text-sm font-normal">Giriş Başarılı</div>
                </div>
            );

            setTimeout(() => {
                history.push('/About');
            }, 1500); // 1.5 saniye sonra yönlendirme
        } else {
            setError('Kullanıcı bulunamadı veya şifre hatalı.');
            toast.error(
                <div className="inline-flex h-8 w-60 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200">
                    <HiX className="h-5 w-5" />
                    <div className="ml-3 text-sm font-normal">Giriş Başarısız</div>
                </div>
            );
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
        history.push('/login');
    };

    return (
        <div>
            <Header />
            <ToastContainer />
            <hr />
            <div className='LoginBrand flex justify-between pt-8 pb-10'>
                <div className='LoginImg pl-20'>
                    <img className='h-[700px] w-[1100px] rounded-lg' src="https://s3-alpha-sig.figma.com/img/b178/ccf1/36301d841438b7cd53ac541b247fb3fa?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AXY5OZ3SNhv-43G6OPaAV~EiWArHWj5TP2NqCY5zo~jOfN2zxRQX23LxE6UImKS3w3u4o7ZQA5jAgZs3TJ15j6yMrsifmfc66-kLo5yonf7xKFEvk-GtvZo~D0fpYgVfAXjP4qP22kXrj8AphEYl8Rv5LdD7c2fgtekw~ZVfqC-LrN7OMwhUOa3TRitnPN~fgBGKD9Yi6ltr4BD-T7~tka0wlYS1WXPIlBHPyRraHPsMA1N8C0l7-oZ8EJEDcVdJHINNUVtcZScOm6d0wyPPdlJSix55YlEwSQvof6Yl1nOFt5iNES2Z6PFyHLzY7IRXAcVzRdtHr4y12JBzbCfNEw__" alt="Login" />
                </div>
                <div className='LoginStyle pt-40 px-28'>
                    <div className='LoginTotal shadow-lg w-[580px] px-16 py-16 bg-[#c6d1c8] rounded-3xl drop-shadow-2xl'>
                        <h1 className='pb-8 font-bold text-5xl text-[#FFFFFF]'>Login</h1>
                        <form onSubmit={handleSubmit}>
                            <div className='LoginRow1 flex flex-col gap-3 pb-3'>
                                <label htmlFor="email" className='text-[#FFFFFF]'>Mail Adresinizi Giriniz</label>
                                <input id="email" className='w-[400px] h-[40px] rounded-md border-2' type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='E-mail' required />
                            </div>
                            <div className='Loginrow2 flex flex-col gap-3'>
                                <label htmlFor="password" className='text-[#FFFFFF]'>Şifrenizi Giriniz</label>
                                <input id="password" className='w-[400px] rounded-lg border-2 h-[40px]' type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Şifrenizi Giriniz' required />
                                <button className='w-[130px] h-[40px] bg-[#23A6F0] text-[#FFFFFF]' type='submit'>Login</button>
                                <h1>Üye değil misin ?</h1>
                                <button className='w-[130px] h-[40px] bg-[#23A6F0] text-[#FFFFFF]' type='button' onClick={() => history.push('/Register')}>Hesap Oluştur</button>
                            </div>
                        </form>
                        {error && <p className='text-red-500 mt-4'>{error}</p>}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default LoginPage;
