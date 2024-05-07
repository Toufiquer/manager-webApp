/*
|-----------------------------------------
| setting up SingleBox for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useGlobalStore } from "@/lib/global-store";
import { Dispatch, SetStateAction } from "react";
import { useDrag } from "react-dnd";
import { UseFormSetValue } from "react-hook-form";
import { FaCommentsDollar } from "react-icons/fa6";
import { HiDotsHorizontal } from "react-icons/hi";

const SingleBox = ({
  curr,
  parentDiv,
  setValue,
  setAddNew,
  addNew,
}: {
  addNew: {
    newBoard: boolean;
    isRender: boolean;
    isUpdate: boolean;
    currentBoard: string;
    isAddItem: boolean;
    detailsId: string;
  };
  setAddNew: Dispatch<
    SetStateAction<{
      newBoard: boolean;
      isRender: boolean;
      isUpdate: boolean;
      currentBoard: string;
      isAddItem: boolean;
      detailsId: string;
    }>
  >;
  setValue: UseFormSetValue<{
    title: string;
    description?: string | undefined;
  }>;
  parentDiv: string;
  curr: any;
}) => {
  const boardTask = useGlobalStore((store) => store.boardTask);
  const setBoardTask = useGlobalStore((store) => store.setBoardTask);
  const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
    type: "BOX",
    item: { id: curr.id, data: curr, parentDiv },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));
  const handleDelete = (e: any) => {
    e.stopPropagation();
    const othersData = boardTask.data?.filter(
      (item: any) => item.id !== curr.id
    );
    setBoardTask({ ...boardTask, data: othersData });
  };
  const handleEdit = (e: any) => {
    console.log("handleEdit", e);
    e.stopPropagation();
    setValue("title", curr.title);
    setValue("description", curr.description);
    const result = {
      ...addNew,
      isUpdate: true,
      detailsId: curr.id,
      isRender: true,
    };
    setAddNew(result);
  };
  return (
    <div
      ref={dragPreview}
      style={{ opacity: isDragging ? 0.5 : 1 }}
      className="w-full"
    >
      <div
        className="flex items-center justify-center cursor-pointer rounded-lg border h-full w-full font-semibold"
        role="Handle"
        ref={drag}
      >
        <div
          key={curr}
          className="w-full relative min-h-[180px] cursor-pointer hover:bg-slate-200 duration-200 bg-slate-100 rounded-lg p-2"
        >
          <div className="w-full flex border-b border-slate-300 hover:border-slate-400 items-center justify-between">
            <h2 className="text-slate-600 font-semibold" title={curr.title}>
              {curr.title.slice(0, 40) + `${curr.title.length > 40 && "..."}`}
            </h2>

            <DropdownMenu>
              <DropdownMenuTrigger>
                <HiDotsHorizontal className="cursor-pointer" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <button
                    type="button"
                    className="font-semibold cursor-pointer w-full"
                    onClick={handleEdit}
                  >
                    Edit
                  </button>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <button
                    type="button"
                    className="font-semibold cursor-pointer w-full"
                    onClick={handleDelete}
                  >
                    Delete
                  </button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <p className="text-slate-500" title={curr.description}>
            {curr.description.slice(0, 140) +
              `${curr.description.length > 140 && "..."}`}
          </p>
          <div className="w-full flex items-center gap-2">
            <div className="bg-orange-100 rounded-lg mt-6 px-4 flex items-center justify-center h-[80px] w-[80px] py-1 ">
              Image
            </div>
            <div className="bg-orange-100 rounded-lg mt-6 px-4 flex items-center justify-center h-[80px] w-[80px] py-1 ">
              Image
            </div>
          </div>
          <div className="absolute bottom-2 right-2">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SingleBox;
