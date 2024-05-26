/*
|-----------------------------------------
| setting up PricingCard for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { PiArrowBendLeftDownBold } from "react-icons/pi";

import SingleCard from "./single-card";
import { cardData } from "./pricing-data";
import { AiOutlineRight } from "react-icons/ai";

const PricingCard = () => {
  const [month, setMonth] = useState(1);

  return (
    <main className="mt-[-180px] pb-12">
      <div className="relative mx-auto max-w-[1200px] py-4">
        <div className="absolute right-0 top-0 z-[-2]">
          <Image
            priority={false}
            quality={75}
            src="https://i.ibb.co/GvCk10P/dots-lg.png"
            width={200}
            height={200}
            className="mx-auto h-auto w-[200px]"
            alt="dots Image"
          />
        </div>
        <div className="absolute bottom-0 left-0 z-[-2] w-full">
          <Image
            priority={false}
            quality={75}
            src="https://i.ibb.co/CsJXRZh/footer-circle.png"
            width={200}
            height={100}
            className="invisible h-auto w-[200px] overflow-visible p-4 xl:visible"
            alt="footer-circle Image"
          />
        </div>
        <div className="z-40 flex w-full flex-col items-center justify-center">
          <div className="max-w-[400px]">
            <div className="relative">
              <span className="absolute right-[110px] top-[10px]">
                <PiArrowBendLeftDownBold />
              </span>
              <Badge
                variant="outline"
                className="mb-2 ml-[240px] max-w-[180px] bg-blue-500 text-white"
              >
                Save up to 10%
              </Badge>
            </div>
            <div className="flex justify-center">
              <div className="flex items-center space-x-2">
                <Label htmlFor="monthlyAnnually">Monthly</Label>
                <Switch
                  onClick={() => setMonth(month === 1 ? 12 : 1)}
                  id="monthlyAnnually"
                />
                <Label htmlFor="monthlyAnnually">Annually</Label>
              </div>
            </div>
          </div>
          <div className="mx-auto mb-12 mt-8 flex w-full flex-wrap items-stretch justify-center gap-6 xl:min-w-[1200px] ">
            {cardData.map((curr) => (
              <SingleCard key={curr.id} data={curr} month={month} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex w-full items-center justify-center">
        <div className="rounded-full border p-4 px-8">
          <div className="flex gap-4">
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
