/*
|-----------------------------------------
| setting up BoardConfirmationUi for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

import { RxCross1 } from "react-icons/rx";

import { Button } from "@/components/ui/button";
import { useGlobalStore } from "@/lib/global-store";
import { webAppH2Light, webAppPLight } from "@/components/common/style";

const BoardConfirmationUi = ({
  handleCancel,
  handleConfirmBoardDelete,
}: {
  handleCancel: () => void;
  handleConfirmBoardDelete: (boardId: string) => void;
}) => {
  const onBoardingStatus = useGlobalStore((store) => store.onBoardingStatus);
  return (
    <main className="w-full min-h-[50vh] h-full flex items-center justify-center">
      <div className="max-w-[600px]">
        <div className="min-h-[40vh] h-full w-full flex flex-col p-2 px-4 border border-slate-300 rounded-lg">
          <div className="w-full flex items-center justify-between pr-1 mr-2">
            <p className={webAppH2Light + " text-2xl mt-4 text-slate-600"}>
              {onBoardingStatus.currentTitle}
            </p>
            <div className="cursor-pointer" onClick={handleCancel}>
              <RxCross1 />
            </div>
          </div>
          <div className="h-full min-h-[40vh] w-full flex flex-col gap-4 items-center justify-center">
            <div className="min-w-[300px] max-w-[500px] w-full gap-4 flex flex-col">
              <p className={webAppPLight}>
                {onBoardingStatus.currentDescription}
              </p>
              <div className="border p-4 text-rose-400">
                <strong>Note</strong>
                <p>After Delete Your data will not be recoverable</p>
              </div>
              <div className="text-center pt-4 mb-0 pb-0 text-rose-400">
                Are You Confirm?
              </div>
              <Button
                onClick={() =>
                  handleConfirmBoardDelete(onBoardingStatus.currentId)
                }
                variant="outline"
                className="bg-rose-400 hover:bg-rose-500 text-white hover:text-white font-bold"
              >
                Delete
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default BoardConfirmationUi;
