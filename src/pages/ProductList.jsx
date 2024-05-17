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
                                    <img className='w-[205px] h-[223px] object-cover' src="https://s3-alpha-sig.figma.com/img/c9a6/4276/a14f623312021f83a598c945b5165068?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Cv9e-e7csVUO5Pyia-Xm5sPPfwH9LfAHBzSdhYx4wbAHT367AWAf-rVvZC4ldbzMV5u2FOHLlMYfN6pMGN5vmStliJo~cWRVpbTed6FEMXbutKYgGAPUVYtrTJmnSmu-Mxqj5hRnV8RhyFVTBji2btC-dmaxkgvwWG~uSvXYGEVw-cIw2UvU3EC9HzaWHx-jC4EaJWIL4TAmT8g8C1niUD3oWyBbdfnkSJQaAT9xpATPl7TgDwMQ95oSwCTIzKa9gDc7lzojiQbtb9Y5uWK9FOX5aeHpw-5q92QsYh~3sVj967F916zfIvwUNvS~8Zx5YEg6KHoxCixabMuL7XHVlQ__" alt="" />
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
                                    <img className='w-[205px] h-[223px] object-cover' src="https://s3-alpha-sig.figma.com/img/96c8/6912/d491d421800e62998b9af7c838cc25d1?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ME~~D9gkMEvSPsSJVuH6KA0yA13zvRIbbxyYbKoZrLpoSY9OjuujJf5cCvlKL4KM4ukI-zHIC6~~45OV5d4KjiPI8soTaAHD9fMT7UjncHaCkVYK68cmPWrdNCSXlYjuZESEkFaKTKMMiP3Ky9FN7r2n-41pEmamlpt-q4z29M1shQrSkYTGTFTeAT8kk1Fu48cB0QgV2Ze9L5m3k07oRPFvy99XjT3arKAvbN4VISMUm7SZ9Tuc6JOKeBaH0eED8lkPrH~uGVaJ~zl9uPEwuuNbtvPtWQP0ngOVp4mJFzqRX2xUgJ7hWBxNwTofpgu20QxRs0JWABruTRndC5c72A__" alt="" />
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
                                    <img className='w-[205px] h-[223px] object-cover' src="https://s3-alpha-sig.figma.com/img/7bc2/f9fb/559eeb7e6b92ed49f40128729a9f74f1?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pq8IGJpqqk8Ecf2su1rlMRNV0MovTES6VNbnTh27wPHoiDZPKBjYhUx6n1Mxa0PHR8JkwYf3b4FnBWcdig8EEgpm0aj3a9-KuzPNX~hL16OCKEr-tEFSYuhgfdNIITYGdCgwynZC4Qoo72~dE8I9AF5yad8QGn9dYkoUfOdEPpigWI-od6zXqie6gkvmoHIcyPs~cw5aqFdJIQ~wYUkyFwRqIWdAegiR56IV6rb5CMJLHSyhY7Am2U9zur4DxbTBhQL8HRsdU2LpwJEc36285ube5YW7mUSRtq2HdaOUTbtaZq2ixn608s-Z14KRFGxeHi-XSQ3ShCeasRgfpg9XSw__" alt="" />
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
                                    <img className='w-[205px] h-[223px] object-cover' src="https://s3-alpha-sig.figma.com/img/6e72/2a25/b740dd4eea5b5580d5e1601a818f98c2?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KaX8IF1XQX0fPYLIgEXn5-avLngjUDZ2rKPgBJeFLfs3A1ahAsDW-OlT6IAxbI1fD5ECbONXdeuLtsqhhU-R6ELJQJKCW6LnZ-dgqdTlDCFjgZirSHH1-5v9qH-DEsy3k0sSEGV0HRVtuoC73Ea5IGPIuiwaeUDJENYhGEe85TKJQ2ujry3wGfaREpno1U4jaIoDRxMe8y3GgOoSWNzvcx1oMotkzCmG7~XD6x-nu553C3o~oQw6vIYn~amANQ4nNSqaFznp9h~RBcwcs6evvfpCO7Gr1~fCbu~pUh3FhCnhfXLAEK84i2O-Pho0JKV2WU8LZ6FtMFpI1dloZ6hx1A__" alt="" />
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
                                    <img className='w-[205px] h-[223px] object-cover' src="https://s3-alpha-sig.figma.com/img/2650/d8d7/92d83e3292df63340b2a44fd9763c159?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZqaS7EX1zw3Ko8j-FrHCCVBLQS7rk2cad-kXAJRrrRtG3tlc05pDfha3qiAf0ihW~RfTu0o6G5i1JjhEhqV7ub989MEFvtgXunf~s~327VCGSKVokpG2N5wx3Kp395tPtf1nHA5FsCTMeHk7k4u9bEKnZ1U~pPpbQdPf9fQE-wP709qU0CUqTE0XDWo82mgUOS7y4pwEQ3770~HDE65sXm7Mt9LmVhj7l-Ei0M6Of89ld-hhnc26F2LIPg9HtePyrlivG2Jo7pU9rA3Ryo0JIlLhKnkFvwtzjTzpqGW-Ui3cRRgTpESqHTo9sVzQIwzk6RzyS8rrYmiM1B5zotge3w__" alt="" />
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
                                    <img src="https://s3-alpha-sig.figma.com/img/9da5/ab42/c0357746eb27e42fff6279478e2c8a48?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pmfHP--vTNkIosajBlttlcHUCHC1wy23RabxeVVpem7thxFSuC-Qmjsj~HqDAmUDMWb-jWqNibiHcEKa1b7v1iNzZACxMBbizO-arVwdV1etMellGh2F3SqNZVj8~SV0F6r2rFVLtyeCBmwmeFm5v-EHcFfUele57dyISB0nyzF-Sx2g-5zPeqEZi22Y3Wp9-kS8Nv5Q7Z97XXQ~oYvDAbHkG0iI7gClm4nmB7eF0BPawBiymMMTrjO5SPOaViQknAncP7ahne3ShG5gfs6aFQO-fyiXSFZsx~4LYhq5a1BN8lpRWpbDWwkhsz75Rsm7sEMHKflWIbd~Xn16ojXtRA__" alt="" />
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
                                    <img src="https://s3-alpha-sig.figma.com/img/b384/eba6/08bd8616723a95d25fce7dcb8f25ba9d?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DSZ7FinNGp6HDBcp5YKob83Cf66t~z6-8BNzPBJ21w~3CBQ0nwFFCwZDrbEOOLWM5oTadmGF4zjIIfTSs3nmaDAVYXJKvZ-HbeLAXW4o-tALRWSY25mDASDOFMEwpZLHkrMT5jiAJ7~7ci6vm2zYIjfaXLOVv2XlQC8NaE~M9eKj1UwhXJSLH0b~Sbdc2nj5rmt5JWzD8Y~wmG7xrnf42YYXm5PC~2i~TAgLPv-w3OaAUy8~68UPm4xieLfosp5kJaLoWv25K8DlgXW9AfcXv6oru2U-2Vkgj1VcPPZQ~LTI~Kiigv-2UCy-SfVBMv0XJ8bIxivV0mJF8oLDpC7uhQ__" alt="" />
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
                                    <img src="https://s3-alpha-sig.figma.com/img/3e7f/7eaf/d5316e4fa827cf3570a2a8c7855d5a94?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=P59n2AjH2TexU0fPRqMW4W7ytO3UJMQxcM9FJFoyZLzPIb7g~Q3jxvwQ1EZbllk796A-oQ5OPsfmfbnUTUP5SFzqEgPvaGI6ZXR6slaXbixUQ7rQgW80Bj1J3s27SP~tvmp5wE-kCW0OoXlyGxPKBt4U~e8gWINLo63yj06nDIZfV1aIe4WqRO2XIYfGRaf3jm05n4~qRgbiSD4OjvjksNURVOq21VoyqUfIAkHnHvpzihm8w4OaFbXAtRx9t0npQrK6asOj~F2ONe~jsPnvYY9RIIvB0VXs04DGg26XXRiAPH6JVBVTKLtPbN-FMSYUKJPnK~7EQEykA-H6PFbEFg__" alt="" />
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
                                    <img src="https://s3-alpha-sig.figma.com/img/192d/37cf/726d1f63d6a96c19556e7a721f4f64da?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Dj~nvXbFrfm6U84pLdbtDD~FQa4ByexnAHFIptHmRoB4UbS0D2KxMOwaQlRsgNGfCOBRhe9wXHu53Jo~rBGukdtXIo0bQ4LWSr26yNCkqGkWcwSG-Kfj6wPYfaeI-VrPfLJULN2eVCxGddUTb0Z9NhwG6D0HyiuKmtu6CEX4DpMYGSshVSML7yUryq3AGVyCLlm-5V2kW9gs6B4vhTSaScQmzDDFqZNXngLv--XmbJ2sGLEqm5Msfey3dKWGJwLyTIbGq660nr4LXgSEFjtt3Wi0VcARHMg7xnLoJKaP0R8qRv0eupjBVwUB0W6-h44MHKgLVjudwePdqvOWH2yRAw__" alt="" />
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
                                    <img src="https://s3-alpha-sig.figma.com/img/8696/d051/d5b4e9d2b71de14231ff0f1540509e72?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VSbrMLINwsHITNLztLPYN9kkpDktIEPxYLjdzjFZ6~ax-YBG5hXtAbYgzpmBF2d36IhPOQge8QTOIzK79aI6q0vRJwo27z2ec3KcsJZYX~G7H4M-bp3mgGx7lYVkibvi87LpY41NJKnd1b2VAKmklpANEHylRNUpWDd8M0TfIDTBOazT55ziMnXutsMsNjCKnE6O4Y0UqnCg2T0T1FnrXGkQ1u7XnLUFRRHgfjShQWz-YKZbZ6ygbhL-jxXn6zlzslG4Ets9atDUn8O6ahYPKYIsMzx~ElXXUOmtBDaB3tt7Z2Nht2oWinKds2mlqjodKv7CcEFofCZ-b3UU2Gp2Ng__" alt="" />
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
                                    <img src="https://s3-alpha-sig.figma.com/img/a014/4955/2eeaef7ecedd3954687aefbdb6236bb6?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hSmWhqToaALascUYTcFQIZuPFvmhwN0dybk4LSpEeQrOzXV893bF5903UF-neJ92eMl5JUKSlpkgnN-DMZfrgJs8oP7jOGx1zENr6b4ga9krFSJ6YkWrf~1QSmErpfr0phDGyNlA7BuqgPhO2KdUVvgd0uOmGhrTKLZnVrSjcWGetI29Jp8XCDS4O7TSIxYA4kBb67Adqa~y7q1CV0WzVHi1TJ6P3alrRj2T99GA7jHoYAyebhjIztHQZSsHNvHAyNYB-kWaGrYtLrkZbPI82FSp-vH7h1KmW5MCWuURA4E4yBayrXG~pMXBCGIrC5dyiBqJGmYR4B9cb3WbIo27uQ__" alt="" />
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
                                    <img src="https://s3-alpha-sig.figma.com/img/edfc/ad0d/ba1967435dad649ed91c2e00be5f640f?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IkRbwDTTcftyBNGWfI3n0fkoTIE202wAZpyezvHb~c~XYrrfPjYn3JeYIH2DP4VkfsoFwL4UGW~4xkIhkfcI3iKhf~pHXSpgmPuy5xisgC2YMoyBY9VcpmVmntBdf0893iR5T-LdMXaS8FkaafTE~rkA3m~Vo77uirbRCKSarGmKUk2NPBMc5-nyvfQYAe~sAYcs35oXPE2aNtNrmt4RMw6bVJZeNdGFO4eEbHpUoteWjYZ0cHedsZr8Ltz4FHZ6ECmLT8Cl1J14jw3fNoItR97E5yQetbEirIa-DVyXu0rc3G50jwJIMbInazpSx5lDos5DWKxA5-3YK501q0pPtg__" alt="" />
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
                                    <img src="https://s3-alpha-sig.figma.com/img/e93a/ae2e/1138e5741f6879c9d8b83f0b79f972ce?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DKOKdU2eyKRCAyMYCU-8z-c13ozYBn1j0kG0oKZMG9fwcEpVe5X6gfT8WrQFmGd4qo7HI82aNWvoWoZPX5ir0C1c9ISyAUvxTMMyz~0UCuekAd1IYKpDt~Db25PatMjdNWyXfhtlybvIZSNvrV1dQw3sZGPcKmFXB~w20bfhUtNEmx657t0ySINWOvNESuWPQKi~m~TWAOQ30J401Hh92upGBI079qlCGOkxJTb4aX7F45IDzdZC1UyTinlecFqUrjoAfE8JyRAXl9-oAbwKVZyyPbao4Xqj9pf8RUbR6VYXbHFJW6rXAV2WNfqukeaCnRrZk8WytFCLItUcwCsQlQ__" alt="" />
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
                                    <img src="https://s3-alpha-sig.figma.com/img/26f0/6d36/b8be071a9cfb336e8edfa8e534284b19?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hP6UfwXEdv8c1iHjdhU8xxOv4dlaLZT0gPakr2z6Ra1Gh3t9t5zbPsG0544dajTMLE6pXzHXTSVrNqPqDQAL0e0IqboI4~8hOTC3RSvDdA-HmCUjSwSSyWNc2NXXgsTblpGdrdqPihRdFMLHlx8c~GyjflTGiXb1aPtMHV1gSX8d7lbpYQc6D6lr61Pni4OFwQ-WvIotDNo8DW7ANE4vCmj8RsdMkI2YolYWelR4faAUJrKtzuCr5RHGYVQhfLWzMLmlB~q9TAENniJSg2YqAJDudffc34m8QqKFsCNjU~bjImHFtVulA8p5zIB2stxq2uLuVYT0s80k4HJukE-ngw__" alt="" />
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
                                    <img src="https://s3-alpha-sig.figma.com/img/6722/d236/f78733bd50e39ff93410c2469644d50e?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PUyUw2CLRO3vIeYvDDXibhk1gHgwLPP3RDOg7IlwF9xWtahw8McMrFuO~cgQzNsYZFnV5b9IW0QxKZOMTg6ZSiHHJNEhOZn8y2eBidYHFl9B88W7ObYw3y2kvXx5KgqZumanOPNAMCKv6P1iuHKcpSPwJ98ZgtOuLbAZGZW8xtJpsUM9XB3a9O~O81QRuoCH3ug1XuFUIbO2lnT6GAT30vOm927jZTWnECX0EVNmoDidcoQ53I7lBmPjtQK8xPyVDAnn6cM4qqJeaOI43oYspfc6TcoE8PZuBEZ~8ivggdcLaGZqUA9bEeH6jkWoN~2iqzNuEXeEqaG8-7ZAW8g1UQ__" alt="" />
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
                                    <img src="https://s3-alpha-sig.figma.com/img/605b/8375/2e220c164e230e86bf1054bccbd5ccab?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LO6I7vVKEv99ZlNZpnLpNAxWygkaaGC9Px316NqPpsw5vZdbSL8rH0ngAqfNkbDtmSGkmprXuKQzU7isp6KzzC3tKRq21Y8~cwMuSzuI2AfRsx-kemkEyUP4GYkG8RX5gw8uQYii9t~xrGGhEtrewqaRiqnatF~sZKUuDBGU6oZT5iOPd8CvoH96~J-qo8nB5O7vpHTw4kuMZzJurvgekcU37MxF54vsu6CzvCvIz-RfyML2VW0pLpka~snRnGtmm-woVSAw7Wlza6ArnGtZJRTENnpZ4IV5JDv3phsHz9U4hQ1aCHIPH4kdtcKvavXbtRh4M7r1P0tcDCxtoZQopg__" alt="" />
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
                                    <img src="https://s3-alpha-sig.figma.com/img/ab7b/991d/7f3b413395097d70baef867596099727?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AogWQRaKb3pAS-zQ0mjv99b6ofCiop~DvzLP7FgVckHbWG06mMh7vjAjSW~SOkl-03FGQchxtod9KYihBhhbPHZLZT43yoq8-IFb3b1rBl0n98k4tzN4uWfOSQralPU-1ECURqaL73jXm2jqmWJPeCZwurwlN7kBNDBxj0mVqhDgSbuNoqi9O5omBEHMYzeD5vZ3K-wpRir9DlyF-lpvy9TUGyBntWIORvjEcGGh~oOVoUzkMu2gCxRDrZFvu1sgDZ-9IyXXqHbJSH6pSaI~DdKBe~qMtp9NRTsjR8oZQtYGkYdIX~98c3QDPuoBWc0nSLRycjnDjgDri~x1WFOFaw__" alt="" />
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
