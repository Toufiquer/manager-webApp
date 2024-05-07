/*
|-----------------------------------------
| setting up BoardComponents Components for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/
import { z } from "zod";
import { useState } from "react";
import { BiSort } from "react-icons/bi";
import { CiFilter } from "react-icons/ci";
import { useForm } from "react-hook-form";
import { RxCross1 } from "react-icons/rx";

import { useGlobalStore } from "@/lib/global-store";
import { zodResolver } from "@hookform/resolvers/zod";

import BoxContainer from "./box-container";
import {
  buttonStyle,
  webAppH2Light,
  webAppPLight,
} from "@/components/common/style";

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
    .max(1000, "Maximum 1000 characters")
    .trim()
    .optional(),
});
type newItemFormSchema = z.infer<typeof zodItemSchema>;

const BoardComponents = () => {
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
      // console.log(" result : ", addNew.currentBoard.toLocaleLowerCase());
      result.data = boardTask.data.map((curr) => {
        const item = { ...curr };
        // console.log(
        //   "items : ",
        //   curr.status.toLocaleLowerCase() ===
        //     addNew.currentBoard.toLocaleLowerCase(),
        //   curr.status.toLocaleLowerCase(),
        //   addNew.currentBoard.toLocaleLowerCase(),
        //   curr
        // );
        if (
          curr.status.toLocaleLowerCase() ===
          addNew.currentBoard.toLocaleLowerCase()
        ) {
          item.status = data.title;
        }
        return item;
      });
    } else if (!addNew.newBoard) {
      // add new item under board
      result.data = [
        ...boardTask.data,
        {
          ...data,
          status: addNew.currentBoard || "",
          id: Math.random() + "",
          lstUpdate: new Date(),
        },
      ];
    }
    console.log("final result: ", result);
    setBoardTask({ ...result });
    handleCancel();
  });
  const BorderStyle =
    "w-full rounded border border-gray-300 px-3 py-2 leading-tight text-sm text-gray-800 focus:outline-none";

  return (
    <main className={`${!addNew.isRender && " bg-blue-50 "} p-4`}>
      <div className="w-full min-h-[52vh] flex flex-col">
        {addNew.isRender ? (
          <div className="py-4 flex flex-col items-center justify-center w-full min-h-[52vh] ">
            <div className="text-xl flex-col w-full max-w-[480px] border p-4 rounded-lg bg-blue-50 border-slate-300 flex items-center justify-between">
              <div className="w-full flex items-center justify-between">
                <h2 className={webAppH2Light + " text-slate-600"}>
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
                    <textarea
                      rows={4}
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
                  className={buttonStyle + " font-[400] text-[16px] py-[4px]"}
                />
              </form>
            </div>
          </div>
        ) : (
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
                onClick={() =>
                  setAddNew({ ...addNew, isRender: true, newBoard: true })
                }
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
                  key={curr + idx}
                  title={curr || ""}
                  addNew={addNew}
                  setAddNew={setAddNew}
                  setValue={setValue}
                />
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="h-[200px]" />
    </main>
  );
};
export default BoardComponents;
