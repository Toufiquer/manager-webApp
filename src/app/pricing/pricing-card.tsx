/*
|-----------------------------------------
| setting up PricingCard for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

"use client";

import { useEffect, useState } from "react"; 
import Link from "next/link";
import { type CarouselApi } from "@/components/ui/carousel";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge"; 
import {
  Carousel,
  CarouselContent,
  CarouselItem, 
} from "@/components/ui/carousel";

import SingleCard from "./single-card";
import { AiOutlineRight } from "react-icons/ai";
import { cardData } from "./pricing-data";

const PricingCard = () => {
  const [month, setMonth] = useState(1);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);
    setCount(api.scrollSnapList().length);
    api.on("select", () => {
      // Do something on select.
      console.log(" count : : :", api.selectedScrollSnap() + 1);
      setCurrent(api.selectedScrollSnap() + 1);
      console.log("changed selected", api);
      console.log("changed current", current);
    });
  }, [api]);
  return (
    <main className="mt-[-400px]  md:mt-[-380px] pb-12">
      <div className="relative mx-auto max-w-[1200px] py-4">
        <div className="z-40 flex w-full flex-col items-center justify-center">
          <div className="max-w-[400px] py-12">
            <div className="relative">
              <Badge
                variant="outline"
                className="mb-2 ml-[240px] rounded-sm border-none max-w-[180px] bg-rose-500 text-white"
              >
                20% save
              </Badge>
            </div>
            <div className="flex justify-center">
              <div className="flex text-white items-center space-x-2 gap-2">
                <Label
                  htmlFor="monthlyAnnually"
                  className=" font-semibold text-xl"
                >
                  Monthly
                </Label>
                <Switch
                  onClick={() => setMonth(month === 1 ? 12 : 1)}
                  id="monthlyAnnually"
                  className="border-white data-[state=unchecked]:bg-slate-500"
                />
                <Label
                  htmlFor="monthlyAnnually"
                  className=" font-semibold text-xl"
                >
                  Yearly
                </Label>
              </div>
            </div>
          </div>

          <div className="hidden w-full lg:flex flex-col lg:flex-row items-center justify-center md:justify-between mt-12">
            {cardData.map((curr) => (
              <SingleCard key={curr.id} data={curr} month={month} />
            ))}
          </div>
          <div className="lg:hidden block w-full p-4">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              setApi={setApi}
            >
              <CarouselContent>
                {cardData.map((curr) => (
                  <CarouselItem key={curr.id}>
                    <SingleCard key={curr.id} data={curr} month={month} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            <div className="py-4 text-center text-sm text-muted-foreground flex gap-4 items-center justify-center">
              {Array.from({ length: count }, (_, i) => i + 1).map((curr) => (
                <div
                  key={curr}
                  onClick={() => api?.scrollTo(curr - 1)}
                  className={`cursor-pointer border border-slate-300 rounded-full flex items-center justify-center w-6 h-6 ${
                    curr === current && " bg-slate-400 text-white"
                  }`}
                >
                  {curr}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full items-center justify-center">
        <div className="rounded-full border p-4 px-8">
          <div className="flex gap-4 flex-col md:flex-row items-start justify-start md:justify-between">
            Prefer to start with the trial version?
            <Link
              className="flex items-center justify-center font-semibold text-blue-500"
              href="/pricing/#"
            >
              Go here <AiOutlineRight />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};
export default PricingCard;
