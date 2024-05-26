/*
|-----------------------------------------
| setting up PicThePlan for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { BsCheck2Circle } from "react-icons/bs";

const cellStyle = "flex items-center justify-center text-green-500 w-full";

type PLAN = {
  id: string | number;
  title: string;
  addOnAvailable: string[];
  emptyCell: string[];
  professional: boolean;
  team: boolean;
  enterprise: boolean;
};
const createPlan = (
  id: string | number,
  title: string,
  addOnAvailable: string[],
  emptyCell: string[]
): PLAN => ({
  id,
  title,
  addOnAvailable,
  emptyCell,
  professional:
    !addOnAvailable.includes("professional") &&
    !emptyCell.includes("professional"),
  team: !addOnAvailable.includes("team") && !emptyCell.includes("team"),
  enterprise:
    !addOnAvailable.includes("enterprise") && !emptyCell.includes("enterprise"),
});
const planData: PLAN[] = [
  createPlan(1, "Cross-platform UI toolkit", [], []),
  createPlan(2, "14-days free trial", [], []),
  createPlan(3, "No user limit", [], ["professional"]),
  createPlan(4, "Long-term support", [], []),
  createPlan(5, "Email support", ["professional"], []),
  createPlan(6, "Developer tools", [], ["team"]),
  createPlan(7, "Removal of Front branding", [], ["professional"]),
  createPlan(8, "Active maintenance & support", [], ["enterprise"]),
  createPlan(9, "Data storage for 365 days", ["team"], []),
];

const AddOnAvailable = () => (
  <div className="flex w-full justify-center">
    <span className="mx-auto rounded-lg bg-blue-100 px-2 py-1 text-sm text-blue-500">
      Add-on available
    </span>
  </div>
);
const PicThePlan = () => {
  return (
    <main>
      <div className="mt-12 py-8">
        <h2 className="py-12 text-center text-3xl font-semibold">
          Pick the plan that works best for you
        </h2>
        <div className="mx-auto mb-12 max-w-[960px] p-2">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[400px]" />
                <TableHead>
                  <span className="flex flex-col items-center text-center">
                    <span>Professional</span>
                    <span>&#163;19/mon</span>
                  </span>
                </TableHead>
                <TableHead className="border-l">
                  <span className="flex flex-col items-center text-center">
                    <span className="flex gap-2">
                      <span>Team</span>
                      <span className="mx-auto rounded-lg bg-orange-100 px-2 py-1 text-xs text-red-500">
                        HOT
                      </span>
                    </span>
                    <span>&#163;39/mon</span>
                  </span>
                </TableHead>
                <TableHead className="border-l">
                  <span className="flex flex-col items-center text-center">
                    <span>Enterprise</span>
                    <span>&#163;59/mon</span>
                  </span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {planData.map((curr: PLAN) => (
                <TableRow
                  key={curr.id}
                  className={`${(curr.id as number) % 2 !== 0 && "bg-blue-50"}`}
                >
                  <TableCell className="font-medium">{curr.title}</TableCell>
                  <TableCell>
                    {curr.professional && (
                      <span className={cellStyle}>
                        <BsCheck2Circle />
                      </span>
                    )}
                    {curr.emptyCell.includes("professional")
                      ? ""
                      : !curr.professional && <AddOnAvailable />}
                  </TableCell>
                  <TableCell className="border-l">
                    {curr.team && (
                      <span className={cellStyle}>
                        <BsCheck2Circle />
                      </span>
                    )}
                    {curr.emptyCell.includes("team")
                      ? ""
                      : !curr.team && <AddOnAvailable />}
                  </TableCell>
                  <TableCell className="border-l">
                    {curr.enterprise && (
                      <span className={cellStyle}>
                        <BsCheck2Circle />
                      </span>
                    )}
                    {curr.emptyCell.includes("enterprise")
                      ? ""
                      : !curr.enterprise && <AddOnAvailable />}
                  </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell />
                <TableCell className="font-medium">
                  <div className="flex w-full justify-center">
                    <Button variant="outline">Choose plan</Button>
                  </div>
                </TableCell>
                <TableCell className="font-medium">
                  <div className="flex w-full justify-center">
                    <Button variant="outline">Choose plan</Button>
                  </div>
                </TableCell>
                <TableCell className="font-medium">
                  <div className="flex w-full  justify-center">
                    <Button
                      variant="outline"
                      className="bg-blue-500 text-white hover:bg-blue-600 hover:text-white"
                    >
                      Contact us
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </main>
  );
};
export default PicThePlan;
