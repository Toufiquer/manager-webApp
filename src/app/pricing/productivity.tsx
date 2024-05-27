/*
|-----------------------------------------
| setting up Productivity for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import { Button } from "@/components/ui/button";
import Image from "next/image";
const Productivity = () => {
  return (
    <main className="py-12 my-12 w-full h-full flex items-center justify-center relative max-w-7xl mx-auto">
      <div className="relative w-full h-[500px] border">
        <Image
          className="object-cover"
          src="https://i.ibb.co/Bjfm6Gt/bg-wave.png"
          fill
          sizes="(max-width: 900px) 100vw"
          alt="Stock Price Image"
        />
      </div>
      <div className=" text-white rounded-lg text-center p-8 w-full absolute top-[68px] left-0">
        <h2 className="text-4xl font-bold leading-10">
          Bring your productivity to next
          <br /> level
        </h2>
        <p className="text-sm py-2 leading-6">
          The bore of true of no be deal. Drawings offended yet answered
          Jennings <br /> perceive laughing six did far. Points afraid but may
          end law lasted.
        </p>
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
                delay: 1200,
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
                <CarouselItem key={curr} className="md:basis-1/2 lg:basis-1/3">
                  <div className="flex items-center justify-center w-full h-full p-4">
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
