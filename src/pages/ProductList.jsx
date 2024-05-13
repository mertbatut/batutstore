import React, { Component } from 'react'
import Header from '../components/Header'
import FilterRow from '../components/FilterRow'


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
               <FilterRow/>
            </div>
        )
    }
}
