/*
|-----------------------------------------
| setting up Page for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/
import { allFAQ } from "./faq-data";
import Header from "./header";
import PicThePlan from "./pic-the-plan";
import PricingCard from "./pricing-card";
import Productivity from "./productivity";
import FAQAccordion from "./faq-accordion";
import FeaturesIncluded from "./features-included";

const Page = () => {
  return (
    <main className="mb-12 pb-12">
      <Header />
      <PricingCard />
      <FeaturesIncluded />
      <PicThePlan />
      <Productivity />
      <div className="mx-auto max-w-[960px] px-2">
        <h2 className="mb-6 text-center text-[calc(1.33rem_+_.85vw)] font-[800]">
          You have questions we have answers
        </h2>
        {allFAQ.length > 0 &&
          allFAQ.map((curr) => <FAQAccordion data={curr} key={curr.id} />)}
      </div>
    </main>
  );
};
export default Page;
