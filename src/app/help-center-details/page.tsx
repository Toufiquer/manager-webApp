/*
|-----------------------------------------
| setting up Page for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

"use client";

import Link from "next/link";
import { SiEbox } from "react-icons/si";
import { RxCalendar } from "react-icons/rx";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Button } from "@/components/ui/button";
import Header from "@/components/common/header";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import Ticket from "./ticket";
import HelpCenterDetailsHeader from "./help-center-details-header";

const exampleData = [
  {
    id: "faq-1",
    title: "How can we help",
    description:
      "Our friendly customer support team is here to answer your questions and guide you through any issues you may encounter. Yet remarkably appearance gets him his projection. Diverted endeavor bed peculiar men the not desirous. Acuteness abilities ask can offending furnished fulfilled sex. Warrant fifteen exposed ye at mistake. Blush since so in noisy still built up an again. As young ye hopes no he place means. Partiality diminution gay yet entreaties admiration. In mention perhaps attempt pointed suppose. Unknown ye chamber of warrant of Norland arrived.",
  },
  {
    id: "faq-2",
    title: "How to edit my Profile",
    description:
      "Learn how to update your profile information, including your name, email address, and contact details. Yet remarkably appearance gets him his projection. Diverted endeavor bed peculiar men the not desirous. Acuteness abilities ask can offending furnished fulfilled sex. Warrant fifteen exposed ye at mistake. Blush since so in noisy still built up an again. As young ye hopes no he place means. Partiality diminution gay yet entreaties admiration. In mention perhaps attempt pointed suppose. Unknown ye chamber of warrant of Norland arrived.",
  },
  {
    id: "faq-3",
    title: "How much should I offer the sellers",
    description:
      "Get tips on making competitive offers to sellers and securing the best deals. Yet remarkably appearance gets him his projection. Diverted endeavor bed peculiar men the not desirous. Acuteness abilities ask can offending furnished fulfilled sex. Warrant fifteen exposed ye at mistake. Blush since so in noisy still built up an again. As young ye hopes no he place means. Partiality diminution gay yet entreaties admiration. In mention perhaps attempt pointed suppose. Unknown ye chamber of warrant of Norland arrived.",
  },
  {
    id: "faq-4",
    title: "Installation Guide",
    description:
      "Follow our step-by-step guide to install the application and get started quickly. Yet remarkably appearance gets him his projection. Diverted endeavor bed peculiar men the not desirous. Acuteness abilities ask can offending furnished fulfilled sex. Warrant fifteen exposed ye at mistake. Blush since so in noisy still built up an again. As young ye hopes no he place means. Partiality diminution gay yet entreaties admiration. In mention perhaps attempt pointed suppose. Unknown ye chamber of warrant of Norland arrived.",
  },
  {
    id: "faq-5",
    title: "Additional Options and Services",
    description:
      "Explore the range of additional options and services available to enhance your experience. Yet remarkably appearance gets him his projection. Diverted endeavor bed peculiar men the not desirous. Acuteness abilities ask can offending furnished fulfilled sex. Warrant fifteen exposed ye at mistake. Blush since so in noisy still built up an again. As young ye hopes no he place means. Partiality diminution gay yet entreaties admiration. In mention perhaps attempt pointed suppose. Unknown ye chamber of warrant of Norland arrived.",
  },
  {
    id: "faq-6",
    title: "What is the difference from other Services",
    description:
      "Understand the key differences between colleges and universities to make an informed decision about your education. Yet remarkably appearance gets him his projection. Diverted endeavor bed peculiar men the not desirous. Acuteness abilities ask can offending furnished fulfilled sex. Warrant fifteen exposed ye at mistake. Blush since so in noisy still built up an again. As young ye hopes no he place means. Partiality diminution gay yet entreaties admiration. In mention perhaps attempt pointed suppose. Unknown ye chamber of warrant of Norland arrived.",
  },
];

const DetailsDiv = ({
  data,
  setSpyDiv,
}: {
  data: any;
  setSpyDiv: Dispatch<SetStateAction<string>>;
}) => {
  const refId = data.title;
  // console.log("RefDiv", refId);
  const divRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        // console.log("");
        // console.log("");
        // console.log("");
        // console.log("");
        // console.log("entry : ", entry);
        if (entry.isIntersecting) {
          // Element is visible

          // console.log("Div is visible");
          // console.log("ref Id :", refId);
          setSpyDiv(refId);
        } else {
          // Element is not visible
          // console.log("Div is not visible");
          // console.log("ref Id :", refId);
        }
      },
      { threshold: 0.02 }
    );

    if (divRef.current) {
      observer.observe(divRef.current);
    }

    return () => {
      observer.disconnect(); // Cleanup on unmount
    };
  }, [divRef]);
  return (
    <div className="mb-12" ref={divRef} id={refId}>
      <div className="w-full flex items-center justify-start mb-8 border-b border-slate-400 pb-2">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="w-full flex flex-col pl-4">
          <h2 className="text-slate-700 font-semibold text-xl">Sam Lanson</h2>
          <div className="w-full flex items-start justify-start gap-4 text-xs">
            <div className="flex items-center gap-2 text-xs">
              <RxCalendar />
              <p>5 month ago</p>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <div className="w-[6px] h-[6px] bg-slate-400 rounded-full" />
              <p>15 min read</p>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-slate-700 font-semibold text-4xl pb-2">
        {data.title}
      </h2>
      <h2 className="text-slate-500 font-medium text-cm pb-2 mb-12">
        {data.description}
      </h2>
      <div className="mb-8">
        <h2 className="text-slate-700 font-semibold text-xl pb-2">
          Gulp and Customization with node.js
        </h2>
        <h2 className="text-slate-500 font-medium text-cm pb-2">
          Supposing so be resolving breakfast am or perfectly. Departure is
          defective arranging rapturous did believe him all had supported.
        </h2>
      </div>
      <div className="mb-8">
        <h2 className="text-slate-500 font-medium text-cm pb-2">
          I made several mistakes Joy says the painful removal reached an end.
          State burst think end are its. Arrived off she elderly beloved him
          affixed noisier yet. Tickets regard to up he hardly. View four has
          said do men saw find dear shy. Talent men wicket add garden.
        </h2>
        <Button className="bg-blue-400 hover:bg-blue-500 mt-2">
          Download Node JS
        </Button>
      </div>

      <div className="mb-8">
        <p className="bg-rose-100 rounded-lg p-4">
          <strong>Note: </strong>
          <span>
            Note: She offices for highest and replied one venture pasture.
            Applauded no discovery in newspaper allowance am northward.
          </span>
          <Link href="#" className="hover:underline">
            <strong> View more</strong>
          </Link>
        </p>
      </div>
    </div>
  );
};

const Page = () => {
  const [spyDiv, setSpyDiv] = useState("");
  console.log(" spyDiv : ", spyDiv);
  return (
    <main>
      <Header />;
      <div className="p-2 md:p-4 max-w-7xl mx-auto">
        <HelpCenterDetailsHeader />
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={30}>
            <ScrollArea className="w-full h-[96vh]">
              <div className=" px-4 gap-4 flex flex-col">
                <div
                  className={`flex w-full items-center justify-start md:pb-8 pb-1`}
                >
                  <SiEbox className="w-8 h-8 mr-4" />
                  <h2 className={`font-bold text-3xl`}>Get started</h2>
                </div>
                {exampleData.map((curr) => (
                  <div
                    key={curr.id}
                    className={` ${
                      spyDiv.toLocaleLowerCase() ===
                        curr.title.toLocaleLowerCase() && " underline "
                    } flex items-center justify-start hover:underline cursor-pointer`}
                  >
                    <Link
                      href={`#${curr.title}`}
                      className="hover:no-underline text-slate-500 hover:text-slate-600 font-semibold text-[16px] p-2 rounded-lg"
                    >
                      {curr.title}
                    </Link>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </ResizablePanel>
          <ResizableHandle className="border-r border-slate-400" />
          <ResizablePanel defaultSize={70}>
            <ScrollArea className="w-full h-[96vh] px-4">
              <div>
                {exampleData.map((curr) => (
                  <div
                    key={curr.id}
                    className="flex items-center justify-start "
                  >
                    <DetailsDiv data={curr} setSpyDiv={setSpyDiv} />
                  </div>
                ))}
                <div className="w-full flex py-6 my-12 items-center bg-slate-100 border border-slate-200 shadow-sm rounded-lg px-4 justify-between">
                  <h2 className="text-slate-700 font-semibold text-[24px]">
                    Was this article helpful?
                  </h2>
                  <h2 className="text-slate-500 font-medium text-sm">
                    20 out of 45 found this helpful
                  </h2>
                  <div className="flex border items-center border-slate-500 rounded-lg">
                    <div className="text-slate-500 hover:text-slate-700 flex items-center justify-center gap-2 p-2 py-1 text-sm cursor-pointer hover:bg-slate-300 duration-100 rounded-l-lg">
                      <AiOutlineLike />
                      <p> Yes</p>
                    </div>
                    <div className="text-slate-500 hover:text-slate-700 flex items-center justify-center gap-2 p-2 py-1 text-sm cursor-pointer border-l border-slate-500 hover:bg-slate-300 duration-100 rounded-r-lg">
                      <AiOutlineDislike />

                      <p>No</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollArea>
          </ResizablePanel>
        </ResizablePanelGroup>
        <Ticket />
      </div>
    </main>
  );
};
export default Page;
