/*
|-----------------------------------------
| setting up Board for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/
import { CiFilter } from "react-icons/ci";
import { BiSort } from "react-icons/bi";
import { ScrollArea } from "@/components/ui/scroll-area";
import BoxContainer from "./box-container";

const Board = () => {
  return (
    <ScrollArea className="h-screen w-full">
      <main>
        <div className="w-full min-h-screen flex flex-col">
          <div className="flex w-full gap-4 my-2 text-slate-500">
            <h2>All Tasks</h2>
            <div className="flex items-center justify-center">
              <CiFilter />
              <h2> Filter</h2>
            </div>
            <div className="flex items-center justify-center">
              <BiSort />
              <h2>Sort</h2>
            </div>
          </div>
          <div className="w-full flex items-center justify-between gap-4">
            <BoxContainer title="task" sampleData={[1, 2, 3]} />
            <BoxContainer title="inprogress" />
            <BoxContainer title="done" />
          </div>
        </div>
        <div className="h-[200px]" />
      </main>
    </ScrollArea>
  );
};
export default Board;
