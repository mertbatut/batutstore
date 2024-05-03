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
                <div className='FooterSecond'></div>
                <div className='FooterThird'></div>
            </div>
        )
    }
}
