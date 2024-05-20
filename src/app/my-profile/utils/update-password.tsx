/*
|-----------------------------------------
| setting up UpdatePassword for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

"use client";

import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { borderStyle } from "@/components/common/style";
import { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

export const newItemSchema = z
  .object({
    newPassword: z
      .string({
        invalid_type_error: "password must be a string",
        required_error: "password is required",
      })
      .min(3, "Minimum 3 characters")
      .max(120, "Maximum 120 characters")
      .trim(),
    confirmPassword: z
      .string({
        invalid_type_error: "password must be a string",
        required_error: "password is required",
      })
      .min(3, "Minimum 3 characters")
      .max(120, "Maximum 120 characters")
      .trim(),
    currentPassword: z
      .string({
        invalid_type_error: "password must be a string",
        required_error: "password is required",
      })
      .min(3, "Minimum 3 characters")
      .max(120, "Maximum 120 characters")
      .trim(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });
type newItemFormSchema = z.infer<typeof newItemSchema>;

const PasswordField = ({ errors, title, htmlFor, onChangeValue }) => {
  const [passType, setPassType] = useState("password");
  const handleValueChange = (value) => {
    onChangeValue(htmlFor, value.target.value);
  };
  return (
    <div className="w-full relative">
      <div
        onClick={() =>
          setPassType((pre) => (pre === "password" ? "text" : "password"))
        }
        className="absolute top-[34px] right-[10px] cursor-pointer"
      >
        {passType === "text" ? <IoEyeOffOutline /> : <IoEyeOutline />}
      </div>
      <label
        className="text-sm w-full font-semibold pb-1 text-slate-400"
        htmlFor={htmlFor}
      >
        {title}
      </label>
      <input
        onChange={handleValueChange}
        className={borderStyle + " rounded-r-none"}
        placeholder="******"
        type={passType}
      />
      {errors[htmlFor] && (
        <p className="text-sm text-rose-400">{errors[htmlFor].message}</p>
      )}
    </div>
  );
};

const UpdatePassword = () => {
  const { reset, register, setValue, handleSubmit, formState, getValues } =
    useForm<newItemFormSchema>({ resolver: zodResolver(newItemSchema) });
  const { errors } = formState;

  const onSubmit: SubmitHandler<any> = (data) => console.log(data);
  const onChangeValue = (field, value) => {
    console.log(field, value);
    setValue(field, value);
    console.log(getValues(field));
  };
  return (
    <div className="max-w-4xl">
      <main className=" flex items-center justify-start w-full pr-4">
        <form
          // onSubmit={handleSubmit(handleSubmitForm)}
          onSubmit={handleSubmit(onSubmit)}
          className="w-full"
        >
          <div className="w-full flex flex-col gap-2">
            <div className="w-full flex flex-col items-center gap-4 mt-2">
              <PasswordField
                errors={errors}
                onChangeValue={onChangeValue}
                htmlFor="currentPassword"
                title="Current password"
              />
              <PasswordField
                errors={errors}
                onChangeValue={onChangeValue}
                htmlFor="newPassword"
                title="New password"
              />
              <PasswordField
                errors={errors}
                onChangeValue={onChangeValue}
                htmlFor="confirmPassword"
                title="Confirm password"
              />
              {/* <div className="w-full">
                <label
                  className="text-sm w-full font-semibold pb-1 text-slate-400"
                  htmlFor="currentPassword"
                >
                  Current password
                </label>
                <input
                  className={borderStyle + " rounded-r-none"}
                  placeholder="******"
                  type="password"
                  {...register("currentPassword")}
                />
                {errors?.currentPassword && (
                  <p className="text-sm text-rose-400">
                    {errors.currentPassword.message}
                  </p>
                )}
              </div>
              <div className="w-full">
                <label
                  className="text-sm w-full font-semibold pb-1 text-slate-400"
                  htmlFor="password"
                >
                  New password
                </label>
                <input
                  className={borderStyle + " rounded-r-none"}
                  placeholder="******"
                  type="password"
                  {...register("password")}
                />
                {errors?.password && (
                  <p className="text-sm text-rose-400">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <div className="w-full">
                <label
                  className="text-sm w-full font-semibold pb-1 text-slate-400"
                  htmlFor="confirmPassword"
                >
                  Confirm password
                </label>
                <input
                  className={borderStyle + " rounded-r-none"}
                  placeholder="******"
                  type="password"
                  {...register("confirmPassword")}
                />
                {errors?.confirmPassword && (
                  <p className="text-sm text-rose-400">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div> */}
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
export default UpdatePassword;
