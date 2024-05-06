import React, { Component } from 'react'

export default class ProductCard4 extends Component {
  render() {
    return (
      <div>
        <div className='Product4 flex gap-8'>
          <div className='ProductRow1'>
            <div className='RowImg w-[674px] h-[649px] '><img src="../images/Product4.jpg" alt="" /></div>
            <div className='RowText flex gap-9  bg-[#FAFAFA]'>
              <div className='RowText2 flex gap-5'>
                <h5 className='text-2xl font-bold text-[#252B42] items-center'>MOST POPULAR</h5>
                <p className='text-sm font-normal items-center text-[#737373]'>We focus on ergonomics and meeting
                  you where you work. It's only a
                  keystroke away.</p>
                <div className='RowImg2 w-[348px] h-226px] top-9'><img src="../images/Productet.jpg" alt="" /></div>
                <p className='font-bold text-sm text-[#737373]'>English Department</p>
                {/* p tagi link olarak ürün kategorisi sayfasına gidecek  */}
                <div className='Pricess flex gap-1.5 py-1.5 px-1 text-base font-bold'>
                  <p className='text-[#BDBDBD]'>$16.48</p>
                  <p className='text-[#23856D]'>$6.48</p>
                </div>
              </div>
            </div>
          </div>
          <div className='ProductRow2'>
            <div className='bg-[#FFFFFF] p-6 leading-[3rem]'>
              <div className='p-5'>
                <h2 className='font-bold text-[40px] text-[#E74040]'>1</h2>
                <div className='gap-1 '>
                  <h6 className='text-sm font-bold text-[#252B42]'>Easy to use</h6>
                  <p>Things on a very  small that you have any direct</p>
                </div>
              </div>
            </div>
            <div className='bg-[#FFFFFF] p-6 leading-[3rem]'>
              <div className='p-5'>
                <h2 className='font-bold text-[40px] text-[#E74040]'>1</h2>
                <div className='gap-1 '>
                  <h6 className='text-sm font-bold text-[#252B42]'>Easy to use</h6>
                  <p>Things on a very  small that you have any direct</p>
                </div>
              </div>
            </div>
            <div className='bg-[#FFFFFF] p-6 leading-[3rem]'>
              <div className='p-5'>
                <h2 className='font-bold text-[40px] text-[#E74040]'>1</h2>
                <div className='gap-1 '>
                  <h6 className='text-sm font-bold text-[#252B42]'>Easy to use</h6>
                  <p>Things on a very  small that you have any direct</p>
                </div>
              </div>
            </div>
            <div className='bg-[#FFFFFF] p-6 leading-[3rem]'>
              <div className='p-5'>
                <h2 className='font-bold text-[40px] text-[#E74040]'>1</h2>
                <div className='gap-1 '>
                  <h6 className='text-sm font-bold text-[#252B42]'>Easy to use</h6>
                  <p>Things on a very  small that you have any direct</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
