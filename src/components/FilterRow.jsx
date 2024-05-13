import React, { Component } from 'react'
import 'flowbite';
export default class FilterRow extends Component {
  render() {
    return (
      <div> <div className='ShopFilterContainer  flex gap-20 justify-center'>
      <div className='ShopFilterRow flex items-center py-6 w-[1050px] justify-between'>
          <div className='TextShow flex gap-4 '>
              <h6 className='text-sm font-bold text-[#737373]'>Showing all 12 results</h6>
          </div>
          <div className='TextIcon flex gap-4 items-center'>
              <h6 className='text-sm font-bold text-[#737373]'>Views: </h6>
              <div className='IconFilter flex items-center gap-4'>
                  <i class="fa-solid fa-table-list rounded-md border p-4"></i>
                  <i class="fa-solid fa-list rounded-md border p-4"></i>
              </div>
          </div>
          <div className='TextFilter flex items-center gap-4'>
                  <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown button <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
              </svg>
              </button>


              <div id="dropdown" class="z-10 hidden ">
                  <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                      
                      <li>
                          <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                      </li>
                      <li>
                          <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                      </li>
                      <li>
                          <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                      </li>
                      <li>
                          <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                      </li>
                      <li>
                          <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                      </li>
                  </ul>
              </div>
              <div className='FilterButton'>
                      <button className='BtnFilter w-[94px] rounded-md px-2.5 py-2.5 flex gap-2 bg-[#23A6F0] justify-center text-sm font-bold text-[#FFFFFF]'>
                          Filter
                      </button>
                  </div>
          </div>
      </div>
  </div></div>
    )
  }
}
