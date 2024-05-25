 import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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
                               <h5 className='font-bold text-base text-[#252B429]'>Kadın Giyim</h5>
                              <div className='ShopLayout1 flex flex-col gap-3'>
                                   <Link to="/hakkimizda"><h1 className='font-bold text-sm text-[#737373]'>Elbise</h1></Link>
                                        <Link to="/hakkimizda"><h1 className='font-bold text-sm text-[#737373]'>İç Giyim</h1></Link>
                                        <Link to="/hakkimizda"><h1 className='font-bold text-sm text-[#737373]'>Dış Giyim</h1></Link>
                                        <Link to="/hakkimizda"><h1 className='font-bold text-sm text-[#737373]'>Tişört</h1></Link>
                                        <Link to="/hakkimizda"><h1 className='font-bold text-sm text-[#737373]'>Pantolon</h1></Link>
                                        <Link to="/hakkimizda"><h1 className='font-bold text-sm text-[#737373]'>Mont</h1></Link>
                                        <Link to="/hakkimizda"><h1 className='font-bold text-sm text-[#737373]'>Ceket</h1></Link>
                                    </div>
                                </div>
                                <div className='ShopHead2 flex flex-col py-12 gap-5 '>
                                    <h5 className='font-bold text-base text-[#252B429]'>Erkek Giyim</h5>
                                    <div className='ShopLayout2 flex flex-col gap-3'>
                                        <Link to="/hakkimizda"><h1 className='font-bold text-sm text-[#737373]'>Takım Elbise</h1></Link>
                                        <Link to="/hakkimizda"><h1 className='font-bold text-sm text-[#737373]'>İç Giyim</h1></Link>
                                        <Link to="/hakkimizda"><h1 className='font-bold text-sm text-[#737373]'>Dış Giyim</h1></Link>
                                        <Link to="/hakkimizda"><h1 className='font-bold text-sm text-[#737373]'>Tişört</h1></Link>
                                        <Link to="/hakkimizda"><h1 className='font-bold text-sm text-[#737373]'>Pantolon</h1></Link>
                                        <Link to="/hakkimizda"><h1 className='font-bold text-sm text-[#737373]'>Mont</h1></Link>
                                        <Link to="/hakkimizda"><h1 className='font-bold text-sm text-[#737373]'>Ceket</h1></Link>
                                    </div>
                                </div>
                                <div className='ShopHead3 flex flex-col py-12 gap-5 '>
                                    <h5 className='font-bold text-base text-[#252B429]'>Kadın Ayakkabı</h5>
                                    <div className='ShopLayout3 flex flex-col gap-3'>
                                        <Link to="/hakkimizda"><h1 className='font-bold text-sm text-[#737373]'>Bot</h1></Link>
                                        <Link to="/hakkimizda"><h1 className='font-bold text-sm text-[#737373]'>Çizme</h1></Link>
                                        <Link to="/hakkimizda"><h1 className='font-bold text-sm text-[#737373]'>Topuklu Ayakkabı</h1></Link>
                                        <Link to="/hakkimizda"><h1 className='font-bold text-sm text-[#737373]'>Yürüyüş Ayakkabısı</h1></Link>
                                        <Link to="/hakkimizda"><h1 className='font-bold text-sm text-[#737373]'>Salon Ayakkabısı</h1></Link>
                                        <Link to="/hakkimizda"><h1 className='font-bold text-sm text-[#737373]'>Ayakkabı</h1></Link>
                                    </div>
                                </div>
                                <div className='ShopHead4 flex flex-col py-12 gap-6 '>
                                    <h5 className='font-bold text-base text-[#252B429]'>Erkek Ayakkabı</h5>
                                    <div className='ShopLayout4 flex flex-col gap-3'>
                                        <Link to="/hakkimizda"><h1 className='font-bold text-sm text-[#737373]'>Bot</h1></Link>
                                        <Link to="/hakkimizda"><h1 className='font-bold text-sm text-[#737373]'>Yürüyüş Ayakkabısı</h1></Link>
                                        <Link to="/hakkimizda"><h1 className='font-bold text-sm text-[#737373]'>Salon Ayakkabısı</h1></Link>
                                        <Link to="/hakkimizda"><h1 className='font-bold text-sm text-[#737373]'>Ayakkabı</h1></Link>
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
