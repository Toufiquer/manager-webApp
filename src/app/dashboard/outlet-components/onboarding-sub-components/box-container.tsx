/*
|-----------------------------------------
| setting up BoxContainer for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

"use client";

import { useEffect } from "react";
import { useDrop } from "react-dnd";
import { BsPlusLg } from "react-icons/bs";
import { HiDotsHorizontal } from "react-icons/hi";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useGlobalStore } from "@/lib/global-store";
import { webAppH2 } from "@/components/common/style";
import { ScrollArea } from "@/components/ui/scroll-area";

import SingleBox from "./single-box";

const BoxContainer = ({
  curr,
  handleViewTask,
  handleAddNewTask,
  handleUpdateBoard,
  handleDeleteBoard,
  title,
}: {
  curr: { id: string; title: string; description?: string };
  handleViewTask: (TaskId: string) => void;
  handleAddNewTask: (TaskId: string) => void;
  handleUpdateBoard: (boardId: string) => void;
  handleDeleteBoard: (boardId: string) => void;
  title: string;
  sampleData?: number[];
}) => {
  const boardTask = useGlobalStore((store) => store.boardTask);
  const setBoardTask = useGlobalStore((store) => store.setBoardTask);
  useEffect(() => {
    const result = {
      ...boardTask,
      task: [{ id: "1" }, { id: "2" }, { id: "3" }],
    };

    setBoardTask(result);
  }, []);
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    // The type (or types) to accept - strings or symbols
    accept: "BOX",
    drop: (item) => updateBoard(item),
    // Props to collect
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));
  const updateBoard = (item: any) => {
    const result = boardTask.data.map((curr) => {
      if (curr.id === item.id) {
        curr.status = title;
        curr.lstUpdate = new Date();
      }
      return curr;
    });
    setBoardTask({ ...boardTask, data: result });
  };
  return (
    <div ref={drop} className="min-h-[80vh] bg-white w-full rounded-lg">
      <div className="flex flex-col w-full h-full">
        <div className="w-full flex items-center justify-between px-4 py-2 border-b bg-slate-300 rounded-t-lg text-slate-800">
          <div className="flex flex-col w-full items-start justify-center">
            <h2 className={webAppH2 + " text-slate-800"}>
              {curr.title}
              {boardTask.data.filter(
                (curr) =>
                  curr.status?.toLocaleLowerCase() === title.toLocaleLowerCase()
              ).length > 0 && (
                <small className="text-slate-500 text-sm">
                  (
                  {
                    boardTask.data.filter(
                      (curr) =>
                        curr.status?.toLocaleLowerCase() ===
                        title.toLocaleLowerCase()
                    ).length
                  }
                  )
                </small>
              )}
            </h2>
            <p className="text-xs text-slate-500">{curr.description}</p>
          </div>
          <div className="flex items-center justify-center gap-4">
            <BsPlusLg
              className="cursor-pointer"
              onClick={() => handleAddNewTask(curr.title)}
            />
            <DropdownMenu>
              <DropdownMenuTrigger>
                <HiDotsHorizontal className="cursor-pointer" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <div
                    className="font-semibold cursor-pointer w-full"
                    onClick={() => handleUpdateBoard(curr.id)}
                  >
                    Edit
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <div
                    className="font-semibold cursor-pointer w-full"
                    onClick={() => handleDeleteBoard(curr.id)}
                  >
                    Delete
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <ScrollArea className="w-full h-[70vh] px-3">
          <div className="flex flex-col gap-4 mt-4 min-h-[80vh]">
            {boardTask.data.filter(
              (curr) =>
                curr.status?.toLocaleLowerCase() === title.toLocaleLowerCase()
            ).length === 0 && (
              <div className={webAppH2 + " text-center pt-6"}>
                Nothing was found
              </div>
            )}
            {boardTask.data.length > 0 &&
              boardTask.data
                .filter(
                  (curr) =>
                    curr.status?.toLocaleLowerCase() ===
                    title.toLocaleLowerCase()
                )
                .sort((a, b) => a.lstUpdate - b.lstUpdate)
                .map((curr, idx) => (
                  <SingleBox
                    handleViewTask={handleViewTask}
                    curr={curr}
                    key={"" + curr.id + idx}
                    parentDiv={title}
                  />
                ))}
          </div>
          <div className="h-[120px]" />
        </ScrollArea>
      </div>
    </div>
  );
};
export default BoxContainer;
