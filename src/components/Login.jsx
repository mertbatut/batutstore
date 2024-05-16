import React from 'react'
import Header from './Header';
import Footer from './Footer';

const LoginPage = () => {
  return (
   
            
    <div >
    <div><Header/></div>
    <hr />
<div className='LoginBrand flex justify-between pt-8 pb-10'>   
        <div className='LoginImg  pl-20'>
            <img className='h-[700px] w-[1100px] rounded-lg ' src="https://s3-alpha-sig.figma.com/img/b178/ccf1/36301d841438b7cd53ac541b247fb3fa?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AXY5OZ3SNhv-43G6OPaAV~EiWArHWj5TP2NqCY5zo~jOfN2zxRQX23LxE6UImKS3w3u4o7ZQA5jAgZs3TJ15j6yMrsifmfc66-kLo5yonf7xKFEvk-GtvZo~D0fpYgVfAXjP4qP22kXrj8AphEYl8Rv5LdD7c2fgtekw~ZVfqC-LrN7OMwhUOa3TRitnPN~fgBGKD9Yi6ltr4BD-T7~tka0wlYS1WXPIlBHPyRraHPsMA1N8C0l7-oZ8EJEDcVdJHINNUVtcZScOm6d0wyPPdlJSix55YlEwSQvof6Yl1nOFt5iNES2Z6PFyHLzY7IRXAcVzRdtHr4y12JBzbCfNEw__" alt="" />
        </div>
        <div className='LoginStyle pt-40 px-28 '>
        <div className='LoginTotal shadow-lg  w-[580px]  px-16 py-16 bg-[#c6d1c8] rounded-3xl drop-shadow-2xl'>
            <h1 className=' pb-8 font-bold text-5xl text-[#FFFFFF]'>Login</h1>
            <div className='LoginRow1 flex flex-col gap-3 pb-3'>
                <h1 className='text-[#FFFFFF]'>Mail Adresinizi Giriniz</h1>
                <input className='w-[400px] h-[40px] rounded-md border-2' type="mail" placeholder='E-mail'/>
                
            </div>
            <div className='Loginrow2 flex flex-col gap-3 '>
            <h1 className='text-[#FFFFFF]'>Şifrenizi Giriniz</h1>
                <input className='w-[400px] rounded-lg border-2 h-[40px]' type="password" placeholder='Şifrenizi Giriniz'/>
                <button className='w-[130px] h-[40px] bg-[#23A6F0] text-[#FFFFFF]' type='submit' >Login</button>
            </div>
           
        </div>
        </div>
        </div>  
        <Footer/>
        </div>
  )
}
export default LoginPage;