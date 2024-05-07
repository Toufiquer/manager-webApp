/*
|-----------------------------------------
| setting up Page for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, April, 2024
|-----------------------------------------
*/

"use client";

import axios from "axios";
import { useEffect } from "react";
import { Roboto } from "next/font/google";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import SideBar from "@/components/common/side-bar";
import { useGlobalStore } from "@/lib/global-store";
import Header from "@/components/common/header";
import Outlet from "@/components/common/outlet";
import { useQuery } from "@tanstack/react-query";
import Loading from "./loading";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const Page = () => {
  const setApiData = useGlobalStore((store) => store.setApiData);
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ["fetchApi"],
    queryFn: () =>
      axios
        .get(`${process.env.NEXT_PUBLIC_APP_URL}` as string)
        .then((res) => res.data),
  });
  useEffect(() => {
    console.log("home page : ", { isPending, error, data, isFetching });
    if (data?.content?.a) {
      delete data.content.a;
      delete data?.content?.n;
      const result = [];
      for (const m in data.content) {
        const item = {
          name: m.split("_").join(" ").split("-").join(" "),
          data: data.content[m],
        };
        result.push(item);
      }
      console.log("result : ", result);
      setApiData(result);
    }
  }, [isPending]);
  return isFetching ? (
    <Loading />
  ) : (
    <main className={roboto.className}>
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
