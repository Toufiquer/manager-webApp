/*
|-----------------------------------------
| setting up PaymentDetails for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/
import ActivePlan from "./active-plan";

const PaymentDetails = () => {
  return (
    <main className="max-w-4xl mx-auto flex flex-col">
      <h2 className="py-8 text-4xl font-semibold">Payment details</h2>
      <ActivePlan />
    </main>
  );
};
export default PaymentDetails;
