/*
|-----------------------------------------
| setting up MutationForm for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, April, 2024
|-----------------------------------------
*/
import { ScrollArea } from "../ui/scroll-area";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FiPlus } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { Switch } from "@/components/ui/switch";

const BorderStyle =
  "w-full rounded border border-gray-300 px-3 py-2 leading-tight text-gray-800";

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
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<newItemFormSchema>({ resolver: zodResolver(zodItemSchema) });
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
        className="relative mb-4 rounded-lg bg-white p-4"
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
            render={({ field }) => <Switch />}
            name={`option.${index}.required`}
            defaultValue={false}
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
  const onSubmit = handleSubmit((data) => console.log(data));
  let renderUIData = (
    <ScrollArea className="h-[92vh] w-full bg-blue-50">
      <div className="min-h-[92vh] h-full w-full flex items-center justify-center pt-4 flex-col">
        <form onSubmit={onSubmit}>
          <div className="w-full flex flex-col gap-2 min-w-[400px]">
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
            <div className="flex flex-col mt-4">
              <label
                className="text-sm font-semibold text-slate-500"
                htmlFor="info"
              >
                Item Info
              </label>
              <textarea
                className={BorderStyle}
                rows="4"
                {...register("info")}
                placeholder="Info"
              />
              {errors?.info && (
                <p className="text-sm text-rose-400">{errors.info.message}</p>
              )}
            </div>

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

          <input
            type="submit"
            className="w-full mt-8 bg-blue-300 hover:bg-blue-400 cursor-pointer text-white hover:text-white rounded-lg py-2"
          />
        </form>
      </div>
      <div className="mt-12" />
    </ScrollArea>
  );
  return renderUIData;
};
export default MutationForm;
