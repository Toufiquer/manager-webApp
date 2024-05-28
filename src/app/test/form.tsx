"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";

import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { FiPlus } from "react-icons/fi";

const FormSchema = z.object({
  item: z
    .string({
      invalid_type_error: "Item must be a string",
      required_error: "Item is required",
    })
    .min(3, "Minimum 3 characters")
    .max(40, "Maximum 40 characters")
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
        .max(40, "Maximum 40 characters")
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
            .max(40, "Maximum 40 characters")
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

const InputFormComponent = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const { fields, append, remove, update } = useFieldArray({
    control: form.control,
    name: "option",
  });

  const OptionComponents = ({ control, index, field }) => {
      return (
        <>
          <FormField
            control={control}
            name={`option.${index}.name`}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Option name</FormLabel>
                <FormControl>
                  <Input placeholder="Option name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name={`option.${index}.optionFor`}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Option for</FormLabel>
                <FormControl>
                  <Input placeholder="Option for" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name={`option.${index}.required`}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Required</FormLabel>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </>
      );
  };
  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast("You submitted the following values:");
    console.log("data : ", data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="item"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Item name</FormLabel>
              <FormControl>
                <Input placeholder="Fish food" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input placeholder="5" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="info"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Info</FormLabel>
              <FormControl>
                <Input placeholder="Fish fry" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-col mt-4">
          <div className="my-4 flex w-full flex-row items-center justify-between ">
            <p className="text-sm text-gray-900">Option</p>
            <div
              onClick={() =>
                append({
                  name: "",
                  options: [],
                })
              }
            >
              <div className="flex items-center cursor-pointer justify-center">
                <FiPlus className="text-blue-400" />
              </div>
            </div>
          </div>
          <div className="mt-2" />
          {fields.map((field, index) => (
            <div key={field.id}>
              <OptionComponents
                key={field.id}
                {...{ control: form.control, index, field }}
              />
            </div>
          ))}
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};
export { InputFormComponent };