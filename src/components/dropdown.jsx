 import React, { Component } from 'react'
 import { Link } from 'react-router-dom/cjs/react-router-dom.min'

 export default class Drop extends Component {
    
    render() {
        return (
            <div>
                 <div className='DropDown w-[1240px] h-[426px]'>
                     <div className='DropShop drop-shadow-2xl w-[155px] h-[58px] border border-[#E6E6E6] bg-[#F9F9F9] flex items-center justify-center'>
                   <h1><i class="fa-solid fa-caret-down"></i>SHOP</h1>
               </div>
               <div className='DropMenu bg-[#FAFAFA] drop-shadow-2xl flex justify-center'>
                   <div className='DropContainer w-[1050px]'>
                       <div className='DropRow flex justify-center gap-8'>
                           <div className='ShopHead flex flex-col py-12 gap-5'>
                               <h5 className='font-bold text-base text-[#252B429]'>Shop Layout</h5>
                              <div className='ShopLayout1 flex flex-col gap-3'>
                                   <Link to="/hakkimizda"><h1 className='font-bold text-sm text-[#737373]'>Full Width</h1></Link>
                                        <Link to="/hakkimizda"><h1 className='font-bold text-sm text-[#737373]'>Sidebar Right</h1></Link>
                                        <Link to="/hakkimizda"><h1 className='font-bold text-sm text-[#737373]'>Sidebar Left</h1></Link>
                                        <Link to="/hakkimizda"><h1 className='font-bold text-sm text-[#737373]'>List View</h1></Link>
                                        <Link to="/hakkimizda"><h1 className='font-bold text-sm text-[#737373]'>Checkout</h1></Link>
                                        <Link to="/hakkimizda"><h1 className='font-bold text-sm text-[#737373]'>Card</h1></Link>
                                        <Link to="/hakkimizda"><h1 className='font-bold text-sm text-[#737373]'>Wishlist</h1></Link>
                                    </div>
                                </div>
                                <div className='ShopHead2 flex flex-col py-12 gap-5 '>
                                    <h5 className='font-bold text-base text-[#252B429]'>Product Layout</h5>
                                    <div className='ShopLayout2 flex flex-col gap-3'>
                                        <Link to="/hakkimizda"><h1 className='font-bold text-sm text-[#737373]'>Big Image Scrolling</h1></Link>
                                        <Link to="/hakkimizda"><h1 className='font-bold text-sm text-[#737373]'>Simple Product</h1></Link>
                                        <Link to="/hakkimizda"><h1 className='font-bold text-sm text-[#737373]'>Vertical Right</h1></Link>
                                        <Link to="/hakkimizda"><h1 className='font-bold text-sm text-[#737373]'>Vertical Left</h1></Link>
                                        <Link to="/hakkimizda"><h1 className='font-bold text-sm text-[#737373]'>Vertical Left</h1></Link>
                                        <Link to="/hakkimizda"><h1 className='font-bold text-sm text-[#737373]'>Vertical Horizontal</h1></Link>
                                        <Link to="/hakkimizda"><h1 className='font-bold text-sm text-[#737373]'>Collection</h1></Link>
                                    </div>
                                </div>
                                <div className='ShopHead3 flex flex-col py-12 gap-5 '>
                                    <h5 className='font-bold text-base text-[#252B429]'>Product Type</h5>
                                    <div className='ShopLayout3 flex flex-col gap-3'>
                                        <Link to="/hakkimizda"><h1 className='font-bold text-sm text-[#737373]'>Simple Product</h1></Link>
                                        <Link to="/hakkimizda"><h1 className='font-bold text-sm text-[#737373]'>Vertical Product</h1></Link>
                                        <Link to="/hakkimizda"><h1 className='font-bold text-sm text-[#737373]'>Left Product</h1></Link>
                                        <Link to="/hakkimizda"><h1 className='font-bold text-sm text-[#737373]'>Right Product</h1></Link>
                                        <Link to="/hakkimizda"><h1 className='font-bold text-sm text-[#737373]'>Special Product</h1></Link>
                                        <Link to="/hakkimizda"><h1 className='font-bold text-sm text-[#737373]'>Outstoct Store</h1></Link>
                                    </div>
                                </div>
                                <div className='ShopHead4 flex flex-col py-12 gap-6 '>
                                    <h5 className='font-bold text-base text-[#252B429]'>Product Categories</h5>
                                    <div className='ShopLayout4 flex flex-col gap-3'>
                                        <Link to="/hakkimizda"><h1 className='font-bold text-sm text-[#737373]'>Bedroom</h1></Link>
                                        <Link to="/hakkimizda"><h1 className='font-bold text-sm text-[#737373]'>Outdoor</h1></Link>
                                        <Link to="/hakkimizda"><h1 className='font-bold text-sm text-[#737373]'>Decoration</h1></Link>
                                        <Link to="/hakkimizda"><h1 className='font-bold text-sm text-[#737373]'>Kitchen</h1></Link>
                                    </div>
                                </div>
                                <div className='ShopHead5 w-[321px] h-[368px] pt-12'>
                                    <img src="https://s3-alpha-sig.figma.com/img/ccf8/3949/44f14514fce89ee53d90655a1819a12f?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iTsWRzoy8EH2RqFKeb35OPYZfuqzzeeihHdLJEyjsOnoIUyEnWOYjYdMg5EBN9~F8pC1OZWtWaz3hpfVQi9sFw2RQc2jg1iypBVsh9nfPZf9Nt9A2wDSPjshuIi8lb~wHSkRAquinHZv~10zTiQM1HM-AWPPAIOeePeUeRqNzdt7LmbPnhborIS39r-m14~uX-MjcwR6BgCcQZiibo0INOijxGO33yuuYweyV8mZfI9q~rd5vEwVuf76iJDnTry0P9q4ab~wp08C6Ezo-yalN9g6TCgHP5SqurEMw3XJqvjXuq9RygsKfw9EhH4srevD2HYnfXZl1UoszKAfRPqu9Q__" alt="" />
                                </div>
                                <div className='ProductLayout'></div>
                                <div className='ProductType'></div>
                                <div className='ProductCategories'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  )

    }
}
