/*
|-----------------------------------------
| setting up Page for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/
"use client";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import Board from "./board";

const Page = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="p-12">
        <Board />
      </div>
    </DndProvider>
  );
};
export default Page;
