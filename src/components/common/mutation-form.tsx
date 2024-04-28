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
     register,
     handleSubmit,
     formState: { errors },
   } = useForm<newItemFormSchema>({ resolver: zodResolver(zodItemSchema) });
   const onSubmit = handleSubmit((data) => console.log(data));
   let renderUIData = (
     <ScrollArea className="h-[92vh] w-full">
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
