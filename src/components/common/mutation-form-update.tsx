/*
|-----------------------------------------
| setting up MutationFormUpdate for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, April, 2024
|-----------------------------------------
*/
import { z } from "zod";
import { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { RxCross1, RxCross2 } from "react-icons/rx";
import { useForm, useFieldArray, Controller } from "react-hook-form";

import { Switch } from "@/components/ui/switch";
import { useGlobalStore } from "@/lib/global-store";
import { zodResolver } from "@hookform/resolvers/zod";
import { ScrollArea } from "@/components/ui/scroll-area";
import { buttonStyle } from "./style";
import { toast } from "sonner";

export const BorderStyle =
  "w-full rounded border border-gray-300 px-3 py-2 leading-tight text-gray-800 focus:outline-none";

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

const MutationFormUpdate = () => {
  const {
    reset,
    control,
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<newItemFormSchema>({ resolver: zodResolver(zodItemSchema) });

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
                <input
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
                <input
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
                <input
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
                <input placeholder="0.0" className={BorderStyle} {...field} />
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
    reset();
  });
  let renderUIData = (
    <div className="">
      <form onSubmit={onSubmit}>
        <ScrollArea className="h-[80vh] w-full pr-2">
          <div className="w-full flex flex-col gap-2">
            <div className="flex flex-col mt-4">
              <label
                className="text-sm font-semibold text-slate-500"
                htmlFor="item"
              >
                Item Name
              </label>
              <input
                className={BorderStyle}
                {...register("item")}
                placeholder="name"
              />
              {errors?.item && (
                <p className="text-sm text-rose-400">{errors.item.message}</p>
              )}
            </div>
            <div className="flex flex-col mt-4">
              <label
                className="text-sm font-semibold text-slate-500"
                htmlFor="price"
              >
                Item Price
              </label>
              <input
                className={BorderStyle}
                {...register("price")}
                placeholder="Price"
              />
              {errors?.price && (
                <p className="text-sm text-rose-400">{errors.price.message}</p>
              )}
            </div>
            {!mutationData?.info && !isAddInfo && (
              <div className="w-full flex justify-end mt-4 ">
                <div
                  onClick={() => setIsAddInfo(true)}
                  className="text-slate-800 text-sm border border-slate-500 rounded-lg p-1 px-3 cursor-pointer"
                >
                  Add info
                </div>
              </div>
            )}
            {mutationData?.info ||
              (isAddInfo && (
                <div className="flex flex-col mt-4 ">
                  <div className="w-full flex items-center justify-between">
                    <label
                      className="text-sm w-full font-semibold text-slate-500"
                      htmlFor="info"
                    >
                      Item Info
                    </label>
                    <div className="w-full flex justify-end">
                      <div
                        className="cursor-pointer border"
                        onClick={() => {
                          setMutationData("");
                          setIsAddInfo(false);
                        }}
                      >
                        <RxCross1 />
                      </div>
                    </div>
                  </div>

                  <textarea
                    className={BorderStyle}
                    rows="4"
                    {...register("info")}
                    placeholder="Info"
                  />
                  {errors?.info && (
                    <p className="text-sm text-rose-400">
                      {errors.info.message}
                    </p>
                  )}
                </div>
              ))}

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
                    {...{ control, index, field }}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12" />
        </ScrollArea>
        <input type="submit" className={buttonStyle} />
      </form>
    </div>
  );
  return renderUIData;
};
export default MutationFormUpdate;
