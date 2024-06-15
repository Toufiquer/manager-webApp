/*
|-----------------------------------------
| setting up MutationForm for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

"use client";

import { z } from "zod";
import { toast } from "sonner";
import { FiPlus } from "react-icons/fi";
import { useEffect, useState } from "react";
import { RxCross1, RxCross2 } from "react-icons/rx";
import { useFieldArray, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";

import { useGlobalStore } from "@/lib/global-store";

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
    .max(320, "Maximum 320 characters")
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

const MutationForm = () => {
  const apiData = useGlobalStore((store) => store.apiData);
  const setApiData = useGlobalStore((store) => store.setApiData);
  const mutationData = useGlobalStore((store) => store.mutationData);
  const setMutationData = useGlobalStore((store) => store.setMutationData);
  const [isAddInfo, setIsAddInfo] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const { fields, append, remove, update } = useFieldArray({
    control: form.control,
    name: "option",
  });

  const OptionComponents = ({ control, index, field }) => {
    const {
      fields: optionsFields,
      append: optionsAppend,
      remove: optionsRemove,
    } = useFieldArray({
      control,
      name: `option[${index}].options`,
    });
    return (
      <div
        key={field.name + index}
        className="relative my-4 rounded-lg bg-white"
      >
        <FormField
          control={control}
          name={`option.${index}.name`}
          render={({ field }) => (
            <FormItem className="pb-3">
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
            <FormItem className="pb-3">
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
            <FormItem className="my-4 flex flex-row items-center justify-between">
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
        <FormLabel className="my-4 flex w-full flex-row items-center justify-between cursor-pointer">
          Options{" "}
          <FiPlus
            onClick={() => optionsAppend({ name: "" })}
            className="text-blue-400"
          />
        </FormLabel>

        <div className="mt-3">
          {optionsFields.map((field, innerIdx) => (
            <div key={field.id}>
              <OptionsComponents
                key={field.id}
                {...{
                  control,
                  innerIdx,
                  field,
                  optionsRemove,
                  parentIdx: index,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    );
  };

  const OptionsComponents = ({
    control,
    innerIdx,
    field,
    optionsRemove,
    parentIdx,
  }) => {
    return (
      <div
        key={field.name + innerIdx}
        className="mb-2 flex w-full flex-row justify-between"
      >
        <div className="flex flex-col w-full mt-2">
          <FormField
            control={control}
            name={`option[${parentIdx}].options.${innerIdx}.name`}
            render={({ field }) => (
              <FormItem className="mb-3">
                <FormLabel>Options name</FormLabel>
                <FormControl>
                  <Input placeholder="Option name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name={`option[${parentIdx}].options.${innerIdx}.price`}
            render={({ field }) => (
              <FormItem className="pb-3">
                <FormLabel>Options price</FormLabel>
                <FormControl>
                  <Input placeholder="Options price" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div
          onClick={() => optionsRemove(innerIdx)}
          className="flex h-[40px] cursor-pointer items-center justify-center "
        >
          <RxCross2 className="text-rose-400" />
        </div>
      </div>
    );
  };
  useEffect(() => {
    form.reset();
    if (mutationData.type === "update") {
      form.setValue("item", mutationData?.item || "");
      form.setValue("price", mutationData?.price || "");
      form.setValue("info", mutationData?.info || "");
      mutationData?.option &&
        mutationData.option.map((i, idx) => update(idx, i));
    }
  }, []);
  function onSubmit(data: z.infer<typeof FormSchema>) {
    if (mutationData.type === "update") {
      let result = [];
      result = apiData.map((curr) => {
        let i = { ...curr };
        i.data.lst = i.data.lst.map((item) => {
          let innerItem = { ...item };
          if (innerItem.item === mutationData.item) {
            innerItem = data;
          }
          return innerItem;
        });
        return i;
      });
      
      // call api for update
      setApiData(result);
      setMutationData("");
      toast("Successfully updated");
    } else {
      let result = [];

      result = apiData.map((curr) => {
        let i = { ...curr };
        if (curr.name === mutationData.name) {
          i.data.lst.push(data);
        }
        return i;
      });

      // call api for add
      setApiData(result);
      setMutationData("");
      toast("Successfully add");
    }
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <ScrollArea className="h-[80vh] w-full pr-2">
          <div className="px-2">
            <FormField
              control={form.control}
              name="item"
              render={({ field }) => (
                <FormItem className="pb-3">
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
                <FormItem className="pb-3">
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input placeholder="5" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {!mutationData?.info && !isAddInfo ? (
              <div className="w-full flex justify-end mt-4 ">
                <div
                  onClick={() => setIsAddInfo(true)}
                  className="text-slate-800 text-sm border border-slate-500 rounded-lg p-1 px-3 cursor-pointer"
                >
                  Add info
                </div>
              </div>
            ) : (
              <div className="w-full flex items-center justify-between">
                <FormField
                  control={form.control}
                  name="info"
                  render={({ field }) => (
                    <FormItem className="pb-3 w-full">
                      <div className="w-full flex items-center justify-between">
                        <FormLabel>Info</FormLabel>
                        <div className="w-full flex justify-end">
                          <RxCross1
                            className="cursor-pointer"
                            onClick={() => {
                              setMutationData("");
                              setIsAddInfo(false);
                            }}
                          />
                        </div>
                      </div>
                      <FormControl>
                        <Textarea placeholder="Fish fry" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}
            <FormLabel className="my-4 flex w-full flex-row items-center justify-between cursor-pointer">
              Option
              <FiPlus
                onClick={() =>
                  append({
                    name: "",
                    options: [],
                  })
                }
                className="text-blue-400"
              />
            </FormLabel>
            <div className="flex flex-col mt-4">
              {fields.map((field, index) => (
                <div key={field.id}>
                  <OptionComponents
                    key={field.id}
                    {...{ control: form.control, index, field }}
                  />
                </div>
              ))}
            </div>
          </div>
        </ScrollArea>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};
export default MutationForm;
