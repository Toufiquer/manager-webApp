/*
|-----------------------------------------
| setting up PicThePlan for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

import { FiCheckCircle } from "react-icons/fi";
import { RxCrossCircled } from "react-icons/rx";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

type PLAN = {
  id: string | number;
  title: string;
  basic: boolean | string;
  standard: boolean | string;
  professional: boolean | string;
};

const planData: PLAN[] = [
  {
    id: 1,
    title: "Storage space",
    basic: "40GB",
    standard: "80GB",
    professional: "Unlimited",
  },
  {
    id: 2,
    title: "Cloud connected",
    basic: "Yes",
    standard: "Yes",
    professional: "Yes",
  },
  {
    id: 3,
    title: "Advance debugging",
    basic: true,
    standard: true,
    professional: true,
  },
  {
    id: 4,
    title: "Version control",
    basic: true,
    standard: true,
    professional: true,
  },
  {
    id: 5,
    title: "Security",
    basic: true,
    standard: true,
    professional: true,
  },
  {
    id: 6,
    title: "Team access",
    basic: true,
    standard: true,
    professional: true,
  },
  {
    id: 7,
    title: "Web tools",
    basic: true,
    standard: true,
    professional: true,
  },
  {
    id: 8,
    title: "Mobile apps",
    basic: false,
    standard: true,
    professional: true,
  },
  {
    id: 9,
    title: "Web tools",
    basic: false,
    standard: true,
    professional: true,
  },
  {
    id: 10,
    title: "Version control",
    basic: false,
    standard: true,
    professional: true,
  },
  {
    id: 11,
    title: "Security",
    basic: false,
    standard: false,
    professional: true,
  },
  {
    id: 12,
    title: "Team access",
    basic: false,
    standard: false,
    professional: true,
  },
];

const PicThePlan = () => {
  return (
    <main className="mt-12 py-8">
      <h2 className="py-12 text-center text-3xl font-semibold">
        Pick the plan that works best for you
      </h2>
      <div className="mx-auto mb-12 max-w-[960px] p-2">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[400px]" />
              <TableHead>
                <span className="flex flex-col items-center text-center text-slate-800 gap-2">
                  <span className="font-semibold text-xl">Basic plan</span>
                  <span>
                    <span className="text-4xl font-bold">&#163;19</span>
                    <span>/mon</span>
                  </span>
                  <Button className="my-4">Get Started</Button>
                </span>
              </TableHead>
              <TableHead className="border-l">
                <span className="flex flex-col items-center text-center text-slate-800 gap-2">
                  <span className="flex gap-2">
                    <span className="font-semibold text-xl">Standard plan</span>
                    <span className="mx-auto rounded-lg bg-orange-100 px-2 py-1 text-xs text-red-500 max-h-[24px]">
                      HOT
                    </span>
                  </span>
                  <span>
                    <span className="text-4xl font-bold">&#163;39</span>
                    <span>/mon</span>
                  </span>
                  <Button className="my-4">Get Started</Button>
                </span>
              </TableHead>
              <TableHead className="border-l">
                <span className="flex flex-col items-center text-center text-slate-800 gap-2">
                  <span className="font-semibold text-xl">Professional</span>
                  <span>
                    <span className="text-4xl font-bold">&#163;59</span>
                    <span>/mon</span>
                  </span>
                  <Button className="my-4">Get Started</Button>
                </span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {planData.map((curr: PLAN) => (
              <TableRow key={curr.id} className="border-b">
                <TableCell className="font-medium text-start">
                  {curr.title}
                </TableCell>
                <TableCell className="font-medium text-center">
                  {typeof curr.basic === "string" ? (
                    curr.basic
                  ) : curr.basic ? (
                    <span className="w-full flex items-center justify-center">
                      <FiCheckCircle className="h-5 w-5 text-blue-500" />
                    </span>
                  ) : (
                    <span className="w-full flex items-center justify-center">
                      <RxCrossCircled className="h-5 w-5 text-rose-500" />
                    </span>
                  )}
                </TableCell>
                <TableCell className="font-medium text-center">
                  {typeof curr.standard === "string" ? (
                    curr.standard
                  ) : curr.standard ? (
                    <span className="w-full flex items-center justify-center">
                      <FiCheckCircle className="h-5 w-5 text-blue-500" />
                    </span>
                  ) : (
                    <span className="w-full flex items-center justify-center">
                      <RxCrossCircled className="h-5 w-5 text-rose-500" />
                    </span>
                  )}
                </TableCell>
                <TableCell className="font-medium flex items-center justify-center">
                  {typeof curr.professional === "string" ? (
                    curr.professional
                  ) : curr.professional ? (
                    <span className="w-full flex items-center justify-center">
                      <FiCheckCircle className="h-5 w-5 text-blue-500" />
                    </span>
                  ) : (
                    <span className="w-full flex items-center justify-center">
                      <RxCrossCircled className="h-5 w-5 text-rose-500" />
                    </span>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </main>
  );
};
export default PicThePlan;
