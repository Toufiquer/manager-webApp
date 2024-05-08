/*
|-----------------------------------------
| setting up SingleBox for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

import { useDrag } from "react-dnd";

import { webAppH2Light, webAppPLight } from "@/components/common/style";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const SingleBox = ({
  curr,
  parentDiv,
  handleViewTask,
}: {
  handleViewTask: (taskId: string) => void;
  parentDiv: string;
  curr: any;
}) => {
  const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
    type: "BOX",
    item: { id: curr.id, data: curr, parentDiv },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));
  return (
    <div
      key={curr.id}
      ref={dragPreview}
      style={{ opacity: isDragging ? 0.5 : 1 }}
      className="w-full"
    >
      {/* The drag ref marks this node as being the "pick-up" node */}
      <div
        onClick={() => handleViewTask(curr.id)}
        className="flex items-center justify-center cursor-pointer rounded-lg border h-full w-full font-semibold"
        role="Handle"
        ref={drag}
      >
        <div className="w-full relative min-h-[180px] cursor-pointer hover:bg-slate-200 duration-200 bg-slate-100 rounded-lg p-2">
          <h2 className={webAppH2Light}>{curr.title}</h2>
          <p className={webAppPLight + " font-[500] text-sm"}>
            {curr.description}
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
export default SingleBox;
