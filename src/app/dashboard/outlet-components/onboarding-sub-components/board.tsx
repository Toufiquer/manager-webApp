/*
|-----------------------------------------
| setting up Board for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

"use client";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { ScrollArea } from "@/components/ui/scroll-area";

import BoardComponents from "./board-components";

const Board = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <ScrollArea className="h-screen w-full pr-4">
        <BoardComponents />
      </ScrollArea>
    </DndProvider>
  );
};
export default Board;
