/*
|-----------------------------------------
| setting up Loading for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, April, 2024
|-----------------------------------------
*/
import { Skeleton } from "@/components/ui/skeleton";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

const Loading = () => {
  return (
    <main className="h-screen w-full fixed top-0 left-0">
      <div className="flex h-screen w-full">
        <div className="w-[30vw] h-screen flex flex-col items-start pt-12 p-4 gap-4 justify-center">
          <div className="flex flex-col gap-4 align-top">
            <div className="flex items-center justify-center space-x-4">
              <Skeleton className="h-12 w-12 bg-slate-500 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px] bg-slate-500" />
                <Skeleton className="h-4 w-[200px] bg-slate-500" />
              </div>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <Skeleton className="h-12 w-12 bg-slate-500 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px] bg-slate-500" />
                <Skeleton className="h-4 w-[200px] bg-slate-500" />
              </div>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <Skeleton className="h-12 w-12 bg-slate-500 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px] bg-slate-500" />
                <Skeleton className="h-4 w-[200px] bg-slate-500" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 align-top">
            <div className="flex items-center justify-center space-x-4">
              <Skeleton className="h-12 w-12 bg-slate-500 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px] bg-slate-500" />
                <Skeleton className="h-4 w-[200px] bg-slate-500" />
              </div>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <Skeleton className="h-12 w-12 bg-slate-500 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px] bg-slate-500" />
                <Skeleton className="h-4 w-[200px] bg-slate-500" />
              </div>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <Skeleton className="h-12 w-12 bg-slate-500 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px] bg-slate-500" />
                <Skeleton className="h-4 w-[200px] bg-slate-500" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 align-top">
            <div className="flex items-center justify-center space-x-4">
              <Skeleton className="h-12 w-12 bg-slate-500 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px] bg-slate-500" />
                <Skeleton className="h-4 w-[200px] bg-slate-500" />
              </div>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <Skeleton className="h-12 w-12 bg-slate-500 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px] bg-slate-500" />
                <Skeleton className="h-4 w-[200px] bg-slate-500" />
              </div>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <Skeleton className="h-12 w-12 bg-slate-500 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px] bg-slate-500" />
                <Skeleton className="h-4 w-[200px] bg-slate-500" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[70vw] h-screen flex flex-col items-center pt-12 p-4 gap-4 justify-center">
          <div className="flex flex-col gap-4 align-top">
            <div className="flex items-center justify-center space-x-4">
              <Skeleton className="h-12 w-12 bg-slate-500 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px] bg-slate-500" />
                <Skeleton className="h-4 w-[200px] bg-slate-500" />
              </div>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <Skeleton className="h-12 w-12 bg-slate-500 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px] bg-slate-500" />
                <Skeleton className="h-4 w-[200px] bg-slate-500" />
              </div>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <Skeleton className="h-12 w-12 bg-slate-500 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px] bg-slate-500" />
                <Skeleton className="h-4 w-[200px] bg-slate-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Loading;
