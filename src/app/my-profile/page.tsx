/*
|-----------------------------------------
| setting up Page for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/
 
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";
import PersonalForm from "./utils/personal-form";

const Page = () => {
  return (
    <main className="w-full flex flex-col p-8 md:ml-8 ">
      <h2 className="text-4xl font-bold text-slate-800">My Profile</h2>
      <h2 className="text-xl font-bold text-slate-600 mt-12 ">
        Personal Information
      </h2>
      <div className="w-full border-b py-2" />
      <div className="text-sm text-slate-500 mt-4">Profile Picture</div>
      <div className="relative mt-2 max-w-[100px]">
        <div className="bg-rose-500 cursor-pointer p-1  absolute top-0 right-1 rounded-full">
          <RxCross2 className="text-white p-[2px]" />
        </div>
        <div className="w-full flex items-center justify-between">
          <Image
            src="/profile.png"
            width={100}
            height={100}
            alt="Picture of the author"
          />
          <div className="px-4 py-2 bg-slate-600 text-white rounded-lg cursor-pointer font-bold">
            Change
          </div>
        </div>
      </div>
      <div className="mt-12">
        <PersonalForm />
      </div>
    </main>
  );
};
export default Page;
