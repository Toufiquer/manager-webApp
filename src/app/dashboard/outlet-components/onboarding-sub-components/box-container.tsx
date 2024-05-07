/*
|-----------------------------------------
| setting up BoxContainer for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

"use client";

import { useDrop } from "react-dnd";
import { BsPlusLg } from "react-icons/bs";
import { HiDotsHorizontal } from "react-icons/hi";
import { UseFormSetValue } from "react-hook-form";
import { Dispatch, SetStateAction, useEffect } from "react";

import { useGlobalStore } from "@/lib/global-store";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import SingleBox from "./single-box";
import { ScrollArea } from "@/components/ui/scroll-area";
import { webAppH2 } from "@/components/common/style";

const BoxContainer = ({
  title,
  setValue,
  addNew,
  setAddNew,
  detailsId,
  handleDetails,
}: {
  addNew: {
    newBoard: boolean;
    isRender: boolean;
    isUpdate: boolean;
  };
  setAddNew: Dispatch<
    SetStateAction<{
      newBoard: boolean;
      isRender: boolean;
      isUpdate: boolean;
      currentBoard: string;
      isAddItem: boolean;
    }>
  >;
  setValue: UseFormSetValue<{
    title: string;
    description?: string | undefined;
  }>;
  detailsId: string;
  title: string;
  sampleData?: number[];
  handleDetails: (agr: string) => void;
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
  const handleDelete = (statusName: string) => {
    const filterData = boardTask.statusLst.filter(
      (curr) => curr !== statusName
    );
    setBoardTask({ ...boardTask, statusLst: filterData });
  };
  const handleEdit = (e: any) => {
    console.log("handleEdit", e);
    e.stopPropagation();
  };
  return (
    <div ref={drop} className="min-h-[80vh] bg-white w-full rounded-lg">
      <div className="flex flex-col w-full h-full">
        <div className="w-full flex items-center justify-between px-4 py-2 border-b bg-slate-300 rounded-t-lg text-slate-800">
          <div className="flex flex-col w-full items-start justify-center">
            <h2 className={webAppH2 + " text-slate-800"}>
              {title}
              {boardTask.data.filter(
                (curr) =>
                  curr.status.toLocaleLowerCase() === title.toLocaleLowerCase()
              ).length > 0 && (
                <small className="text-slate-500 text-sm">
                  (
                  {
                    boardTask.data.filter(
                      (curr) =>
                        curr.status.toLocaleLowerCase() ===
                        title.toLocaleLowerCase()
                    ).length
                  }
                  )
                </small>
              )}
            </h2>
          </div>
          <div className="flex items-center justify-center gap-4">
            <BsPlusLg
              className="cursor-pointer"
              onClick={() =>
                setAddNew({
                  ...addNew,
                  isRender: true,
                  newBoard: false,
                  isAddItem: true,
                  isUpdate: false,
                  currentBoard: title,
                })
              }
            />
            <DropdownMenu>
              <DropdownMenuTrigger>
                <HiDotsHorizontal className="cursor-pointer" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <div
                    className="font-semibold cursor-pointer w-full"
                    onClick={() => {
                      setValue("title", title);
                      setAddNew({
                        ...addNew,
                        currentBoard: title,
                        isRender: true,
                        newBoard: false,
                        isUpdate: true,
                        isAddItem: false,
                      });
                    }}
                  >
                    Edit
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <div
                    className="font-semibold cursor-pointer w-full"
                    onClick={() => {
                      handleDelete(title);
                    }}
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
                curr.status.toLocaleLowerCase() === title.toLocaleLowerCase()
            ).length === 0 && (
              <div className={webAppH2 + " text-center pt-6"}>
                Nothing was found
              </div>
            )}
            {boardTask.data.length > 0 &&
              boardTask.data
                .filter(
                  (curr) =>
                    curr.status.toLocaleLowerCase() ===
                    title.toLocaleLowerCase()
                )
                .sort((a, b) => a.lstUpdate - b.lstUpdate)
                .map((curr, idx) => (
                  <div
                    key={"" + curr.id + idx}
                    onClick={() => handleDetails(curr.id)}
                  >
                    <SingleBox
                      curr={curr}
                      parentDiv={title}
                      setValue={setValue}
                      addNew={addNew}
                      setAddNew={setAddNew}
                    />
                  </div>
                ))}
          </div>
          <div className="h-[120px]" />
        </ScrollArea>
      </div>
    </div>
  );
};
export default BoxContainer;
