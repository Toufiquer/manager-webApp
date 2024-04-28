/*
|-----------------------------------------
| setting up DeleteUi for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, April, 2024
|-----------------------------------------
*/
import { useGlobalStore } from "@/lib/global-store";
import { RxCross1 } from "react-icons/rx";

const DeleteUi = () => {
  const setMutationData = useGlobalStore((store) => store.setMutationData);
  return (
    <main className="w-full h-full flex flex-col">
      <div className="min-h-[92vh] h-full w-full flex flex-col p-2">
        <div className="w-full flex items-center justify-between border-b border-slate-400 pr-1 mr-2">
          <div className="text-2xl uppercase">Delete</div>
          <div className="cursor-pointer" onClick={() => setMutationData("")}>
            <RxCross1 />
          </div>
        </div>
        <div>Delete UI</div>
      </div>
      ;
    </main>
  );
};
export default DeleteUi;
