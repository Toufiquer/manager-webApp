/*
|-----------------------------------------
| setting up DeleteUi for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, April, 2024
|-----------------------------------------
*/
import { useGlobalStore } from "@/lib/global-store";
import { RxCross1 } from "react-icons/rx";
import { Button } from "@/components/ui/button";

const DeleteUi = () => {
  const apiData = useGlobalStore((store) => store.apiData);
  const setApiData = useGlobalStore((store) => store.setApiData);
  const setMutationData = useGlobalStore((store) => store.setMutationData);
  const mutationData = useGlobalStore((store) => store.mutationData);
  const confirmDelete = () => {
    let result = [];
    if (mutationData.item) {
      result = apiData.map((curr) => {
        let i = { ...curr };
        i.data.lst = i.data.lst.filter(
          (item) => item.item !== mutationData.item
        );
        return i;
      });
    } else {
      result = apiData.filter((curr) => curr.name !== mutationData.name);
    }
    setApiData(result);
    setMutationData("");
  };
  return (
    <main className="w-full h-full flex flex-col">
      <div className="min-h-[92vh] h-full w-full flex flex-col p-2">
        <div className="w-full flex items-center justify-between border-b border-slate-400 pr-1 mr-2">
          <div className="text-2xl uppercase">Delete</div>
          <div className="cursor-pointer" onClick={() => setMutationData("")}>
            <RxCross1 />
          </div>
        </div>
        <div className="h-full min-h-[92vh] border w-full flex flex-col gap-4 items-center justify-center">
          <div className="min-w-[300px] max-w-[500px] w-full gap-4 flex flex-col">
            <p className="uppercase text-2xl">
              {mutationData.name || mutationData.item}
            </p>
            <p className="text-sm">{mutationData.info}</p>
            <div className="border p-4 text-rose-400">
              <strong>Note</strong>
              <p>After Delete Your data will not be recoverable</p>
            </div>
            <div className="text-center pt-4 mb-0 pb-0 text-rose-400">
              Are You Confirm?
            </div>
            <Button
              variant="outline"
              onClick={confirmDelete}
              className="bg-rose-400 hover:bg-rose-500 text-white hover:text-white font-bold"
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
      ;
    </main>
  );
};
export default DeleteUi;
