/*
|-----------------------------------------
| setting up PersonalForm for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

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
    <div>
      <main className="bg-slate-800 text-white flex items-center justify-center w-full h-screen">
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
                {...register("address")}
                placeholder="Title"
              />
              {errors?.address && (
                <p className="text-sm text-rose-400">
                  {errors.address.message}
                </p>
              )}
            </div>
          </div>

          <input type="submit" className={" font-[400] text-[16px] py-[4px]"} />
        </form>
      </main>
    </div>
  );
};
export default PersonalForm;
