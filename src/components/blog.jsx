import React, { Component } from 'react'

export default class Blog extends Component {
    render() {
        return (
            <div>
                <div className='BlogContainer flex flex-col gap-20'>
                    <div className='BlogRow'>
                        <div className='BlogContent flex flex-col items-center gap-2.5 pt-32'>
                            <h6 className='font-bold text-sm text-[#23A6F0]'>Practice Advice</h6>
                            <h3 className='font-bold text-4xl text-[#252B42]'>Featured Posts</h3>
                        </div>
                    </div>
                    <div className='BlogRow2'>
                        <div className='BlogCard flex'>
                            <div className='ContentCard bg-[#FFFFFF] flex flex-col w-[348px] h-[606px]'>
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
                                    <div className='CardComments flex  '>
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
                        <div className='BlogCard2'></div>
                        <div className='BlogCard3'></div>
                    </div>
                </div>
            </div>
        )
    }
}
