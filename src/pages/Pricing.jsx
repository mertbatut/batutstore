import React, { Component } from 'react'
import Header2 from '../components/Header2'
import { Breadcrumb, ToggleSwitch } from "flowbite-react";
import { HiHome } from "react-icons/hi";




export default class Price extends Component {
  render() {
    return (
      <div><div className='TeamHeader'>
        <Header2 />
        <div className='TeamRow flex justify-center py-12'>
          <div className='TeamText flex flex-col items-center gap-8'>
            <h5 className='font-bold text-base text-[#737373]'>PRICING</h5>
            <h2 className='text-6xl font-bold text-[#252B42]'>Simple Pricing</h2>
            <Breadcrumb >
              <Breadcrumb.Item href="/" icon={HiHome}>
                Home
              </Breadcrumb.Item>
              <Breadcrumb.Item href="TeamPage">Pricing</Breadcrumb.Item>

            </Breadcrumb>
          </div>
        </div>
      </div>
        <div className='PricingMain bg-[#FAFAFA]'>
          <div className="PriceContainer  py-28">
            <div className='PriceRow1'>
              <div className='flex flex-col items-center gap-8'>
                <h2 className='text-4xl font-bold text-[#252B42]'>Pricing</h2>
                <p className='font-normal text-base text-[#737373]'>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
              </div>
            </div>
            <div className='PriceSwitch flex justify-center items-center gap-4 pt-8'>
              <div class="form-control flex gap-4 flex-row">
                <label class="label cursor-pointer flex gap-2">
                  <span class="label-text font-bold text-base text-[#252B42]">Montly</span>
                  <input type="checkbox" class="toggle" checked />
                </label>
                <div className='PriceCheck flex gap-2 items-center'>
                  <h1 className='font-bold text-base text-[#252B42]'>Yearly</h1>
                  <button className='bg-[#B2E3FF] rounded-[37px] py-3 px-5 text-sm font-bold text-[#23A6F0]'>Save 25%</button>
                </div>
              </div>
            </div>
            <div className='PriceRow2 flex justify-center py-24'>
              <div className='PriceCard1 W-[327px] h-[664px] flex'>
                <div className="PriceCardStyle1 bg-[#FFFFFF] py-12 px-11 border-2 border-[#23A6F0] rounded-xl flex flex-col gap-[30px]">
                  <h3 className='text-[#252B42] font-bold text-2xl flex justify-center'>FREE</h3>
                  <h5 className='text-base font-bold text-[#737373]'>Organize across all apps by hand</h5>
                  <div className='flex justify-evenly'>
                    <h2 className='text-[40px] font-bold text-[#23A6F0]'>0</h2>
                    <div>
                      <h3 className='text-[#23A6F0] font-bold text-2xl'>$</h3>
                      <h5 className='text-sm text-[#8EC2F2] font-bold'>Per Month</h5>
                    </div>
                  </div>
                  <div className='flex items-center gap-4'>
                    <button className='rounded-[200px] w-[32px] h-[32px] bg-[#2DC071]'><i class="fa-solid fa-check text-white"></i></button>
                    <h6 className='font-bold text-sm text-[#252B42]'>Unlimited product updates</h6>
                  </div>
                  <div className='flex items-center gap-4'>
                  <button className='rounded-[200px] w-[32px] h-[32px] bg-[#2DC071]'><i class="fa-solid fa-check text-white"></i></button>
                    <h6 className='font-bold text-sm text-[#252B42]'>Unlimited product updates</h6>
                  </div>
                  <div className='flex items-center gap-4'>
                  <button className='rounded-[200px] w-[32px] h-[32px] bg-[#2DC071]'><i class="fa-solid fa-check text-white"></i></button>
                    <h6 className='font-bold text-sm text-[#252B42]'>Unlimited product updates</h6>
                  </div>
                  <div className='flex items-center gap-4'>
                  <button className='rounded-[200px] w-[32px] h-[32px] bg-[#BDBDBD]'><i class="fa-solid fa-check text-white"></i></button>
                    <h6 className='font-bold text-sm text-[#252B42]'>1GB  Cloud storage</h6>
                  </div>
                  <div className='flex items-center gap-4'>
                  <button className='rounded-[200px] w-[32px] h-[32px] bg-[#BDBDBD]'><i class="fa-solid fa-check text-white"></i></button>
                    <h6 className='font-bold text-sm text-[#252B42]'>Email and community support</h6>
                  </div>
                  
                  <button className='py-3.5 rounded-md px-10 flex gap-3 bg-[#252B42]'><p className='text-sm font-bold text-[#FFFFFF]'>Try for free</p></button>

                </div>
              </div>
              <div className='PriceCard2'>
              <div className='PriceCard2 W-[327px] h-[704px] flex'>
                <div className="PriceCardStyle1 bg-[#252B42] py-12 px-11 border-2 border-[#23A6F0] rounded-xl flex flex-col gap-[30px]">
                  <h3 className='text-[#FFFFFF] font-bold text-2xl flex justify-center'>STANDART</h3>
                  <h5 className='text-base font-bold text-[#FFFFFF]'>Organize across all apps by hand</h5>
                  <div className='flex justify-evenly'>
                    <h2 className='text-[40px] font-bold text-[#23A6F0]'>9.99</h2>
                    <div>
                      <h3 className='text-[#23A6F0] font-bold text-2xl'>$</h3>
                      <h5 className='text-sm text-[#8EC2F2] font-bold'>Per Month</h5>
                    </div>
                  </div>
                  <div className='flex items-center gap-4'>
                    <button className='rounded-[200px] w-[32px] h-[32px] bg-[#2DC071]'><i class="fa-solid fa-check text-white"></i></button>
                    <h6 className='font-bold text-sm text-[#FFFFFF]'>Unlimited product updates</h6>
                  </div>
                  <div className='flex items-center gap-4'>
                  <button className='rounded-[200px] w-[32px] h-[32px] bg-[#2DC071]'><i class="fa-solid fa-check text-white"></i></button>
                    <h6 className='font-bold text-sm text-[#FFFFFF]'>Unlimited product updates</h6>
                  </div>
                  <div className='flex items-center gap-4'>
                  <button className='rounded-[200px] w-[32px] h-[32px] bg-[#2DC071]'><i class="fa-solid fa-check text-white"></i></button>
                    <h6 className='font-bold text-sm text-[#FFFFFF]'>Unlimited product updates</h6>
                  </div>
                  <div className='flex items-center gap-4'>
                  <button className='rounded-[200px] w-[32px] h-[32px] bg-[#BDBDBD]'><i class="fa-solid fa-check text-white"></i></button>
                    <h6 className='font-bold text-sm text-[#FFFFFF]'>1GB  Cloud storage</h6>
                  </div>
                  <div className='flex items-center gap-4'>
                  <button className='rounded-[200px] w-[32px] h-[32px] bg-[#BDBDBD]'><i class="fa-solid fa-check text-white"></i></button>
                    <h6 className='font-bold text-sm text-[#FFFFFF]'>Email and community support</h6>
                  </div>
                  
                  <button className='py-3.5 rounded-md px-10 flex gap-3 bg-[#23A6F0]'><p className='text-sm font-bold text-[#FFFFFF]'>Try for free</p></button>
                  
                </div>
              </div>
              </div>
              <div className='PriceCard3'>
              <div className='PriceCard3 W-[327px] h-[664px] flex'>
                <div className="PriceCardStyle1 bg-[#FFFFFF] py-12 px-11 border-2 border-[#23A6F0] rounded-xl flex flex-col gap-[30px]">
                  <h3 className='text-[#252B42] font-bold text-2xl flex justify-center'>PREMIUM</h3>
                  <h5 className='text-base font-bold text-[#737373]'>Organize across all apps by hand</h5>
                  <div className='flex justify-evenly'>
                    <h2 className='text-[40px] font-bold text-[#23A6F0]'>19.99</h2>
                    <div>
                      <h3 className='text-[#23A6F0] font-bold text-2xl'>$</h3>
                      <h5 className='text-sm text-[#8EC2F2] font-bold'>Per Month</h5>
                    </div>
                  </div>
                  <div className='flex items-center'>
                    <button className='rounded-[200px] w-[32px] h-[32px] bg-[#2DC071]'><i class="fa-solid fa-check text-white"></i></button>
                    <h6 className='font-bold text-sm text-[#252B42]'>Unlimited product updates</h6>
                  </div>
                  <div className='flex items-center gap-4'>
                  <button className='rounded-[200px] w-[32px] h-[32px] bg-[#2DC071]'><i class="fa-solid fa-check text-white"></i></button>
                    <h6 className='font-bold text-sm text-[#252B42]'>Unlimited product updates</h6>
                  </div>
                  <div className='flex items-center gap-4'>
                  <button className='rounded-[200px] w-[32px] h-[32px] bg-[#2DC071]'><i class="fa-solid fa-check text-white"></i></button>
                    <h6 className='font-bold text-sm text-[#252B42]'>Unlimited product updates</h6>
                  </div>
                  <div className='flex items-center gap-4'>
                  <button className='rounded-[200px] w-[32px] h-[32px] bg-[#BDBDBD]'><i class="fa-solid fa-check text-white"></i></button>
                    <h6 className='font-bold text-sm text-[#252B42]'>1GB  Cloud storage</h6>
                  </div>
                  <div className='flex items-center gap-4'>
                  <button className='rounded-[200px] w-[32px] h-[32px] bg-[#BDBDBD]'><i class="fa-solid fa-check text-white"></i></button>
                    <h6 className='font-bold text-sm text-[#252B42]'>Email and community support</h6>
                  </div>
                  
                  <button className='py-3.5 rounded-md px-10 flex gap-3 bg-[#252B42]'><p className='text-sm font-bold text-[#FFFFFF]'>Try for free</p></button>
                  
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
