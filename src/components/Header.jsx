import React, { Component } from 'react';
import Drop from './dropdown';
import SearchEvent from '../contexts/SearchEvent';

export default class Header extends Component {
  render() {
    return (
      <div className='Navbar flex pt-10 py-12 justify-center'>
        <div className='Container flex'>
          <div className='NavbarStyle flex items-center gap-x-24'>
            <div className='NavbarBrand'>
              <a className='font-bold text-[#252B42] text-2xl' href='/'>BatutStore</a>
            </div>
            <div className='NavbarCollapse flex items-center'>
              <div className='NavbarNav flex list-none gap-6 items-center'>
                <li>
                  <a className='text-[#737373] font-bold text-sm/[14px]' href="/">Home</a>
                </li>
                <details className="dropdown">
                  <summary className="m-1">Shop</summary>
                  <ul className="p-2 menu dropdown-content z-[1] w-52">
                    <Drop />
                  </ul>
                </details>
                <li>
                  <a className='text-[#737373] font-bold text-sm/[14px]' href="Login">About</a>
                </li>
                <li>
                  <a className='text-[#737373] font-bold text-sm/[14px]' href="Blog">Blog</a>
                </li>
                <li>
                  <a className='text-[#737373] font-bold text-sm/[14px]' href="Contact">Contact</a>
                </li>
                <li>
                  <a className='text-[#737373] font-bold text-sm/[14px]' href="Action">Pages</a>
                </li>
              </div>
              <div className='NavbarNav flex list-none gap-6 items-center'>
                <div className='LogReg flex items-center pl-24'>
                  <li>
                    <div id='Btn-32'>
                      <div className='IconSettings flex items-center'>
                        <a href="Login">
                          <h1 className='font-bold text-[#23A6F0] text-sm/[14px]'>
                            <i className="fa-regular fa-user"></i>Login
                          </h1>
                        </a>
                        <a href="Register">
                          <h1 className='font-bold text-[#23A6F0] text-sm/[14px]'> /  Register</h1>
                        </a>
                      </div>
                    </div>
                  </li>
                </div>
                <div className='FindTool flex gap-12'>
                  <SearchEvent />
                  <li>
                    <a href="">
                      <span id='Btn-32'>
                        <span id='IconSettings'>
                          <h1 className='text-base'><i className="fa-solid fa-cart-shopping fa-xs"></i> 1</h1>
                        </span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <div className='Btn-32 h-px-16'>
                        <div className='IconSettings'>
                          <h1 className='text-base'><i className="fa-regular fa-heart fa-beat fa-xs"></i> 1</h1>
                        </div>
                      </div>
                    </a>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
