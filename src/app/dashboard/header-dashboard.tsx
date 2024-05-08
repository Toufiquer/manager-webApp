/*
|-----------------------------------------
| setting up HeaderDashboard for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/
import { CiBellOn } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";
import { GoQuestion } from "react-icons/go";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { webAppH2 } from "@/components/common/style";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const SearchBar = () => {
  return (
    <div className="max-w-md mx-auto">
      <p className="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</p>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block  w-full px-4  focus:outline-none py-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-slate-400 focus:border-slate-400 "
          placeholder="Search Mockups, Logos..."
          required
        />
      </div>
    </div>
  );
};

const ProfileIcon = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="cursor-pointer">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

const iconStyle =
  " text-slate-500 hover:text-slate-600 w-6 h-6 cursor-pointer mr-1";
const HeaderDashboard = () => {
  return (
    <main className="min-h-[60px] flex items-center justify-between border-b bg-white">
      <div className="w-full px-4 flex items-center justify-between">
        <div className={webAppH2 + " text-2xl text-slate-700 uppercase"}>
          dashboard
        </div>
        <div className="search w-full">
          <SearchBar />
        </div>
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center mr-4 gap-2">
            <MdOutlineMailOutline className={iconStyle} />
            <div className="relative">
              <CiBellOn className={iconStyle} />
              <div className="absolute bg-rose-400 text-white top-[-5px] right-0 rounded-full px-1 text-xs">
                5
              </div>
            </div>
            <GoQuestion className={iconStyle} />
          </div>

          <ProfileIcon />
        </div>
      </div>
    </main>
  );
};
export default HeaderDashboard;
