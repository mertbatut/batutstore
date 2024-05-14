import React, { Component } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default class Subscription extends Component {
  render() {
    return (
        <>
      <Header></Header>
      <div className='flex items-center justify-center '>
        <div className='SubscriptionMain absolute'> 
            <div className='SubsContainer flex flex-col items-center'>
                <div className='SubsText1 flex flex-col items-center'>
                    <h2>Subscribe And Learn 
About Us</h2>
                    <p>Problems trying to resolve the conflict between 
the two major realms of Classical physics: Newtonian mechanics </p>
                </div>
                <div className='SubsText2 w-[600px]'>
                    <input type="text" placeholder='Your Mail' />
                    <button>Subscribe</button>
                </div>
                <h2 className='SubsText3'>
                Designing Better Experience   
                </h2>
                <div className='SubsText4'>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-linkedin"></i>
                </div>
            </div>
        </div>
        <div className='SubsBackground h-screen opacity-70 -z-10'>
            <img src="https://s3-alpha-sig.figma.com/img/6e3e/f7f6/0db14abfd739381ce93294e271894d6b?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MriYPR2HBpQlGvW-DofRoYUPsQrz73s~FG9VghLUSR9eTqqElczhaghFyhqfe51UjZ9fEoJZ~aQgFQHVN3mea7oMMCLtGOCjvpxwj-3duPzUucpCZOGy8QbCWwQJgdpfSOzIQ9P8idE~eS~vTrNv2uKPr1kWIrMK1t181WrbNfn24ThV1luJKnQ4SxHGlxC~mrWjcXNILF3wtauBt-ANbxHzs8TxT4nfrLiH7zvUdK5W7onsF63aWCuXWkEjM0sN51FL2vXZT6eI7whyOxEhWvPw9Mem-pGWYyNvOf~pBslJ1elbqvE7QKEhbWU2WFgwFgobcMDGPy0-wmGG5gswfg__" alt="" />
        </div>
       
      </div>
      
      </>
    )
  }
}
