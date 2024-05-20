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
import { FaRegCheckCircle } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { VscCoffee } from "react-icons/vsc";
import { GiCoffeeCup } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";

const Page = () => {
  return (
    <main className="max-w-5xl flex flex-col p-8 md:ml-8 ">
      <div className="p-2 md:p-0">
        <h2 className="py-8 text-4xl font-semibold hidden md:block">
          Order history
        </h2>
        <div className=" flex flex-col mt-8 md:flex-row gap-2 items-start md:items-center border-b pb-4 justify-start md:justify-between">
          <h2 className="text-xl font-bold">Your order</h2>
          <div className=" bg-gray-50 max-w-[180px] flex items-end justify-end">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button
                  className="bg-transparent hover:bg-transparent text-slate-600 border border-gray-300 rounded-lg"
                  value="outline"
                >
                  <p className=" flex items-center justify-between gap-4 min-w-[120px]">
                    <span>All</span>
                    <IoIosArrowDown />
                  </p>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {["Sort by", "Delivered", "Cancelled", "Processing"].map(
                  (curr) => (
                    <DropdownMenuItem key={curr} className="p-0 min-w-[120px]">
                      <h2 className="bg-transparent m-0 hover:bg-transparent text-slate-600 hover:bg-slate-100 cursor-pointer rounded-lg px-4 py-1">
                        {curr}
                      </h2>
                    </DropdownMenuItem>
                  )
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className=" mt-4">
          <div className=" flex flex-col gap-2">
            {[
              {
                id: 1,
                orderNo: "#6526548",
                shippedDate: "10 Nov 2023",
                size: "XL",
                title: "White Coffee",
                totalPrice: 120,
                img: <VscCoffee className="w-[60px] h-[60px]" />,
                status: "Delivered",
              },
              {
                id: 2,
                title: "Black Coffee",
                size: "L",
                color: "white",
                totalPrice: 220,
                img: <GiCoffeeCup className="w-[60px] h-[60px]" />,
                orderNo: "#6526548",
                shippedDate: "20 Dec 2023",
                status: "Cancelled",
              },
              {
                id: 3,
                title: "Black Coffee",
                size: "XL",
                color: "white",
                totalPrice: 520,
                img: <GiCoffeeCup className="w-[60px] h-[60px]" />,
                orderNo: "#6526548",
                shippedDate: "20 Dec 2023",
                status: "Processing",
                traceId: "26541258",
                expectedAt: "NY, UK",
              },
            ].map((curr) => (
              <div key={curr.id} className="w-full border-b pb-8 mt-6">
                <div className="w-full flex ">
                  <div className="border min-w-[110px] w-[120px] h-[120px] flex items-center justify-center">
                    {curr.img}
                  </div>

                  <div className=" flex flex-col lg:flex-row">
                    <div className="px-4 lg:ml-8  w-full ">
                      <div className="flex flex-col items-start justify-start">
                        <div className="text-slate-600">
                          Order no:
                          <span className="text-blue-400"> {curr.orderNo}</span>
                        </div>
                        <div className="flex items-start py-2 text-xl font-semibold justify-start">
                          <p>{curr.title}</p>
                        </div>

                        <div className=" flex flex-col lg:flex-row items-center justify-start gap-4">
                          <div className="text-slate-500 w-full text-[16px] pt-1 flex justify-start items-center text-start">
                            <p>
                              Size:
                              <strong> {curr.size}</strong>
                            </p>
                          </div>
                          <div className="w-auto hidden lg:flex h-full items-center justify-center">
                            <div className="bg-slate-600 h-[5px] w-[5px] rounded-full mt-1" />
                          </div>
                          <div className="text-slate-500 text-[16px] pt-1 flex items-center ">
                            <p>
                              Shipped date: <strong>{curr.shippedDate}</strong>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pl-4 lg:w-[420px]">
                      {curr.traceId && (
                        <Button
                          className=" bg-gray-100 border-gray-300 mt-4 hover:border-gray-400 hover:bg-gray-200 text-slate-600"
                          variant="outline"
                        >
                          <div className="flex items-center justify-center gap-2">
                            <TbTruckDelivery className="text-xl" />
                            Track order
                          </div>
                        </Button>
                      )}
                      {curr.traceId && (
                        <div className=" flex items-center pt-3 gap-2 font-semibold text-blue-600 justify-start">
                          <FaRegCheckCircle className="bg-blue-500 text-white rounded-full" />
                          <p>In transit</p>
                        </div>
                      )}
                      {curr.traceId && (
                        <div className="text-slate-500 text-[16px] justify-start flex items-center ">
                          <p className="flex items-center justify-start">
                            Expected at: {curr.expectedAt}
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="pl-4">
                      <div className="flex-col flex min-w-[150px]">
                        <div className=" text-[16px] pt-1 flex items-end lg:justify-end mb-3">
                          {curr.status.toLocaleLowerCase() === "delivered" && (
                            <div className=" flex items-center gap-2 font-semibold text-blue-600 lg:justify-end">
                              <FaRegCheckCircle className="bg-blue-500 text-white rounded-full" />
                              <p>Delivered</p>
                            </div>
                          )}
                          {curr.status.toLocaleLowerCase() === "cancelled" && (
                            <div className=" flex items-center gap-2 font-semibold text-rose-600 lg:justify-end">
                              <RxCrossCircled className="bg-rose-500 text-white rounded-full" />
                              <p>Cancelled</p>
                            </div>
                          )}
                          {curr.status.toLocaleLowerCase() === "processing" && (
                            <div className=" flex items-center gap-2 font-semibold text-orange-600 lg:justify-end">
                              <FaRegCheckCircle className="bg-orange-500 text-white rounded-full" />
                              <p>Processing</p>
                            </div>
                          )}
                        </div>
                        <div className="text-slate-500 text-[16px] pt-1 flex items-end lg:justify-end ">
                          <p>Total amount</p>
                        </div>
                        <div className="font-bold text-slate-900 text-2xl mb-2 flex items-center lg:justify-end">
                          &pound; {curr.totalPrice}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className=" mt-4 flex items-end justify-end mb-12 py-12">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
                <PaginationLink href="#">2</PaginationLink>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </main>
  );
};
export default Page;
