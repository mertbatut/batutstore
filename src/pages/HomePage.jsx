import React, { Component } from 'react'
import '../index.css'
import Header from '../components/Header'
import CarouselWithContent from '../components/Carousels'
import Footer from '../components/Footer'
export default class HomePage extends Component {
    render() {
        return (
            <div>
                <Header />
                <CarouselWithContent />
                <div className='ShopContainer pt-20 pr-20 pl-20 pb-20 bg-[#FAFAFA]'>
                    <div className='Elements flex justify-around '>
                        <div className='ProductCard  flex items-center w-80 h-60 border-2 bg-white'>
                            <div className='ProductItem flex justify-center flex-col pl-12'>
                                <h6 className='font-bold text-sm leading-5 decoration-[#737373]'>Your Space</h6>
                                <h2 className='font-bold text-2xl leading-8 decoration-[#252B42]'>Unique Life</h2>
                                <h6 className='font-bold text-sm leading-8 decoration-[#252B42]'>Explore Items</h6>
                            </div>
                            <div className='ProductImg'>
                                <img src="https://s3-alpha-sig.figma.com/img/2a2d/cc86/6e19165f854d8ad6ea22db2c70a489f8?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BdcdC2rBdZLHdCZ2P9z3D5Drj1JVOO-8wfcx3MyRFR~vIYeZ2NTyN6ozc4DTbEcp8IISj4Z3~mHJk3Q23-e1Io7RaRaQafZlNKSO0MxdCpcl~26ZCCSSqL6yFeM0DmK-bEG4sXA6laX3AtUh6EDGvu-hEl3oL6xNx5WZOe8onVmMneqLkeLsf0~NVNQiXye2Q2eLCG2r3EJ8II3~YaQCAyyP5PalffMWjo4~agp-LuNfYNIQkVbo3vEpL7tJD9qxLZ2JE~iNkKVipHo5WCIpJxkyavJgKW8hiTibjfXwXhnNXk1oTnPOcpscDFG6rCEpnaCjY9DCAaxlkmI39ArIng__" alt="" />
                            </div>
                        </div>
                        <div className='ProductCard w-80 min-h-60 flex items-center border-2 bg-white'>
                            <div className='ProductItem flex justify-center flex-col pl-12'>
                                <h6 className='font-bold text-sm leading-5 decoration-[#737373]'>Ends Today</h6>
                                <h2 className='font-bold text-2xl leading-8 decoration-[#252B42]'>Elements Style</h2>
                                <h6 className='font-bold text-sm leading-8 decoration-[#252B42]'>Explore Items</h6>
                            </div>
                            <div className='ProductImg'>
                                <img src="https://s3-alpha-sig.figma.com/img/c8ab/3a82/34e95a157586711065a45229598852e3?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hF5JjYAScuKM1a9xYYaPK3ZjnmhR4wdUwvgPZM2bLf46i1zEzQSvhOL8UF2UrPTjC9D-YzI2GGx64xVBK1XGAgcBmmK4Gf6BvZ2de3x6EWEKLzMee9QrpLgeM88um4Wc9zeYWJL-GVRcyjwnwDPiuCl8WQyDfE81lxqjFPzpbedzogvsnQwSJrF-YH-NAa09eATEj7erjkiZmW4xpixiONCjmUvUIV78gIXuAryKn~k5TpJgx7PvkvnbSfh-FwJcpY8R02ZlJ9RX3~13j38l4DYahBKCXTHVrzgHe6gnXHuUKDHUgJgBFsABqd4onbLiCKZaOdHtFXeBBReCyIjIhA__" alt="" />
                            </div>
                        </div>
                        <div className='ProductCard w-80 min-h-60 flex items-center border-2 bg-white'>
                            <div className='ProductItem flex justify-center flex-col pl-12'>
                                <h6 className='font-bold text-sm leading-5 decoration-[#737373]'>Ends Today</h6>
                                <h2 className='font-bold text-2xl leading-8 decoration-[#252B42]'>Elements Style</h2>
                                <h6 className='font-bold text-sm leading-8 decoration-[#252B42]'>Explore Items</h6>
                            </div>
                            <div className='ProductImg'>
                                <img src="https://s3-alpha-sig.figma.com/img/9da4/35bc/81f8160b963532c03d0f3f84bf89c4ae?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pWQK76LsoNS8PH22yuBIF4z~KLRf~GBDIix27c~hiSvV9TA-Yh200970XUJw1~SVIzFUkGi8FuKkPU8qJ31RmNchnaZuz9w0jw6yfOHjt1-6x3IpY~Q0dOzIP5I5Kq7o1GN2Tmuhp6Ssh1Eb4MnZnwgV4qM9U0O6Vo9jrx-x5Zx-QP4faJ2Udy2r1kuyxxrvTjJsU7pp9dF6kQxaiE1d7hWJ028m838wj~6NCr2nWmHrfFSWZOvRi3YW8vgVIEiV-h~e~KZPapnOv6qMF8RQv7DvJNUY-0QyffFrtQBOiRhGMoMF8wemm7w5ZYrD1WpAXiV~7cmk6h97vI9kBkWdHw__" alt="" />
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
                                <img className='h-[796px] w-[389px]' src="https://s3-alpha-sig.figma.com/img/6e29/64f8/744f4e734b4d2dd0c1041ae3d0687be0?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HhyjkVD-daOl6WAofc~2Rlq5E-u6XgjiYikuDpeIK-gyzMlpD9g3cfxFDrXW99xGQ64pkRATgonx69GSIUcjcDPQXkuJdV1pLhy5xOROSOfAo~yQNLxKBnVjrT6tSQBhUTawECevAaJ3Tpdj2dcUALSZ-vR~oBssu6SSenB95QosrEgmmFYia7b-WUf4-VW5VqmzMbuqkWmuteUPAgU~gvvgEzru09wKseI-s2ow1NXuC9DZSAxmXbaw2SQmpdEvDTMctG9jo8i0SH6fMDbZNcHEriIaCh3tzmLPNQVU14lFaa~rdg92BDbwf4NrGH3mTvDNUDQUYIIioOcHEce2uA__" alt="" />
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
                                                    </div>


                                                    <div className='GroupTabProduct'>
                                                        <div className='ItemCard ItemCard flex flex-col items-center'>
                                                            <div className='ItemCard1 h-[162px] w-[183px]'>
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
                                                    </div>
                                                    <div className='GroupTabProduct'>
                                                        <div className='ItemCard ItemCard flex flex-col items-center'>
                                                            <div className='ItemCard1 h-[162px] w-[183px]'>
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
                                                    </div>
                                                </div>
                                                <div className='GroupTab1 pt-12 flex gap-12'>
                                                    <div className='GroupTabProduct'>
                                                        <div className='ItemCard ItemCard flex flex-col items-center'>
                                                            <div className='ItemCard1 h-[162px] w-[183px]'>
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
                                                    </div>


                                                    <div className='GroupTabProduct'>
                                                        <div className='ItemCard ItemCard flex flex-col items-center'>
                                                            <div className='ItemCard1 h-[162px] w-[183px]'>
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
                                                    </div>
                                                    <div className='GroupTabProduct'>
                                                        <div className='ItemCard ItemCard flex flex-col items-center'>
                                                            <div className='ItemCard1 h-[162px] w-[183px]'>
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
                        <div className='RowImg  '><img className=' h-[649px]  w-[674px]' src="https://s3-alpha-sig.figma.com/img/4f83/d305/c7cf97d501907ed12bf338b0a82cc287?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XLlUmVAYWhW8Bz6Gm62ohl2XtPHr-Erio-GrvJLTurjqLbiY61qBdsHP~4G5Vc9sYIO6E2KR4s9x9TC5qn8Uv36WbGmIlmo7025wAHiQBxrsljqWsmfUTs~ZtPX4cpFdoqPZ97lvkYW5cSD9G1f8QO7dypWtncSqbmY1R~eWQ6YsU9oQoxIf-GhcUlkjH3BkkUuy7TQ0H793i7IQ-NHIh0geQAiAo35UsS7WVXX5qJY9qXClG4wvDdq2mwaEoz55ERD-SFSOGA0MKJL-YajHOy2ncZ8NKZbcXZseP0V8lC6iCCceOqK-SsqJ4Ds9MyIBxyg97klJMCS0dtWmP3s~6A__" alt="" /></div>
                        <div className='RowText flex gap-9 justify-center w-[400px] bg-[#FAFAFA]'>
                            <div className='RowText2 flex flex-col justify-center items-center gap-5'>
                                <div className='flex flex-col items-center w-[280px] justify-center '>
                                    <h5 className='text-2xl font-bold text-[#252B42] '>MOST POPULAR</h5>
                                    <p className='text-sm font-normal  text-[#737373]'>We focus on ergonomics and meeting
                                        you where you work. It's only a
                                        keystroke away.</p>
                                </div>

                                <div className='RowImg2 w-[348px] h-226px] top-9'><img src="https://s3-alpha-sig.figma.com/img/e43d/8ea6/b4108cbd028fc3719beccb40231bf020?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n2nupk~lspg7IvXshE8DbvLgVZmtDX59b5vgOvuHtTAjJwPWVMp87zRd9Z4cx0a4-RgkHJE3NiiX78QBMG1gYwbTH05dDBQ00d9vVoUPP4MlR6Xej59iYmbrlxxUCoT2Z567ks1U87PYofqnDAuq0X4sUo4rWg8QDKZX2PpYHk5oNR8T69865A6vzH9yTUjg5AMbyzCStHBG7CpqAgCMFDBcE1lWDy4TWBk8uhkjyZPjeiU0ktJ2Dl1YBOxoUARYj5FFpGPacD1ieB5dsFcwnVa6tX3hgr8dX-1idN0xF4GTMXsBnD4aViqXuSaEiPD7V5OKwpQpc8lq8h3doC4bXA__" alt="" /></div>
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
                                <img className='h-[796px] w-[389px] object-cover ' src="https://s3-alpha-sig.figma.com/img/7a2e/08ce/36eea85e103afd61deff01ad078a9903?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XnKOV~U3Q6HKrk4o4cO-kcL9i7bzuxSfJj2fotbpnNg~YLJQaHrnCZVe3trN93k33RnKrhCo3OeeBagesG51x-p7WAwzTcKGqDv7-ICpuNHD03xT-rjAJ4rHyuRhwG3mXLJFN1TRfWTcXh1v6H9liV1P--lz6cUXp3IFsIi0fGXqinFDmA0S~-mi1QjU21hQ6QZ3xQZoVQbQuc6WDVCU6O7Hwkpnzg2imZ9Yb6WBi-6ckPGLQo2frWmJHdmCRXVAugwIy5UXTKFRpy-K9Rr-RGoV6uCaxJunoZsWRo9~27J-kn8hPSEmc2htZA6PX1TRAhhQUbl4s6tBVVsh~anDUg__" alt="" />
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
                                                    </div>


                                                    <div className='GroupTabProduct'>
                                                        <div className='ItemCard ItemCard flex flex-col items-center'>
                                                            <div className='ItemCard1 h-[162px] w-[183px]'>
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
                                                    </div>
                                                    <div className='GroupTabProduct'>
                                                        <div className='ItemCard ItemCard flex flex-col items-center'>
                                                            <div className='ItemCard1 h-[162px] w-[183px]'>
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
                                                    </div>
                                                </div>
                                                <div className='GroupTab1 pt-12 flex gap-12'>
                                                    <div className='GroupTabProduct'>
                                                        <div className='ItemCard ItemCard flex flex-col items-center'>
                                                            <div className='ItemCard1 h-[162px] w-[183px]'>
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
                                                    </div>


                                                    <div className='GroupTabProduct'>
                                                        <div className='ItemCard ItemCard flex flex-col items-center'>
                                                            <div className='ItemCard1 h-[162px] w-[183px]'>
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
                                                    </div>
                                                    <div className='GroupTabProduct'>
                                                        <div className='ItemCard ItemCard flex flex-col items-center'>
                                                            <div className='ItemCard1 h-[162px] w-[183px]'>
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
                        <div className='RowImg1  '><img className=' h-[649px]  w-[674px]' src="https://s3-alpha-sig.figma.com/img/7b48/0f4e/eb94313e5df675c7986d5dc3ce4b1d30?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EzKZu~mlsYmWQ2NFOPbyeYFaCyfEWaxJJyZ7EwHVMPw2Vhh67gJfoVjKY5PJVK7ig~Ugp4Af3AKnhkucy00iJTexTH7EvB5eYjHouifd4PHOUPBcl68LiGnqydWwqsl-AskgsT2wUXb49~frQQ-3~KGVftq~7lPTgjQ2pIjig-~uHvel0eCMR8ap21Mlmg4XqhFhZypYq49VXlOFwzLNzO1IgWLfJZ~-yCdlXSmg0BFnGUkg32-SJBgPiSn998V2lSc6a8ahyTlSuLibGN5GPkzPTWkRp25wUum-xfCYcbHYVhxXAeLWV4drV476Mu8sl4E7DEzzZpIbMEDh0VdhIw__" alt="" /></div>
                        <div className='RowText1 flex gap-9 justify-center w-[400px] bg-[#FAFAFA]'>
                            <div className='RowText2 flex flex-col justify-center items-center gap-5'>
                                <div className='flex flex-col items-center w-[280px] justify-center '>
                                    <h5 className='text-2xl font-bold text-[#252B42] '>MOST POPULAR</h5>
                                    <p className='text-sm font-normal  text-[#737373]'>We focus on ergonomics and meeting
                                        you where you work. It's only a
                                        keystroke away.</p>
                                </div>

                                <div className='RowImg21 w-[348px] h-226px] top-9'><img src="https://s3-alpha-sig.figma.com/img/e43d/8ea6/b4108cbd028fc3719beccb40231bf020?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n2nupk~lspg7IvXshE8DbvLgVZmtDX59b5vgOvuHtTAjJwPWVMp87zRd9Z4cx0a4-RgkHJE3NiiX78QBMG1gYwbTH05dDBQ00d9vVoUPP4MlR6Xej59iYmbrlxxUCoT2Z567ks1U87PYofqnDAuq0X4sUo4rWg8QDKZX2PpYHk5oNR8T69865A6vzH9yTUjg5AMbyzCStHBG7CpqAgCMFDBcE1lWDy4TWBk8uhkjyZPjeiU0ktJ2Dl1YBOxoUARYj5FFpGPacD1ieB5dsFcwnVa6tX3hgr8dX-1idN0xF4GTMXsBnD4aViqXuSaEiPD7V5OKwpQpc8lq8h3doC4bXA__" alt="" /></div>
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
                                        <img src="https://s3-alpha-sig.figma.com/img/ab5b/a03f/e3a1e9916ed9bb795f661a218944204f?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i7uaqHNHTAYwp3K3QojP3cIN6x2tlkp6MVac07nusUh0P3-AttieFFOJe4mDZiH2hh5SNakF6eCUoFK9MHLjNu7V4LzK0NiYb5xGGqd2aQRSfongP9WDNqehjiUN8mkyYrBj7YYcjbo7mK6xQi5x0o1~1Z1RAhINdkKFbxvgrbezvxnyM~o11yQyibaWkJ2U7h4i33iUtXn9pY7BG5EBWKerY3j6GnOW0rAkXAMDgkUmyCfILLgjXe1C6HB-n64fxGY30DujtH84cz73tft0D4VtMG5yIVTumrcE8x3Z8IuVDbod7zvWYhutWkro~uXS5JV0zMmoYH4DDK5UDLtUuQ__" alt="" />
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
                                        <img src="https://s3-alpha-sig.figma.com/img/d700/b3e0/d1b1b5630c31252e2085a6e9c12310a7?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=puNxiLPWhQl4w5qBFx5tfvDLy~X6efU2S3t4XVbPDUbAGail~hQD5LqAYETorX8SLJlcsWvspwOQc0~0i7pZ9c8NHl6Uz-AY0uYe9oteAnsgY-yAVfcYJkpvc8r8TOvYimV2aUuOZ49YUggmxjQ~7cnjXCD2V8LNPojjOdcdpM156tJuSv1o~ZFq7n8z7sv8g7IgOl-AP0fC8smiZ1vcRZS15aFrjnPuwjBKUS7lCNzYu~4JKN05l3EJdHDok7Bf9gxvFAdXn93KDIJrnqidbdfL00mdchnynoSSNicQ8exILx202jCwR2i0bOJtW9zQ4eEKqomFV0~OM5cg3hK8iA__" alt="" />
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
                                        <img src="https://s3-alpha-sig.figma.com/img/b940/2a1e/e5a2039e4d5c84c4727011bd5f439d31?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PLldC6INAGJRGYtzQ-ACqT6n4AhToOLq7BD-rpP-oN8tzgvHyVz7MyMI3JmFaYP2b2aYEvxZ3a3O5KuJyXb2IScVuS4Bg7EMKaaDeZpetagmrgiz~4I7Z2pDuFNJF9pRmY0ojCyGBeHRk3VIYhhmfphqw5OFucSntMTWfrz9WABdFIaPMhUR-VL25pmGUYeo2P5bX2~P2mNdwxkQAFPPirh-bs1tLarF7WY55wyWbfdZ6Kyo2kLxOzSzQS2Q2IB8Ay1QURDwudmQEs82MT~h1uo~xnNjG-35rOKZ3Pg6W7Va8I1-QkXOwMw1fVvm4icF4S65pWHssYHNfvgtNSQAPQ__" alt="" />
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
                                        <img src="https://s3-alpha-sig.figma.com/img/c7ce/8fc9/ae05f3d29c3ccc71bbfd4054c7ac7acc?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a~yImzzdWdJSib4J9p5SQiKcj2h4it8RmQL23YHQDYshv~64iardHSpRhbQF3sRPc3cLOrWZnYyAf6tJDkGslgRKmPkRHIQfYUcD1u8tewZADPQCEAmLADD~KVMlOgh8WyMoHMhA-quVZA-7hlcQwF28Gm3NpyWX56-4cCrf1XlIMCjbH3JnhpjB2YW-CVdIQ0GYm~D5h5YZf6RI-hjeJXu449uzr9cG3HyFr66Szte21txFooiCLAoUnzSlcT9YcxVT3voqsRTmvgh7UXNKqlwwKDeKy1QrrwXAir68jp67NBo0VNfpkUHDyfiyhG62xsbd39oYhBGtVkgHeRNTsQ__" alt="" />
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
                                    <img className='h-[300px] w-[348px]' src="https://s3-alpha-sig.figma.com/img/679b/3cdf/17b8ec542ce1c452944dfb51f10ba010?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EDPYelTfCxZdPvh88tNIRvtduECytc2Vc73cMXzKGB05HeXTJ8SzOcNMGtKY5LQmkAvHIgBCj2qnjAoojoeehT1EHCf57VznRiwfIQCziemUTe8KqOGynN1e2GS-yki7F-knQd-3YlBUD3gRERtjotYL6vU8dP5XjtesFC3Fuh5TpnZJgxkbZ26~XqNMRPT5emhCoSd81KPHR20yl4NcCIliCk4QaYEUNIxOOmD7Na3leCz447u6CDnsp3ax2dXNgRIzKMSn0irl~6K9Is20IrG~buNCqVBaodFoWY2XmcdUumLc7ZcmmnYMZkhFCXlrrjDdvctWWpdwuOeCCMDz7g__" alt="" />
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
                                        <img className='h-[300px] w-[348px]' src="https://s3-alpha-sig.figma.com/img/679b/3cdf/17b8ec542ce1c452944dfb51f10ba010?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EDPYelTfCxZdPvh88tNIRvtduECytc2Vc73cMXzKGB05HeXTJ8SzOcNMGtKY5LQmkAvHIgBCj2qnjAoojoeehT1EHCf57VznRiwfIQCziemUTe8KqOGynN1e2GS-yki7F-knQd-3YlBUD3gRERtjotYL6vU8dP5XjtesFC3Fuh5TpnZJgxkbZ26~XqNMRPT5emhCoSd81KPHR20yl4NcCIliCk4QaYEUNIxOOmD7Na3leCz447u6CDnsp3ax2dXNgRIzKMSn0irl~6K9Is20IrG~buNCqVBaodFoWY2XmcdUumLc7ZcmmnYMZkhFCXlrrjDdvctWWpdwuOeCCMDz7g__" alt="" />
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
                                        <img className='h-[300px] w-[348px]' src="https://s3-alpha-sig.figma.com/img/679b/3cdf/17b8ec542ce1c452944dfb51f10ba010?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EDPYelTfCxZdPvh88tNIRvtduECytc2Vc73cMXzKGB05HeXTJ8SzOcNMGtKY5LQmkAvHIgBCj2qnjAoojoeehT1EHCf57VznRiwfIQCziemUTe8KqOGynN1e2GS-yki7F-knQd-3YlBUD3gRERtjotYL6vU8dP5XjtesFC3Fuh5TpnZJgxkbZ26~XqNMRPT5emhCoSd81KPHR20yl4NcCIliCk4QaYEUNIxOOmD7Na3leCz447u6CDnsp3ax2dXNgRIzKMSn0irl~6K9Is20IrG~buNCqVBaodFoWY2XmcdUumLc7ZcmmnYMZkhFCXlrrjDdvctWWpdwuOeCCMDz7g__" alt="" />
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
                <Footer />
            </div>
        )
    }
}