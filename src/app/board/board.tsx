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
import { useGlobalStore } from "@/lib/global-store";
import { useState } from "react";

import { RxCross1 } from "react-icons/rx";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const zodItemSchema = z.object({
  title: z
    .string({
      invalid_type_error: "Item must be a string",
      required_error: "Item is required",
    })
    .min(3, "Minimum 3 characters")
    .max(40, "Maximum 40 characters")
    .trim(),
  description: z
    .string({
      invalid_type_error: "Item must be a string",
      required_error: "Item is required",
    })
    .max(140, "Maximum 40 characters")
    .trim()
    .optional(),
});
type newItemFormSchema = z.infer<typeof zodItemSchema>;

const Board = () => {
  const [addNew, setAddNew] = useState({
    newBoard: false,
    isAddItem: false,
    isRender: false,
    isUpdate: false,
    currentBoard: "",
  });
  const boardTask = useGlobalStore((store) => store.boardTask);
  const setBoardTask = useGlobalStore((store) => store.setBoardTask);
  const {
    reset,
    control,
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<newItemFormSchema>({ resolver: zodResolver(zodItemSchema) });

  const handleCancel = () => {
    setAddNew({ ...addNew, isRender: false });
    reset();
  };
  const onSubmit = handleSubmit((data) => {
    console.log(data);
    const result = { ...boardTask };
    if (addNew.newBoard) {
      // add board if addNew.newBoard is true
      result.statusLst = [...boardTask.statusLst, data.title];
    } else if (addNew.isUpdate) {
      // update board if addNew.isUpdate is true
      result.statusLst = boardTask.statusLst.map((status) => {
        if (
          status.toLocaleLowerCase() === addNew.currentBoard.toLocaleLowerCase()
        ) {
          return data.title;
        } else {
          return status;
        }
      });
    } else if (!addNew.newBoard) {
      console.log(" add item", data);
      result.data = [
        ...boardTask.data,
        { ...data, status: addNew.currentBoard || "" },
      ];
    }
    console.log(" final result : ", result);
    setBoardTask({ ...result });
    reset();
    handleCancel();
  });
  const BorderStyle =
    "w-full rounded border border-gray-300 px-3 py-2 leading-tight text-sm text-gray-800";

  return (
    <ScrollArea className="h-screen w-full pr-4">
      <main>
        <div className="w-full min-h-screen flex flex-col">
          <div className="w-full flex items-center justify-between">
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
            <p
              onClick={() =>
                setAddNew({ ...addNew, isRender: true, newBoard: true })
              }
              className="px-4 text-center py-1 mb-1 border rounded-full min-w-[140px] cursor-pointer border-gray-400 hover:border-gray-500 hover:bg-gray-50 hover:text-gray-900 text-gray-800 font-semibold "
            >
              New Board
            </p>
          </div>
          {addNew.isRender ? (
            <div className="py-4 flex flex-col items-center justify-center w-full min-h-screen">
              <div className="text-xl flex-col w-full max-w-[480px] border p-4 rounded-lg border-slate-400 flex items-center justify-between">
                <div className="w-full flex items-center justify-between">
                  <h2 className="font-semibold">
                    {!addNew.isUpdate &&
                      (addNew.newBoard ? "New Board" : "New Item")}
                    {addNew.isUpdate &&
                      (addNew.newBoard ? "Add Item" : "Update Board")}
                    {!addNew.isUpdate && !addNew.newBoard && (
                      <small className="text-sm text-slate-400 px-2">
                        ({addNew.currentBoard})
                      </small>
                    )}
                  </h2>
                  <div onClick={handleCancel} className="cursor-pointer">
                    <RxCross1 />
                  </div>
                </div>

                <form onSubmit={onSubmit} className="w-full">
                  <div className="w-full flex flex-col gap-2">
                    <div className="flex flex-col mt-4 w-full">
                      <label
                        className="text-sm w-full font-semibold text-slate-500"
                        htmlFor="title"
                      >
                        Title
                      </label>
                      <input
                        className={BorderStyle}
                        {...register("title")}
                        placeholder="Title"
                      />
                      {errors?.title && (
                        <p className="text-sm text-rose-400">
                          {errors.title.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <div className="flex flex-col mt-4 w-full">
                      <label
                        className="text-sm w-full font-semibold text-slate-500"
                        htmlFor="description"
                      >
                        Description
                      </label>
                      <input
                        className={BorderStyle}
                        {...register("description")}
                        placeholder="Description"
                      />
                      {errors?.description && (
                        <p className="text-sm text-rose-400">
                          {errors.description.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <input
                    type="submit"
                    className="w-full mt-8 bg-blue-300 hover:bg-blue-400 cursor-pointer text-white hover:text-white rounded-lg py-2"
                  />
                </form>
              </div>
            </div>
          ) : (
            <div className="w-full grid grid-cols-1 md:grid-cols-3 items-center justify-between gap-4">
              {boardTask.statusLst.map((curr) => (
                <BoxContainer
                  title={curr || ""}
                  addNew={addNew}
                  setAddNew={setAddNew}
                  setValue={setValue}
                />
              ))}
            </div>
          )}
        </div>
        <div className="h-[200px]" />
      </main>
    </ScrollArea>
  );
};
export default Board;
