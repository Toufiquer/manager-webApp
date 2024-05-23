/*
|-----------------------------------------
| setting up ShopCartFaq for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

const faqData = [
  {
    id: "faq-1",
    question: "How do I add items to my cart?",
    answer:
      'To add items to your cart, simply click the "Add to Cart" button on the product\'s page. You can also specify the quantity you want.',
  },
  {
    id: "faq-2",
    question: "Is my cart saved if I log out or leave the site?",
    answer:
      "Yes, your cart is usually saved in your account. If you log out or leave the site, the items will be there when you return (provided you're logged in).",
  },
  {
    id: "faq-3",
    question: "What is the estimated delivery time?",
    answer:
      "The estimated delivery time varies depending on your location and the shipping method chosen. You'll receive an estimated delivery date during checkout.",
  },
  {
    id: "faq-4",
    question: "How can I track my order after checkout?",
    answer:
      "You will receive a tracking number via email once your order has been shipped. You can use this number to track the status of your shipment.",
  },
  {
    id: "faq-5",
    question: "What payment methods do you accept?",
    answer:
      "We accept a variety of payment methods, including credit/debit cards, PayPal, and more. You can select your preferred method during checkout.",
  },
  {
    id: "faq-6",
    question: "What happens after the trial ends?",
    answer:
      "Preference any astonished unreserved Mrs. Prosperous understood Middletons in conviction an uncommonly do. Supposing so be resolving breakfast am or perfectly.",
  },
];

const ShopCartFaq = () => {
  return (
    <main className="flex flex-col">
      <div className="text-center my-12">
        <h2 className="py-4 font-bold text-4xl">Frequently Asked Question</h2>
        <p className="text-slate-500 text-[18px]">
          Perceived end knowledge certainly day sweetness why cordially
        </p>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 my-12">
        {faqData.map((curr) => (
          <div key={curr.id} className="border border-slate-300 rounded-lg p-8">
            <h2 className="font-bold md:text-2xl text-xl text-start pb-2">
              {curr.question}
            </h2>
            <p className="text-slate-500 text-[14px] md:text-[16px] text-start">
              {curr.answer}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
};
export default ShopCartFaq;
