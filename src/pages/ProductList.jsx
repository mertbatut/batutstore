import React, { Component } from 'react';
import Header from '../components/Header';
import FilterRow from '../components/FilterRow';
import Footer from '../components/Footer';
import ProductCardComponent from '../components/ProductCard';

export default class ProductList extends Component {
  render() {
    return (
      <div>
        <div className='NavbarDark bg-[#23856D]'>
          <div className='DarkContainer flex justify-center'>
            <div className='DarkRow flex items-center gap-24 '>
              <div className='DarkRow1 flex items-center gap-2.5'>
                <div className='RowDarkText1 flex items-center gap-1.5 p-2.5 text-xs font-normal text-[#FFFFFF]'>
                  <i className="fa-solid fa-phone"></i>
                  <p>(225) 555-0118</p>
                </div>
                <div className='RowDarkText2 flex items-center gap-1.5 p-2.5 text-xs font-normal text-[#FFFFFF]'>
                  <i className="fa-solid fa-envelope"></i>
                  michelle.rivera@example.com
                </div>
              </div>
              <div className='DarkRow2 p-2.5 gap-2.5 text-sm font-bold text-[#FFFFFF]'>
                <h6>Follow Us and get a chance to win 80% off</h6>
              </div>
              <div className='DarkRow3 flex items-center p-2.5 gap-2.5 text-sm font-bold text-[#FFFFFF]'>
                <h6>Follow Us :</h6>
                <a className='Instagram p-1.5' href="#"><i className="fa-brands fa-instagram"></i></a>
                <a className='Youtube p-1.5' href="#"><i className="fa-brands fa-youtube"></i></a>
                <a className='Face p-1.5' href="#"><i className="fa-brands fa-facebook"></i></a>
                <a className='Twitter p-1.5' href="#"><i className="fa-brands fa-twitter"></i></a>
              </div>
            </div>
          </div>
        </div>
        <Header />
        <div className='ShopCategory '>
          <div className='CategoryRow flex justify-around bg-[#FAFAFA] '>
            <div className='CatText1 text-2xl font-bold'>
              <h2>Shop</h2>
            </div>
            <div className='CatText2 text-2xl font-bold'>
              BreadCrumb
              {/* bu alan react router BreadCrumb ile düzenlenecek ve kategori seçmeleri eklenecek */}
            </div>
          </div>
        </div>
        <div className='ClothosContainer flex justify-around bg-[#FAFAFA] py-6'>
          <div className='ClothosRow flex gap-4 '>
            {/* ClothosProduct elements here */}
          </div>
        </div>
        <FilterRow />
        <div className='ProductCard flex justify-center py-8'>
          <div className='GroupTab1 pt-4 flex gap-7'>
            <ProductCardComponent />
            <ProductCardComponent />
            <ProductCardComponent />
            <ProductCardComponent />
          </div>
        </div>
        <div className='ProductCard flex justify-center py-8'>
          <div className='GroupTab1 pt-4 flex gap-7'>
            <ProductCardComponent />
            <ProductCardComponent />
            <ProductCardComponent />
            <ProductCardComponent />
          </div>
        </div>
        <div className='ProductCard flex justify-center py-8'>
          <div className='GroupTab1 pt-4 flex gap-7'>
            <ProductCardComponent />
            <ProductCardComponent />
            <ProductCardComponent />
            <ProductCardComponent />
          </div>
        </div>
        <div className='PaginationMain flex justify-center'>
          <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
            <div className="flex flex-1 justify-between sm:hidden">
              <a href="#" className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Previous</a>
              <a href="#" className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Next</a>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-700">
                  Showing
                  <span className="font-medium">1</span>
                  to
                  <span className="font-medium">10</span>
                  of
                  <span className="font-medium">97</span>
                  results
                </p>
              </div>
              <div>
                <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                  <a href="#" className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                    <span className="sr-only">Previous</span>
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" aria-current="page" className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">1</a>
                  <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">2</a>
                  <a href="#" className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">3</a>
                  <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">...</span>
                  <a href="#" className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">8</a>
                  <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">9</a>
                  <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">10</a>
                  <a href="#" className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                    <span className="sr-only">Next</span>
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                    </svg>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
