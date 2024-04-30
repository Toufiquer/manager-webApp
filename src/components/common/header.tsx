/*
|-----------------------------------------
| setting up Header for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, April, 2024
|-----------------------------------------
*/
import Image from "next/image";

import Profile from "./profile";
import Link from "next/link";

const Header = () => {
  return (
    <div className="border w-full h-[8vh]">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start w-[70vw]">
          <div className="border px-4 py-1">
            <Image
              width={40}
              height={40}
              alt="Logo"
              src="/profile.webp"
            ></Image>
          </div>
          <p className="text-bold text-2xl text-start">Meal Night</p>
        </div>
        <div className="flex items-center justify-end w-[30vw]">
          <Link href="/signUp">Sign Up</Link>
          <Link href="/signIn">Sign in</Link>
          <Profile />
        </div>
      </div>
    </div>
  );
};
export default Header;
