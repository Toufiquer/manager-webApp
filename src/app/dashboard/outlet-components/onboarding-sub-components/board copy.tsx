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
import { HiDotsHorizontal } from "react-icons/hi";
import { BsPlusLg } from "react-icons/bs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
            {["Task", "In-progress", "Done"].map((curr) => (
              <div
                key={curr}
                className="min-h-[80vh] bg-white w-full p-4 rounded-l-lg"
              >
                <div className="flex flex-col">
                  <div className="w-full flex items-center justify-between">
                    <h2 className="text-slate-600 text-2xl font-semibold">
                      {curr}{" "}
                      <small className="text-slate-400 text-sm">(3)</small>
                    </h2>
                    <div className="flex items-center justify-center gap-4">
                      <BsPlusLg className="cursor-pointer" />
                      <HiDotsHorizontal className="cursor-pointer" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 mt-4">
                    {[1, 2, 3, 4].map((curr) => (
                      <div
                        key={curr}
                        className="w-full relative h-[180px] cursor-pointer hover:bg-slate-300 duration-200 bg-slate-200 rounded-lg p-2"
                      >
                        <h2 className="text-slate-600 font-semibold">
                          Task Name
                        </h2>
                        <p className="text-slate-500">
                          Description of the Task, Description of the Task,
                          Description of the Task , Description of the Task
                        </p>
                        <div className="bg-orange-200 rounded-lg mt-6 px-4 py-1 w-fit">
                          Designer
                        </div>
                        <div className="absolute bottom-2 right-2">
                          <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                          </Avatar>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="h-[200px]" />
      </main>
    </ScrollArea>
  );
};
export default Board;
