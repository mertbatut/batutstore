import React, { Component } from 'react'
import Header2 from '../components/Header2'
import { Breadcrumb } from "flowbite-react";
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
  </div></div>
    )
  }
}
