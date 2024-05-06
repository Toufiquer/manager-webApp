/*
|-----------------------------------------
| setting up SingleBox for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useDrag } from "react-dnd";

const SingleBox = ({ curr, parentDiv }: { parentDiv: string; curr: any }) => {
  const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
    type: "BOX",
    item: { id: curr.id, data: curr, parentDiv },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));
  return (
    <div
      ref={dragPreview}
      style={{ opacity: isDragging ? 0.5 : 1 }}
      className="w-full h-[60px]"
    >
      {/* The drag ref marks this node as being the "pick-up" node */}
      <div
        className="flex items-center justify-center cursor-pointer hover:border-slate-900  rounded-lg border border-slate-500 h-full w-full text-2xl font-semibold"
        role="Handle"
        ref={drag}
      >
        <div
          key={curr}
          className="w-full relative h-[180px] cursor-pointer hover:bg-slate-300 duration-200 bg-slate-200 rounded-lg p-2"
        >
          <h2 className="text-slate-600 font-semibold">Task Name</h2>
          <p className="text-slate-500">
            Description of the Task, Description of the Task, Description of the
            Task , Description of the Task
          </p>
          <div className="bg-orange-200 rounded-lg mt-6 px-4 py-1 w-fit">
            Designer
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
