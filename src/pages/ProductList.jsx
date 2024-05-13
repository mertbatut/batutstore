import React, { Component } from 'react'
import Header from '../components/Header'
import FilterRow from '../components/FilterRow'
import Footer from '../components/Footer'




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
                <FilterRow />
                <div className='ProductCard flex justify-center py-8'>
                    <div className='GroupTab1 pt-4 flex gap-7'>
                        <div className='GroupTabProduct flex flex-col items-center'>
                            <div className='ItemCard flex flex-col items-center'>
                                <div className='ItemCard1 h-[300px] w-[239px] '>
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
                            <fieldset className='flex gap-1.5'>
                                <legend class="sr-only "></legend>
                                <div class="flex items-center mb-4">
                                    <input id="country-option-1" type="radio" name="color" value="Blue" class="w-4 h-4 bg-[#23A6F0]" />
                                </div>
                                <div class="flex items-center mb-4">
                                    <input id="country-option-2" type="radio" name="color" value="Green" class="w-4 h-4 bg-[#23856D]" />
                                </div>
                                <div class="flex items-center mb-4">
                                    <input id="country-option-3" type="radio" name="color" value="Orange" class="w-4 h-4 bg-[#E77C40]" />
                                </div>
                                <div class="flex items-center mb-4">
                                    <input id="country-option-4" type="radio" name="color" value="Black" class="w-4 h-4 bg-[#252B42]" />
                                </div>
                            </fieldset>
                        </div>
                        <div className='GroupTabProduct flex flex-col items-center'>
                            <div className='ItemCard ItemCard flex flex-col items-center'>
                                <div className='ItemCard1 h-[300px] w-[239px] '>
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
                            <fieldset className='flex gap-1.5'>
                                <legend class="sr-only "></legend>
                                <div class="flex items-center mb-4">
                                    <input id="country-option-1" type="radio" name="color" value="Blue" class="w-4 h-4 bg-[#23A6F0]" />
                                </div>
                                <div class="flex items-center mb-4">
                                    <input id="country-option-2" type="radio" name="color" value="Green" class="w-4 h-4 bg-[#23856D]" />
                                </div>
                                <div class="flex items-center mb-4">
                                    <input id="country-option-3" type="radio" name="color" value="Orange" class="w-4 h-4 bg-[#E77C40]" />
                                </div>
                                <div class="flex items-center mb-4">
                                    <input id="country-option-4" type="radio" name="color" value="Black" class="w-4 h-4 bg-[#252B42]" />
                                </div>
                            </fieldset>
                        </div>
                        <div className='GroupTabProduct flex flex-col items-center'>
                            <div className='ItemCard ItemCard flex flex-col items-center'>
                                <div className='ItemCard1 h-[300px] w-[239px] '>
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
                            <fieldset className='flex gap-1.5'>
                                <legend class="sr-only "></legend>
                                <div class="flex items-center mb-4">
                                    <input id="country-option-1" type="radio" name="color" value="Blue" class="w-4 h-4 bg-[#23A6F0]" />
                                </div>
                                <div class="flex items-center mb-4">
                                    <input id="country-option-2" type="radio" name="color" value="Green" class="w-4 h-4 bg-[#23856D]" />
                                </div>
                                <div class="flex items-center mb-4">
                                    <input id="country-option-3" type="radio" name="color" value="Orange" class="w-4 h-4 bg-[#E77C40]" />
                                </div>
                                <div class="flex items-center mb-4">
                                    <input id="country-option-4" type="radio" name="color" value="Black" class="w-4 h-4 bg-[#252B42]" />
                                </div>
                            </fieldset>
                        </div>
                        <div className='GroupTabProduct flex flex-col items-center'>
                            <div className='ItemCard ItemCard flex flex-col items-center'>
                                <div className='ItemCard1 h-[300px] w-[239px] '>
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
                            <fieldset className='flex gap-1.5'>
                                <legend class="sr-only "></legend>
                                <div class="flex items-center mb-4">
                                    <input id="country-option-1" type="radio" name="color" value="Blue" class="w-4 h-4 bg-[#23A6F0]" />
                                </div>
                                <div class="flex items-center mb-4">
                                    <input id="country-option-2" type="radio" name="color" value="Green" class="w-4 h-4 bg-[#23856D]" />
                                </div>
                                <div class="flex items-center mb-4">
                                    <input id="country-option-3" type="radio" name="color" value="Orange" class="w-4 h-4 bg-[#E77C40]" />
                                </div>
                                <div class="flex items-center mb-4">
                                    <input id="country-option-4" type="radio" name="color" value="Black" class="w-4 h-4 bg-[#252B42]" />
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </div>
                <div className='ProductCard flex justify-center py-8'>
                    <div className='GroupTab1 pt-4 flex gap-7'>
                        <div className='GroupTabProduct flex flex-col items-center'>
                            <div className='ItemCard flex flex-col items-center'>
                                <div className='ItemCard1 h-[300px] w-[239px] '>
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
                            <fieldset className='flex gap-1.5'>
                                <legend class="sr-only "></legend>
                                <div class="flex items-center mb-4">
                                    <input id="country-option-1" type="radio" name="color" value="Blue" class="w-4 h-4 bg-[#23A6F0]" />
                                </div>
                                <div class="flex items-center mb-4">
                                    <input id="country-option-2" type="radio" name="color" value="Green" class="w-4 h-4 bg-[#23856D]" />
                                </div>
                                <div class="flex items-center mb-4">
                                    <input id="country-option-3" type="radio" name="color" value="Orange" class="w-4 h-4 bg-[#E77C40]" />
                                </div>
                                <div class="flex items-center mb-4">
                                    <input id="country-option-4" type="radio" name="color" value="Black" class="w-4 h-4 bg-[#252B42]" />
                                </div>
                            </fieldset>
                        </div>
                        <div className='GroupTabProduct flex flex-col items-center'>
                            <div className='ItemCard ItemCard flex flex-col items-center'>
                                <div className='ItemCard1 h-[300px] w-[239px] '>
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
                            <fieldset className='flex gap-1.5'>
                                <legend class="sr-only "></legend>
                                <div class="flex items-center mb-4">
                                    <input id="country-option-1" type="radio" name="color" value="Blue" class="w-4 h-4 bg-[#23A6F0]" />
                                </div>
                                <div class="flex items-center mb-4">
                                    <input id="country-option-2" type="radio" name="color" value="Green" class="w-4 h-4 bg-[#23856D]" />
                                </div>
                                <div class="flex items-center mb-4">
                                    <input id="country-option-3" type="radio" name="color" value="Orange" class="w-4 h-4 bg-[#E77C40]" />
                                </div>
                                <div class="flex items-center mb-4">
                                    <input id="country-option-4" type="radio" name="color" value="Black" class="w-4 h-4 bg-[#252B42]" />
                                </div>
                            </fieldset>
                        </div>
                        <div className='GroupTabProduct flex flex-col items-center'>
                            <div className='ItemCard ItemCard flex flex-col items-center'>
                                <div className='ItemCard1 h-[300px] w-[239px] '>
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
                            <fieldset className='flex gap-1.5'>
                                <legend class="sr-only "></legend>
                                <div class="flex items-center mb-4">
                                    <input id="country-option-1" type="radio" name="color" value="Blue" class="w-4 h-4 bg-[#23A6F0]" />
                                </div>
                                <div class="flex items-center mb-4">
                                    <input id="country-option-2" type="radio" name="color" value="Green" class="w-4 h-4 bg-[#23856D]" />
                                </div>
                                <div class="flex items-center mb-4">
                                    <input id="country-option-3" type="radio" name="color" value="Orange" class="w-4 h-4 bg-[#E77C40]" />
                                </div>
                                <div class="flex items-center mb-4">
                                    <input id="country-option-4" type="radio" name="color" value="Black" class="w-4 h-4 bg-[#252B42]" />
                                </div>
                            </fieldset>
                        </div>
                        <div className='GroupTabProduct flex flex-col items-center'>
                            <div className='ItemCard ItemCard flex flex-col items-center'>
                                <div className='ItemCard1 h-[300px] w-[239px] '>
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
                            <fieldset className='flex gap-1.5'>
                                <legend class="sr-only "></legend>
                                <div class="flex items-center mb-4">
                                    <input id="country-option-1" type="radio" name="color" value="Blue" class="w-4 h-4 bg-[#23A6F0]" />
                                </div>
                                <div class="flex items-center mb-4">
                                    <input id="country-option-2" type="radio" name="color" value="Green" class="w-4 h-4 bg-[#23856D]" />
                                </div>
                                <div class="flex items-center mb-4">
                                    <input id="country-option-3" type="radio" name="color" value="Orange" class="w-4 h-4 bg-[#E77C40]" />
                                </div>
                                <div class="flex items-center mb-4">
                                    <input id="country-option-4" type="radio" name="color" value="Black" class="w-4 h-4 bg-[#252B42]" />
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </div>
                <div className='ProductCard flex justify-center py-8'>
                    <div className='GroupTab1 pt-4 flex gap-7'>
                        <div className='GroupTabProduct flex flex-col items-center'>
                            <div className='ItemCard flex flex-col items-center'>
                                <div className='ItemCard1 h-[300px] w-[239px] '>
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
                            <fieldset className='flex gap-1.5'>
                                <legend class="sr-only "></legend>
                                <div class="flex items-center mb-4">
                                    <input id="country-option-1" type="radio" name="color" value="Blue" class="w-4 h-4 bg-[#23A6F0]" />
                                </div>
                                <div class="flex items-center mb-4">
                                    <input id="country-option-2" type="radio" name="color" value="Green" class="w-4 h-4 bg-[#23856D]" />
                                </div>
                                <div class="flex items-center mb-4">
                                    <input id="country-option-3" type="radio" name="color" value="Orange" class="w-4 h-4 bg-[#E77C40]" />
                                </div>
                                <div class="flex items-center mb-4">
                                    <input id="country-option-4" type="radio" name="color" value="Black" class="w-4 h-4 bg-[#252B42]" />
                                </div>
                            </fieldset>
                        </div>
                        <div className='GroupTabProduct flex flex-col items-center'>
                            <div className='ItemCard ItemCard flex flex-col items-center'>
                                <div className='ItemCard1 h-[300px] w-[239px] '>
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
                            <fieldset className='flex gap-1.5'>
                                <legend class="sr-only "></legend>
                                <div class="flex items-center mb-4">
                                    <input id="country-option-1" type="radio" name="color" value="Blue" class="w-4 h-4 bg-[#23A6F0]" />
                                </div>
                                <div class="flex items-center mb-4">
                                    <input id="country-option-2" type="radio" name="color" value="Green" class="w-4 h-4 bg-[#23856D]" />
                                </div>
                                <div class="flex items-center mb-4">
                                    <input id="country-option-3" type="radio" name="color" value="Orange" class="w-4 h-4 bg-[#E77C40]" />
                                </div>
                                <div class="flex items-center mb-4">
                                    <input id="country-option-4" type="radio" name="color" value="Black" class="w-4 h-4 bg-[#252B42]" />
                                </div>
                            </fieldset>
                        </div>
                        <div className='GroupTabProduct flex flex-col items-center'>
                            <div className='ItemCard ItemCard flex flex-col items-center'>
                                <div className='ItemCard1 h-[300px] w-[239px] '>
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
                            <fieldset className='flex gap-1.5'>
                                <legend class="sr-only "></legend>
                                <div class="flex items-center mb-4">
                                    <input id="country-option-1" type="radio" name="color" value="Blue" class="w-4 h-4 bg-[#23A6F0]" />
                                </div>
                                <div class="flex items-center mb-4">
                                    <input id="country-option-2" type="radio" name="color" value="Green" class="w-4 h-4 bg-[#23856D]" />
                                </div>
                                <div class="flex items-center mb-4">
                                    <input id="country-option-3" type="radio" name="color" value="Orange" class="w-4 h-4 bg-[#E77C40]" />
                                </div>
                                <div class="flex items-center mb-4">
                                    <input id="country-option-4" type="radio" name="color" value="Black" class="w-4 h-4 bg-[#252B42]" />
                                </div>
                            </fieldset>
                        </div>
                        <div className='GroupTabProduct flex flex-col items-center'>
                            <div className='ItemCard ItemCard flex flex-col items-center'>
                                <div className='ItemCard1 h-[300px] w-[239px] '>
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
                            <fieldset className='flex gap-1.5'>
                                <legend class="sr-only "></legend>
                                <div class="flex items-center mb-4">
                                    <input id="country-option-1" type="radio" name="color" value="Blue" class="w-4 h-4 bg-[#23A6F0]" />
                                </div>
                                <div class="flex items-center mb-4">
                                    <input id="country-option-2" type="radio" name="color" value="Green" class="w-4 h-4 bg-[#23856D]" />
                                </div>
                                <div class="flex items-center mb-4">
                                    <input id="country-option-3" type="radio" name="color" value="Orange" class="w-4 h-4 bg-[#E77C40]" />
                                </div>
                                <div class="flex items-center mb-4">
                                    <input id="country-option-4" type="radio" name="color" value="Black" class="w-4 h-4 bg-[#252B42]" />
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </div>
                <div className='PaginationMain flex justify-center'>
                    <div class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
                        <div class="flex flex-1 justify-between sm:hidden">
                            <a href="#" class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Previous</a>
                            <a href="#" class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Next</a>
                        </div>
                        <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                            <div>
                                <p class="text-sm text-gray-700">
                                    Showing
                                    <span class="font-medium">1</span>
                                    to
                                    <span class="font-medium">10</span>
                                    of
                                    <span class="font-medium">97</span>
                                    results
                                </p>
                            </div>
                            <div>
                                <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                                    <a href="#" class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                                        <span class="sr-only">Previous</span>
                                        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
                                        </svg>
                                    </a>

                                    <a href="#" aria-current="page" class="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">1</a>
                                    <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">2</a>
                                    <a href="#" class="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">3</a>
                                    <span class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">...</span>
                                    <a href="#" class="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">8</a>
                                    <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">9</a>
                                    <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">10</a>
                                    <a href="#" class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                                        <span class="sr-only">Next</span>
                                        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                                        </svg>
                                    </a>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
