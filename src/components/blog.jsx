import React, { Component } from 'react'

export default class blog extends Component {
    render() {
        return (
            <div>
                <div className='BlogContainer'>
                    <div className='BlogRow'>
                        <div className='BlogContent'>
                            <h6></h6>
                            <h3></h3>
                        </div>
                    </div>
                    <div className='BlogRow2'>
                        <div className='BlogCard'>
                            <div className='ContentCard'>
                                <div className='CardFixedImg'>
                                    <div className='ImageTextCard'></div>
                                    <img src="#" alt="" />
                                </div>
                                <div className='CardFixedText'>
                                    <div className='CardHeader1'>
                                        <p>Google</p>
                                        <p>Trending</p>
                                        <p>New</p>
                                    </div>
                                    <h4>Loudest à la Madison #1
                                        (L'integral)</h4>
                                    <p>We focus on ergonomics and meeting
                                        you where you work. It's only a
                                        keystroke away.</p>
                                    <div className='CardComments'>
                                        <div className='TimeIcon'>
                                            <div className='IconMain'></div>
                                            <p>22 April 2021</p>
                                        </div>
                                        <div className='TimeIcon2'>
                                            <div className='IconMain'>
                                                BU ALANA İKON GELECEK
                                            </div>
                                            <p>22 April 2021</p>
                                        </div>
                                    </div>
                                    <div className='LearnMore'>
                                        <p>Learn More</p>
                                        <div> BU ALANA İKON GELECEK</div>
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
