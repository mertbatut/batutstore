import React from 'react'
import { Carousel, Typography, Button } from "@material-tailwind/react";

export default function CarouselWithContent() {
  return (
    <div className='flex justify-center' >
      <Carousel className="w-[130rem] h-[40rem] overflow-hidden">
        <div className="relative h-full w-full ">
          <img
            src="https://s3-alpha-sig.figma.com/img/58e7/8626/57520fbcc340e0540da6a9164dc64c56?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DLI4-x0lFv5F9WZD2GiHvhakZzbltHsbqj-Q0zXHDSgNNFgdU0BH34LUep1-aARVVavuwfnT3-WXb~BXyuTs9u69wAqLiaq3FGc43cTtmPwBOMwgGBtWui49YWU6f9~Az8Qxjej2trlutbL1mrDXV1vUAO2ACtfQlA3N44Rdu5QHzFMhRNw2thg4yySng32WxCbZRPbYFPnSG1VPMuxNJvqqY5e-iAlVEG5~OaUb0LzbWQCDH8D5eRPeb7DYllNoxewWL75m2Vu2iUC~i2iqKhmIVfKuEPHIjMw64yJf9WjxsyWTvG4S4KNqSVP3ZWlIxaWSNDWFgRYyacungBdCQg__"
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center  bg-black/30">
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
                className="mb-12 opacity-80 "
              >
               <h4 className='font-normal text-xl'>We know how large objects will act, but things on a
                small scale just do not act that way.</h4> 
              </Typography>
              <div className="flex justify-center gap-2">
                <Button className='w-52 h-16 rounded-md px-4 py-4 gap-2.5 font-bold text-xl' size="lg" color="blue">
                  <a href="ProductList">Start Now</a>
                </Button>

              </div>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src="https://s3-alpha-sig.figma.com/img/58e7/8626/57520fbcc340e0540da6a9164dc64c56?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DLI4-x0lFv5F9WZD2GiHvhakZzbltHsbqj-Q0zXHDSgNNFgdU0BH34LUep1-aARVVavuwfnT3-WXb~BXyuTs9u69wAqLiaq3FGc43cTtmPwBOMwgGBtWui49YWU6f9~Az8Qxjej2trlutbL1mrDXV1vUAO2ACtfQlA3N44Rdu5QHzFMhRNw2thg4yySng32WxCbZRPbYFPnSG1VPMuxNJvqqY5e-iAlVEG5~OaUb0LzbWQCDH8D5eRPeb7DYllNoxewWL75m2Vu2iUC~i2iqKhmIVfKuEPHIjMw64yJf9WjxsyWTvG4S4KNqSVP3ZWlIxaWSNDWFgRYyacungBdCQg__"
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/30">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 font-bold text-6xl "
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
                <Button className='w-52 h-16 rounded-md px-4 py-4 gap-2.5 font-bold text-xl' size="lg" color="blue">
                <a href="ProductList">Start Now</a>
                </Button>

              </div>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src="https://s3-alpha-sig.figma.com/img/58e7/8626/57520fbcc340e0540da6a9164dc64c56?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DLI4-x0lFv5F9WZD2GiHvhakZzbltHsbqj-Q0zXHDSgNNFgdU0BH34LUep1-aARVVavuwfnT3-WXb~BXyuTs9u69wAqLiaq3FGc43cTtmPwBOMwgGBtWui49YWU6f9~Az8Qxjej2trlutbL1mrDXV1vUAO2ACtfQlA3N44Rdu5QHzFMhRNw2thg4yySng32WxCbZRPbYFPnSG1VPMuxNJvqqY5e-iAlVEG5~OaUb0LzbWQCDH8D5eRPeb7DYllNoxewWL75m2Vu2iUC~i2iqKhmIVfKuEPHIjMw64yJf9WjxsyWTvG4S4KNqSVP3ZWlIxaWSNDWFgRYyacungBdCQg__"
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center  bg-black/30">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 font-bold text-6xl "
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
                <Button className='w-52 h-16 rounded-md px-4 py-4 gap-2.5 font-bold text-xl' size="lg" color="blue">
                <a href="ProductList">Start Now</a>
                </Button>

              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  )

}
