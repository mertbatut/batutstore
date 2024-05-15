import React, { Component } from 'react'
import Header from '../components/Header'


export default class Subscription extends Component {
  render() {
    return (
      <>
        <Header></Header>
        <div className='flex items-center justify-center p-20 '>
          <div className='SubscriptionMain absolute  '>
            <div className='SubsContainer flex flex-col items-center gap-8'>
              <div className='SubsText1 flex flex-col items-center gap-8'>
                <h2 className='font-bold text-4xl text-[#FFFFFF]'>Subscribe And Learn About Us</h2>
                <p className='font-normal text-sm flex text-[#FFFFFF]  '>Problems trying to resolve the conflict between the two major realms </p>
                <p className='font-normal text-sm flex text-[#FFFFFF]  ]'>of Classical physics: Newtonian mechanics </p>
              </div>
              <div className='SubsText2'>
                <input className='rounded-md h-[58px] w-[483px]' type="text" placeholder='Your Mail' />
                <button className='rounded-md w-[117px] h-[58px] border bg-[#23A6F0] text-sm font-normal text-[#FFFFFF] '>Subscribe</button>
              </div>
              <h2 className='SubsText3 font-bold text-4xl text-[#FFFFFF]'>
                Designing Better Experience
              </h2>
              <div className='SubsText4 flex gap-9'>
                <i class="fa-brands fa-twitter text-3xl text-[#FFFFFF]"></i>
                <i class="fa-brands fa-facebook text-3xl text-[#FFFFFF]"></i>
                <i class="fa-brands fa-instagram text-3xl text-[#FFFFFF]"></i>
                <i class="fa-brands fa-linkedin text-3xl  text-[#FFFFFF]"></i>
              </div>
            </div>
          </div>
          <div className='SubsBackground opacity-70 -z-50'>
            <img src="https://s3-alpha-sig.figma.com/img/6e3e/f7f6/0db14abfd739381ce93294e271894d6b?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MriYPR2HBpQlGvW-DofRoYUPsQrz73s~FG9VghLUSR9eTqqElczhaghFyhqfe51UjZ9fEoJZ~aQgFQHVN3mea7oMMCLtGOCjvpxwj-3duPzUucpCZOGy8QbCWwQJgdpfSOzIQ9P8idE~eS~vTrNv2uKPr1kWIrMK1t181WrbNfn24ThV1luJKnQ4SxHGlxC~mrWjcXNILF3wtauBt-ANbxHzs8TxT4nfrLiH7zvUdK5W7onsF63aWCuXWkEjM0sN51FL2vXZT6eI7whyOxEhWvPw9Mem-pGWYyNvOf~pBslJ1elbqvE7QKEhbWU2WFgwFgobcMDGPy0-wmGG5gswfg__" alt="" />
          </div>

        </div>

      </>
    )
  }
}
