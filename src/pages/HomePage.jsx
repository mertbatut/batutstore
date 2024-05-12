import React, { Component } from 'react'
import '../index.css'
import  Header from '../components/Header'
import CarouselWithContent from '../components/Carousels'
import Footer from '../components/Footer'
export default class HomePage extends Component {
  render() {
    return (
      <div>
       <Header/>
       <CarouselWithContent/>
       <div className='ShopContainer pt-20 pr-20 pl-20 pb-20 bg-[#FAFAFA]'>
                <div className='Elements flex justify-around '>
                    <div className='ProductCard  flex items-center w-80 h-60 border-2 bg-white'>
                        <div className='ProductItem flex justify-center flex-col pl-12'>
                            <h6 className='font-bold text-sm leading-5 decoration-[#737373]'>Your Space</h6>
                            <h2 className='font-bold text-2xl leading-8 decoration-[#252B42]'>Unique Life</h2>
                            <h6 className='font-bold text-sm leading-8 decoration-[#252B42]'>Explore Items</h6>
                        </div>
                        <div className='ProductImg'>
                            <img src="../images/product1.png" alt="" />
                        </div>
                    </div>
                    <div className='ProductCard w-80 min-h-60 flex items-center border-2 bg-white'>
                    <div className='ProductItem flex justify-center flex-col pl-12'>
                            <h6 className='font-bold text-sm leading-5 decoration-[#737373]'>Ends Today</h6>
                            <h2 className='font-bold text-2xl leading-8 decoration-[#252B42]'>Elements Style</h2>
                            <h6 className='font-bold text-sm leading-8 decoration-[#252B42]'>Explore Items</h6>
                       </div>
                        <div className='ProductImg'>
                            <img src="../images/product2.jpg" alt="" />
                        </div>
                    </div>
                    <div className='ProductCard w-80 min-h-60 flex items-center border-2 bg-white'>
                        <div className='ProductItem flex justify-center flex-col pl-12'>
                            <h6 className='font-bold text-sm leading-5 decoration-[#737373]'>Ends Today</h6>
                            <h2 className='font-bold text-2xl leading-8 decoration-[#252B42]'>Elements Style</h2>
                            <h6 className='font-bold text-sm leading-8 decoration-[#252B42]'>Explore Items</h6>
                        </div>
                        <div className='ProductImg'>
                            <img src="../images/product3.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div ProductContainer>
                <div className='BestSeller flex justify-center  py-12 gap-12'>
                    <div className='FurnitureCard flex '>
                        <div className='ItemFurniture absolute gap-1.5 flex flex-col m-8'>
                            <h6 className='font-bold text-sm text-[#252B42] leading-6'>FURNITURE</h6>
                            <h6 className='font-bold text-sm text-[#737373] leading-6'>5 Items</h6>
                        </div>
                        <div className='FurBackground'>
                            <img className='h-[796px] w-[389px]' src="../images/furniture.jpg" alt="" />
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
                                                        <div className='ItemCard1 h-[162px] w-[183px]'>
                                                            <img src="../images/product2.jpg" alt="" />
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
                                                        <div className='ItemCard1 h-[162px] w-[183px]'>
                                                            <img src="../images/product3.jpg" alt="" />
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
                                            <div className='GroupTab1 pt-12 flex gap-12'>
                                                <div className='GroupTabProduct'>
                                                <div className='ItemCard ItemCard flex flex-col items-center'>
                                                    <div className='ItemCard1 h-[162px] w-[183px]'>
                                                        <img src="../images/product1.png" alt="" />
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
                                                        <div className='ItemCard1 h-[162px] w-[183px]'>
                                                            <img src="../images/product2.jpg" alt="" />
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
                                                        <div className='ItemCard1 h-[162px] w-[183px]'>
                                                            <img src="../images/product3.jpg" alt="" />
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Product4 flex flex-col gap-8 '>
          <div className='ProductRow1 flex justify-center'>
            <div className='RowImg  '><img className=' h-[649px]  w-[674px]' src="../images/Product4.jpg" alt="" /></div>
            <div className='RowText flex gap-9 justify-center w-[400px] bg-[#FAFAFA]'>
              <div className='RowText2 flex flex-col justify-center items-center gap-5'>
                <div className='flex flex-col items-center w-[280px] justify-center '>
                  <h5 className='text-2xl font-bold text-[#252B42] '>MOST POPULAR</h5>
                  <p className='text-sm font-normal  text-[#737373]'>We focus on ergonomics and meeting
                    you where you work. It's only a
                    keystroke away.</p>
                </div>

                <div className='RowImg2 w-[348px] h-226px] top-9'><img src="../images/Productet.jpg" alt="" /></div>
                <p className='font-bold text-sm text-[#737373]'>English Department</p>
                {/* p tagi link olarak ürün kategorisi sayfasına gidecek  */}
                <div className='Pricess flex gap-1.5 py-1.5 px-1 text-base font-bold'>
                  <p className='text-[#BDBDBD]'>$16.48</p>
                  <p className='text-[#23856D]'>$6.48</p>
                </div>
              </div>
            </div>
          </div>
          <div className='ProductRow2 flex justify-center'>
            <div className='Kutu1 bg-[#FFFFFF] p-6 '>
              <div className='p-5 flex flex-row gap gap-5'>
                <h2 className='font-bold text-[40px] text-[#E74040]'>1.</h2>
                <div className='flex flex-col gap-1 w-[190px]'>
                  <h6 className='text-sm font-bold text-[#252B42]'>Easy to use</h6>
                  <p>Things on a very  small that you have any direct</p>
                </div>
              </div>
            </div>
            <div className='Kutu2 bg-[#FFFFFF] p-6 '>
              <div className='p-5 flex flex-row gap gap-5'>
                <h2 className='font-bold text-[40px] text-[#E74040]'>1.</h2>
                <div className='flex flex-col gap-1 w-[190px]'>
                  <h6 className='text-sm font-bold text-[#252B42]'>Easy to use</h6>
                  <p>Things on a very  small that you have any direct</p>
                </div>
              </div>
            </div>
            <div className='Kutu3 bg-[#FFFFFF] p-6 '>
              <div className='p-5 flex flex-row gap gap-5'>
                <h2 className='font-bold text-[40px] text-[#E74040]'>1.</h2>
                <div className='flex flex-col gap-1 w-[190px]'>
                  <h6 className='text-sm font-bold text-[#252B42]'>Easy to use</h6>
                  <p>Things on a very  small that you have any direct</p>
                </div>
              </div>
            </div>
            <div className='Kutu4 bg-[#FFFFFF] p-6 '>
              <div className='p-5 flex flex-row gap gap-5'>
                <h2 className='font-bold text-[40px] text-[#E74040]'>1.</h2>
                <div className='flex flex-col gap-1 w-[190px]'>
                  <h6 className='text-sm font-bold text-[#252B42]'>Easy to use</h6>
                  <p>Things on a very  small that you have any direct</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div ProductContainer>
                <div className='BestSeller flex justify-center flex-row-reverse py-12 gap-12'>
                    <div className='FurnitureCard flex '>
                        <div className='ItemFurniture absolute gap-1.5 flex flex-col m-8'>
                            <h6 className='font-bold text-sm text-[#252B42] leading-6'>FURNITURE</h6>
                            <h6 className='font-bold text-sm text-[#737373] leading-6'>5 Items</h6>
                        </div>
                        <div className='FurBackground'>
                            <img className='h-[796px] w-[389px] object-cover ' src="../images/Product5.jpg" alt="" />
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
                                                        <div className='ItemCard1 h-[162px] w-[183px]'>
                                                            <img src="../images/product2.jpg" alt="" />
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
                                                        <div className='ItemCard1 h-[162px] w-[183px]'>
                                                            <img src="../images/product3.jpg" alt="" />
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
                                            <div className='GroupTab1 pt-12 flex gap-12'>
                                                <div className='GroupTabProduct'>
                                                <div className='ItemCard ItemCard flex flex-col items-center'>
                                                    <div className='ItemCard1 h-[162px] w-[183px]'>
                                                        <img src="../images/product1.png" alt="" />
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
                                                        <div className='ItemCard1 h-[162px] w-[183px]'>
                                                            <img src="../images/product2.jpg" alt="" />
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
                                                        <div className='ItemCard1 h-[162px] w-[183px]'>
                                                            <img src="../images/product3.jpg" alt="" />
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Product40 flex flex-col gap-8 pt-12 pb-12'>
                    <div className='ProductRow12 flex justify-center flex-row-reverse'>
                        <div className='RowImg1  '><img className=' h-[649px]  w-[674px]' src="../images/Product6.jpg" alt="" /></div>
                        <div className='RowText1 flex gap-9 justify-center w-[400px] bg-[#FAFAFA]'>
                            <div className='RowText2 flex flex-col justify-center items-center gap-5'>
                                <div className='flex flex-col items-center w-[280px] justify-center '>
                                    <h5 className='text-2xl font-bold text-[#252B42] '>MOST POPULAR</h5>
                                    <p className='text-sm font-normal  text-[#737373]'>We focus on ergonomics and meeting
                                        you where you work. It's only a
                                        keystroke away.</p>
                                </div>

                                <div className='RowImg21 w-[348px] h-226px] top-9'><img src="../images/Productet.jpg" alt="" /></div>
                                <p className='English font-bold text-sm text-[#737373]'>English Department</p>
                                {/* p tagi link olarak ürün kategorisi sayfasına gidecek  */}
                                <div className='Pricess1 flex gap-1.5 py-1.5 px-1 text-base font-bold'>
                                    <p className='text-[#BDBDBD]'>$16.48</p>
                                    <p className='text-[#23856D]'>$6.48</p>
                                   
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
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
            <div className='BlogContainer flex flex-col gap-20'>
                    <div className='BlogRow'>
                        <div className='BlogContent flex flex-col items-center gap-2.5 pt-32'>
                            <h6 className='font-bold text-sm text-[#23A6F0]'>Practice Advice</h6>
                            <h3 className='font-bold text-4xl text-[#252B42]'>Featured Posts</h3>
                        </div>
                    </div>
                    <div className='BlogRow2 flex justify-center gap-8 '>
                        <div className='BlogCard flex '>
                            <div className='ContentCard bg-[#FFFFFF] flex flex-col w-[348px] h-[606px] drop-shadow-xl'>
                                <div className='CardFixedImg '>
                                    <div className='ImageTextCard absolute ml-4 mt-4 text-white bg-[#E74040] rounded px-2.5 font-bold text-sm'>NEW</div>
                                    <img className='h-[300px] w-[348px]' src="./images/blog1.jpg" alt="" />
                                </div>
                                <div className='CardFixedText flex flex-col items-start gap-2.5 h-[306px] w-[348px]'>
                                    <div className='CardHeader1 flex gap-4'>
                                        <p className='text-xs text-[#8EC2F2] font-normal'>Google</p>
                                        <p className='text-xs text-[#737373] font-normal'>Trending</p>
                                        <p className='text-xs text-[#737373] font-normal'>New</p>
                                    </div>
                                    <h4 className='w-[247px] text-xl text-[#252B42] font-bold'>Loudest à la Madison #1
                                        (L'integral)</h4>
                                    <p className='w-[280px] font-normal text-sm text-[#737373]'>We focus on ergonomics and meeting
                                        you where you work. It's only a
                                        keystroke away.</p>
                                    <div className='CardComments flex  gap-36'>
                                        <div className='TimeIcon flex gap-1.5'>                                         
                                        <i class="fa-regular fa-clock"></i>
                                            <p className='text-xs text-[#737373] font-normal'>22 April 2021</p>
                                        </div>
                                        <div className='TimeIcon2 flex gap-1.5'>
                                        <i class="fa-solid fa-chart-line "></i>
                                            <p className='text-xs text-[#737373] font-normal'>22 April 2021</p>
                                        </div>
                                    </div>
                                    <div className='LearnMore'>
                                        <p className='text-sm font-bold text-[#737373]'>Learn More <i class="fa-solid fa-angle-right"></i></p>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='BlogCard2'>
                        <div className='BlogCard flex pb-28'>
                            <div className='ContentCard1 bg-[#FFFFFF] flex flex-col w-[348px] h-[606px] drop-shadow-xl'>
                                <div className='CardFixedImg '>
                                    <div className='ImageTextCard absolute ml-4 mt-4 text-white bg-[#E74040] rounded px-2.5 font-bold text-sm'>NEW</div>
                                    <img className='h-[300px] w-[348px]' src="./images/blog1.jpg" alt="" />
                                </div>
                                <div className='CardFixedText flex flex-col items-start gap-2.5 h-[306px] w-[348px]'>
                                    <div className='CardHeader1 flex gap-4'>
                                        <p className='text-xs text-[#8EC2F2] font-normal'>Google</p>
                                        <p className='text-xs text-[#737373] font-normal'>Trending</p>
                                        <p className='text-xs text-[#737373] font-normal'>New</p>
                                    </div>
                                    <h4 className='w-[247px] text-xl text-[#252B42] font-bold'>Loudest à la Madison #1
                                        (L'integral)</h4>
                                    <p className='w-[280px] font-normal text-sm text-[#737373]'>We focus on ergonomics and meeting
                                        you where you work. It's only a
                                        keystroke away.</p>
                                    <div className='CardComments flex  gap-36'>
                                        <div className='TimeIcon flex gap-1.5'>                                         
                                        <i class="fa-regular fa-clock"></i>
                                            <p className='text-xs text-[#737373] font-normal'>22 April 2021</p>
                                        </div>
                                        <div className='TimeIcon2 flex gap-1.5'>
                                        <i class="fa-solid fa-chart-line "></i>
                                            <p className='text-xs text-[#737373] font-normal'>22 April 2021</p>
                                        </div>
                                    </div>
                                    <div className='LearnMore'>
                                        <p className='text-sm font-bold text-[#737373]'>Learn More <i class="fa-solid fa-angle-right"></i></p>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className='BlogCard3'>
                        <div className='BlogCard1 flex'>
                            <div className='ContentCard2 bg-[#FFFFFF] flex flex-col w-[348px] h-[606px] drop-shadow-xl'>
                                <div className='CardFixedImg '>
                                    <div className='ImageTextCard absolute ml-4 mt-4 text-white bg-[#E74040] rounded px-2.5 font-bold text-sm'>NEW</div>
                                    <img className='h-[300px] w-[348px]' src="./images/blog1.jpg" alt="" />
                                </div>
                                <div className='CardFixedText flex flex-col items-start gap-2.5 h-[306px] w-[348px]'>
                                    <div className='CardHeader1 flex gap-4'>
                                        <p className='text-xs text-[#8EC2F2] font-normal'>Google</p>
                                        <p className='text-xs text-[#737373] font-normal'>Trending</p>
                                        <p className='text-xs text-[#737373] font-normal'>New</p>
                                    </div>
                                    <h4 className='w-[247px] text-xl text-[#252B42] font-bold'>Loudest à la Madison #1
                                        (L'integral)</h4>
                                    <p className='w-[280px] font-normal text-sm text-[#737373]'>We focus on ergonomics and meeting
                                        you where you work. It's only a
                                        keystroke away.</p>
                                    <div className='CardComments flex gap-36 '>
                                        <div className='TimeIcon flex gap-1.5'>                                         
                                        <i class="fa-regular fa-clock"></i>
                                            <p className='text-xs text-[#737373] font-normal'>22 April 2021</p>
                                        </div>
                                        <div className='TimeIcon2 flex gap-1.5'>
                                        <i class="fa-solid fa-chart-line "></i>
                                            <p className='text-xs text-[#737373] font-normal'>22 April 2021</p>
                                        </div>
                                    </div>
                                    <div className='LearnMore'>
                                        <p className='text-sm font-bold text-[#737373]'>Learn More <i class="fa-solid fa-angle-right"></i></p>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <Footer/>
        </div>
    )
  }
}