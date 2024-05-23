/*
|-----------------------------------------
| setting up Banner for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

import Image from "next/image";

import { Button } from "@/components/ui/button";

const Banner = () => {
  return (
    <main className="py-12">
      <main className="w-full h-[340px] overflow-hidden relative border bg-slate-700 rounded-lg">
        <div className="z-10 absolute top-0 left-0 object-cover w-full h-full">
          <Image
            alt="Picture"
            src="https://mizzle.webestica.com/assets/images/shop/bg/05.jpg"
            fill
          />
        </div>
        <div className="z-20 absolute top-0 left-0">
          <div className="p-12">
            <p className="font-bold text-white text-3xl pb-3">Checkout the</p>
            <p className="font-bold text-white text-3xl pb-3">
              newest smart watch
            </p>
            <p className="font-bold text-white text-3xl pb-3">product</p>
            <Button
              variant="outline"
              className="mt-12 bg-transparent text-white"
            >
              Shop now
            </Button>
          </div>
        </div>
      </main>
    </main>
  );
};
export default Banner;
