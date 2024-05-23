/*
|-----------------------------------------
| setting up HelpCenterFaq for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const exampleData = [
  {
    id: "faq-1",
    title: "How can we help?",
    description:
      "Our friendly customer support team is here to answer your questions and guide you through any issues you may encounter. Yet remarkably appearance gets him his projection. Diverted endeavor bed peculiar men the not desirous. Acuteness abilities ask can offending furnished fulfilled sex. Warrant fifteen exposed ye at mistake. Blush since so in noisy still built up an again. As young ye hopes no he place means. Partiality diminution gay yet entreaties admiration. In mention perhaps attempt pointed suppose. Unknown ye chamber of warrant of Norland arrived.",
  },
  {
    id: "faq-2",
    title: "How to edit my Profile?",
    description:
      "Learn how to update your profile information, including your name, email address, and contact details. Yet remarkably appearance gets him his projection. Diverted endeavor bed peculiar men the not desirous. Acuteness abilities ask can offending furnished fulfilled sex. Warrant fifteen exposed ye at mistake. Blush since so in noisy still built up an again. As young ye hopes no he place means. Partiality diminution gay yet entreaties admiration. In mention perhaps attempt pointed suppose. Unknown ye chamber of warrant of Norland arrived.",
  },
  {
    id: "faq-3",
    title: "How much should I offer the sellers?",
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
    title: "What is the difference from other Services?",
    description:
      "Understand the key differences between colleges and universities to make an informed decision about your education. Yet remarkably appearance gets him his projection. Diverted endeavor bed peculiar men the not desirous. Acuteness abilities ask can offending furnished fulfilled sex. Warrant fifteen exposed ye at mistake. Blush since so in noisy still built up an again. As young ye hopes no he place means. Partiality diminution gay yet entreaties admiration. In mention perhaps attempt pointed suppose. Unknown ye chamber of warrant of Norland arrived.",
  },
];

const HelpCenterFaq = () => {
  return (
    <main className="flex flex-col gap-4 max-w-4xl mx-auto pb-12 mb-12">
      <h2 className="py-4">
        <h2 className="py-4 font-bold text-5xl text-center">
          Frequently Asked Questions
        </h2>
      </h2>
      <div className="w-full">
        <Accordion type="single" collapsible>
          {exampleData.map((curr) => (
            <AccordionItem
              value={curr.id}
              className="border-b border-slate-300 hover:border-slate-400"
            >
              <AccordionTrigger className="hover:no-underline text-slate-700 hover:text-slate-800 font-semibold text-[18px]">
                {curr.title}
              </AccordionTrigger>
              <AccordionContent className="text-sm font-medium text-slate-500 pb-8 text-left justify-start">
                {curr.description}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </main>
  );
};
export default HelpCenterFaq;
