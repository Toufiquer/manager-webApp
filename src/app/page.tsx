/*
|-----------------------------------------
| setting up Page for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, April, 2024
|-----------------------------------------
*/

"use client";

import Image from "next/image";
import { useEffect } from "react";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import SideBar from "@/components/common/side-bar";
import { useGlobalStore } from "@/lib/global-store";
import Profile from "@/components/common/profile";

const Page = () => {
  const apiData = useGlobalStore((store) => store.apiData);
  const setApiData = useGlobalStore((store) => store.setApiData);
  const fetchApi = (data: string) => {
    try {
      const runFetch = async () => {
        fetch(data)
          .then((res) => res.json())
          .then((data) => {
            delete data.content?.a;
            delete data.content?.n;
            const result = [];
            for (const m in data.content) {
              const item = {
                name: m.split("_").join(" ").split("-").join(" "),
                data: data.content[m],
              };
              result.push(item);
            }
            setApiData(result);
          });
      };
      runFetch();
      // result = true;
    } catch (err) {
      console.log("Fetch error: ", err);
    }
  };
  useEffect(() => {
    fetchApi("https://api.mealnight.com/checkout/menu/top_g/n8");
  }, []);
  useEffect(() => {
    // console.log("apiData : ", apiData);
  }, [apiData]);
  return (
    <main>
      <div className="border w-full h-[8vh]">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start w-[70vw]">
            <div className="border px-4 py-1">
              <Image
                width={40}
                height={40}
                alt="Logo"
                src="/profile.webp"
              ></Image>
            </div>
            <p className="text-bold text-2xl text-start">Meal Night</p>
          </div>
          <div className="flex items-center justify-end w-[30vw]">
            <Profile />
          </div>
        </div>
      </div>
      <ResizablePanelGroup direction="horizontal" className="min-h-[92vh]">
        <ResizablePanel defaultSize={30}>
          <SideBar />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel>Two</ResizablePanel>
      </ResizablePanelGroup>
    </main>
  );
};
export default Page;
