import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (

            <div className='Navbar flex font-mont'>
                <div className='Container flex'>
                    <div className='NavbarStyle flex items-center gap-x-24'>
                        <div className='NavbarBrand font-bold text-[#252B42] text-2xl'><h3>BatutStore</h3></div>
                        <div className='NavbarCollapse flex items-center'>
                            <div className='NavbarNav flex list-none gap-6'>
                                <li><a className='text-[#737373] font-bold text-sm/[14px]' href="#">Home</a></li>
                                <li><a className='text-[#252B42] font-medium text-sm/[14px]' href="#">ShopDropdown</a></li>
                                <li><a className='text-[#737373] font-bold text-sm/[14px]' href="#">About</a></li>
                                <li><a className='text-[#737373] font-bold text-sm/[14px]' href="#">Blog</a></li>
                                <li><a className='text-[#737373] font-bold text-sm/[14px]' href="#">Contact</a></li>
                                <li><a className='text-[#737373] font-bold text-sm/[14px]' href="#">Pages</a></li>
                            </div>
                            <div className='NavbarNav flex list-none gap-6'>
                                <div className='LogReg flex items-center pl-24'>
                                    <li>
                                        <a href="">
                                            <div id='Btn-32'>
                                                <div id='IconSettings'>
                                                    <img src="" alt="vector" />
                                                    <h1 className='font-bold text-[#23A6F0] text-sm/[14px]'>Login / Register</h1>
                                                </div>

                                            </div>
                                        </a>
                                    </li>
                                </div>
                                <div className='FindTool'>
                                    <li>
                                        <a href="">
                                            <span id='Btn-32'>
                                                <span id='IconSettings'>
                                                    <img src="" alt="vector" />
                                                </span>

                                            </span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="">
                                            <span id='Btn-32'>
                                                <span id='IconSettings'>
                                                    <img src="" alt="vector" />
                                                </span>
                                                <h1>1</h1>
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <span id='Btn-32'>
                                                <span id='IconSettings'>
                                                    <img src="" alt="vector" />
                                                </span>
                                                <h1>1</h1>
                                            </span>
                                        </a>
                                    </li>
                                </div>
                            </div>

                        </div>
                        <div className='NavbarToggler'>
                            <div className='NavbarTogglerIcon'></div>
                        </div>

                    </div>
                </div>
            </div>

        )
    }
}
