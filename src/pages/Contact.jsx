import React, { Component } from 'react'
import { Button } from "@material-tailwind/react";
import Header from '../components/Header'
export default class Contact extends Component {
  render() {
    return (
      <div>
        <Header/>
       <div className='ContactTotal '>
        <div className='ContactContainer '>
            <div className='ContactRow absolute flex items-center gap-24 pl-80 pt-28 '>
                <div className='ContactText1 flex flex-col gap-9 w-[367px] h-[234px]'>
                    <h2 className='font-bold text-[40px] text-[#FFFFFF] '>CONTACT US</h2>
                    <p className='text-sm font-normal text-[#FFFFFF]'>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
                    <a className='flex' href="Contact"> 
                           <Button className='w-46 h-14 rounded-md px-10 py-4 gap-2.5 font-bold text-sm tracking-widest' size="lg" color="blue">
                            <h3>Contact Us</h3>
                        </Button></a>
                </div>
                <div className='ContactText2'>
                    <div className='ContactHorizon1 p-6 flex flex-col gap-4'>
                        <h3 className='text-2xl font-bold text-[#FFFFFF]'>Paris</h3>
                        <h4 className='text-xl font-normal text-[#FFFFFF]'>1901 Thorn Ridge cir.</h4>
                        <hr className='border-[#23A6F0] border-2'/>
                        <h5 className='text-xl font-normal text-[#FFFFFF]'>7500 Paris</h5>
                        <h5 className='text-xl font-normal text-[#FFFFFF]'>Phone: +451 215 215</h5>
                        <h5 className='text-xl font-normal text-[#FFFFFF]'>Fax : +451 215 215</h5>
                    </div>
                    <div className='ContactHorizon2 p-6 flex flex-col gap-4'>
                    <h3 className='text-2xl font-bold text-[#FFFFFF]'>Paris</h3>
                        <h4 className='text-xl font-normal text-[#FFFFFF]'>1901 Thorn Ridge cir.</h4>
                        <hr className='border-[#23A6F0] border-2'/>
                        <h5 className='text-xl font-normal text-[#FFFFFF]'>7500 Paris</h5>
                        <h5 className='text-xl font-normal text-[#FFFFFF]'>Phone: +451 215 215</h5>
                        <h5 className='text-xl font-normal text-[#FFFFFF]'>Fax : +451 215 215</h5>
                    </div>
                </div>
                <div className='ContactText3'>
                <div className='ContactHorizon3 p-6 flex flex-col gap-4'>
                        <h3 className='text-2xl font-bold text-[#FFFFFF]'>Paris</h3>
                        <h4 className='text-xl font-normal text-[#FFFFFF]'>1901 Thorn Ridge cir.</h4>
                        <hr className='border-[#23A6F0] border-2'/>
                        <h5 className='text-xl font-normal text-[#FFFFFF]'>7500 Paris</h5>
                        <h5 className='text-xl font-normal text-[#FFFFFF]'>Phone: +451 215 215</h5>
                        <h5 className='text-xl font-normal text-[#FFFFFF]'>Fax : +451 215 215</h5>
                    </div>
                    <div className='ContactHorizon4 p-6 flex flex-col gap-4'>
                    <h3 className='text-2xl font-bold text-[#FFFFFF]'>Paris</h3>
                        <h4 className='text-xl font-normal text-[#FFFFFF]'>1901 Thorn Ridge cir.</h4>
                        <hr className='border-[#23A6F0] border-2'/>
                        <h5 className='text-xl font-normal text-[#FFFFFF]' >7500 Paris</h5>
                        <h5 className='text-xl font-normal text-[#FFFFFF]'>Phone: +451 215 215</h5>
                        <h5 className='text-xl font-normal text-[#FFFFFF]'>Fax : +451 215 215</h5>
                    </div>
                </div>
            </div>
        </div>
        <div className='ContactImage '>
            <img className=' w-screen h-screen object-cover'  src="https://s3-alpha-sig.figma.com/img/96c8/6912/d491d421800e62998b9af7c838cc25d1?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ME~~D9gkMEvSPsSJVuH6KA0yA13zvRIbbxyYbKoZrLpoSY9OjuujJf5cCvlKL4KM4ukI-zHIC6~~45OV5d4KjiPI8soTaAHD9fMT7UjncHaCkVYK68cmPWrdNCSXlYjuZESEkFaKTKMMiP3Ky9FN7r2n-41pEmamlpt-q4z29M1shQrSkYTGTFTeAT8kk1Fu48cB0QgV2Ze9L5m3k07oRPFvy99XjT3arKAvbN4VISMUm7SZ9Tuc6JOKeBaH0eED8lkPrH~uGVaJ~zl9uPEwuuNbtvPtWQP0ngOVp4mJFzqRX2xUgJ7hWBxNwTofpgu20QxRs0JWABruTRndC5c72A__" alt="" />
        </div>
        </div>
      </div>
    )
  }
}
