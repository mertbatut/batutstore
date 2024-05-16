
import React from 'react'
import Footer from '../components/Footer'

export default function About() {
    return (
        <div>
            <div className='AboutHead'>
                <div className='Navbar flex pt-10 py-12 justify-center 	'>
                    <div className='Container flex '>
                        <div className='NavbarStyle flex items-center gap-x-24'>
                            <div className='NavbarBrand '><a className='font-bold text-[#252B42] text-2xl' href='/'>BatutStore</a></div>
                            <div className='NavbarCollapse flex items-center'>
                                <div className='NavbarNav flex list-none gap-6  items-center'>
                                    <li><a className='text-[#737373] font-bold text-sm/[14px]' href="/">Home</a></li>

                                    <li><a className='text-[#737373] font-bold text-sm/[14px]' href="About">Product</a></li>
                                    <li><a className='text-[#737373] font-bold text-sm/[14px]' href="Blog">Pricing</a></li>
                                    <li><a className='text-[#737373] font-bold text-sm/[14px]' href="Contact">Contact</a></li>

                                </div>
                                <div className='NavbarNav flex list-none gap-6 items-center'>
                                    <div className='LogReg flex items-center pl-24'>
                                        <li>

                                            <div className='Btn-32 flex gap-12'>
                                                <div className='IconSettings flex items-center'>
                                                    <a href="Login">  <h1 className='font-bold text-[#23A6F0] text-sm/[14px]'>Login</h1></a></div>
                                                <div className='ButonStyle'>
                                                    <button className='BecomeButton bg-[#23A6F0] py-[15px] px-[25px] text-[#FFFFFF]'>Become a member <i class="fa-solid fa-arrow-right text-[#FFFFFF]"></i> </button>
                                                </div>

                                            </div>

                                        </li>
                                    </div>

                                </div>

                            </div>

                            {/* <div className='NavbarToggler'>
                            <div className='NavbarTogglerIcon'></div>
                        </div> */}

                        </div>
                    </div>
                </div>

            </div>
            <div className='Deben1 flex justify-center'>
                <div className='AboutText flex py-28 gap-20  w-[1050px]'>
                    <div className='AboutTextrow flex flex-col  w-[559px] gap-9'>
                        <h5 className='font-bold text-base text-[#252B42]'>ABOUT COMPANY</h5>
                        <h1 className='text-6xl leading-[3rem] font-bold text-[#252B42]'>ABOUT US</h1>
                        <h4 className='font-normal text-[#737373] text-xl'>We know how large objects will act,but things on a small scale</h4>
                        <button className='BecomeButton bg-[#23A6F0] py-4 px-10 w-[193px] h-[52px] rounded-md text-[#FFFFFF] text-sm font-bold'>Get Quote Now </button>
                    </div>
                    <div className='AboutBackground w-[571px] '>
                        <img className='' src="https://s3-alpha-sig.figma.com/img/7466/f015/45eb1f33b39fa1e1f6b0ddf5bb703345?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iJJu9WWsMF3FGy9ya~2uv4FU~PtI-Zs4f5deCuLqPcfJB-0kBVa0vcvJrBicnvjucccJAdNajtu~U1JS9uSPnYvmUd6lcrQtAk1jNm85AuQiT8f6wh88vCvir4Hvs-yMUgtqWPW3D2EhL87y8bQ4Mg~HGWKGB8cjEK6e8r-Zit9XrLaKlVqRYsGhrMI3sEvbKuvO6fS8mrQiEpRj1SWm8xe-tkj60sf2JudjtmcxbtMHScND7c4dhtcVNFb5kLtDAXicnERP~vFGtFU3jOZQH8V9~I4Ia9s6jhPEWYBFPwdbTno~RkkQIysh8YT0atSinJUAHUTrQ74mzMNzx2mTAg__" alt="" />

                    </div>
                </div>

            </div>
            <div className='AboutContent'>
                <div className='AboutContentContainer py-6 flex justify-center'>
                    <div className='AboutContentRow flex items-center gap-14 w-[1018px]'>
                        <div className='AboutText1 w-[394px]'>
                            <span className='AboutMain flex flex-col gap-6'>
                                <p className='text-sm font-normal text-[#E74040]'>Problems trying</p>
                                <h3 className='text-2xl font-bold text-[#252B42]'>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.</h3>
                            </span>
                        </div>
                        <div className='AboutText2 w-529px]'>
                            <p className='text-sm font-normal text-[#737373]'>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='AboutStats flex justify-center py-20'>
                <div className="StatsContainer">
                    <div className="StatsRow flex gap-32">
                        <div className='Stats1 flex flex-col items-center'>
                            <p className='text-[#252B42]  font-bold text-6xl'>15K</p>
                            <p>Happy Customers</p>
                        </div>
                        <div className='Stats2 flex flex-col items-center'>
                            <p className='text-[#252B42]  font-bold text-6xl'>150K</p>
                            <p>Monthly Visitors</p>
                        </div>
                        <div className='Stats3 flex flex-col items-center'>
                            <p className='text-[#252B42]  font-bold text-6xl'>15</p>
                            <p>Countries  Worldwide</p>
                        </div>
                        <div className='Stats4 flex flex-col items-center'>
                            <p className='text-[#252B42] font-bold text-6xl'>100+</p>
                            <p>Top Partners</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )
}
