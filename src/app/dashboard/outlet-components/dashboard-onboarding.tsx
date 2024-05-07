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
import { webAppH2Light } from "@/components/common/style";

const DashboardOnboarding = () => {
  const [currOutlet, setCurrOutlet] = useState("board");
  const buttonStyle = `${webAppH2Light} border-b-2 mt-2 cursor-pointer border-transparent hover:text-slate-600 `;
  return (
    <main>
      <div className="p-4">
        <div className="w-full flex flex-col">
          <h2 className={webAppH2Light + " text-xl text-slate-600"}>
            Onboarding
          </h2>
          <div className="flex w-full items-start justify-start border-b gap-4">
            <h4
              onClick={() => setCurrOutlet("board")}
              className={` ${buttonStyle} ${
                currOutlet === "board" &&
                " border-slate-600 border-b text-slate-600 "
              }`}
            >
              Board
            </h4>
            <h4
              onClick={() => setCurrOutlet("workflow")}
              className={` ${buttonStyle} ${
                currOutlet === "workflow" &&
                " border-slate-600 border-b text-slate-600 "
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
