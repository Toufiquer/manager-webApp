/*
|-----------------------------------------
| setting up BoardComponents Components for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/
import { z } from "zod";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { initRenderOnboardingStatus, useGlobalStore } from "@/lib/global-store";

import ViewTask from "./view-task";
import ViewAllBoard from "./view-all-board";
import MutationOnboarding from "./mutation-onboarding";
import BoardConfirmationUi from "./board-confirmation-ui";

export const zodItemSchema = z.object({
  title: z
    .string({
      invalid_type_error: "Item must be a string",
      required_error: "Item is required",
    })
    .min(3, "Minimum 3 characters")
    .max(40, "Maximum 40 characters")
    .trim(),
  description: z
    .string({
      invalid_type_error: "Item must be a string",
      required_error: "Item is required",
    })
    .max(1000, "Maximum 1000 characters")
    .trim()
    .optional(),
});
type newItemFormSchema = z.infer<typeof zodItemSchema>;

const BoardComponents = () => {
  const boardTask = useGlobalStore((store) => store.boardTask);
  const onBoardingStatus = useGlobalStore((store) => store.onBoardingStatus);
  const setBoardTask = useGlobalStore((store) => store.setBoardTask);
  const setonBoardingStatus = useGlobalStore(
    (store) => store.setonBoardingStatus
  );
  const { reset, register, setValue, handleSubmit, formState } =
    useForm<newItemFormSchema>({ resolver: zodResolver(zodItemSchema) });

  const handleCancel = () => {
    setonBoardingStatus({ ...initRenderOnboardingStatus });
    reset();
  };

  const handleConfirmBoardDelete = (id: string) => {
    const result = { ...boardTask };
    if (onBoardingStatus.isDeleteBoard) {
      result.statusLst = boardTask.statusLst.filter((curr) => curr.id !== id);
    } else if (onBoardingStatus.isDeleteTask) {
      result.data = boardTask.data.filter((curr) => curr.id !== id);
    }
    setBoardTask(result);
    reset();
    setonBoardingStatus(initRenderOnboardingStatus);
    handleCancel();
  };
  const onSubmit = handleSubmit((data) => {
    const result = { ...boardTask };

    //  Board Functionality
    if (onBoardingStatus.isAddBoard) {
      result.statusLst = [
        ...boardTask.statusLst,
        {
          id: boardTask.statusLst.length + 1 + "",
          title: data.title,
          description: data.description,
        },
      ];
    } else if (onBoardingStatus.isUpdateBoard) {
      result.statusLst = boardTask.statusLst.map((curr) => {
        const i = { ...curr };
        if (i.title === onBoardingStatus.currentTitle) {
          i.title = data.title;
          i.description = data.description;
        }
        return i;
      });
      result.data = boardTask.data.map((curr) => {
        const i = { ...curr };
        if (i.status === onBoardingStatus.currentTitle) {
          i.status = data.title;
        }
        return i;
      });
    } else if (onBoardingStatus.isAddTask) {
      result.data = [
        ...boardTask.data,
        {
          ...data,
          status: onBoardingStatus.currentTitle || "",
          id: Math.random() + "",
          lstUpdate: new Date(),
        },
      ];
    }
    setBoardTask({ ...result });
    handleCancel();
  });
  let isRenderModal =
    onBoardingStatus.isAddBoard ||
    onBoardingStatus.isUpdateBoard ||
    onBoardingStatus.isDeleteBoard ||
    onBoardingStatus.isAddTask ||
    onBoardingStatus.isUpdateTask ||
    onBoardingStatus.isDeleteTask ||
    onBoardingStatus.isViewTask;
  return (
    <main className={`${!onBoardingStatus.isRender && " bg-blue-50 "} p-4`}>
      <div className="w-full min-h-[52vh] flex flex-col">
        {isRenderModal ? (
          <div>
            {onBoardingStatus.isDeleteBoard || onBoardingStatus.isDeleteTask ? (
              // Check for confirmation
              <BoardConfirmationUi
                handleCancel={handleCancel}
                handleConfirmBoardDelete={handleConfirmBoardDelete}
              />
            ) : (
              <div>
                {onBoardingStatus.isViewTask ? (
                  // View Task Details
                  <ViewTask handleCancel={handleCancel} />
                ) : (
                  // Add or Update
                  <MutationOnboarding
                    formState={formState}
                    register={register}
                    onSubmit={onSubmit}
                    handleCancel={handleCancel}
                  />
                )}
              </div>
            )}
          </div>
        ) : (
          // View all Board
          <ViewAllBoard setValue={setValue} />
        )}
      </div>
      <div className="h-[200px]" />
    </main>
  );
};
export default BoardComponents;
