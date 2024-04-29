/*
|-----------------------------------------
| setting up SideBar for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, April, 2024
|-----------------------------------------
*/

"use client";

import { FaTrash } from "react-icons/fa6";
import { IoAddSharp } from "react-icons/io5";

import { useGlobalStore } from "@/lib/global-store";
import { ScrollArea } from "@/components/ui/scroll-area";

const SideBar = () => {
  const apiData = useGlobalStore((store) => store.apiData);
  const setCurrentItem = useGlobalStore((store) => store.setCurrentItem);
  const setMutationData = useGlobalStore((store) => store.setMutationData);
  return (
    <main>
      <ScrollArea className="h-screen w-auto rounded-md border pr-3">
        <p className={`text-xl font-bold uppercase text-slate-800 p-4`}>Menu</p>
        {Array.isArray(apiData) &&
          apiData?.map((curr: any, idx: number) => (
            <div
              key={curr.name + idx}
              className=" flex w-[96%] flex-row justify-between m-2 border border-slate-400 px-2 py-1 rounded-lg pl-1"
            >
              <div
                onClick={() => {
                  setCurrentItem(curr.name), setMutationData("");
                }}
                className="flex flex-row gap-4 mx-4 w-full cursor-pointer"
              >
                <div>
                  <p className={`text-xl font-bold uppercase text-slate-600`}>
                    {curr.name.length > 16
                      ? curr.name.slice(0, 14) + "..."
                      : curr.name}
                  </p>
                  {curr?.data?.lst?.length > 0 ? (
                    <p className="text-sm">
                      {curr.data.lst.length} item
                      {curr.data.lst.length > 1 && "s"}
                    </p>
                  ) : (
                    <p className="font-bold">No item</p>
                  )}
                </div>
              </div>
              <div className="flex flex-row items-center justify-between gap-4 pr-2 max-w-[90px]">
                <div
                  onClick={() =>
                    setMutationData({ type: "add", name: curr.name })
                  }
                >
                  <IoAddSharp className="cursor-pointer" />
                </div>
                <div
                  onClick={() =>
                    setMutationData({ type: "delete", name: curr.name })
                  }
                >
                  <FaTrash className="text-red-300 hover:text-red-400 cursor-pointer" />
                </div>
              </div>
            </div>
          ))}
        <div className="pb-12" />
      </ScrollArea>
    </main>
  );
};
export default SideBar;
