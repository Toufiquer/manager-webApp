/*
|-----------------------------------------
| setting up SingleCard for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/ 
import { AiOutlineCheckCircle } from "react-icons/ai";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { PRICING } from "./pricing-data";

const SingleCard = ({ data, month }: { data: PRICING; month: number }) => {
  const { monthlyCost, title, description, features, id, icon } = data || {};
  const roundMonthlyCost = Math.round(
    month === 1 ? month * monthlyCost : (monthlyCost / 100) * 90
  );
  return (
    <div className={`${id !== 2 && " md:my-12 "}`}>
      <div className="h-full min-w-[380px] overflow-hidden rounded-lg shadow-md hover:shadow-xl">
        <Card
          className={`h-full text-center ${
            id === 2 ? "bg-blue-50 text-slate-800" : "bg-slate-50"
          } rounded-lg`}
        >
          <CardHeader>
            <CardTitle>
              <div className="flex flex-col">
                <div>
                  <div
                    className={`p-4 bg-blue-100 max-w-[65px] rounded-full ${
                      id === 2 && " text-blue-600 bg-blue-200 "
                    }`}
                  >
                    {icon}
                  </div>
                </div>
                <div className="flex w-full text-slate-600 justify-start py-4">
                  <div className="text-6xl font-bold">
                    <span>&#163;</span>
                    {roundMonthlyCost}
                  </div>
                  <sub className="mt-8 text-sm">/month</sub>
                </div>
                <div className="mt-2 text-2xl text-start font-semibold">
                  {title}
                </div>
              </div>
            </CardTitle>
            <CardDescription>
              <div className="text-start w-full">{description}</div>
            </CardDescription>
          </CardHeader>
          <CardContent className="border-t border-slate-300 pt-12">
            <div className="flex flex-col items-start justify-start">
              {features.map((i) => (
                <div className="flex items-center gap-2 my-2" key={i.id}>
                  <AiOutlineCheckCircle /> {i.title}
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <div className="flex w-full flex-col">
              <div
                className={`cursor-pointer  rounded-lg text-slate-50 p-2 font-semibold text-[18px] ${
                  id === 2
                    ? " bg-blue-500 hover:bg-blue-600"
                    : "  hover:bg-slate-800 duration-150 bg-slate-700  "
                }`}
              >
                Get Start
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
export default SingleCard;
