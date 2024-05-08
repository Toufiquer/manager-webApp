/*
|-----------------------------------------
| setting up ViewTask for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

import { FaTrash } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { FaRegEdit } from "react-icons/fa";
import { UseFormSetValue } from "react-hook-form";

import { useGlobalStore } from "@/lib/global-store";
import { webAppH2Light } from "@/components/common/style";

const ViewTask = ({
  handleCancel,
  setValue,
}: {
  handleCancel: () => void;
  setValue: UseFormSetValue<{
    title: string;
    description?: string | undefined;
  }>;
}) => {
  const onBoardingStatus = useGlobalStore((store) => store.onBoardingStatus);
  const setonBoardingStatus = useGlobalStore(
    (store) => store.setonBoardingStatus
  );
  const handleDeleteTask = () => {
    const result = { ...onBoardingStatus };
    result.isDeleteTask = true;
    setonBoardingStatus(result);
  };
  const handleEditTask = () => {
    const result = { ...onBoardingStatus };
    result.isUpdateTask = true;
    setValue("title", onBoardingStatus.currentTitle);
    setValue("description", onBoardingStatus.currentDescription);
    setonBoardingStatus(result);
  };
  return (
    <div className="w-full flex items-center justify-center min-h-[50vh]">
      <div className="border border-slate-300 rounded-lg bg-white min-w-[400px]">
        <div className="w-full relative min-h-[180px] duration-200 rounded-lg p-4">
          <div className="w-full flex items-center justify-between pr-1 mr-2">
            <p className={webAppH2Light + " text-xl text-slate-600"}>
              {onBoardingStatus.currentTitle}
            </p>
            <div className="cursor-pointer" onClick={handleCancel}>
              <RxCross1 />
            </div>
          </div>
          <p className="text-slate-500">
            {onBoardingStatus.currentDescription}
          </p>
          <div className="w-full flex items-center gap-2">
            <div className="bg-orange-100 rounded-lg mt-6 px-4 flex items-center justify-center h-[80px] w-[80px] py-1 ">
              Image
            </div>
            <div className="bg-orange-100 rounded-lg mt-6 px-4 flex items-center justify-center h-[80px] w-[80px] py-1 ">
              Image
            </div>
          </div>
          <div className="absolute bottom-2 right-2">
            <div className="flex flex-row items-center justify-between gap-2 pr-2 max-w-[90px]">
              <div onClick={handleEditTask}>
                <FaRegEdit className="cursor-pointer h-4 w-4 text-slate-500" />
              </div>
              <div onClick={handleDeleteTask}>
                <FaTrash className="text-red-300 hover:text-red-400 cursor-pointer h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ViewTask;
