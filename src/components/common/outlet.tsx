/*
|-----------------------------------------
| setting up Outlet for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, April, 2024
|-----------------------------------------
*/

import { FaTrash } from "react-icons/fa6";
import { IoAddSharp } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";

import { useGlobalStore } from "@/lib/global-store";
import { ScrollArea } from "@/components/ui/scroll-area";

const Outlet = () => {
  const currentItem = useGlobalStore((store) => store.currentItem);
  const apiData = useGlobalStore((store) => store.apiData);
  let renderData = apiData.filter((item) => item.name === currentItem);
  if (renderData.length >= 1 && renderData[0]?.data?.lst?.length === 0) {
    renderData = (
      <div className="min-h-[92vh] h-full w-full flex items-center justify-center">
        <div className="text-2xl">Ops! Nothing was found</div>
      </div>
    );
  }
  if (renderData.length >= 1 && renderData[0].data.lst.length > 0) {
    renderData = (
      <ScrollArea className="h-[92vh] w-full">
        <div className="min-h-[92vh] h-full w-full flex items-start justify-start pt-4 flex-col">
          {renderData[0]?.data?.lst?.map((curr: any, idx: number) => {
            return (
              <div className="cursor-pointer flex w-[96%] flex-row justify-between m-2 border border-slate-400 px-2 py-1 rounded-lg pl-1">
                <div
                  key={curr.item + idx}
                  className="flex flex-row gap-4 mx-4 w-full"
                >
                  <div>
                    <p className={`text-xl text-slate-600`}>{curr.item}</p>
                    {curr?.option?.length > 0 && (
                      <p className="text-sm">
                        {curr.option?.length} item
                        {curr.option?.length > 1 && "s"}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between gap-4 pr-2 max-w-[90px]">
                  <div>
                    <FaRegEdit className="cursor-pointer h-4 w-4 text-slate-500" />
                  </div>
                  <div>
                    <FaTrash className="text-red-300 hover:text-red-400 cursor-pointer h-4 w-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-12" />
      </ScrollArea>
    );
  }
  let renderUI = (
    <div className="min-h-[92vh] h-full w-full flex items-center justify-center">
      <div className="text-2xl">Please Select Item</div>
    </div>
  );
  if (currentItem !== "") {
    renderUI = (
      <div className="min-h-[92vh] h-full w-full flex flex-col p-2">
        <div className="text-2xl border-b border-slate-400 uppercase">
          {currentItem}
        </div>
        <div>{renderData}</div>
      </div>
    );
  }
  return <main>{renderUI}</main>;
};
export default Outlet;
