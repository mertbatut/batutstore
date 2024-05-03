import React, { Component } from 'react'

export default class ShopCard extends Component {
    render() {
        return (
            <div className='ShopContainer'>
                <div className='Elements'>
                    <div className='ProductCard w-80 min-h-60'>
                        <div className='ProductItem'>
                            <h6></h6>
                            <h2></h2>
                            <h6></h6>
                        </div>
                    </div>
                    <div className='ProductCard w-80 min-h-60'>
                        <div className='ProductItem'>
                            <h6></h6>
                            <h2></h2>
                            <h6></h6>
                        </div>
                    </div>
                    <div className='ProductCard w-80 min-h-60'>
                        <div className='ProductItem'>
                            <h6></h6>
                            <h2></h2>
                            <h6></h6>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
