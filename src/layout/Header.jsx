import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className='Container'>
                <div className='NavbarStyle'>
                    <div className='NavbarCollapse'>
                        <div className='NavbarNav'>
                            <li>
                                <a href="">
                                    <span id='Btn-32'>
                                        <span id='IconSettings'>
                                            <img src="" alt="vector" />
                                        </span>
                                        <h1>Login / Register</h1>
                                    </span>
                                </a>
                            </li>
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
                        <div className='NavbarNav'>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">ShopDropdown</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Pages</a></li>
                        </div>
                    </div>
                    <div className='NavbarToggler'>
                        <div className='NavbarTogglerIcon'></div>
                    </div>
                    <div className='NavbarBrand'><h1>Bandage</h1></div>
                </div>
            </div>
        )
    }
}
