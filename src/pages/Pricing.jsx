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
            <div className='PriceRow2'>
              <div className='PriceCard1'>
                <div className="PriceCardStyle1">
                  <h3></h3>
                  <h5></h5>
                  <div>
                    <h2></h2>
                    <div>
                      <h3></h3>
                      <h5></h5>
                    </div>
                  </div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  
                  

                  
                  
                  <div className='PriceCard2'></div>
                  <div className='PriceCard3'></div>
                </div>
              </div>
              <div className='PriceCard2'></div>
              <div className='PriceCard3'></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
