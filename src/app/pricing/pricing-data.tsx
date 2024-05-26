/*
|-----------------------------------------
| setting up Pricing for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

import { FaTelegramPlane } from "react-icons/fa";
import { FaRocket } from "react-icons/fa6";
import { IoIosFlash } from "react-icons/io";

export type PRICING = {
  id: string | number;
  monthlyCost: number;
  icon: JSX.Element;
  title: string;
  description: string;
  features: { id: string | number; title: string }[];
};

const iconStyle = "w-8 h-8";
export const cardData: PRICING[] = [
  {
    id: 1,
    icon: <FaRocket className={iconStyle} />,
    monthlyCost: 25,
    title: "Basic plan",
    description: "basic feature for up to 10 users",
    features: [
      { id: 1, title: "Up to 05 users monthly" },
      { id: 2, title: "Free 5 host domain" },
      { id: 3, title: "Google docs style editors" },
      { id: 4, title: "Support for 30+ languages" },
    ],
  },
  {
    id: 2,
    monthlyCost: 59,
    icon: <FaTelegramPlane className={iconStyle} />,
    title: "Standard plan",
    description: "basic feature for up to 20 users",
    features: [
      { id: 1, title: "Up to 05 users monthly" },
      { id: 2, title: "Free 5 host domain" },
      { id: 3, title: "Google docs style editors" },
      { id: 4, title: "Support for 30+ languages" },
      { id: 5, title: "Landing page Web widgets" },
      { id: 6, title: "Landing pages Web widgets" },
      { id: 7, title: "24/7 dedicated Support" },
    ],
  },
  {
    id: 3,
    monthlyCost: 199,
    icon: <IoIosFlash className={iconStyle} />,
    title: "Enterprise",
    description: "basic feature for up to 10 users",
    features: [
      { id: 1, title: "Up to 05 users monthly" },
      { id: 2, title: "Free 5 host domain" },
      { id: 3, title: "Google docs style editors" },
      { id: 4, title: "Support for 30+ languages" },
    ],
  },
];
