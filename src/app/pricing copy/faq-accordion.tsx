/*
|-----------------------------------------
| setting up faq-accordion for the app
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

"use client";

import { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export type QUESTIONANSWER = {
  id: string | number;
  question: string;
  answer?: string;
  answerList?: string[];
};

const FAQAccordion = ({
  children,
  data,
  className,
}: {
  children?: React.ReactNode | null;
  data?: QUESTIONANSWER;
  className?: string | null;
}) => {
  const [toggle, setToggle] = useState(false);
  const {
    question = "",
    answer = "",
    answerList = [],
  } = data as QUESTIONANSWER;
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1" className={`w-full ${className}`}>
        <AccordionTrigger
          onClick={handleToggle}
          className="w-[248px] rounded-[.5rem] py-4 hover:no-underline"
        >
          <div className="flex w-full items-center justify-between text-[1.1rem]">
            <h2 className="text-blue-500 duration-200">{question}</h2>{" "}
            {/* {toggle ? <AiOutlineMinus /> : <AiOutlinePlus />} */}
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex w-full flex-col text-[1.1rem]">
            {answer && <p className="mb-2">{answer}</p>}
            {answerList.length > 0 && (
              <ol>
                {answerList.map((curr, idx) => (
                  <li key={idx} className="list-decimal text-[.9rem]">
                    {`${idx + 1}.  ${curr}`}
                  </li>
                ))}
              </ol>
            )}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
export default FAQAccordion;
