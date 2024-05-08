/*
|-----------------------------------------
| setting up MutationOnboarding for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

import { z } from "zod";
import {
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormReset,
  UseFormSetValue,
} from "react-hook-form";
import { RxCross1 } from "react-icons/rx";
import { BaseSyntheticEvent } from "react";

import {
  borderStyle,
  buttonStyle,
  webAppH2Light,
} from "@/components/common/style";
import { useGlobalStore } from "@/lib/global-store";

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

const MutationOnboarding = ({
  register,
  formState,
  onSubmit,
  handleCancel,
}: {
  formState: FormState<{
    title: string;
    description?: string | undefined;
  }>;
  onSubmit: (
    e?: BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>;
  register: UseFormRegister<{
    title: string;
    description?: string | undefined;
  }>;
  handleCancel: () => void;
}) => {
  const onBoardingStatus = useGlobalStore((store) => store.onBoardingStatus);
  const { errors } = formState;
  return (
    <div className="py-4 flex flex-col items-center justify-center w-full min-h-[52vh] ">
      <div className="text-xl flex-col w-full max-w-[480px] border p-4 rounded-lg bg-blue-50 border-slate-300 flex items-center justify-between">
        <div className="w-full flex items-center justify-between">
          <h2 className={webAppH2Light + " text-slate-600"}>
            {onBoardingStatus.isAddBoard && "New Board"}
            {onBoardingStatus.isAddTask && "New Task"}
            {onBoardingStatus.currentBoard && (
              <small className="text-sm text-slate-400 px-2">
                ({onBoardingStatus.currentBoard})
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
                className={borderStyle}
                {...register("title")}
                placeholder="Title"
              />
              {errors?.title && (
                <p className="text-sm text-rose-400">{errors.title.message}</p>
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
                className={borderStyle}
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
  );
};
export default MutationOnboarding;
