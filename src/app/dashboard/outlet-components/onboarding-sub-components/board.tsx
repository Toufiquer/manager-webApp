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

import BoardComponents from "./board-components";

const Board = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="p-12">
        <BoardComponents />
      </div>
    </DndProvider>
  );
};
export default Board;
