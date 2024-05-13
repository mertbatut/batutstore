import React, { Component } from 'react'
import Header from '../components/Header'
import 'flowbite';

export default class ProductList extends Component {
    render() {
        return (
            <div>
                <div className='NavbarDark bg-[#23856D]'>
                    <div className='DarkContainer flex justify-center'>
                        <div className='DarkRow flex items-center gap-24 '>
                            <div className='DarkRow1 flex items-center gap-2.5'>
                                <div className='RowDarkText1 flex items-center gap-1.5 p-2.5 text-xs font-normal text-[#FFFFFF]'><i class="fa-solid fa-phone"></i><p>(225) 555-0118</p></div>
                                <div className='RowDarkText2 flex items-center gap-1.5 p-2.5 text-xs font-normal text-[#FFFFFF]'><i class="fa-solid fa-envelope"></i>michelle.rivera@example.com </div>
                            </div>
                            <div className='DarkRow2 p-2.5 gap-2.5 text-sm font-bold text-[#FFFFFF]'>
                                <h6>Follow Us  and get a chance to win 80% off</h6>
                            </div>
                            <div className='DarkRow3 flex items-center p-2.5 gap-2.5  text-sm font-bold text-[#FFFFFF]'>
                                <h6>Follow Us :</h6>
                                <a className='Instagram p-1.5' href=""><i class="fa-brands fa-instagram"></i></a>
                                <a className='Youtube p-1.5' href=""><i class="fa-brands fa-youtube"></i></a>
                                <a className='Face p-1.5' href=""><i class="fa-brands fa-facebook"></i></a>
                                <a className='Twitter p-1.5' href=""><i class="fa-brands fa-twitter"></i></a>
                            </div>

                        </div>
                    </div>
                </div>
                <Header />
                <div className='ShopCategory '>
                    <div className='CategoryRow flex justify-around bg-[#FAFAFA] '>
                        <div className='CatText1 text-2xl font-bold'>
                            <h2>Shop</h2>
                        </div>
                        <div className='CatText2 text-2xl font-bold'>
                            BreadCrumb
                            {/* bu alan react router BreadCrumb ile düzenlenecek ve kategori seçmeleri eklenecek */}
                        </div>
                    </div>
                </div>
                <div className='ClothosContainer  flex justify-around bg-[#FAFAFA] py-6'>
                    <div className='ClothosRow flex gap-4 '>
                        <div className='ClothosProduct1 '>
                            <div className='ClothosItem1 flex items-center justify-around '>
                                <div className='ClothosItemContent1 absolute '>
                                    <a href="#">
                                        <h5 className='text-base font-bold text-[#FFFFFF]'>CLOTHOS</h5>
                                        <p className='text-sm font-normal text-[#FFFFFF]'>5 Items</p>
                                    </a>
                                </div>
                                <div className='ClothosItemImg1 '>

                                    <img className='w-[205px] h-[223px] ' src="./images/clothos1.jpg" alt="" />

                                </div>
                            </div>
                        </div>
                        <div className='ClothosProduct2 '>
                            <div className='ClothosItem2 flex items-center justify-around '>
                                <div className='ClothosItemContent2 absolute '>
                                    <a href="#">
                                        <h5 className='text-base font-bold text-[#FFFFFF]'>CLOTHOS</h5>
                                        <p className='text-sm font-normal text-[#FFFFFF]'>5 Items</p>
                                    </a>
                                </div>
                                <div className='ClothosItemImg2'>

                                    <img className='w-[205px] h-[223px] ' src="./images/clothos2.jpg" alt="" />

                                </div>
                            </div>
                        </div>
                        <div className='ClothosProduct3  '>
                            <div className='ClothosItem3 flex items-center justify-around '>
                                <div className='ClothosItemContent3 absolute '>
                                    <a href="#">
                                        <h5 className='text-base font-bold text-[#FFFFFF]'>CLOTHOS</h5>
                                        <p className='text-sm font-normal text-[#FFFFFF]'>5 Items</p>
                                    </a>
                                </div>
                                <div className='ClothosItemImg3'>

                                    <img className='w-[205px] h-[223px]' src="./images/clothos3.jpg" alt="" />

                                </div>
                            </div>
                        </div>
                        <div className='ClothosProduct4  '>
                            <div className='ClothosItem4 flex items-center justify-around '>
                                <div className='ClothosItemContent4 absolute '>
                                    <a href="#">
                                        <h5 className='text-base font-bold text-[#FFFFFF]'>CLOTHOS</h5>
                                        <p className='text-sm font-normal text-[#FFFFFF]'>5 Items</p>
                                    </a>
                                </div>
                                <div className='ClothosItemImg4'>

                                    <img className='w-[205px] h-[223px]' src="./images/clothos4.jpg" alt="" />

                                </div>
                            </div>
                        </div>
                        <div className='ClothosProduct5  '>
                            <div className='ClothosItem5 flex items-center justify-around '>
                                <div className='ClothosItemContent5 absolute '>
                                    <a href="#">
                                        <h5 className='text-base font-bold text-[#FFFFFF]'>CLOTHOS</h5>
                                        <p className='text-sm font-normal text-[#FFFFFF]'>5 Items</p>
                                    </a>
                                </div>
                                <div className='ClothosItemImg5'>

                                    <img className='w-[205px] h-[223px]' src="./images/clothos5.jpg" alt="" />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='ShopFilterContainer  flex gap-20 justify-center'>
                    <div className='ShopFilterRow flex items-center py-6 w-[1050px] justify-between'>
                        <div className='TextShow flex gap-4 '>
                            <h6 className='text-sm font-bold text-[#737373]'>Showing all 12 results</h6>
                        </div>
                        <div className='TextIcon flex gap-4 items-center'>
                            <h6 className='text-sm font-bold text-[#737373]'>Views: </h6>
                            <div className='IconFilter flex items-center gap-4'>
                                <i class="fa-solid fa-table-list rounded-md border p-4"></i>
                                <i class="fa-solid fa-list rounded-md border p-4"></i>
                            </div>
                        </div>
                        <div className='TextFilter flex items-center gap-4'>
                                <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown button <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                            </svg>
                            </button>


                            <div id="dropdown" class="z-10 hidden ">
                                <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                    
                                    <li>
                                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                    </li>
                                    <li>
                                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                    </li>
                                    <li>
                                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                    </li>
                                    <li>
                                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                                    </li>
                                    <li>
                                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                                    </li>
                                </ul>
                            </div>
                            <div className='FilterButton'>
                                    <button className='BtnFilter w-[94px] rounded-md px-2.5 py-2.5 flex gap-2 bg-[#23A6F0] justify-center text-sm font-bold text-[#FFFFFF]'>
                                        Filter
                                    </button>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
