import React, { Component } from 'react'
import { Button } from "@material-tailwind/react";

export default class Footer extends Component {
    render() {
        return (
            <div className='FooterMain bg-[#252B42] '>
                <div className='FooterFirst '>
                    <div className='Entry flex justify-between items-center px-96 py-10'>
                        <div className='FooterIn flex flex-col content-start'> 
                            <h3 className='text-[#FFFFFF] font-bold text-2xl leading-8'>Consulting Agency For Your Business</h3>
                            <p className='text-[#FFFFFF] font-normal text-sm leading-5'>the quick fox jumps over the lazy dog</p>
                            </div>
                        <div className='FooterOut'>
                            <Button className='w-52 h-16 rounded-md px-4 py-4 gap-2.5 font-bold text-xl tracking-widest' size="lg" color="blue">
                            <h3>Contact Us</h3>
                        </Button>
                        </div>
                        
                        
                        
                    </div>

                </div>
                <div className='FooterSecond flex justify-center gap-36'>
                            <div className='FooterContainer'>
                                <div className='FooterRow text-[#FFFFFF] list-none flex flex-col gap-5 '>
                                    <h5 className='font-bold text-base leading-6'>Company Info</h5>
                                    <div className='FooterInfo font-bold text-sm leading-6 flex flex-col gap-3'>
                                        <li>About Us</li>
                                        <li>Carrier</li>
                                        <li>We are hiring</li>
                                        <li>Blog</li>
                                        
                                    </div>
                                </div>
                                
                            </div>
                            <div className='FooterContainer'>
                                <div className='FooterRow text-[#FFFFFF] list-none flex flex-col gap-5 '>
                                    <h5 className='font-bold text-base leading-6'>Legal</h5>
                                    <div className='FooterInfo font-bold text-sm leading-6 flex flex-col gap-3'>
                                        <li>About Us</li>
                                        <li>Carrier</li>
                                        <li>We are hiring</li>
                                        <li>Blog</li>
                                        
                                    </div>
                                </div>
                                
                            </div>
                            <div className='FooterContainer'>
                                <div className='FooterRow text-[#FFFFFF] list-none flex flex-col gap-5 '>
                                    <h5 className='font-bold text-base leading-6'>Features</h5>
                                    <div className='FooterInfo font-bold text-sm leading-6 flex flex-col gap-3'>
                                        <li>Business Marketing</li>
                                        <li>User Analytic</li>
                                        <li>Live Chat</li>
                                        <li>Unlimited Support</li>
                                        
                                    </div>
                                </div>
                                
                            </div>
                            <div className='FooterContainer'>
                                <div className='FooterRow text-[#FFFFFF] list-none flex flex-col gap-5 '>
                                    <h5 className='font-bold text-base leading-6'>Resources</h5>
                                    <div className='FooterInfo font-bold text-sm leading-6 flex flex-col gap-3'>
                                        <li>IOS & Android</li>
                                        <li>Watch a Demo</li>
                                        <li>Customers</li>
                                        <li>API</li>
                                        
                                    </div>
                                </div>
                                
                            </div>
                            <div className='FooterContainer'>
                                <div className='FooterRow text-[#FFFFFF] list-none flex flex-col gap-5 '>
                                    <h5 className='font-bold text-base leading-6'>Get in Touch</h5>
                                    <div className='FooterInfo font-bold text-sm leading-6 flex flex-col gap-3'>
                                        <li><i class="fa-solid fa-phone fa-xl w-6"></i> (480) 555-0103</li>
                                        <li><i class="fa-solid fa-location-dot fa-xl w-6"></i> 4517 Washington Ave. </li>
                                        <li><i class="fa-solid fa-envelope fa-xl w-6"></i> debra.holt@example.com</li>
                                        
                                        
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                <div className='FooterThird'></div>
            </div>
        )
    }
}
