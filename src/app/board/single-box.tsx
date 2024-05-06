/*
|-----------------------------------------
| setting up SingleBox for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

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
        {curr.title}
      </div>
    </div>
  );
};
export default SingleBox;
