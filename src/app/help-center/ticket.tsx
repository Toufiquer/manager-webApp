/*
|-----------------------------------------
| setting up Ticket for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

import { BsTicketPerforated } from "react-icons/bs";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { MdOutlineHeadsetMic, MdOutlineMailOutline } from "react-icons/md";

const iconStyle = "w-[42px] h-[42px] text-blue-400 pr-1";

const exampleData = [
  {
    id: 1,
    title: "Contact Support",
    description: "Not finding the help you need?",
    icon: <MdOutlineHeadsetMic className={iconStyle} />,
  },
  {
    id: 2,
    title: "Submit a Ticket",
    description: "Prosperous impression had delay",
    icon: <BsTicketPerforated className={iconStyle} />,
  },
  {
    id: 3,
    title: "Email us",
    description: "Reach us at ",
    email: "example@example.com",
    icon: <MdOutlineMailOutline className={iconStyle} />,
  },
];
const Ticket = () => {
  return (
    <main className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-8 md:gap-20 my-12 py-12">
      {exampleData.map((curr) => (
        <div
          key={curr.id}
          className="border border-slate-200 shadow-slate-300 bg-slate-100 hover:border-slate-300 duration-200 rounded-lg p-2 hover:shadow-200 hover:shadow-xl cursor-pointer pt-6 hover:pt-5"
        >
          <div className="p-2 flex gap-2 items-center justify-between">
            <div className="h-full items-start justify-start flex min-h-[100px] mb-[-18px]">
              {curr.icon}
            </div>
            <div className="flex flex-col w-full">
              <div className="font-bold text-[22px] text-slate-700">
                {curr.title}
              </div>
              <div className="font-normal text-slate-500">
                {curr.description}
              </div>
              {curr.email && (
                <div className="font-normal text-slate-800">{curr.email}</div>
              )}
            </div>
            <div className="px-2">
              <HiOutlineArrowNarrowRight className="w-6 h-6 text-slate-500" />
            </div>
          </div>
        </div>
      ))}
    </main>
  );
};
export default Ticket;
