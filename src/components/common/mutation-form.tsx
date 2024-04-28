import { ScrollArea } from "../ui/scroll-area";

/*
|-----------------------------------------
| setting up MutationForm for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, April, 2024
|-----------------------------------------
*/
const MutationForm = () => {
  let renderUIData = (
    <ScrollArea className="h-[92vh] w-full">
      <div className="min-h-[92vh] h-full w-full flex items-start justify-start pt-4 flex-col">
        <div className="cursor-pointer flex w-[96%] flex-row justify-between m-2 border border-slate-400 px-2 py-1 rounded-lg pl-1">
          <div className="flex flex-row gap-4 mx-4 w-full">
            <div>
              <p className={`text-xl text-slate-700 font-semibold`}>
                The item name
                <span className="text-sm text-slate-900 font-semibold">
                  &#163; 23
                </span>
              </p>
              <p className={`text-sm text-slate-600`}>
                the info Lorem ipsum dolor sit amet consectetur, adipisicing
                elit. Ut suscipit at maxime modi officia, excepturi minus magnam
                vitae error, natus ad. Ad assumenda dolorem vitae voluptas quas
                quidem ea quia.
              </p>
              {/* {curr?.option?.length > 0 && (
                <p className="text-sm">
                  {curr.option?.length} item
                  {curr.option?.length > 1 && "s"}
                </p>
              )} */}
            </div>
          </div>
          {/* <div className="flex flex-row items-center justify-between gap-4 pr-2 max-w-[90px]">
            <div onClick={() => handleSetMutationData(curr.item)}>
              <FaRegEdit className="cursor-pointer h-4 w-4 text-slate-500" />
            </div>
            <div onClick={() => handleSetMutationData(curr.item)}>
              <FaTrash className="text-red-300 hover:text-red-400 cursor-pointer h-4 w-4" />
            </div>
          </div>  */}
        </div>
      </div>
      <div className="mt-12" />
    </ScrollArea>
  );
  return renderUIData;
};
export default MutationForm;
