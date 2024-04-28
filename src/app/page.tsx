/*
|-----------------------------------------
| setting up Page for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, April, 2024
|-----------------------------------------
*/

"use client";

import { useEffect, useState } from "react";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import SideBar from "@/components/common/side-bar";
import { useGlobalStore } from "@/lib/global-store";
import Header from "@/components/common/header";
import Outlet from "@/components/common/outlet";

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
     apiData.length === 0 && runFetch();
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
      <Header />
      <ResizablePanelGroup direction="horizontal" className="min-h-[92vh]">
        <ResizablePanel defaultSize={30}>
          <SideBar />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel>
          <Outlet />
        </ResizablePanel>
      </ResizablePanelGroup>
    </main>
  );
};
export default Page;
