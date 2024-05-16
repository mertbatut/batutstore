import React, { Component } from 'react'

export default class Header2 extends Component {
  render() {
    return (
      <div> <div className='AboutHead'>
      <div className='Navbar flex pt-10 py-12 justify-center 	'>
          <div className='Container flex '>
              <div className='NavbarStyle flex items-center gap-x-24'>
                  <div className='NavbarBrand '><a className='font-bold text-[#252B42] text-2xl' href='/'>BatutStore</a></div>
                  <div className='NavbarCollapse flex items-center'>
                      <div className='NavbarNav flex list-none gap-6  items-center'>
                          <li><a className='text-[#737373] font-bold text-sm/[14px]' href="/">Home</a></li>

                          <li><a className='text-[#737373] font-bold text-sm/[14px]' href="About">Product</a></li>
                          <li><a className='text-[#737373] font-bold text-sm/[14px]' href="Pricing">Pricing</a></li>
                          <li><a className='text-[#737373] font-bold text-sm/[14px]' href="Contact">Contact</a></li>

                      </div>
                      <div className='NavbarNav flex list-none gap-6 items-center'>
                          <div className='LogReg flex items-center pl-24'>
                              <li>

                                  <div className='Btn-32 flex gap-12'>
                                      <div className='IconSettings flex items-center'>
                                          <a href="Login">  <h1 className='font-bold text-[#23A6F0] text-sm/[14px]'>Login</h1></a></div>
                                      <div className='ButonStyle'>
                                          <button className='BecomeButton bg-[#23A6F0] py-[15px] px-[25px] text-[#FFFFFF]'>Become a member <i class="fa-solid fa-arrow-right text-[#FFFFFF]"></i> </button>
                                      </div>

                                  </div>

                              </li>
                          </div>

                      </div>

                  </div>

                  {/* <div className='NavbarToggler'>
                  <div className='NavbarTogglerIcon'></div>
              </div> */}

              </div>
          </div>
      </div>

  </div></div>
    )
  }
}
