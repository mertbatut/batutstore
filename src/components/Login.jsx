import React from 'react'
import Header from './Header';

const LoginPage = () => {
  return (
   
   <div >
    <Header/>
        <div className='LoginStyle'>
        <div className='LoginTotal shadow-lg  w-[580px]  px-16 py-16 bg-[#26442b] rounded-3xl'>
            <h1 className='flex pb-8 font-bold text-5xl text-[#FFFFFF]'>Login</h1>
            <div className='LoginRow1 flex flex-col gap-3 pb-3'>
                <h1 className='text-[#FFFFFF]'>Mail Adresinizi Giriniz</h1>
                <input className='w-[400px] h-[40px] rounded-md border-2' type="mail" placeholder='E-mail'/>
                <button className='w-[130px] h-[40px] bg-[#23A6F0] text-[#FFFFFF]' type='submit'>Submit</button>
            </div>
            <div className='Loginrow2 flex flex-col gap-3 '>
            <h1 className='text-[#FFFFFF]'>Şifrenizi Giriniz</h1>
                <input className='w-[400px] rounded-lg border-2 h-[40px]' type="password" placeholder='Şifrenizi Giriniz'/>
                <button className='w-[130px] h-[40px] bg-[#23A6F0] text-[#FFFFFF]' type='submit' >Submit</button>
            </div>
            <div className='LoginRow3'></div>
        </div>
        </div>
        </div>
  )
}
export default LoginPage;