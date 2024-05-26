/*
|-----------------------------------------
| setting up Page for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/
import FAQAccordion from "./faq-accordion";
import { allFAQ } from "./faq-data";
import Enterprise from "./enterprise";
import Header from "./header";
import PicThePlan from "./pic-the-plan";
import PricingCard from "./pricing-card";

const Page = () => {
  return (
    <main>
      <Header />
      <PricingCard />
      <Enterprise />
      <PicThePlan />
      <div className="mx-auto max-w-[960px] px-2">
        <h2 className="mb-6 text-center text-[calc(1.33rem_+_.85vw)] font-[800]">
          Frequently Asked Questions
        </h2>
        {allFAQ.length > 0 &&
          allFAQ.map((curr) => <FAQAccordion data={curr} key={curr.id} />)}
      </div>
    </main>
  );
};
export default Page;
