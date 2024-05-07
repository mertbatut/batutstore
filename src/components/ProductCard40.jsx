import React, { Component } from 'react'

export default class ProductCard40 extends Component {
    render() {
        return (
            <div>
                <div className='Product4 flex flex-col gap-8 py-20'>
                    <div className='ProductRow1 flex justify-center flex-row-reverse'>
                        <div className='RowImg  '><img className=' h-[649px]  w-[674px]' src="../images/Product6.jpg" alt="" /></div>
                        <div className='RowText flex gap-9 justify-center w-[400px] bg-[#FAFAFA]'>
                            <div className='RowText2 flex flex-col justify-center items-center gap-5'>
                                <div className='flex flex-col items-center w-[280px] justify-center '>
                                    <h5 className='text-2xl font-bold text-[#252B42] '>MOST POPULAR</h5>
                                    <p className='text-sm font-normal  text-[#737373]'>We focus on ergonomics and meeting
                                        you where you work. It's only a
                                        keystroke away.</p>
                                </div>

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

                </div>
            </div>
        )
    }
}
