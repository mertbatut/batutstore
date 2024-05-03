import React from 'react'
import { Carousel, Typography, Button } from "@material-tailwind/react";

export default function CarouselWithContent() {
  return (
    <div >
      <Carousel className="rounded-xl">
      <div className="relative h-full w-full">
        <img
          src="../home1.jpg"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center  bg-black/25">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              GROCERIES DELIVERY
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              We know how large objects will act, but things on a
              small scale just do not act that way.
            </Typography>
            <div className="flex justify-center gap-2">
              <Button className='w-52 h-16 rounded-md px-4 py-4 gap-2.5 font-bold text-2xl' size="lg" color="blue">
                <h3>Start Now</h3>
              </Button>
            
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="../home1.jpg"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/25">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              GROCERIES DELIVERY
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              We know how large objects will act, but things on a
              small scale just do not act that way.
            </Typography>
            <div className="flex justify-center gap-2">
              <Button size="lg" color="#23A6F0">
                Start Now
              </Button>
              
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="../home1.jpg"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center  bg-black/25">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              GROCERIES DELIVERY
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              We know how large objects will act, but things on a
              small scale just do not act that way.
            </Typography>
            <div className="flex justify-center gap-2">
              <Button size="lg" color="#23A6F0">
                Start Now
              </Button>
             
            </div>
          </div>
        </div>
      </div>
    </Carousel>
    </div>
  )

}
