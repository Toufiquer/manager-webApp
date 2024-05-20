/*
|-----------------------------------------
| setting up TransitionHistory for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { IoIosArrowDown } from "react-icons/io";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FaCcMastercard } from "react-icons/fa6";
import { GoDownload } from "react-icons/go";
import { RiVisaFill } from "react-icons/ri";

const SearchBar = () => {
  return (
    <div className="max-w-[600px] w-full mr-auto">
      <p className="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</p>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full px-4  focus:outline-none py-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-slate-400 focus:border-slate-400 "
          placeholder="12-5-2024, Master card"
          required
        />
      </div>
    </div>
  );
};

const TransitionHistory = () => {
  return (
    <main className=" py-12">
      <div className="w-full flex items-center border-b pb-4 justify-between">
        <h2 className="text-2xl font-bold">Transition history</h2>
      </div>

      <div className="w-full flex md:flex-row flex-col gap-2 items-end md:items-center py-8 justify-start md:justify-between">
        <SearchBar />
        <div className="w-full bg-gray-50 max-w-[180px] flex items-end justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button
                className="bg-transparent hover:bg-transparent text-slate-600 border border-gray-300 rounded-lg"
                value="outline"
              >
                <p className="w-full flex items-center justify-between gap-4 min-w-[120px]">
                  <span>Sort by</span>
                  <IoIosArrowDown />
                </p>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {["Newest", "Oldest"].map((curr) => (
                <DropdownMenuItem key={curr} className="p-0 min-w-[120px]">
                  <h2 className="bg-transparent w-full m-0 hover:bg-transparent text-slate-600 hover:bg-slate-100 cursor-pointer rounded-lg px-4 py-1">
                    {curr}
                  </h2>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader className="border bg-slate-700 hover:bg-slate-900 text-slate-50 font-semibold">
          <TableRow className="text-white  hover:bg-slate-900 ">
            <TableHead className="text-white w-[100px] ">Reference</TableHead>
            <TableHead className="text-white">Payment method</TableHead>
            <TableHead className="text-white">Status</TableHead>
            <TableHead className="text-white">Amount</TableHead>
            <TableHead className="text-white">Date</TableHead>
            <TableHead className="text-white text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="border-b">
          {[
            {
              id: 1,
              reference: "#834634",
              paymentMethod: "***4584",
              status: "Paid",
              amount: "325",
              date: "16-8-2024",
              icon: <FaCcMastercard className="w-[100px] h-[40px]" />,
            },
            {
              id: 2,
              reference: "#623844",
              paymentMethod: "***4584",
              amount: "253",
              status: "Pending",
              date: "16-8-2024",
              icon: <FaCcMastercard className="w-[100px] h-[40px]" />,
            },
            {
              id: 3,
              reference: "#235634",
              paymentMethod: "***4584",
              amount: "658",
              status: "Cancel",
              date: "16-8-2024",
              icon: <RiVisaFill className="w-[100px] h-[40px]" />,
            },
          ].map((curr) => (
            <TableRow key={curr.id}>
              <TableCell className="font-normal text-blue-400 text-[18px]">
                {curr.reference}
              </TableCell>
              <TableCell>
                <div className="flex items-center justify-start text-[18px]">
                  {curr.icon}
                  {curr.paymentMethod}
                </div>
              </TableCell>
              <TableCell>
                <p
                  className={`text-center text-xs rounded-lg py-1 ${
                    curr.status.toLocaleLowerCase() === "paid" &&
                    " text-green-400 bg-green-100 "
                  } ${
                    curr.status.toLocaleLowerCase() === "cancel" &&
                    " text-rose-400 bg-rose-100 "
                  } ${
                    curr.status.toLocaleLowerCase() === "pending" &&
                    " text-orange-400 bg-orange-100 "
                  }`}
                >
                  {curr.status}
                </p>
              </TableCell>
              <TableCell>{curr.amount}</TableCell>
              <TableCell>{curr.date}</TableCell>
              <TableCell className="text-right flex items-end justify-end">
                <Button
                  value="outline"
                  className="bg-transparent flex items-center justify-center hover:bg-gray-300 border rounded-full w-[50px] h-[50px] border-gray-300"
                >
                  <GoDownload className="text-gray-900 w-[50px] h-[50px]" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </main>
  );
};
export default TransitionHistory;
