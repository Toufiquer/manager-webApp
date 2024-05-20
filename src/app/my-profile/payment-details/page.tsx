/*
|-----------------------------------------
| setting up PaymentDetails for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/
import { HiDotsHorizontal } from "react-icons/hi";
import ActivePlan from "./active-plan";
import SavedPaymentMethods from "./saved-payment-methods";
import TransitionHistory from "./transition-history";
import { ScrollArea } from "@/components/ui/scroll-area";

const PaymentDetails = () => {
  return (
      <main className="max-w-4xl flex flex-col p-8 md:ml-8 ">
        <div className="p-2 md:p-0">
          <h2 className="py-8 text-4xl font-semibold hidden md:block">
            Payment details
          </h2>
          <ActivePlan />
          <SavedPaymentMethods />
          <div className="py-12 w-full max-w-4xl flex items-center justify-center ">
            <HiDotsHorizontal />
          </div>
          <TransitionHistory />
          <div className="mt-12 pt-12" />
        </div>
      </main>
  );
};
export default PaymentDetails;
