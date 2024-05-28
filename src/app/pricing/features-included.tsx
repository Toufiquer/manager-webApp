/*
|-----------------------------------------
| setting up FeaturesIncluded for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

import { FaHeadset } from "react-icons/fa6";
import { GoClock } from "react-icons/go";
import { RiLineChartLine } from "react-icons/ri";

const FeaturesIncluded = () => {
  return (
    <main className="max-w-7xl mx-auto p-4">
      <div className="flex flex-col items-center justify-center my-12">
        <h2 className="font-bold text-[42px] text-slate-800 text-center">
          Features included in every plan
        </h2>
        <div className="font-normal text-[18px] max-w-4xl text-slate-400 text-center py-8">
          Our passion for customer excellence is just one reason why we are the
          market leader. We've always worked very hard to give our customers the
          best experience.
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-8">
          {[
            {
              id: 1,
              title: "Set start in a minute",
              description:
                "We've made it effortless so you can focus on what matters most",
              icon: <GoClock className="w-8 h-8 text-blue-400" />,
            },
            {
              id: 2,
              title: "Optimize your revenue",
              description:
                "Experience power of revenue optimization to heights of success",
              icon: <RiLineChartLine className="w-8 h-8 text-blue-400" />,
            },
            {
              id: 3,
              title: "24/7 customer supports",
              description:
                "Our dedicated support team is your inquiries around the clock",
              icon: <FaHeadset className="w-8 h-8 text-blue-400" />,
            },
          ].map((curr) => (
            <div
              key={curr.id}
              className="bg-blue-50 border-blue-100 rounded-lg p-8"
            >
              <div className="w-full h-[200px] flex flex-col items-center justify-center">
                {curr.icon}
                <div className="text-xl font-semibold pt-6 pb-2 text-center">
                  {curr.title}
                </div>
                <p className="font-normal text-[18px] text-slate-400 text-center">
                  {curr.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};
export default FeaturesIncluded;
