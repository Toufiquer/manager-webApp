/*
|-----------------------------------------
| setting up CartContainer for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/
import { X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoIosArrowDown } from "react-icons/io";
import { CiImageOn } from "react-icons/ci";

const exampleData = [
  {
    id: 1,
    name: "Round neck cotton t-shirt",
    details: {
      Gender: "Male",
      Color: "Midblue",
      Size: ["XL", "L", "M", "S"],
    },
    stock: ["01", "02", "03"],
    price: 103.0,
  },
  {
    id: 2,
    name: "The ultimate smartphone for modern lifestyles",
    details: {
      Color: "Purple",
    },
    stock: ["01", "02", "03"],
    price: 250.0,
  },
  {
    id: 3,
    name: "Mizz dunk low shoes",
    details: {
      Gender: "Male",
      Size: "42",
    },
    stock: ["01", "02", "03"],
    price: 120.0,
  },
];
const CartContainer = () => {
  return (
    <main className="flex flex-col">
      <div className="w-full items-center justify-between flex">
        <h2 className="font-semibold text-2xl">
          {exampleData.length} Products
        </h2>
        <Button className="flex items-center justify-center bg-rose-100 hover:bg-rose-400 text-rose-400 duration-150 hover:text-white">
          <X className="p-1" /> Clear cart
        </Button>
      </div>
      <div className="flex flex-col mb-4 mt-4 border-b border-slate-300">
        {exampleData.map((curr) => (
          <div
            key={curr.id}
            className="border-slate-300 border-t duration-200 p-2 py-4"
          >
            <div className="p-2 flex gap-2 items-center justify-between flex-col md:flex-row">
              <div className="h-[120px] w-[120px] items-center justify-center border flex relative border-slate-500 rounded-lg">
                <CiImageOn className="w-12 h-12" />
              </div>
              <div className="w-full flex lg:flex-row min-h-[120px] flex-col">
                <div className="px-4 w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex items-start text-[22px] font-semibold w-full justify-start">
                      <p>{curr.name}</p>
                    </div>

                    {curr.details.Gender && (
                      <div className="text-slate-500 text-[16px] pt-1 flex items-center">
                        <div className="bg-slate-600 h-[5px] w-[5px] rounded-full mx-2" />
                        <p>Gender: {curr.details.Gender}</p>
                      </div>
                    )}
                    {curr.details.Color && (
                      <div className="text-slate-500 text-[16px] pt-1 flex items-center ">
                        <div className="bg-slate-600 h-[5px] w-[5px] rounded-full mx-2" />
                        <p>Color: {curr.details.Color}</p>
                      </div>
                    )}
                    {curr.details.Size && (
                      <div className="text-slate-500 text-[16px] pt-1 flex items-center ">
                        <div className="bg-slate-600 h-[5px] w-[5px] rounded-full mx-2" />
                        {curr.details.Size &&
                        Array.isArray(curr.details.Size) ? (
                          <p>Size: {curr.details.Size.join(", ")}</p>
                        ) : (
                          <p>Size: {curr.details.Size}</p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex items-start justify-between">
                  <div className="px-4 md:min-w-[320px]">
                    <div className="flex items-center gap-4 md:gap-2 justify-start">
                      <div className="w-full bg-gray-50 max-w-[180px] flex items-end md:justify-end">
                        <DropdownMenu>
                          <DropdownMenuTrigger>
                            <Button
                              className="bg-transparent hover:bg-transparent text-slate-600 border border-gray-300 rounded-lg"
                              value="outline"
                            >
                              <p className="w-full flex items-center justify-between gap-4 min-w-[120px]">
                                <span>23</span>
                                <IoIosArrowDown />
                              </p>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            {["02", "03", "04"].map((curr) => (
                              <DropdownMenuItem
                                key={curr}
                                className="p-0 min-w-[120px]"
                              >
                                <h2 className="bg-transparent w-full m-0 hover:bg-transparent text-slate-600 hover:bg-slate-100 cursor-pointer rounded-lg px-4 py-1">
                                  {curr}
                                </h2>
                              </DropdownMenuItem>
                            ))}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                      <div className="font-bold w-full text-slate-900 text-2xl flex items-center md:justify-end">
                        &pound; 233
                      </div>
                    </div>
                  </div>
                  <div className="pl-4">
                    <Button
                      variant="outline"
                      className="flex items-center bg-transparent border-none justify-center hover:underline duration-150  hover:text-rose-500 text-rose-400"
                    >
                      <X className="p-1" /> Remove
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full mb-12 items-center justify-end flex">
        <Button
          variant="outline"
          className="duration-150 bg-slate-100 border-slate-300 hover:bg-slate-200"
        >
          Update cart
        </Button>
      </div>
    </main>
  );
};
export default CartContainer;
