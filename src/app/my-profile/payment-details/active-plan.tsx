/*
|-----------------------------------------
| setting up ActivePlan for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

import { FaRocket } from "react-icons/fa6";
import { BsFiletypePdf } from "react-icons/bs";

const commonButtonStyle =
  "px-5 py-2 rounded-lg font-semibold text-[18px] duration-200 cursor-pointer flex gap-1 items-center";
const ActivePlan = () => {
  return (
    <main className="border rounded-lg py-4">
      <div className="w-full flex items-center border-b px-4 pb-4 justify-between">
        <h2 className="text-2xl font-bold">Active Plan</h2>
        <h2 className="text-sm font-normal">
          <p className="flex items-center justify-center border bg-slate-100 p-4 py-2 rounded-lg cursor-pointer gap-2 font-semibold hover:bg-slate-200 border-slate-300 hover:border-slate-400">
            <BsFiletypePdf className="text-gray-900 w-[20px] h-[20px]" />
            Download Pdf
          </p>
        </h2>
      </div>
      <div className="px-4">
        <div className="w-full flex items-center justify-between">
          <div className="w-full flex flex-col">
            <div className="pb-2 pt-6">
              <div className="bg-slate-200 max-w-[60px] max-h-[60px] min-w-[60px] min-h-[60px] flex items-center justify-center border-slate-300 rounded-full ">
                <FaRocket className="w-[25px] h-[25px]" />
              </div>
            </div>
            <h3 className="text-[18px] pb-2 font-bold">Standard Plan</h3>
            <p className="text-slate-500">
              Valid till:
              <span className="text-slate-600 pl-2 font-semibold">
                May 2023 - April 2024
              </span>
            </p>
          </div>
          <div className="flex-col flex min-w-[150px]">
            <div className="font-bold text-slate-900 text-4xl flex items-center justify-end">
              &pound; 199
            </div>
            <div className="font-normal text-slate-500 flex items-center justify-end">
              Total per year
            </div>
          </div>
        </div>
        <div className="w-full mt-6 flex items-center justify-between">
          <h4 className="text-[18px] font-bold">Storage usage</h4>
          <h4 className="text-[18px] font-bold">
            5.23 <span className="font-normal">used of 10 GB</span>
          </h4>
        </div>
        <div className="py-4">
          <div className="relative rounded-full">
            <div className="w-full h-[10px] bg-blue-100 absolute left-0 top-0 rounded-l-full rounded-r-full" />
            <div className="w-[65%] h-[10px] bg-blue-300 absolute left-0 top-0 rounded-l-full" />
            <div className="w-[30%] h-[10px] bg-blue-500 absolute left-0 top-0 rounded-l-full" />
          </div>
          <div className="pt-8">
            <div className="w-full flex items-center justify-start gap-8">
              <div className="flex items-center justify-start gap-1">
                <div className="w-[10px] h-[10px] bg-blue-500 rounded-full" />
                <h2 className="text-xl text-slate-500">Drive one</h2>
              </div>
              <div className="flex items-center justify-start gap-1">
                <div className="w-[10px] h-[10px] bg-blue-300 rounded-full" />
                <h2 className="text-xl text-slate-500">Drive two</h2>
              </div>
              <div className="flex items-center justify-start gap-1">
                <div className="w-[10px] h-[10px] bg-blue-100 rounded-full" />
                <h2 className="text-xl text-slate-500">Empty Drive</h2>
              </div>
            </div>
          </div>
          <div className="py-12">
            <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-start md:justify-end gap-4">
              <div
                className={`${commonButtonStyle} bg-rose-100 text-rose-300 hover:bg-rose-500 hover:text-white`}
              >
                Cancel subscription
              </div>
              <div
                className={`${commonButtonStyle}  bg-slate-800 text-slate-100 hover:bg-slate-950 hover:text-white`}
              >
                Update Plan
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default ActivePlan;
