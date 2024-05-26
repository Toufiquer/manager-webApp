/*
|-----------------------------------------
| setting up Pricing for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/
export type PRICING = {
  id: string | number;
  monthlyCost: number;
  title: string;
  description: string;
  features: { id: string | number; title: string }[];
};

export const cardData: PRICING[] = [
  {
    id: 1,
    monthlyCost: 19,
    title: "Professional",
    description: "All the basics for starting a new business",
    features: [
      { id: 1, title: "1 user" },
      { id: 2, title: "Front plan features" },
      { id: 3, title: "1 app" },
    ],
  },
  {
    id: 2,
    monthlyCost: 39,
    title: "Team",
    description: "Everything you need for a growing business",
    features: [
      { id: 1, title: "3 user" },
      { id: 2, title: "Front plan features" },
      { id: 3, title: "3 app" },
      { id: 4, title: "Product support" },
    ],
  },
  {
    id: 3,
    monthlyCost: 59,
    title: "Enterprise",
    description: "Advanced features for scaling your business",
    features: [
      { id: 1, title: "Unlimited users" },
      { id: 2, title: "Front plan features" },
      { id: 3, title: "Unlimited apps" },
      { id: 4, title: "Product support" },
    ],
  },
];
