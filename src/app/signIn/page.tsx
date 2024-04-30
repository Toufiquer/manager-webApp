/*
|-----------------------------------------
| setting up Page for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, April, 2024
|-----------------------------------------
*/
"use client";

import { z } from "zod";
import Link from "next/link";
import { useState } from "react";
import { FaApple } from "react-icons/fa";
import { GrGoogle } from "react-icons/gr";
import { useForm } from "react-hook-form";
import { FaFacebook } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";

import { zodResolver } from "@hookform/resolvers/zod";

const BorderStyle =
  "w-full rounded border border-gray-300 px-3 py-2 leading-tight text-gray-800 focus:border-slate-500 focus:outline-none";

export const signUPSchema = z.object({
  fullName: z
    .string({
      invalid_type_error: "Name must be a string",
      required_error: "Name is required",
    })
    .min(3, "Minimum 3 characters")
    .max(40, "Maximum 40 characters")
    .trim(),
  email: z
    .string({
      invalid_type_error: "Invalid email address",
      required_error: "Email is required",
    })
    .email()
    .trim(),
  password: z
    .string({
      invalid_type_error: "Password must be a string",
      required_error: "Password is required",
    })
    .min(8, "Minimum 8 characters"),
  confirmPassword: z
    .string({
      invalid_type_error: "Confirm password must be a string",
      required_error: "Confirm password is required",
    })
    .min(8, "Minimum 8 characters"),
});
type signUPType = z.infer<typeof signUPSchema>;

const Page = () => {
  const {
    reset,
    register,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm<signUPType>({ resolver: zodResolver(signUPSchema) });

  const [passType, setPassType] = useState({
    confirmPass: "password",
    password: "password",
  });
  const handlePassType = (key: string) => {
    if (key === "password")
      setPassType({
        ...passType,
        password: passType.password === "password" ? "text" : "password",
      });
    if (key === "confirmPass")
      setPassType({
        ...passType,
        confirmPass: passType.confirmPass === "password" ? "text" : "password",
      });
  };
  const onSubmit = handleSubmit((data) => {
    if (data.confirmPassword !== data.password) {
      setError("confirmPassword", {
        type: "manual",
        message: "Password mush be same",
      });
    } else {
      console.log(data);
      reset();
    }
  });

  return (
    <main className="min-h-screen w-full md:flex flex-col bg-blue-50">
      <div className="p-4 w-full flex items-center"></div>
      <div className="p-4 w-full flex flex-col items-center ">
        <div className="p-4 w-full max-w-4xl bg-white flex flex-col items-center ">
          <div className="h2 text-slate-700 font-semibold text-2xl">
            Sign Up
          </div>
          <form onSubmit={onSubmit}>
            <div className="w-full flex flex-col gap-2 min-w-[400px]">
              <div className="flex flex-col mt-4">
                <label
                  className="text-sm font-semibold text-slate-500"
                  htmlFor="fullName"
                >
                  Full Name
                </label>
                <input
                  className={BorderStyle}
                  {...register("fullName")}
                  placeholder="name"
                />
                {errors?.fullName && (
                  <p className="text-sm text-rose-400">
                    {errors.fullName.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col mt-4">
                <label
                  className="text-sm font-semibold text-slate-500"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className={BorderStyle}
                  {...register("email")}
                  placeholder="example@gmail.com"
                />
                {errors?.email && (
                  <p className="text-sm text-rose-400">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col mt-4 relative">
                <label
                  className="text-sm font-semibold text-slate-500"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  type={passType.password}
                  className={BorderStyle}
                  {...register("password")}
                  placeholder="******"
                />
                <div
                  className="absolute top-[30px] right-2 cursor-pointer"
                  onClick={() => handlePassType("password")}
                >
                  {passType.password === "password" ? (
                    <IoEyeOutline />
                  ) : (
                    <FaRegEyeSlash />
                  )}
                </div>
                {errors?.password && (
                  <p className="text-sm text-rose-400">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col mt-4 relative">
                <label
                  className="text-sm font-semibold text-slate-500"
                  htmlFor="confirmPassword"
                >
                  Confirm Password
                </label>
                <input
                  className={BorderStyle}
                  {...register("confirmPassword")}
                  placeholder="******"
                  type={passType.confirmPass}
                />
                <div
                  className="absolute top-[30px] right-2 cursor-pointer"
                  onClick={() => handlePassType("confirmPass")}
                >
                  {passType.confirmPass === "password" ? (
                    <IoEyeOutline />
                  ) : (
                    <FaRegEyeSlash />
                  )}
                </div>
                {errors?.confirmPassword && (
                  <p className="text-sm text-rose-400">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
            </div>

            <input
              value="Sign Up"
              type="submit"
              className="w-full font-semibold mt-8 bg-blue-300 hover:bg-blue-400 cursor-pointer text-white hover:text-white rounded-lg py-2"
            />
          </form>
          <div className="p-4 w-full flex flex-col mt-6 items-center justify-center">
            <div className="w-full flex gap-4 items-center justify-center text-slate-500">
              Already have an account?
              <Link
                href="/signUp"
                className="text-blue-400 cursor-pointer hover:underline font-semibold"
              >
                Sign Up
              </Link>
            </div>
          </div>
          <div className="p-1 w-full flex flex-col items-center justify-center">
            <div className="w-full flex gap-2 text-slate-500 items-center justify-center">
              Or continue with
              <div className="flex items-center justify-center gap-4 pl-2">
                <span className="text-blue-400 hover:text-blue-600 cursor-pointer">
                  <GrGoogle className="w-5 h-8" />
                </span>
                <span className="text-blue-400 hover:text-blue-600 cursor-pointer">
                  <FaFacebook className="w-5 h-8" />
                </span>
                <span className="text-blue-400 hover:text-blue-600 cursor-pointer">
                  <FaApple className="w-5 h-8" />
                </span>
              </div>
            </div>
          </div>
          <div className="p-4 w-full flex flex-col items-center justify-center">
            <Link
              href="/"
              className="hover:underline text-blue-400 w-full flex gap-1 font-semibold items-center justify-center"
            >
              <span>Skip New</span>
              <FaChevronRight />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Page;
