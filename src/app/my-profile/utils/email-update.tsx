/*
|-----------------------------------------
| setting up EmailUpdate for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

"use client";

import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { borderStyle } from "@/components/common/style";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

const email = z.string().email({
  message: "Invalid email format. Please enter a valid email address.",
});
export const newItemSchema = z.object({
  email,
});
type newItemFormSchema = z.infer<typeof newItemSchema>;
const EmailUpdate = () => {
  const { reset, register, setValue, handleSubmit, formState, getValues } =
    useForm<newItemFormSchema>({ resolver: zodResolver(newItemSchema) });
  const { errors } = formState;

  const onSubmit: SubmitHandler<any> = (data) => console.log(data);

  return (
    <div className="max-w-4xl">
      <main className=" flex items-center justify-start w-full pr-4">
        <form
          // onSubmit={handleSubmit(handleSubmitForm)}
          onSubmit={handleSubmit(onSubmit)}
          className="w-full"
        >
          <div className="w-full flex flex-col gap-2">
            <div className="w-full flex items-center gap-4 mt-2">
              <div className="w-full">
                <label
                  className="text-sm w-full font-semibold pb-1 text-slate-400"
                  htmlFor="email"
                >
                  Email address
                </label>
                <input
                  className={borderStyle + " rounded-r-none"}
                  placeholder="example@gmail.com"
                  {...register("email")}
                />
                {errors?.email && (
                  <p className="text-sm text-rose-400">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="w-full flex items-end justify-end mt-4">
            <input
              type="submit"
              value="Save Changes"
              className={
                "px-4 py-[6px] rounded-lg font-semibold text-[16px] text-white bg-blue-400 hover:bg-blue-500 duration-200 cursor-pointer flex gap-1 items-center"
              }
            />
          </div>
        </form>
      </main>
    </div>
  );
};
export default EmailUpdate;
