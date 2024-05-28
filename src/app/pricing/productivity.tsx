/*
|-----------------------------------------
| setting up Productivity for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

"use client";

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const Productivity = () => {
  return (
    <main className=" my-12 w-full h-full flex items-center justify-center bg-cover bg-[url('https://i.ibb.co/Bjfm6Gt/bg-wave.png')] md:min-w-[600px] min-h-[400px] max-w-7xl mx-auto">
      <div className=" text-white rounded-lg text-center w-full backdrop-blur py-12">
        <div className=" mx-auto max-w-[400px] sm:max-w-[580px] md:max-w-[768px]">
          <h2 className="text-4xl md:text-6xl font-bold text-center mt-12">
            Bring your productivity to next level
          </h2>
          <p className="text-sm py-2 leading-6 text-center mx-auto mt-12">
            The bore of true of no be deal. Drawings offended yet answered
            Jennings perceive laughing six did far. Points afraid but may end
            law lasted.
          </p>
        </div>
        <Button className="bg-blue-400 text-white mt-8 mb-12">
          Join our waitlist
        </Button>
        <div className="max-w-4xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 1400,
              }),
            ]}
          >
            <CarouselContent>
              {[
                "https://i.ibb.co/rbkKPW1/01.png",
                "https://i.ibb.co/Bg5Fwxd/02.png",
                "https://i.ibb.co/nw7XcBV/03.png",
                "https://i.ibb.co/t8BMhqV/04.png",
                "https://i.ibb.co/W30P4pj/05.png",
              ].map((curr) => (
                <CarouselItem
                  key={curr}
                  className="basis-1/2 md:basis-1/3 lg:basis-1/4"
                >
                  <div className="flex items-center justify-center w-full p-12 ">
                    <Image
                      className="w-auto h-auto "
                      src={curr}
                      height={600}
                      width={600}
                      alt="Stock Price Image"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </main>
  );
};
export default Productivity;
