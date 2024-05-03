import React, { Component } from 'react'

export default class ShopCard extends Component {
    render() {
        return (
            <div className='ShopContainer pt-20 pr-20 pl-20 pb-20 bg-[#FAFAFA]'>
                <div className='Elements flex justify-between '>
                    <div className='ProductCard  flex items-center w-80 h-60 border-2 bg-white'>
                        <div className='ProductItem flex items-center flex-col'>
                            <h6 className='font-bold text-sm leading-5 decoration-[#737373]'>Your Space</h6>
                            <h2 className='font-bold text-2xl leading-8 decoration-[#252B42]'>Unique Life</h2>
                            <h6 className='font-bold text-sm leading-8 decoration-[#252B42]'>Explore Items</h6>
                        </div>
                        <div className='ProductImg'>
                            <img src="../images/product1.png" alt="" />
                        </div>
                    </div>
                    <div className='ProductCard w-80 min-h-60 flex items-center border-2 bg-white'>
                    <div className='ProductItem flex items-center flex-col'>
                            <h6 className='font-bold text-sm leading-5 decoration-[#737373]'>Ends Today</h6>
                            <h2 className='font-bold text-2xl leading-8 decoration-[#252B42]'>Elements Style</h2>
                            <h6 className='font-bold text-sm leading-8 decoration-[#252B42]'>Explore Items</h6>
                       </div>
                        <div className='ProductImg'>
                            <img src="../images/product2.jpg" alt="" />
                        </div>
                    </div>
                    <div className='ProductCard w-80 min-h-60 flex items-center border-2 bg-white'>
                        <div className='ProductItem flex items-center flex-col'>
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
        )
    }
}
