import React, { Component } from 'react'

export default class ShopCard2 extends Component {
    render() {
        return (
            <div className='ProMain'>
                <div className='Card2Style bg-[#FAFAFA] w-full'>
                    
                        <div className='ProText flex justify-center pt-14'>
                            <h5 className='text-2xl font-bold text-[#252B42] '> BESTSELLER PRODUCTS <hr className='text-[#ECECEC] h-0.5 w-[1250px] ' /></h5>
                        </div>

                        <div className='GroupTab1 pt-10 flex justify-center gap-12 pb-20 '>
                            <div className='GroupTabProduct'>
                                <div className='ItemCard flex flex-col items-center'>
                                    <div className='ItemCard1 h-[239px] w-[280px]'>
                                        <img src="../images/product7.png" alt="" />
                                    </div>
                                    <div className='ItemCard2 gap-2.5 flex flex-col items-center'>
                                        <h5 className='font-bold text-base'>Graphic Design</h5>
                                        <p className='font-bold text-sm text-[#737373]'>English Department</p>
                                        {/* p tagi link olarak ürün kategorisi sayfasına gidecek  */}
                                        <div className='Pricess flex gap-1.5 py-1.5 px-1 text-base font-bold'>
                                            <p className='text-[#BDBDBD]'>$16.48</p>
                                            <p className='text-[#23856D]'>$6.48</p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className='GroupTabProduct'>
                                <div className='ItemCard ItemCard flex flex-col items-center'>
                                    <div className='ItemCard1h h-[239px] w-[280px]'>
                                        <img src="../images/product8.jpg" alt="" />
                                    </div>
                                    <div className='ItemCard2 gap-2.5 flex flex-col items-center'>
                                        <h5 className='font-bold text-base'>Graphic Design</h5>
                                        <p className='font-bold text-sm text-[#737373]'>English Department</p>
                                        {/* p tagi link olarak ürün kategorisi sayfasına gidecek  */}
                                        <div className='Pricess flex gap-1.5 py-1.5 px-1 text-base font-bold'>
                                            <p className='text-[#BDBDBD]'>$16.48</p>
                                            <p className='text-[#23856D]'>$6.48</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='GroupTabProduct'>
                                <div className='ItemCard ItemCard flex flex-col items-center'>
                                    <div className='ItemCard1 h-[239px] w-[280px]'>
                                        <img src="../images/product9.jpg" alt="" />
                                    </div>
                                    <div className='ItemCard2 gap-2.5 flex flex-col items-center'>
                                        <h5 className='font-bold text-base'>Graphic Design</h5>
                                        <p className='font-bold text-sm text-[#737373]'>English Department</p>
                                        {/* p tagi link olarak ürün kategorisi sayfasına gidecek  */}
                                        <div className='Pricess flex gap-1.5 py-1.5 px-1 text-base font-bold'>
                                            <p className='text-[#BDBDBD]'>$16.48</p>
                                            <p className='text-[#23856D]'>$6.48</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className='GroupTabProduct'>
                                <div className='ItemCard ItemCard flex flex-col items-center'>
                                    <div className='ItemCard1 h-[239px] w-[280px]'>
                                        <img src="../images/product10.jpg" alt="" />
                                    </div>
                                    <div className='ItemCard2 gap-2.5 flex flex-col items-center'>
                                        <h5 className='font-bold text-base'>Graphic Design</h5>
                                        <p className='font-bold text-sm text-[#737373]'>English Department</p>
                                        {/* p tagi link olarak ürün kategorisi sayfasına gidecek  */}
                                        <div className='Pricess flex gap-1.5 py-1.5 px-1 text-base font-bold'>
                                            <p className='text-[#BDBDBD]'>$16.48</p>
                                            <p className='text-[#23856D]'>$6.48</p>
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
