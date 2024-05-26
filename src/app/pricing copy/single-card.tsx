/*
|-----------------------------------------
| setting up SingleCard for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { PRICING } from "./pricing-data";

const SingleCard = ({ data, month }: { data: PRICING; month: number }) => {
  const { monthlyCost, title, description, features, id } = data || {};
  const roundMonthlyCost = Math.round(
    month === 1 ? month * monthlyCost : (monthlyCost / 100) * 90
  );
  return (
    <div className="h-full min-w-[320px] max-w-[330px] overflow-hidden rounded-lg shadow-md hover:shadow-xl">
      <Card
        className={`h-full min-h-[465px] text-center ${
          id === 2 ? "bg-blue-500 text-white" : "bg-slate-50"
        } rounded-lg`}
      >
        <CardHeader>
          <CardTitle>
            <div className="flex w-full justify-center py-2">
              <span>&#163;</span>
              <div className="text-4xl font-bold">{roundMonthlyCost}</div>
              <span className="mt-5 text-sm">/mo</span>
            </div>
            <div className="mt-2 text-2xl font-semibold">{title}</div>
          </CardTitle>
          <CardDescription>
            <span
              className={`px-6 ${id === 2 ? " text-white" : "text-slate-900"}`}
            >
              {description}
            </span>
          </CardDescription>
        </CardHeader>
        <CardContent className="min-h-[160px]">
          {features.map((i) => (
            <div
              className="my-2 ml-8 flex w-full items-center justify-start gap-2"
              key={i.id}
            >
              <AiOutlineCheckCircle /> {i.title}
            </div>
          ))}
        </CardContent>
        <CardFooter>
          <div className="flex w-full flex-col">
            <Link href="/pricing/#">
              <div
                className={`hover-underline-animation rounded-lg border px-4 py-2 overflow-hidden${
                  id === 2 ? " text-white" : "text-slate-900"
                }`}
              >
                Try free for 30 days
              </div>
            </Link>
            <span
              className={`mt-2 text-sm ${
                id === 2 ? " text-white" : "text-slate-900"
              }`}
            >
              No card required
            </span>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};
export default SingleCard;
