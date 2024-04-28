/*
|-----------------------------------------
| setting up SideBar for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, April, 2024
|-----------------------------------------
*/

"use client";

import { useGlobalStore } from "@/lib/global-store";

const SideBar = () => {
  const apiData = useGlobalStore((state) => state.apiData);
  return <main></main>;
};
export default SideBar;
