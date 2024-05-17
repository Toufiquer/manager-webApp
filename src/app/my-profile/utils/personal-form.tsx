/*
|-----------------------------------------
| setting up PersonalForm for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { borderStyle } from "@/components/common/style";
const email = z.string().email({
  message: "Invalid email format. Please enter a valid email address.",
});
const mobileNumber = z.string().regex(/^\+(?:[0-9] ?){6,14}$/, {
  message:
    "Invalid phone number. Please enter a valid mobile number in international format (+ddd nnnnnnnnnn).",
});
const nationality = z.enum(["UK", "USA", "Bangladesh"], {
  message:
    "Invalid nationality. Please choose a valid nationality from the list (UK, USA, Bangladesh).",
});
const gender = z.enum(["Male", "Female", "Others"], {
  message:
    "Invalid gender. Please choose a valid gender option (Male, Female, Others).",
});
export const newItemSchema = z.object({
  firstName: z
    .string({
      invalid_type_error: "Item must be a string",
      required_error: "Item is required",
    })
    .min(3, "Minimum 3 characters")
    .max(120, "Maximum 120 characters")
    .trim(),
  lastName: z
    .string({
      invalid_type_error: "Item must be a string",
      required_error: "Item is required",
    })
    .min(3, "Minimum 3 characters")
    .max(120, "Maximum 120 characters")
    .trim(),
  email,
  mobileNumber,
  nationality,
  gender,
  address: z
    .string({
      invalid_type_error: "Item must be a string",
      required_error: "Item is required",
    })
    .min(3, "Minimum 3 characters")
    .max(320, "Maximum320 characters")
    .trim(),
});
type newItemFormSchema = z.infer<typeof newItemSchema>;
const PersonalForm = () => {
  const { reset, register, setValue, handleSubmit, formState } =
    useForm<newItemFormSchema>({ resolver: zodResolver(newItemSchema) });
  const { errors } = formState;
  const onSubmit = handleSubmit((data) => console.log(data));
  return (
    <div className="max-w-4xl">
      <main className=" flex items-center justify-start w-full pr-4">
        <form onSubmit={onSubmit} className="w-full">
          <div className="w-full flex flex-col gap-2">
            <div className="flex flex-col mt-4 w-full">
              <label
                className="text-sm w-full font-semibold text-slate-400"
                htmlFor="firstName"
              >
                Full Name
              </label>
              <div className="w-full flex items-center">
                <div className="w-full">
                  <input
                    className={borderStyle + " rounded-r-none"}
                    {...register("firstName")}
                    placeholder="First Name"
                  />
                  {errors?.firstName && (
                    <p className="text-sm text-rose-400">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>
                <div className="w-full">
                  <input
                    className={borderStyle + " rounded-l-none"}
                    {...register("lastName")}
                    placeholder="First Name"
                  />
                  {errors?.lastName && (
                    <p className="text-sm text-rose-400">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex items-end justify-end mt-4">
            <input
              type="submit"
              className={
                "px-4 py-[6px] rounded-lg font-semibold text-[16px] text-white bg-blue-400 hover:to-blue-500 duration-200 cursor-pointer flex gap-1 items-center"
              }
            />
          </div>
        </form>
      </main>
    </div>
  );
};
export default PersonalForm;
