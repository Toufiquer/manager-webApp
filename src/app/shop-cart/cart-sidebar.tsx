/*
|-----------------------------------------
| setting up CartSidebar for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const CartSidebar = () => {
  return (
    <main className="w-full md:pl-8 mt-14">
      <main className="flex items-start justify-start p-4 flex-col min-h-[200px] border border-slate-300 rounded-lg shadow-sm shadow-slate-400">
        <h2 className="flex items-start text-[24px] font-semibold w-full justify-start">
          Promo code
        </h2>
        <div className="w-full flex items-center py-4 mb-1 justify-between gap-1">
          <Input
            className="border border-slate-500"
            placeholder="Type here..."
          />
          <Button>Apply</Button>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <div className="w-full flex items-center justify-between">
            <h2 className="text-slate-500">Subtotal: </h2>
            <h2 className="font-semibold text-slate-800 text-[18px]">
              &pound;500
            </h2>
          </div>
          <div className="w-full flex items-center justify-between">
            <h2 className="text-slate-500">Service Charge: </h2>
            <h2 className="font-semibold text-slate-800 text-[18px]">
              &pound;500
            </h2>
          </div>
          <div className="w-full flex items-center justify-between">
            <h2 className="text-slate-500">Tax: </h2>
            <h2 className="font-semibold text-slate-800 text-[18px]">
              &pound;500
            </h2>
          </div>
          <div className="w-full flex items-center border-t border-slate-500 mt-4 justify-between">
            <h2 className="text-slate-800">Payable Now: </h2>
            <h2 className="font-semibold text-slate-800 text-[22px]">
              &pound;1500
            </h2>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full mt-12">
          <Button className="bg-blue-400 text-white hover:bg-blue-500">
            Continue to Checkout
          </Button>
        </div>
      </main>
    </main>
  );
};
export default CartSidebar;
