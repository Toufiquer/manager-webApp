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
    <main className="mt-[-380px] pb-12">
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
