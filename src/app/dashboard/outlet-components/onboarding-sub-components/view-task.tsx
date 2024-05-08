/*
|-----------------------------------------
| setting up ViewTask for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

import { RxCross1 } from "react-icons/rx";

import { webAppH2Light } from "@/components/common/style";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { initRenderDataType } from "./board-components";

const ViewTask = ({
  addNew,
  handleCancel,
}: {
  addNew: initRenderDataType;
  handleCancel: () => void;
}) => {
  return (
    <div className="w-full flex items-center justify-center min-h-[50vh]">
      <div className="border border-slate-300 rounded-lg bg-white">
        <div className="w-full relative min-h-[180px] duration-200 rounded-lg p-4">
          <div className="w-full flex items-center justify-between pr-1 mr-2">
            <p className={webAppH2Light + " text-xl text-slate-600"}>
              {addNew.currentTitle}
            </p>
            <div className="cursor-pointer" onClick={handleCancel}>
              <RxCross1 />
            </div>
          </div>
          <p className="text-slate-500">{addNew.currentDescription}</p>
          <div className="w-full flex items-center gap-2">
            <div className="bg-orange-100 rounded-lg mt-6 px-4 flex items-center justify-center h-[80px] w-[80px] py-1 ">
              Image
            </div>
            <div className="bg-orange-100 rounded-lg mt-6 px-4 flex items-center justify-center h-[80px] w-[80px] py-1 ">
              Image
            </div>
          </div>
          <div className="absolute bottom-2 right-2">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ViewTask;
