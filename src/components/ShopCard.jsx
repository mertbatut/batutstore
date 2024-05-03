import React, { Component } from 'react'

export default class ShopCard extends Component {
    render() {
        return (
            <div className='ShopContainer'>
                <div className='Elements'>
                    <div className='ProductCard w-80 min-h-60'>
                        <div className='ProductItem'>
                            <h6>Your Space</h6>
                            <h2>Unique Life</h2>
                            <h6>Explore Items</h6>
                        </div>
                    </div>
                    <div className='ProductCard w-80 min-h-60'>
                        <div className='ProductItem'>
                            <h6>Ends Today</h6>
                            <h2>Elements Style</h2>
                            <h6>Explore Items</h6>
                        </div>
                    </div>
                    <div className='ProductCard w-80 min-h-60'>
                        <div className='ProductItem'>
                            <h6>Ends Today</h6>
                            <h2>Elements Style</h2>
                            <h6>Explore Items</h6>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
