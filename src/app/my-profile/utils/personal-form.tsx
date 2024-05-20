/*
|-----------------------------------------
| setting up PersonalForm for the App
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
const mobileNumber = z.string().regex(/^\+(?:[0-9] ?){6,14}$/, {
  message:
    "Invalid phone number. Please enter a valid mobile number in international format (+ddd nnnnnnnnnn).",
});
const country = ["UK", "USA", "Bangladesh"];
const nationality = z.enum(["UK", "USA", "Bangladesh"], {
  message:
    "Invalid nationality. Please choose a valid nationality from the list (UK, USA, Bangladesh).",
});
enum Gender {
  Male = "Male",
  Female = "Female",
  Others = "Others",
}
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
  gender,
  mobileNumber,
  nationality,
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
  const [genderValue, setGenderValue] = useState(" ");
  const { reset, register, setValue, handleSubmit, formState, getValues } =
    useForm<newItemFormSchema>({ resolver: zodResolver(newItemSchema) });
  const { errors } = formState;
  const handleSubmitForm = (data) => {
    console.log("data");
    console.log(data);
  };
  const onSubmit: SubmitHandler<any> = (data) => console.log(data);
  const handleGender = (data: (typeof Gender)[keyof typeof Gender]) => {
    if (data !== genderValue) {
      setGenderValue(data);
      setValue("gender", data);
    } else {
      setGenderValue("");
      setValue("gender", "");
    }
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
                    placeholder="First Name"
                    {...register("firstName")}
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
                    placeholder="First Name"
                    {...register("lastName")}
                  />
                  {errors?.lastName && (
                    <p className="text-sm text-rose-400">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
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
              <div className="w-full">
                <label
                  className="text-sm w-full font-semibold pb-1 text-slate-400"
                  htmlFor="mobileNumber"
                >
                  Mobile number
                </label>
                <input
                  className={borderStyle + " rounded-r-none"}
                  placeholder="222 555 666"
                  {...register("mobileNumber")}
                />
                {errors?.mobileNumber && (
                  <p className="text-sm text-rose-400">
                    {errors.mobileNumber.message}
                  </p>
                )}
              </div>
            </div>
            <div className="w-full flex items-center gap-4 mt-2">
              <div className="w-full">
                <label
                  className="text-sm w-full font-semibold pb-1 text-slate-400"
                  htmlFor="nationality"
                >
                  Nationality
                </label>
                <select
                  className={borderStyle + " rounded-r-none"}
                  {...register("nationality")}
                >
                  {country.map((curr) => (
                    <option
                      className="py-2 text-slate-500"
                      key={curr}
                      value={curr}
                    >
                      {curr}
                    </option>
                  ))}
                </select>
                {errors?.nationality && (
                  <p className="text-sm text-rose-400">
                    {errors.nationality.message}
                  </p>
                )}
              </div>
              <div className="w-full">
                <label
                  className="text-sm w-full font-semibold pb-1 text-slate-400"
                  htmlFor="gender"
                >
                  Select Gender
                </label>
                <div className="w-full flex items-center justify-center">
                  <div
                    className={
                      borderStyle +
                      " rounded-none text-slate-500 flex items-center justify-start gap-4"
                    }
                  >
                    <Checkbox
                      checked={genderValue === Gender.Male}
                      onClick={() => handleGender(Gender.Male)}
                    />
                    <p>Male</p>
                  </div>
                  <div
                    className={
                      borderStyle +
                      " rounded-none text-slate-500 flex items-center justify-start gap-4"
                    }
                  >
                    <Checkbox
                      checked={genderValue === Gender.Female}
                      onClick={() => handleGender(Gender.Female)}
                    />
                    <p>Female</p>
                  </div>
                  <div
                    className={
                      borderStyle +
                      " rounded-none text-slate-500 flex items-center justify-start gap-4"
                    }
                  >
                    <Checkbox
                      checked={genderValue === Gender.Others}
                      onClick={() => handleGender(Gender.Others)}
                    />
                    <p>Others</p>
                  </div>
                </div>
                {errors?.gender && (
                  <p className="text-sm text-rose-400">
                    {errors.gender.message}
                  </p>
                )}
              </div>
            </div>
            <div className="w-full">
              <label
                className="text-sm w-full font-semibold pb-1 text-slate-400"
                htmlFor="mobileNumber"
              >
                address
              </label>
              <textarea
                rows={6}
                className={borderStyle + " rounded-r-none"}
                placeholder="Address"
                {...register("address")}
              />
              {errors?.address && (
                <p className="text-sm text-rose-400">
                  {errors.address.message}
                </p>
              )}
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
export default PersonalForm;
