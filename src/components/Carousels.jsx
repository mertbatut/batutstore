import React from 'react'
import { Carousel, Typography, Button } from "@material-tailwind/react";

export default function CarouselWithContent() {
  return (
    <div className='flex justify-center' >
      <Carousel className="w-[130rem] h-[40rem] overflow-hidden">
        {/* Slide 1 - Grocery Delivery */}
        <div className="relative h-full w-full ">
          <img
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
            alt="Fresh groceries and vegetables"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/40">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 font-bold text-6xl "
              >
                <h1>GROCERIES DELIVERY</h1>
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-90 "
              >
               <h4 className='font-normal text-xl'>Fresh groceries delivered to your doorstep. 
                Quality products, fast delivery, unbeatable prices.</h4> 
              </Typography>
              <div className="flex justify-center gap-2">
                <Button className='w-52 h-16 rounded-md px-4 py-4 gap-2.5 font-bold text-xl hover:scale-105 transition-transform' size="lg" color="blue">
                  <a href="ProductList">Start Now</a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 2 - Fresh Produce */}
        <div className="relative h-full w-full">
          <img
            src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Shopping cart with fresh vegetables"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/40">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 font-bold text-6xl "
              >
                FRESH & ORGANIC
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-90"
              >
                <h4 className='font-normal text-xl'>Handpicked organic produce from local farms.
                Healthy choices for you and your family.</h4>
              </Typography>
              <div className="flex justify-center gap-2">
                <Button className='w-52 h-16 rounded-md px-4 py-4 gap-2.5 font-bold text-xl hover:scale-105 transition-transform' size="lg" color="green">
                  <a href="ProductList">Shop Organic</a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 3 - Online Shopping */}
        <div className="relative h-full w-full">
          <img
            src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Online shopping with phone and groceries"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/40">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 font-bold text-6xl "
              >
                EASY ORDERING
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-90"
              >
                <h4 className='font-normal text-xl'>Order from your phone, tablet or computer.
                Simple, fast and secure checkout process.</h4>
              </Typography>
              <div className="flex justify-center gap-2">
                <Button className='w-52 h-16 rounded-md px-4 py-4 gap-2.5 font-bold text-xl hover:scale-105 transition-transform' size="lg" color="orange">
                  <a href="ProductList">Order Now</a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 4 - Special Offers */}
        <div className="relative h-full w-full">
          <img
            src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Shopping bags with groceries"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/40">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 font-bold text-6xl "
              >
                SPECIAL OFFERS
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-90"
              >
                <h4 className='font-normal text-xl'>Weekly deals and discounts on your favorite products.
                Save more on bulk purchases and seasonal items.</h4>
              </Typography>
              <div className="flex justify-center gap-2">
                <Button className='w-52 h-16 rounded-md px-4 py-4 gap-2.5 font-bold text-xl hover:scale-105 transition-transform' size="lg" color="red">
                  <a href="ProductList">View Deals</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  )
}