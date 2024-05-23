/*
|-----------------------------------------
| setting up HelpCenterHeader for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

import Link from "next/link";

const SearchBar = () => {
  return (
    <div className="max-w-md">
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
          placeholder="Search for answer..."
          required
        />
      </div>
    </div>
  );
};

const HelpCenterHeader = () => {
  return (
    <main className="my-8">
      <div>
        <h2 className="py-4 font-bold text-5xl">How can we help you?</h2>
        <div className="mt-2">
          <SearchBar />
          <p className="mt-8 text-slate-500 text-sm max-w-[400px] gap-2 py-4 flex flex-wrap">
            Popular search:
            <Link href="#" className="text-slate-800 underline">
              How can we help?
            </Link>
            <Link href="#" className="text-slate-800 underline">
              Installation Guide
            </Link>
            <Link href="#" className="text-slate-800 underline">
              How to view expired tickets?
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};
export default HelpCenterHeader;
