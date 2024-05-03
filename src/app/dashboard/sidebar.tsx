/*
|-----------------------------------------
| setting up Sidebar for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

"use client";

import { MdTaskAlt } from "react-icons/md";
import { CiCirclePlus } from "react-icons/ci";
import { IoStatsChart } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { IoPeopleOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { HiOutlineInboxArrowDown } from "react-icons/hi2";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type sidebarType = {
  id: number;
  name: string;
  logo: JSX.Element;
  outlet: string;
  message?: number;
};
const sidebarData: sidebarType[] = [
  {
    id: 1,
    name: "Home",
    logo: <IoHomeOutline className="w-6 h-6" />,
    outlet: "home",
  },
  {
    id: 2,
    name: "My Task",
    logo: <MdTaskAlt className="w-6 h-6" />,
    outlet: "my-task",
    message: 4,
  },
  {
    id: 3,
    name: "Reporting",
    logo: <IoStatsChart className="w-6 h-6" />,
    outlet: "reporting",
    message: 6,
  },
  {
    id: 4,
    name: "Inbox",
    logo: <HiOutlineInboxArrowDown className="w-6 h-6" />,
    outlet: "inbox",
  },
  {
    id: 5,
    name: "People",
    logo: <IoPeopleOutline className="w-6 h-6" />,
    outlet: "people",
  },
  {
    id: 5,
    name: "Settings",
    logo: <IoSettingsOutline className="w-6 h-6" />,
    outlet: "settings",
  },
];

const invitePeopleDataImageCss =
  "cursor-pointer hover:border-slate-500 border-transparent border rounded-full";
const invitePeopleData = [
  {
    id: 1,
    name: "John",
    image: (
      <div className={invitePeopleDataImageCss}>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    ),
  },
  {
    id: 2,
    name: "Fahd",
    image: (
      <div className={invitePeopleDataImageCss}>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    ),
  },
  {
    id: 1,
    name: "Raul",
    image: (
      <div className={invitePeopleDataImageCss}>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    ),
  },
  {
    id: 1,
    name: "Sbin",
    image: (
      <div className={invitePeopleDataImageCss}>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    ),
  },
];
const handleSidebarOutlet = (outletName: string) => {
  console.log(outletName);
};
const commonCss = "p-4 flex items-start justify-start gap-4 flex-col w-full";
const buttonStyle =
  "flex border px-4 pr-6 hover:bg-slate-400 py-1 cursor-pointer rounded-full items-center justify-center gap-2 bg-slate-200";
const Sidebar = () => {
  return (
    <ScrollArea className="h-screen w-auto">
      <main className={commonCss}>
        <div className={commonCss + ""}>
          {sidebarData.map((curr) => (
            <div
              key={curr.id}
              onClick={() => handleSidebarOutlet(curr.outlet)}
              className="py-1 flex items-center justify-start gap-2 cursor-pointer hover:bg-slate-200 px-2 rounded-full w-full duration-200"
            >
              {curr.logo}
              {curr.name}
              {curr.message && (
                <div className="bg-orange-300 text-white px-1 rounded-full  text-xs">
                  {curr.message}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className={commonCss + " border-t border-slate-500"}>
          <h2 className="text-slate-400">Invite People</h2>
          <div className="flex items-center justify-center gap-0">
            {invitePeopleData.map((curr) => (
              <div className="ml-[-8px]">{curr.image}</div>
            ))}
            <div className="cursor-pointer">
              <CiCirclePlus className="h-8 w-8 ml-4" />
            </div>
          </div>
        </div>
        <div className={commonCss + " border-t border-slate-500"}>
          <h2 className="text-slate-400">Projects</h2>
          <div className={buttonStyle + ""}>
            <div className="w-3 h-3 bg-green-400 rounded-full" />
            <div className="">Onboarding</div>
          </div>
          <div className={buttonStyle + " "}>
            <div className="w-3 h-3 bg-orange-300 rounded-full" /> Off boarding
          </div>
        </div>
      </main>
      <div className=" h-[120px]" />
    </ScrollArea>
  );
};
export default Sidebar;
