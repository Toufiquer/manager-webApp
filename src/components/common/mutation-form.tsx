/*
|-----------------------------------------
| setting up MutationForm for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, April, 2024
|-----------------------------------------
*/
import { ScrollArea } from "../ui/scroll-area";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const zodItemSchema = z.object({
  item: z
    .string({
      invalid_type_error: "Item must be a string",
      required_error: "Item is required",
    })
    .min(3, "Minimum 3 characters")
    .max(20, "Maximum 20 characters")
    .trim(),

  price: z
    .string()
    .refine((value) => !isNaN(parseFloat(value)), {
      message: "Please provide a number",
    })
    .optional(),

  info: z
    .string({
      invalid_type_error: "Info must be a string",
    })
    .min(3, "Minimum 3 characters")
    .max(120, "Maximum 120 characters")
    .trim()
    .optional(),

  option: z
    .object({
      name: z
        .string({
          invalid_type_error: "Name must be a string",
          required_error: "Name is required",
        })
        .min(3, "Minimum 3 characters")
        .max(20, "Maximum 20 characters")
        .trim(),

      optionFor: z
        .string({
          invalid_type_error: "OptionFor must be a string",
        })
        .min(3, "Minimum 3 characters")
        .max(60, "Maximum 60 characters")
        .trim()
        .optional(),

      required: z.boolean().optional(),

      options: z
        .object({
          name: z
            .string({
              invalid_type_error: "Name must be a string",
            })
            .min(3, "Minimum 3 characters")
            .max(20, "Maximum 20 characters")
            .trim(),
          price: z
            .string()
            .refine((value) => !isNaN(parseFloat(value)), {
              message: "Please provide a number",
            })
            .optional(),
        })
        .array()
        .optional(),
    })
    .array()
    .optional(),
});
type newItemFormSchema = z.infer<typeof zodItemSchema>;

const MutationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<newItemFormSchema>({ resolver: zodResolver(zodItemSchema) });
  const onSubmit = handleSubmit((data) => console.log(data));
  let renderUIData = (
    <ScrollArea className="h-[92vh] w-full">
      <div className="min-h-[92vh] h-full w-full flex items-start justify-start pt-4 flex-col">
        <form onSubmit={onSubmit}>
          <input {...register("info")} placeholder="Info" />
          {errors?.info && <p>{errors.info.message}</p>}

          <input {...register("item")} placeholder="Item" />

          <input type="submit" />
        </form>
      </div>
      <div className="mt-12" />
    </ScrollArea>
  );
  return renderUIData;
};
export default MutationForm;
