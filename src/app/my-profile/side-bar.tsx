/*
|-----------------------------------------
| setting up SideBar for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

"use client";

import { LiaSlidersHSolid } from "react-icons/lia";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { RxCross2 } from "react-icons/rx";
import Image from "next/image";
import { FaEdit } from "react-icons/fa";
import { sidebarData } from "@/app/profile/utils/data";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ProfileComponent = () => {
  return (
    <div>
      <div className="px-4 w-full flex flex-col items-center justify-center">
        <div className="relative mt-8">
          <div className="bg-slate-800 opacity-90 cursor-pointer p-1 pb-[7px] pl-[7px] absolute bottom-[-6px] right-[12px] rounded-full">
            <FaEdit className="text-white p-[2px]" />
          </div>
          <Image
            src="/profile.png"
            width={100}
            height={100}
            alt="Picture of the author"
          />
        </div>
        <div className="font-bold text-xl mt-4">{sidebarData.profile.name}</div>
        <div className="font-normal text-slate-600 text-[14px]">
          {sidebarData.profile.email}
        </div>
        <div className="w-full border-b border my-8" />
      </div>
    </div>
  );
};
const SideBarComponent = () => {
  const activeRoute = true;
  const styleBtn =
    " px-4 hover:bg-blue-100 py-2 hover:text-blue-600 cursor-pointer w-full flex items-center rounded-lg justify-start font-medium gap-2 py-1";
  return (
    <div className="w-full items-center justify-start flex flex-col gap-1 px-8 ">
      {sidebarData.menu.map((curr) => (
        <div key={curr.id} className="w-full text-slate-700">
          <Link
            href={curr.link}
            className={`${styleBtn} ${
              curr.id === 1 + "" &&
              " bg-blue-100 text-blue-600 border-0 border-l-2 rounded-lg border-blue-800"
            }  ${
              curr.name.toLocaleLowerCase().replace(" ", "_") === "sign_out" &&
              " text-rose-500 hover:text-rose-600 hover:bg-rose-200 "
            } `}
          >
            <div>{curr.icon}</div>
            <div>{curr.name}</div>
          </Link>
        </div>
      ))}
    </div>
  );
};

const MobileSidebar = () => {
  const path = usePathname();
  return (
    <div className="w-full flex items-center justify-between">
      <h2 className="text-3xl font-semibold text-slate-800">{path}</h2>

      <Drawer direction="left">
        <DrawerTrigger>
          <div className="px-4 py-[6px] rounded-lg font-semibold text-[18px] text-white bg-blue-400 hover:to-blue-500 duration-200 cursor-pointer flex gap-1 items-center">
            <LiaSlidersHSolid />
            <p>Menu</p>
          </div>
        </DrawerTrigger>
        <DrawerContent className="max-w-[300px] min-h-screen">
          <DrawerHeader className="pt-0">
            <div className="w-full flex items-center justify-between">
              <div className="text-2xl font-bold text-slate-900">
                My profile
              </div>
              <DrawerClose>
                <RxCross2 className="w-6 h-6 text-slate-500" />
              </DrawerClose>
            </div>
          </DrawerHeader>
          <ScrollArea className="w-full h-[90vh] pb-12">
            <ProfileComponent />
            <SideBarComponent />
          </ScrollArea>
        </DrawerContent>
      </Drawer>
    </div>
  );
};
const SideBar = () => {
  return (
    <div>
      <MobileSidebar />
    </div>
  );
};
export default SideBar;
