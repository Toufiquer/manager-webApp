/*
|-----------------------------------------
| setting up Page for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoIosArrowDown } from "react-icons/io";
import { IoTrashOutline } from "react-icons/io5";
import { FiHeart } from "react-icons/fi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { VscCoffee } from "react-icons/vsc";
import { GiCoffeeCup } from "react-icons/gi";
const Page = () => {
  return (
    <main className="max-w-5xl flex flex-col p-8 md:ml-8 ">
      <div className="p-2 md:p-0">
        <h2 className="py-8 text-4xl font-semibold hidden md:block">
          Wishlist
        </h2>
        <div className="w-full flex mt-8 gap-2 items-center border-b pb-4 justify-between">
          <h2 className="text-xl font-bold">Recently add</h2>
          <h2 className="text-slate-500">2 Items</h2>
        </div>
        <div className="w-full mt-4">
          <div className="w-full flex flex-col gap-2">
            {[
              {
                id: 1,
                img: <VscCoffee className="w-[60px] h-[60px]" />,
                title: "White Coffee",
                stock: 43,
                gender: "Male",
                color: "white",
                size: ["XL", "L", "M", "S"],
                quantity: 2,
                price: 120,
              },
              {
                id: 2,
                img: <GiCoffeeCup className="w-[60px] h-[60px]" />,
                title: "Black Coffee",
                stock: 0,
                gender: "Male",
                color: "white",
                size: ["XL", "L", "M", "S"],
                quantity: 5,
                price: 220,
              },
            ].map((curr) => (
              <div key={curr.id} className="w-full border-b pb-8 mt-6">
                <div className="w-full flex ">
                  <div className="border min-w-[110px] w-[120px] h-[120px] flex items-center justify-center">
                    {curr.img}
                  </div>
                  <div className="w-full flex flex-col lg:flex-row">
                    <div className="px-4 w-full md:ml-8">
                      <div className="flex flex-col items-start justify-start w-full">
                        <div className="flex items-start text-xl font-semibold w-full justify-start">
                          <p>{curr.title}</p>
                        </div>
                        {curr.stock > 0 ? (
                          <p className="text-blue-500 text-sm pt-1">In Stock</p>
                        ) : (
                          <p className="text-rose-500 text-sm pt-1">
                            Stock out
                          </p>
                        )}
                        <div className="text-slate-500 text-[16px] pt-1 flex items-center ">
                          <p>Gender: {curr.gender}</p>
                          <div className="bg-slate-600 h-[5px] w-[5px] rounded-full mx-4 " />
                          <p>Color: {curr.color}</p>
                        </div>
                        <div className="text-slate-500 text-[16px] pt-1 flex items-center ">
                          <div className="bg-slate-600 h-[5px] w-[5px] rounded-full md:ml-2 mr-2" />
                          <p>Size: {curr.size.join(", ")}</p>
                        </div>
                      </div>
                    </div>
                    <div className="px-4 md:ml-8">
                      <div className="flex flex-col items-start justify-start">
                        <div className="w-full bg-gray-50 max-w-[180px] flex items-end mt-4 md:justify-end">
                          <DropdownMenu>
                            <DropdownMenuTrigger>
                              <Button
                                className="bg-transparent hover:bg-transparent text-slate-600 border border-gray-300 rounded-lg"
                                value="outline"
                              >
                                <p className="w-full flex items-center justify-between gap-4 min-w-[120px]">
                                  <span>{curr.quantity}</span>
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
                        <p className="flex cursor-pointer hover:text-rose-400 items-center justify-end mt-2 gap-2">
                          <IoTrashOutline />
                          Remove
                        </p>
                        <p className="flex cursor-pointer hover:text-blue-400 items-center justify-end mt-2 gap-2">
                          <FiHeart />
                          Save for later
                        </p>
                      </div>
                    </div>
                    <div className="pl-4 md:ml-8">
                      <div className="flex-col flex min-w-[150px]">
                        <div className="font-bold text-slate-900 text-3xl my-2 pt-4 flex items-center md:justify-end">
                          &pound; {curr.price}
                        </div>
                        <Button className="gap-2 flex items-center justify-center">
                          <MdOutlineShoppingCart className="text-xl" />
                          Add to cart
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full mt-4 flex items-end justify-end mb-12 py-12">
          <Button className="" variant="outline">
            Continue shopping
          </Button>
        </div>
      </div>
    </main>
  );
};
export default Page;
