import React from 'react'
import Header2 from '../components/Header2'
import Header from '../components/Header'

export default function ProductPage() {
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
        <Header/>
    </div>
  )
}
