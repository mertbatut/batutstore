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
                                    <img className='w-[205px] h-[223px] ' src="https://s3-alpha-sig.figma.com/img/c9a6/4276/a14f623312021f83a598c945b5165068?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Cv9e-e7csVUO5Pyia-Xm5sPPfwH9LfAHBzSdhYx4wbAHT367AWAf-rVvZC4ldbzMV5u2FOHLlMYfN6pMGN5vmStliJo~cWRVpbTed6FEMXbutKYgGAPUVYtrTJmnSmu-Mxqj5hRnV8RhyFVTBji2btC-dmaxkgvwWG~uSvXYGEVw-cIw2UvU3EC9HzaWHx-jC4EaJWIL4TAmT8g8C1niUD3oWyBbdfnkSJQaAT9xpATPl7TgDwMQ95oSwCTIzKa9gDc7lzojiQbtb9Y5uWK9FOX5aeHpw-5q92QsYh~3sVj967F916zfIvwUNvS~8Zx5YEg6KHoxCixabMuL7XHVlQ__" alt="" />
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
                                    <img className='w-[205px] h-[223px] ' src="https://s3-alpha-sig.figma.com/img/96c8/6912/d491d421800e62998b9af7c838cc25d1?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ME~~D9gkMEvSPsSJVuH6KA0yA13zvRIbbxyYbKoZrLpoSY9OjuujJf5cCvlKL4KM4ukI-zHIC6~~45OV5d4KjiPI8soTaAHD9fMT7UjncHaCkVYK68cmPWrdNCSXlYjuZESEkFaKTKMMiP3Ky9FN7r2n-41pEmamlpt-q4z29M1shQrSkYTGTFTeAT8kk1Fu48cB0QgV2Ze9L5m3k07oRPFvy99XjT3arKAvbN4VISMUm7SZ9Tuc6JOKeBaH0eED8lkPrH~uGVaJ~zl9uPEwuuNbtvPtWQP0ngOVp4mJFzqRX2xUgJ7hWBxNwTofpgu20QxRs0JWABruTRndC5c72A__" alt="" />
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
                                    <img className='w-[205px] h-[223px]' src="https://s3-alpha-sig.figma.com/img/7bc2/f9fb/559eeb7e6b92ed49f40128729a9f74f1?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pq8IGJpqqk8Ecf2su1rlMRNV0MovTES6VNbnTh27wPHoiDZPKBjYhUx6n1Mxa0PHR8JkwYf3b4FnBWcdig8EEgpm0aj3a9-KuzPNX~hL16OCKEr-tEFSYuhgfdNIITYGdCgwynZC4Qoo72~dE8I9AF5yad8QGn9dYkoUfOdEPpigWI-od6zXqie6gkvmoHIcyPs~cw5aqFdJIQ~wYUkyFwRqIWdAegiR56IV6rb5CMJLHSyhY7Am2U9zur4DxbTBhQL8HRsdU2LpwJEc36285ube5YW7mUSRtq2HdaOUTbtaZq2ixn608s-Z14KRFGxeHi-XSQ3ShCeasRgfpg9XSw__" alt="" />
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
                                    <img className='w-[205px] h-[223px]' src="https://s3-alpha-sig.figma.com/img/6e72/2a25/b740dd4eea5b5580d5e1601a818f98c2?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KaX8IF1XQX0fPYLIgEXn5-avLngjUDZ2rKPgBJeFLfs3A1ahAsDW-OlT6IAxbI1fD5ECbONXdeuLtsqhhU-R6ELJQJKCW6LnZ-dgqdTlDCFjgZirSHH1-5v9qH-DEsy3k0sSEGV0HRVtuoC73Ea5IGPIuiwaeUDJENYhGEe85TKJQ2ujry3wGfaREpno1U4jaIoDRxMe8y3GgOoSWNzvcx1oMotkzCmG7~XD6x-nu553C3o~oQw6vIYn~amANQ4nNSqaFznp9h~RBcwcs6evvfpCO7Gr1~fCbu~pUh3FhCnhfXLAEK84i2O-Pho0JKV2WU8LZ6FtMFpI1dloZ6hx1A__" alt="" />
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
                                    <img className='w-[205px] h-[223px]' src="https://s3-alpha-sig.figma.com/img/2650/d8d7/92d83e3292df63340b2a44fd9763c159?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZqaS7EX1zw3Ko8j-FrHCCVBLQS7rk2cad-kXAJRrrRtG3tlc05pDfha3qiAf0ihW~RfTu0o6G5i1JjhEhqV7ub989MEFvtgXunf~s~327VCGSKVokpG2N5wx3Kp395tPtf1nHA5FsCTMeHk7k4u9bEKnZ1U~pPpbQdPf9fQE-wP709qU0CUqTE0XDWo82mgUOS7y4pwEQ3770~HDE65sXm7Mt9LmVhj7l-Ei0M6Of89ld-hhnc26F2LIPg9HtePyrlivG2Jo7pU9rA3Ryo0JIlLhKnkFvwtzjTzpqGW-Ui3cRRgTpESqHTo9sVzQIwzk6RzyS8rrYmiM1B5zotge3w__" alt="" />
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
                                    <img src="https://s3-alpha-sig.figma.com/img/2a2d/cc86/6e19165f854d8ad6ea22db2c70a489f8?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BdcdC2rBdZLHdCZ2P9z3D5Drj1JVOO-8wfcx3MyRFR~vIYeZ2NTyN6ozc4DTbEcp8IISj4Z3~mHJk3Q23-e1Io7RaRaQafZlNKSO0MxdCpcl~26ZCCSSqL6yFeM0DmK-bEG4sXA6laX3AtUh6EDGvu-hEl3oL6xNx5WZOe8onVmMneqLkeLsf0~NVNQiXye2Q2eLCG2r3EJ8II3~YaQCAyyP5PalffMWjo4~agp-LuNfYNIQkVbo3vEpL7tJD9qxLZ2JE~iNkKVipHo5WCIpJxkyavJgKW8hiTibjfXwXhnNXk1oTnPOcpscDFG6rCEpnaCjY9DCAaxlkmI39ArIng__" alt="" />
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
                                    <img src="https://s3-alpha-sig.figma.com/img/c8ab/3a82/34e95a157586711065a45229598852e3?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hF5JjYAScuKM1a9xYYaPK3ZjnmhR4wdUwvgPZM2bLf46i1zEzQSvhOL8UF2UrPTjC9D-YzI2GGx64xVBK1XGAgcBmmK4Gf6BvZ2de3x6EWEKLzMee9QrpLgeM88um4Wc9zeYWJL-GVRcyjwnwDPiuCl8WQyDfE81lxqjFPzpbedzogvsnQwSJrF-YH-NAa09eATEj7erjkiZmW4xpixiONCjmUvUIV78gIXuAryKn~k5TpJgx7PvkvnbSfh-FwJcpY8R02ZlJ9RX3~13j38l4DYahBKCXTHVrzgHe6gnXHuUKDHUgJgBFsABqd4onbLiCKZaOdHtFXeBBReCyIjIhA__" alt="" />
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
                                    <img src="https://s3-alpha-sig.figma.com/img/c8ab/3a82/34e95a157586711065a45229598852e3?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hF5JjYAScuKM1a9xYYaPK3ZjnmhR4wdUwvgPZM2bLf46i1zEzQSvhOL8UF2UrPTjC9D-YzI2GGx64xVBK1XGAgcBmmK4Gf6BvZ2de3x6EWEKLzMee9QrpLgeM88um4Wc9zeYWJL-GVRcyjwnwDPiuCl8WQyDfE81lxqjFPzpbedzogvsnQwSJrF-YH-NAa09eATEj7erjkiZmW4xpixiONCjmUvUIV78gIXuAryKn~k5TpJgx7PvkvnbSfh-FwJcpY8R02ZlJ9RX3~13j38l4DYahBKCXTHVrzgHe6gnXHuUKDHUgJgBFsABqd4onbLiCKZaOdHtFXeBBReCyIjIhA__" alt="" />
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
                                    <img src="https://s3-alpha-sig.figma.com/img/9da4/35bc/81f8160b963532c03d0f3f84bf89c4ae?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pWQK76LsoNS8PH22yuBIF4z~KLRf~GBDIix27c~hiSvV9TA-Yh200970XUJw1~SVIzFUkGi8FuKkPU8qJ31RmNchnaZuz9w0jw6yfOHjt1-6x3IpY~Q0dOzIP5I5Kq7o1GN2Tmuhp6Ssh1Eb4MnZnwgV4qM9U0O6Vo9jrx-x5Zx-QP4faJ2Udy2r1kuyxxrvTjJsU7pp9dF6kQxaiE1d7hWJ028m838wj~6NCr2nWmHrfFSWZOvRi3YW8vgVIEiV-h~e~KZPapnOv6qMF8RQv7DvJNUY-0QyffFrtQBOiRhGMoMF8wemm7w5ZYrD1WpAXiV~7cmk6h97vI9kBkWdHw__" alt="" />
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
                                    <img src="https://s3-alpha-sig.figma.com/img/2a2d/cc86/6e19165f854d8ad6ea22db2c70a489f8?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BdcdC2rBdZLHdCZ2P9z3D5Drj1JVOO-8wfcx3MyRFR~vIYeZ2NTyN6ozc4DTbEcp8IISj4Z3~mHJk3Q23-e1Io7RaRaQafZlNKSO0MxdCpcl~26ZCCSSqL6yFeM0DmK-bEG4sXA6laX3AtUh6EDGvu-hEl3oL6xNx5WZOe8onVmMneqLkeLsf0~NVNQiXye2Q2eLCG2r3EJ8II3~YaQCAyyP5PalffMWjo4~agp-LuNfYNIQkVbo3vEpL7tJD9qxLZ2JE~iNkKVipHo5WCIpJxkyavJgKW8hiTibjfXwXhnNXk1oTnPOcpscDFG6rCEpnaCjY9DCAaxlkmI39ArIng__" alt="" />
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
                                    <img src="https://s3-alpha-sig.figma.com/img/c8ab/3a82/34e95a157586711065a45229598852e3?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hF5JjYAScuKM1a9xYYaPK3ZjnmhR4wdUwvgPZM2bLf46i1zEzQSvhOL8UF2UrPTjC9D-YzI2GGx64xVBK1XGAgcBmmK4Gf6BvZ2de3x6EWEKLzMee9QrpLgeM88um4Wc9zeYWJL-GVRcyjwnwDPiuCl8WQyDfE81lxqjFPzpbedzogvsnQwSJrF-YH-NAa09eATEj7erjkiZmW4xpixiONCjmUvUIV78gIXuAryKn~k5TpJgx7PvkvnbSfh-FwJcpY8R02ZlJ9RX3~13j38l4DYahBKCXTHVrzgHe6gnXHuUKDHUgJgBFsABqd4onbLiCKZaOdHtFXeBBReCyIjIhA__" alt="" />
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
                                    <img src="https://s3-alpha-sig.figma.com/img/c8ab/3a82/34e95a157586711065a45229598852e3?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hF5JjYAScuKM1a9xYYaPK3ZjnmhR4wdUwvgPZM2bLf46i1zEzQSvhOL8UF2UrPTjC9D-YzI2GGx64xVBK1XGAgcBmmK4Gf6BvZ2de3x6EWEKLzMee9QrpLgeM88um4Wc9zeYWJL-GVRcyjwnwDPiuCl8WQyDfE81lxqjFPzpbedzogvsnQwSJrF-YH-NAa09eATEj7erjkiZmW4xpixiONCjmUvUIV78gIXuAryKn~k5TpJgx7PvkvnbSfh-FwJcpY8R02ZlJ9RX3~13j38l4DYahBKCXTHVrzgHe6gnXHuUKDHUgJgBFsABqd4onbLiCKZaOdHtFXeBBReCyIjIhA__" alt="" />
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
                                    <img src="https://s3-alpha-sig.figma.com/img/9da4/35bc/81f8160b963532c03d0f3f84bf89c4ae?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pWQK76LsoNS8PH22yuBIF4z~KLRf~GBDIix27c~hiSvV9TA-Yh200970XUJw1~SVIzFUkGi8FuKkPU8qJ31RmNchnaZuz9w0jw6yfOHjt1-6x3IpY~Q0dOzIP5I5Kq7o1GN2Tmuhp6Ssh1Eb4MnZnwgV4qM9U0O6Vo9jrx-x5Zx-QP4faJ2Udy2r1kuyxxrvTjJsU7pp9dF6kQxaiE1d7hWJ028m838wj~6NCr2nWmHrfFSWZOvRi3YW8vgVIEiV-h~e~KZPapnOv6qMF8RQv7DvJNUY-0QyffFrtQBOiRhGMoMF8wemm7w5ZYrD1WpAXiV~7cmk6h97vI9kBkWdHw__" alt="" />
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
                                    <img src="https://s3-alpha-sig.figma.com/img/2a2d/cc86/6e19165f854d8ad6ea22db2c70a489f8?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BdcdC2rBdZLHdCZ2P9z3D5Drj1JVOO-8wfcx3MyRFR~vIYeZ2NTyN6ozc4DTbEcp8IISj4Z3~mHJk3Q23-e1Io7RaRaQafZlNKSO0MxdCpcl~26ZCCSSqL6yFeM0DmK-bEG4sXA6laX3AtUh6EDGvu-hEl3oL6xNx5WZOe8onVmMneqLkeLsf0~NVNQiXye2Q2eLCG2r3EJ8II3~YaQCAyyP5PalffMWjo4~agp-LuNfYNIQkVbo3vEpL7tJD9qxLZ2JE~iNkKVipHo5WCIpJxkyavJgKW8hiTibjfXwXhnNXk1oTnPOcpscDFG6rCEpnaCjY9DCAaxlkmI39ArIng__" alt="" />
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
                                    <img src="https://s3-alpha-sig.figma.com/img/c8ab/3a82/34e95a157586711065a45229598852e3?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hF5JjYAScuKM1a9xYYaPK3ZjnmhR4wdUwvgPZM2bLf46i1zEzQSvhOL8UF2UrPTjC9D-YzI2GGx64xVBK1XGAgcBmmK4Gf6BvZ2de3x6EWEKLzMee9QrpLgeM88um4Wc9zeYWJL-GVRcyjwnwDPiuCl8WQyDfE81lxqjFPzpbedzogvsnQwSJrF-YH-NAa09eATEj7erjkiZmW4xpixiONCjmUvUIV78gIXuAryKn~k5TpJgx7PvkvnbSfh-FwJcpY8R02ZlJ9RX3~13j38l4DYahBKCXTHVrzgHe6gnXHuUKDHUgJgBFsABqd4onbLiCKZaOdHtFXeBBReCyIjIhA__" alt="" />
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
                                    <img src="https://s3-alpha-sig.figma.com/img/c8ab/3a82/34e95a157586711065a45229598852e3?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hF5JjYAScuKM1a9xYYaPK3ZjnmhR4wdUwvgPZM2bLf46i1zEzQSvhOL8UF2UrPTjC9D-YzI2GGx64xVBK1XGAgcBmmK4Gf6BvZ2de3x6EWEKLzMee9QrpLgeM88um4Wc9zeYWJL-GVRcyjwnwDPiuCl8WQyDfE81lxqjFPzpbedzogvsnQwSJrF-YH-NAa09eATEj7erjkiZmW4xpixiONCjmUvUIV78gIXuAryKn~k5TpJgx7PvkvnbSfh-FwJcpY8R02ZlJ9RX3~13j38l4DYahBKCXTHVrzgHe6gnXHuUKDHUgJgBFsABqd4onbLiCKZaOdHtFXeBBReCyIjIhA__" alt="" />
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
                                    <img src="https://s3-alpha-sig.figma.com/img/9da4/35bc/81f8160b963532c03d0f3f84bf89c4ae?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pWQK76LsoNS8PH22yuBIF4z~KLRf~GBDIix27c~hiSvV9TA-Yh200970XUJw1~SVIzFUkGi8FuKkPU8qJ31RmNchnaZuz9w0jw6yfOHjt1-6x3IpY~Q0dOzIP5I5Kq7o1GN2Tmuhp6Ssh1Eb4MnZnwgV4qM9U0O6Vo9jrx-x5Zx-QP4faJ2Udy2r1kuyxxrvTjJsU7pp9dF6kQxaiE1d7hWJ028m838wj~6NCr2nWmHrfFSWZOvRi3YW8vgVIEiV-h~e~KZPapnOv6qMF8RQv7DvJNUY-0QyffFrtQBOiRhGMoMF8wemm7w5ZYrD1WpAXiV~7cmk6h97vI9kBkWdHw__" alt="" />
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
