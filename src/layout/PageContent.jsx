import React, { Component } from 'react'

export default class ProductContent 
    extends Component {
    render() {
        return (
            <div ProductContainer>
                <div className='BestSeller flex justify-center px-6 py-6 gap-12'>
                    <div className='FurnitureCard flex '>
                        <div className='ItemFurniture absolute gap-1.5 flex flex-col m-8'>
                            <h6 className='font-bold text-sm text-[#252B42] leading-6'>FURNITURE</h6>
                            <h6 className='font-bold text-sm text-[#737373] leading-6'>5 Items</h6>
                        </div>
                        <div className='FurBackground'>
                            <img src="../images/furniture.jpg" alt="" />
                        </div>
                    </div>
                    <div className='BestProduct'>
                        <div className='BestMain '>
                            <div className='BestRow1 flex gap-2.5 items-center '>
                                <div className='BestContent font-bold text-base leading-6 text-[#252B42]'>
                                    <h3 className='flex gap-2.5 '>BESTSELLER PRODUCTS</h3>
                                </div>
                                <div className='BestNav flex list-none gap-2.5 items-center '>
                                    <div className='BestNav1 flex gap-2.5 '>
                                        <li className='text-[#23A6F0] font-bold text-sm'><button className='px-2.5 py-5' > Men</button></li>
                                        <li className='text-[#737373] font-bold text-sm'><button className='px-2.5 py-5'> Women</button></li>
                                        <li className='text-[#737373] font-bold text-sm'><button className='px-2.5 py-5'>Accessories</button></li>

                                    </div>
                                    <div className='BestNav2 flex gap-2.5'>
                                    <li className='text-[#737373] font-bold text-sm'><button className='px-2.5 py-5'> Sola ok</button></li>
                                        <li className='text-[#737373] font-bold text-sm'><button className='px-2.5 py-5'>Sağa ok</button></li>
                                    </div>
                                </div>
                            </div>
                            <hr className='text-[#ECECEC] h-0.5 w-[638px]' />
                            <div className='BestRow2'>
                                <div className='ProductGroup'>
                                    <div className='GroupContent gap-5 py-2'>
                                        <div className='GroupTab p-6 gap-4'>
                                            <div className='GroupTab1 pt-4 flex gap-12'>
                                                <div className='GroupTabProduct'>
                                                <div className='ItemCard flex flex-col items-center'>
                                                    <div className='ItemCard1 h-[162px] w-[183px]'>
                                                        <img src="../images/product1.png" alt="" />
                                                    </div>
                                                    <div className='ItemCard2 flex flex-col items-center'>
                                                        <h5>Graphic Design</h5>
                                                        <p>English Department</p>
                                                        {/* p tagi link olarak ürün kategorisi sayfasına gidecek  */}
                                                        <div className='Pricess'>
                                                            <p>$16.48</p>
                                                            <p>$6.48</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                </div>
                                                

                                                <div className='GroupTabProduct'>
                                                    <div className='ItemCard ItemCard flex flex-col items-center'>
                                                        <div className='ItemCard1 h-[162px] w-[183px]'>
                                                            <img src="../images/product2.jpg" alt="" />
                                                        </div>
                                                        <div className='ItemCard2 flex flex-col items-center'>
                                                            <h5>Graphic Design</h5>
                                                            <p>English Department</p>
                                                            {/* p tagi link olarak ürün kategorisi sayfasına gidecek  */}
                                                            <div className='Pricess'>
                                                                <p>$16.48</p>
                                                                <p>$6.48</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='GroupTabProduct'>
                                                    <div className='ItemCard ItemCard flex flex-col items-center'>
                                                        <div className='ItemCard1 h-[162px] w-[183px]'>
                                                            <img src="../images/product3.jpg" alt="" />
                                                        </div>
                                                        <div className='ItemCard2 flex flex-col items-center'>
                                                            <h5>Graphic Design</h5>
                                                            <p>English Department</p>
                                                            {/* p tagi link olarak ürün kategorisi sayfasına gidecek  */}
                                                            <div className='Pricess'>
                                                                <p>$16.48</p>
                                                                <p>$6.48</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='GroupTab1 pt-12 flex gap-12'>
                                                <div className='GroupTabProduct'>
                                                <div className='ItemCard ItemCard flex flex-col items-center'>
                                                    <div className='ItemCard1 h-[162px] w-[183px]'>
                                                        <img src="../images/product1.png" alt="" />
                                                    </div>
                                                    <div className='ItemCard2 flex flex-col items-center'>
                                                        <h5>Graphic Design</h5>
                                                        <p>English Department</p>
                                                        {/* p tagi link olarak ürün kategorisi sayfasına gidecek  */}
                                                        <div className='Pricess'>
                                                            <p>$16.48</p>
                                                            <p>$6.48</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                </div>
                                                

                                                <div className='GroupTabProduct'>
                                                    <div className='ItemCard ItemCard flex flex-col items-center'>
                                                        <div className='ItemCard1 h-[162px] w-[183px]'>
                                                            <img src="../images/product2.jpg" alt="" />
                                                        </div>
                                                        <div className='ItemCard2 flex flex-col items-center'>
                                                            <h5>Graphic Design</h5>
                                                            <p>English Department</p>
                                                            {/* p tagi link olarak ürün kategorisi sayfasına gidecek  */}
                                                            <div className='Pricess'>
                                                                <p>$16.48</p>
                                                                <p>$6.48</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='GroupTabProduct'>
                                                    <div className='ItemCard ItemCard flex flex-col items-center'>
                                                        <div className='ItemCard1 h-[162px] w-[183px]'>
                                                            <img src="../images/product3.jpg" alt="" />
                                                        </div>
                                                        <div className='ItemCard2 flex flex-col items-center'>
                                                            <h5>Graphic Design</h5>
                                                            <p>English Department</p>
                                                            {/* p tagi link olarak ürün kategorisi sayfasına gidecek  */}
                                                            <div className='Pricess'>
                                                                <p>$16.48</p>
                                                                <p>$6.48</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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
