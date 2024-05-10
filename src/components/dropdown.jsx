import React, { Component } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default class Drop extends Component {
    render() {
        return (
            <div>
                <div className='DropDown'>
                    <div className='DropShop'>
                        <h1><i class="fa-solid fa-caret-down"></i>SHOP</h1>
                    </div>
                    <div className='DropMenu'>
                        <div className='DropContainer'>
                            <div className='DropRow'>
                                <div className='ShopHead'>
                                    <h1>Shop Layout</h1>
                                    <div className='ShopLayout'>
                                        <Link to="/hakkimizda"><h1>Full Width</h1></Link>
                                        <Link to="/hakkimizda"><h1>Sidebar Right</h1></Link>
                                        <Link to="/hakkimizda"><h1>Sidebar Left</h1></Link>
                                        <Link to="/hakkimizda"><h1>List View</h1></Link>
                                        <Link to="/hakkimizda"><h1>Checkout</h1></Link>
                                        <Link to="/hakkimizda"><h1>Card</h1></Link>
                                        <Link to="/hakkimizda"><h1>Wishlist</h1></Link>
                                    </div>
                                </div>
                                <div className='ShopHead2'>
                                    <h1>Product Layout</h1>
                                    <div className='ShopLayout'>
                                        <Link to="/hakkimizda"><h1>Big Image Scrolling</h1></Link>
                                        <Link to="/hakkimizda"><h1>Simple Product</h1></Link>
                                        <Link to="/hakkimizda"><h1>Vertical Right</h1></Link>
                                        <Link to="/hakkimizda"><h1>Vertical Left</h1></Link>
                                        <Link to="/hakkimizda"><h1>Vertical Left</h1></Link>
                                        <Link to="/hakkimizda"><h1>Vertical Horizontal</h1></Link>
                                        <Link to="/hakkimizda"><h1>Collection</h1></Link>
                                    </div>
                                </div>
                                <div className='ShopHead3'>
                                    <h1>Product Type</h1>
                                    <div className='ShopLayout'>
                                        <Link to="/hakkimizda"><h1>Simple Product</h1></Link>
                                        <Link to="/hakkimizda"><h1>Vertical Product</h1></Link>
                                        <Link to="/hakkimizda"><h1>Left Product</h1></Link>
                                        <Link to="/hakkimizda"><h1>Right Product</h1></Link>
                                        <Link to="/hakkimizda"><h1>Special Product</h1></Link>
                                        <Link to="/hakkimizda"><h1>Outstoct Store</h1></Link>

                                    </div>
                                </div>
                                <div className='ShopHead4'>
                                    <h1>Product Categories</h1>
                                    <div className='ShopLayout'>
                                        <Link to="/hakkimizda"><h1>Bedroom</h1></Link>
                                        <Link to="/hakkimizda"><h1>Outdoor</h1></Link>
                                        <Link to="/hakkimizda"><h1>Decoration</h1></Link>
                                        <Link to="/hakkimizda"><h1>Kitchen</h1></Link>
                                    </div>
                                </div>
                                <div className='ShopHead5'>
                                    <img src="./images/Dropdown.jpg" alt="" />
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
