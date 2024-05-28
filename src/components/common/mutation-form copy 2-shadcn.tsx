"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";

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
import { useGlobalStore } from "@/lib/global-store";
import { useState } from "react";

export const zodItemSchema = z.object({
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
export type newItemFormSchema = z.infer<typeof zodItemSchema>;
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const MutationForm = () => {
  // 1. Define your form.
  const form = useForm<newItemFormSchema>({
    resolver: zodResolver(zodItemSchema),
  });

  const apiData = useGlobalStore((store) => store.apiData);
  const setApiData = useGlobalStore((store) => store.setApiData);
  const mutationData = useGlobalStore((store) => store.mutationData);
  const setMutationData = useGlobalStore((store) => store.setMutationData);
  const [isAddInfo, setIsAddInfo] = useState(false);
  const { fields, append, remove, update } = useFieldArray({
    control,
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
        className="relative mb-4 rounded-lg bg-white"
      >
        <div className="absolute cursor-pointer right-[6px] top-[6px] items-end justify-start">
          <div onClick={() => remove(index)}>
            <RxCross2 className="text-rose-400" />
          </div>
        </div>
        <div className="w-full">
          <p className="mb-1 mt-2 text-sm text-gray-700">Option Name</p>
          <Controller
            control={control}
            name={`option.${index}.name`}
            render={({ field }) => (
              <div>
                <Input
                  placeholder="Option name"
                  className={BorderStyle}
                  {...field}
                />
              </div>
            )}
          />
          {errors.option && errors.option[index]?.name && (
            <p className="text-rose-500">
              {errors.option[index]?.name?.message}{" "}
            </p>
          )}
          <p className="mb-1 mt-2 text-sm text-gray-700">Option For</p>
          <Controller
            control={control}
            name={`option.${index}.optionFor`}
            render={({ field }) => (
              <div>
                <Input
                  placeholder="Option For"
                  className={BorderStyle}
                  {...field}
                />
              </div>
            )}
          />
          {errors.option && errors.option[index]?.optionFor && (
            <p className="text-rose-500">
              {errors.option[index]?.optionFor?.message}{" "}
            </p>
          )}
        </div>

        <div className="my-4 flex flex-row items-center justify-between">
          <p className="text-gray-900">Required</p>
          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <Switch checked={value} onCheckedChange={onChange} />
            )}
            name={`option.${index}.required`}
            defaultValue={true}
          />
        </div>

        <div className="flex w-full flex-row items-center justify-between">
          <p className="font-extrabold text-gray-900">Options</p>
          <div
            onClick={() => optionsAppend({ name: "" })}
            className="flex h-[30px] cursor-pointer items-center justify-center "
          >
            <FiPlus className="text-blue-400" />
          </div>
        </div>
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
        <div className="w-[60%]">
          <Controller
            control={control}
            name={`option[${parentIdx}].options.${innerIdx}.name`}
            render={({ field }) => (
              <div>
                <Input
                  placeholder="Option name"
                  className={BorderStyle}
                  {...field}
                />
                {errors.option &&
                  errors.option[parentIdx]?.options?.[innerIdx]?.name && (
                    <p className="text-rose-500">
                      {
                        errors.option[parentIdx]?.options?.[innerIdx]?.name
                          ?.message
                      }
                    </p>
                  )}
              </div>
            )}
          />
        </div>

        <div className="w-[30%]">
          <Controller
            control={control}
            name={`option[${parentIdx}].options.${innerIdx}.price`}
            render={({ field }) => (
              <div>
                <Input placeholder="0.0" className={BorderStyle} {...field} />
              </div>
            )}
          />
          {errors.option &&
            errors.option[parentIdx]?.options?.[innerIdx]?.price && (
              <p className="text-rose-500">
                {errors.option[parentIdx]?.options?.[innerIdx]?.price?.message}{" "}
              </p>
            )}
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
    reset();
    if (mutationData.type === "update") {
      setValue("item", mutationData?.item || "");
      setValue("price", mutationData?.price || "");
      setValue("info", mutationData?.info || "");
      mutationData?.option &&
        mutationData.option.map((i, idx) => update(idx, i));
    }
  }, []);
  const onSubmit = handleSubmit((data) => {
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
      setApiData(result);
      setMutationData("");
      toast("Successfully updated");
    } else {
      let result = [];

      result = apiData.map((curr) => {
        let i = { ...curr };
        i.data.lst.push(data);
        return i;
      });

      setApiData(result);
      setMutationData("");
      toast("Successfully add");
    }
    form.reset();
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};
export default MutationForm;
