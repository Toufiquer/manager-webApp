/*
|-----------------------------------------
| setting up DashboardOnboarding for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

"use client";

import { useState } from "react";
import Board from "./onboarding-sub-components/board";
import Workflow from "./onboarding-sub-components/workflow";

const DashboardOnboarding = () => {
  const [currOutlet, setCurrOutlet] = useState("board");
  const buttonStyle =
    "font-semibold border-b-4 cursor-pointer border-transparent hover:text-blue-400 text-slate-400";
  const activeButton = "border-blue-500 border-b text-blue-600";
  return (
    <main>
      <div className="p-4">
        <div className="w-full flex flex-col">
          <h2 className="text-slate-700">Onboarding</h2>
          <div className="flex w-full items-start justify-start border-b gap-4">
            <h4
              onClick={() => setCurrOutlet("board")}
              className={` ${buttonStyle} ${
                currOutlet.toLocaleLowerCase() === "board" && activeButton
              }`}
            >
              Board
            </h4>
            <h4
              onClick={() => setCurrOutlet("workflow")}
              className={` ${buttonStyle} ${
                currOutlet.toLocaleLowerCase() === "workflow" && activeButton
              }`}
            >
              Workflow
            </h4>
          </div>
          {currOutlet === "board" && <Board />}
          {currOutlet === "workflow" && <Workflow />}
        </div>
      </div>
    </main>
  );
};
export default DashboardOnboarding;
