import React from 'react'
import Header2 from '../components/Header2'
import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import Team from '../components/Team';
import Footer from '../components/Footer';


export default function TeamPage() {
    return (
        <div>
            <div className='TeamHeader'>
                <Header2 />
                <div className='TeamRow flex justify-center py-12'>
                    <div className='TeamText flex flex-col items-center gap-8'>
                        <h5 className='font-bold text-base text-[#737373]'>WHAT WE DO</h5>
                        <h2 className='text-6xl font-bold text-[#252B42]'>Innovation tailored for you</h2>
                        <Breadcrumb >
                            <Breadcrumb.Item href="/" icon={HiHome}>
                                Home
                            </Breadcrumb.Item>
                            <Breadcrumb.Item href="TeamPage">Team</Breadcrumb.Item>
                           
                        </Breadcrumb>
                    </div>
                </div>
            </div>
            <div className='TeamImageGal '>
                <div className="TeamGalCont  pl-10">
                    <div className="TeamHero flex gap-2 ">
                        <img className='w-[700px] h-[530px] object-cover' src="https://s3-alpha-sig.figma.com/img/e98c/6914/973e6a41dfef7ffabf70f468edcc4107?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V68Jayxd7vnAW6eY-NsBocpBfJcXzIk1oCs4peD5mHJNQRmhh~Qn4btRikrCKfFNOC0HAxTblCYjgBdPFBvB-~ozfwLHIjkPDLkb46quUOphkoteNcb07ls27DG6Q9pt1xLmggj0jDr3OPlEx3wlEQj-0ZwGJ1MUpx1zNtMcf9maeHBC0FIAfL0iSYlW9ez5rCe-Fd3fWTMo-kP31esGn6BTNC4yVNq3IdB7Lkk45a0ZWUzeLwUc-dWERc48tDn~QyIL4PmRkjdbYz2aPKrT5w8q~UtzWDxX4D6ueVSHXArAVJW7DyKF8M~NkAFImLYbMt8IAD2wzIywxfxxzJfytw__" alt=""></img>
                       <div className='flex flex-col gap-2'>
                        <img className='w-[361px] h-[260px] object-cover' src="https://s3-alpha-sig.figma.com/img/5c2a/4592/b5f3cb754566bde7b62ef5da4222383b?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AsEv2EvcXJ67rzM0hgjig4VBBncA-SqrGbycc3GLjqPm3cNtbtMcoq6DoINmoLlygWRZMYxgp-icyBHOzwva4D5pWamVHL-QOYGTVK1CmCWN6wf-IccH8DFFkC79QAFveCEf~2dMgTyxa9MGdT~R9HNiQtrDx1iefAQ1fZklA7-RJylbLLUOERwe0RkxeZiW3VoUxDgBVYizrahQ00lL8bhGzX7TKhFTTgzr3JF425FrY4D~zml-XZhUB3VcTqX3pvII~YCSoV7TjDXwiuVGxvVY~Y-e1bjSaBpibA3fjpFmZIV9lt67WVZNZBeo2TU2C~chx2vBzzrI3TZ1mLXJGQ__" alt=""></img>
                        <img className='w-[361px] h-[260px] object-cover' src="https://s3-alpha-sig.figma.com/img/4ead/0629/924f04ede9b2a5224dec41b501dbaa4c?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F~skHHHfIn-53RVwQTGzyJG5h3zsCilRy~~PRQ454P156GVOPpauxn6srF5BvgbAfAFOt-E~mQqL9KLtPGEVRSaE~ksOxrJv6y0aIBLvMrkoDnTtoRZZrug8~N1RIqWPTN3fH40Qzz-gt7644BskSvbwknlD0DTNJBLd3alihoNQs-oK3tzqgGJ21-PMtVN7QqBsfZT2PDZeKAPmOPE7a9KR1yY5Pn~ceh8GyerET4nvArRKjOacNoflkFXZDFsA9yq68p42F9ikmv046GlH8qjnspRDt0oA1rGPTLsEK-yuFSu6R11yN0AdCUVcdhC-vuqBpG2SsFqtQb6vWgj5Ug__" alt=""></img>
                        </div>
                        <div className='flex flex-col gap-2'>
                        <img className='w-[361px] h-[260px] object-cover' src="https://s3-alpha-sig.figma.com/img/147e/c7b9/17b3032e65f4538f6803ef11e8c0e09c?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AE3RDSGLMDQHqhtRoSAS1bzxUza9o4j1wm0k2BmDLWx~xUxLUgolahZ5bBKAMublKFiJQZ5WteTetPUA2ExLJHJbtZiIFl4eT2xUe~6Ksm58z2lmpVRbE5glhUkAvlGTqtveArhoGb6eD0KihWEpm14xhZqzwwx9rYMZoVj5LuapOSDj8KZLN1IV10stcv~Ckt0RDbq01smoWeQOfIbyko6a7egawB5rIiW9t~5Qlx9~jWgNmNEhOozmdw0FgI2K12VgL6UJaOFp7NmhQxO-azOvSfqB~B78qJ9mzLETG9LulQ-VAuXngoH2r5MO8hg31lUVCUY6U5f-G5n7SthxjA__" alt=""></img>
                        <img className='w-[361px] h-[260px] object-cover' src="https://s3-alpha-sig.figma.com/img/1251/6b52/a12de21bbd956c34ab16e5b1e48eeefe?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GUsE~UBCDi0HfO2n5~GTed~Dsit0iciwtmwb3eJOPe-HjBw1Kxrczb36U9GDLGFLNEPamH-0y-gzHclGmFeOs51GgwtRHPZqynIx5MpphC3vX2ON9l7~qwQyw~t5wiwjoRGy8wrx7vNMsQFp1jMxP-p~jLlWsWlS8XBSQ0FvYnAwW0AxRIaS0XjIj6F9uKFKS9ulax4k2x3aZSbxyEBsF9Q2ANUF8Y3WOVclKSkHn1dRtCeWjQ8JmwoqRBHLaigLZV0Q1YT4bh21e1dOtUlcr8ULS4SepWNzxExvMA5yFkzx2BeIF6eZ6wezICP3P-7CfdkMTKnQF-Zg8atPDCy2Vw__" alt=""></img>
                        </div>
                    </div>
                </div>
            </div>
            <Team/>
            <div className='FreeTrial'>
                <div className="TrialContainer">
                    <div className="TrialRow flex gap-24 justify-center">
                        <div className="TrialContent flex flex-col items-center gap-8 py-20">
                            <h2 className='text-[40px] leading-[50px] tracking-wide font-bold'>Start your 14 days free trial</h2>
                            <h6 className='text-sm text-[#737373] font-normal w-[411px]'>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent.</h6>
                            <button className='py-4 px-10 rounded-md bg-[#23A6F0] font-bold text-sm text-[#FFFFFF]'>Try Free Now</button>
                            <div className='TrialIcon flex gap-9'>
                            <img src="./images/twitter.svg" alt="" />
                            <img src="./images/facebook.svg" alt="" />
                            <img src="./images/instagram.svg" alt="" />
                            <img src="./images/linkedn.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
