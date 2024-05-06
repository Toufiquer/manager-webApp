/*
|-----------------------------------------
| setting up BoxContainer for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

"use client";

import { useEffect } from "react";
import { BsPlusLg } from "react-icons/bs";
import { HiDotsHorizontal } from "react-icons/hi";
import SingleBox from "./single-box";
import { useDrop } from "react-dnd";
import { useGlobalStore } from "@/lib/global-store";

const BoxContainer = ({
  title,
  sampleData = [],
}: {
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
    drop: (item) => addDivToBoard(item),
    // Props to collect
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  console.log("");
  console.log("");
  console.log("");
  console.log("");
  console.log("outside fn : boardTask", boardTask);
  const addDivToBoard = (item: any) => {
    console.log("");
    console.log("");
    console.log("");
    console.log("upcoming boardTask: ", item.boardTask);
    const result = { ...item.boardTask };
    if (title.toLocaleLowerCase() === "task") {
      result.task = [...item.boardTask.task, { id: item.id }];
    } else if (title.toLocaleLowerCase() === "inprogress") {
      result.inprogress = [...item.boardTask.inprogress, { id: item.id }];
    } else if (title.toLocaleLowerCase() === "done") {
      result.done = [...item.boardTask.done, { id: item.id }];
    }

    if (item.parentDiv === "task") {
      result.task = item.boardTask.task.filter((i) => i.id !== item.id);
    } else if (item.parentDiv === "inprogress") {
      result.inprogress = item.boardTask.inprogress.filter(
        (i) => i.id !== item.id
      );
    } else if (item.parentDiv === "done") {
      result.done = item.boardTask.done.filter((i) => i.id !== item.id);
    }
    console.log("final result: ", result);
    setBoardTask(result);
  };
  const addDivToBoard22 = (item: any) => {
    console.log("");
    console.log("");
    console.log("");
    console.log("upcoming boardTask: ", item.boardTask);
    const result = { ...item.boardTask };
    if (title.toLocaleLowerCase() === "task") {
      result.task = [...item.boardTask.task, { id: item.id }];
    } else if (title.toLocaleLowerCase() === "inprogress") {
      result.inprogress = [...item.boardTask.inprogress, { id: item.id }];
    } else if (title.toLocaleLowerCase() === "done") {
      result.done = [...item.boardTask.done, { id: item.id }];
    }

    if (item.parentDiv === "task") {
      result.task = item.boardTask.task.filter((i) => i.id !== item.id);
    } else if (item.parentDiv === "inprogress") {
      result.inprogress = item.boardTask.inprogress.filter(
        (i) => i.id !== item.id
      );
    } else if (item.parentDiv === "done") {
      result.done = item.boardTask.done.filter((i) => i.id !== item.id);
    }
    console.log("final result: ", result);
    setBoardTask(result);
  };
  return (
    <div ref={drop} className="min-h-[80vh] bg-slate-400 w-full p-4 rounded-lg">
      <div className="flex flex-col">
        <div className="w-full flex items-center justify-between">
          <h2 className="text-slate-600 text-2xl font-semibold">
            {title} <small className="text-slate-500 text-sm">(3)</small>
          </h2>
          <div className="flex items-center justify-center gap-4">
            <BsPlusLg className="cursor-pointer" />
            <HiDotsHorizontal className="cursor-pointer" />
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-4 min-h-[80vh]">
          {title.toLocaleLowerCase() === "task" &&
            boardTask?.task.length > 0 &&
            boardTask.task?.map((curr, idx) => (
              <SingleBox
                curr={curr}
                key={"" + curr.id + idx}
                parentDiv="task"
              />
            ))}
          {title.toLocaleLowerCase() === "inprogress" &&
            boardTask?.inprogress.length > 0 &&
            boardTask.inprogress?.map((curr, idx) => (
              <SingleBox
                curr={curr}
                key={"" + curr.id + idx}
                parentDiv="inprogress"
              />
            ))}
          {title.toLocaleLowerCase() === "done" &&
            boardTask?.done.length > 0 &&
            boardTask.done?.map((curr, idx) => (
              <SingleBox
                curr={curr}
                key={"" + curr.id + idx}
                parentDiv="done"
              />
            ))}
        </div>
      </div>
    </div>
  );
};
export default BoxContainer;
