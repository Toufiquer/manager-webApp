/*
|-----------------------------------------
| setting up ViewAllBoard for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

import { BiSort } from "react-icons/bi";
import { CiFilter } from "react-icons/ci";
import { UseFormSetValue } from "react-hook-form";

import { useGlobalStore } from "@/lib/global-store";
import { webAppPLight } from "@/components/common/style";

import BoxContainer from "./box-container";

const ViewAllBoard = ({
  setValue,
}: {
  setValue: UseFormSetValue<{
    title: string;
    description?: string | undefined;
  }>;
}) => {
  const boardTask = useGlobalStore((store) => store.boardTask);
  const onBoardingStatus = useGlobalStore((store) => store.onBoardingStatus);
  const setonBoardingStatus = useGlobalStore(
    (store) => store.setonBoardingStatus
  );

  // Board functionality
  const handleAddNewBoard = () => {
    const result = { ...onBoardingStatus };
    result.isAddBoard = true;
    setonBoardingStatus(result);
  };
  const handleUpdateBoard = (boardId: string) => {
    const result = { ...onBoardingStatus };
    result.isUpdateBoard = true;
    const findBoard = boardTask.statusLst.find((curr) => curr.id === boardId);
    result.currentTitle = findBoard?.title || "";
    setValue("title", findBoard?.title || "");
    setValue("description", findBoard?.description || "");
    setonBoardingStatus(result);
  };
  const handleDeleteBoard = (boardId: string) => {
    const result = { ...onBoardingStatus };
    result.isDeleteBoard = true;
    const findBoard = boardTask.statusLst.find((curr) => curr.id === boardId);
    result.currentTitle = findBoard?.title || "";
    result.currentDescription = findBoard?.description || "";
    result.currentId = boardId;
    setonBoardingStatus(result);
  };

  // task functionality
  const handleAddNewTask = (TaskTitle: string) => {
    const result = { ...onBoardingStatus };
    result.isAddTask = true;
    result.currentTitle = TaskTitle;
    setonBoardingStatus(result);
  };
  const handleViewTask = (TaskId: string) => {
    const result = { ...onBoardingStatus };
    result.isViewTask = true;
    const findTask = boardTask.data.find((curr) => curr.id === TaskId);
    result.currentTitle = findTask?.title || "";
    result.currentDescription = findTask?.description || "";
    result.currentId = findTask?.id || "";
    setonBoardingStatus(result);
  };
  return (
    <div>
      <div className="w-full flex items-center justify-between">
        <div className="flex w-full gap-4 my-2">
          <h2
            className={
              webAppPLight +
              " cursor-pointer hover:text-slate-600 hover:underline"
            }
          >
            All Tasks
          </h2>
          <div className="flex items-center justify-center">
            <CiFilter
              className={
                webAppPLight +
                " cursor-pointer hover:text-slate-600 hover:underline"
              }
            />
            <h2
              className={
                webAppPLight +
                " cursor-pointer hover:text-slate-600 hover:underline"
              }
            >
              {" "}
              Filter
            </h2>
          </div>
          <div className="flex items-center justify-center">
            <BiSort
              className={
                webAppPLight +
                " cursor-pointer hover:text-slate-600 hover:underline"
              }
            />
            <h2
              className={
                webAppPLight +
                " cursor-pointer hover:text-slate-600 hover:underline"
              }
            >
              Sort
            </h2>
          </div>
        </div>
        <p
          onClick={handleAddNewBoard}
          className={
            webAppPLight +
            " cursor-pointer hover:text-slate-600 hover:underline w-[120px]"
          }
        >
          New Board
        </p>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 items-center justify-between gap-4">
        {boardTask.statusLst.map((curr, idx) => (
          <BoxContainer
            handleViewTask={handleViewTask}
            handleAddNewTask={handleAddNewTask}
            handleUpdateBoard={handleUpdateBoard}
            handleDeleteBoard={handleDeleteBoard}
            curr={curr}
            key={curr.id + idx}
            title={curr.title || ""}
          />
        ))}
      </div>
    </div>
  );
};
export default ViewAllBoard;
