import React, { Component } from 'react'

export default class Filters extends Component {
  render() {
    return (
      <div>
        <div className='FilterDiv'>
            <div className='FilterContainer'>
                <div className='FilterRow'>
                    <div className='FilterCategory'></div>
                    <div className='FilterBrand'></div>
                    <div className='FilterColor'></div>
                    <div className='FilterPrice'></div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
