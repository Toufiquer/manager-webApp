/*
|-----------------------------------------
| setting up FAQ-data for the app
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

import { QUESTIONANSWER } from "./faq-accordion";

export const allFAQ: QUESTIONANSWER[] = [
  {
    id: 1,
    question: "How do I place an order?",
    answer: "You can place an order on our website by following these steps",
    answerList: [
      "Go to our website and create an account.",
      "Select the restaurant and dishes you want to order.",
      "Enter your delivery address and payment information.",
      "Review your order and submit it.",
    ],
  },
  {
    id: 2,
    question: "Is there a delivery fee?",
    answer:
      "Yes, there is a delivery fee for all orders. The delivery fee is calculated based on the distance from the restaurant to your delivery address.",
    answerList: [],
  },
  {
    question: "How long does it take to deliver my order?",
    answer:
      "The delivery time varies depending on the distance from the restaurant to your delivery address and the time of day. However, most orders are delivered within 30 minutes.",
    answerList: [],
    id: 3,
  },
  {
    question: "How can I track my order?",
    answer:
      "Once you have placed your order, you can track its status by logging into your account. You will be able to see the estimated delivery time and the location of your driver.",
    answerList: [],
    id: 4,
  },
  {
    question: "How do I pay for my order?",
    answer:
      "We accept a variety of payment methods, including credit cards, debit cards, and PayPal. You can choose your preferred payment method when you place your order.",
    answerList: [],
    id: 5,
  },
  {
    question: "What are your hours of operation?",
    answer:
      "Our hours of operation vary depending on the restaurant. You can see the hours of operation for each restaurant on their page.",
    answerList: [],
    id: 6,
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can contact customer support by email or phone. Our contact information is available on our website.",
    answerList: [],
    id: 7,
  },
];
