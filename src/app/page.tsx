/*
|-----------------------------------------
| setting up Page for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, April, 2024
|-----------------------------------------
*/

"use client";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import SideBar from "@/components/common/side-bar";
import { useGlobalStore } from "@/lib/global-store";
import { useEffect } from "react";

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
            setApiData(data.content);
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
    console.log("apiData : ", apiData);
  }, [apiData]);
  return (
    <main>
      <ResizablePanelGroup direction="horizontal" className="min-h-screen">
        <ResizablePanel defaultSize={20}>
          <SideBar />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel>Two</ResizablePanel>
      </ResizablePanelGroup>
    </main>
  );
};
export default Page;
