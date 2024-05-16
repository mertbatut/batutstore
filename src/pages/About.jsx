
import React from 'react'
import Footer from '../components/Footer'
import Team from '../components/Team'
import Brands from '../components/Brands'
import Header2 from '../components/Header2'

export default function About() {
    return (
        <div>
           <Header2/>
            <div className='Deben1 flex justify-center'>
                <div className='AboutText flex py-28 gap-20  w-[1050px]'>
                    <div className='AboutTextrow flex flex-col  w-[559px] gap-9'>
                        <h5 className='font-bold text-base text-[#252B42]'>ABOUT COMPANY</h5>
                        <h1 className='text-6xl leading-[3rem] font-bold text-[#252B42]'>ABOUT US</h1>
                        <h4 className='font-normal text-[#737373] text-xl'>We know how large objects will act,but things on a small scale</h4>
                       <a href="TeamPage"> <button className='BecomeButton bg-[#23A6F0] py-4 px-10 w-[193px] h-[52px] rounded-md text-[#FFFFFF] text-sm font-bold'>Get Quote Now </button></a>
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
            <div className='VideoContainer flex justify-center pt-28 pb-20'>
                <div className="VideoCard flex justify-center items-center">
                    <button className='absolute w-[92px] h-[92px] bg-[#23A6F0] rounded-full'><i class="fa-solid fa-play fa-2x text-white"></i></button>
                    <div className=''><img className='w-[989px] h-[540px] rounded-2xl' src="https://s3-alpha-sig.figma.com/img/bf53/61f3/08dd0c5a04f10121bc68f6cb9ff0d63d?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c68LoUmKz2VMmeaoTCzutTIiKnQ6cGs~EbWCbCGOlXlE-PZy9oaUO4y~icSOupuPpuyxz1OJn0ssgXhgXowN~MEfLFv8uOuqPyjcRlSlyK5XJ396e9vJz06BwXzLDTSrm3GgG7AEWned~KfLhwHPWKn2mcCXrc-Uknlqm5vXgQaA-PiEFbl-8jt5QdRAIVdMfQM1X421x5mcuuUnO0ie9vkceqoV0~HGWtSZ9e-ZYTpxBJTA7xrh5kV~rfbXrfxFB7n1axNccZT24-Ye4tluiD24VzPEyav53lTEdZX4owLZdfyHQ2MTzKCAz98YAFSHVSVFvOPCyK0fI91IpgbrFw__" alt="" /></div>
                </div>
            </div>
            <Team />
            <div className='py-20 bg-[#FAFAFA]'>
                <div className='VectorRow1 flex justify-center'>
                    <div className="VectorText1 flex flex-col items-center gap-8">
                        <h2 className='text-4xl font-bold text-[#252B42] leading-tight'>Big Companies Are Here</h2>
                        <p className=' text-sm font-normal text-[#737373]'>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
                    </div>
                </div>
               <Brands/>
            </div>
            <div className='Testominal bg-[#2A7CC7] flex justify-center flex-row-reverse items-center'>
                <div className='TestoBack flex justify-end'>
                   <img className='w-[590px] ' src="https://s3-alpha-sig.figma.com/img/a014/4955/2eeaef7ecedd3954687aefbdb6236bb6?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hSmWhqToaALascUYTcFQIZuPFvmhwN0dybk4LSpEeQrOzXV893bF5903UF-neJ92eMl5JUKSlpkgnN-DMZfrgJs8oP7jOGx1zENr6b4ga9krFSJ6YkWrf~1QSmErpfr0phDGyNlA7BuqgPhO2KdUVvgd0uOmGhrTKLZnVrSjcWGetI29Jp8XCDS4O7TSIxYA4kBb67Adqa~y7q1CV0WzVHi1TJ6P3alrRj2T99GA7jHoYAyebhjIztHQZSsHNvHAyNYB-kWaGrYtLrkZbPI82FSp-vH7h1KmW5MCWuURA4E4yBayrXG~pMXBCGIrC5dyiBqJGmYR4B9cb3WbIo27uQ__" alt="" />
                </div>
                <div className='TestoText'>
                    <div className="TestoRow w-[1050px] flex justify-around">
                        <div className='flex gap-6 flex-col w-[438px]'>
                            <h5 className='font-bold text-sm text-[#FFFFFF]'>WORK WITH US</h5>
                            <h2 className='text-4xl font-bold text-[#FFFFFF]'>Now Let’s grow Yours</h2>
                            <p className='text-sm text-[#FFFFFF] font-normal'>The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th </p>
                            <button className='w-[130px] h-[50px] rounded-md py-4 px-10  border-2 border-[#FAFAFA] font-bold text-sm text-[#FAFAFA]'>Button</button>
                        </div>
                        <div></div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>

    )
}
