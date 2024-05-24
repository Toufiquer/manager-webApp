/*
|-----------------------------------------
| setting up CartContainer for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/ 
import Link from "next/link";
import { LuBoxes } from "react-icons/lu";
import { IoIosPaper } from "react-icons/io";
import { BsEmojiSmile } from "react-icons/bs";
import { GrIntegration } from "react-icons/gr";
import { IoHomeOutline } from "react-icons/io5";
import { RiMoneyPoundCircleLine } from "react-icons/ri";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const iconStyle = "w-[50px] h-[50px] bg-blue-400 text-white rounded-lg p-1";
const exampleData = {
  categories: [
    {
      id: 1,
      title: "Getting Started",
      icon: <LuBoxes className={iconStyle} />,
      articles: [
        { id: "article-1", link: "#", content: "Get Started" },
        { id: "article-2", link: "#", content: "Gulp and Customization" },
        {
          id: "article-3",
          link: "#",
          content: "Color Scheme and Logo Settings",
        },
        {
          id: "article-4",
          link: "#",
          content: "Dark mode, RTL Version, and Lazy Load",
        },
        { id: "article-5", link: "#", content: "Updates and Support" },
      ],
      readMore: {
        id: "article-6",
        link: "#",
        content: "View all articles",
      },
    },
    {
      id: 2,
      title: "Account Setup",
      icon: <BsEmojiSmile className={iconStyle} />,
      articles: [
        { id: "article-7", link: "#", content: "Connecting to your Account" },
        {
          id: "article-8",
          link: "#",
          content: "Edit your profile information",
        },
        { id: "article-9", link: "#", content: "Adding your profile picture" },
        { id: "article-10", link: "#", content: "Describing your store" },
      ],
      readMore: {
        id: "article-11",
        link: "#",
        content: "View all articles",
      },
    },
    {
      id: 3,
      title: "Other Topics",
      icon: <IoIosPaper className={iconStyle} />,
      articles: [
        { id: "article-12", link: "#", content: "Security & Privacy" },
        {
          id: "article-13",
          link: "#",
          content: "Author, Publisher & Admin Guides",
        },
        { id: "article-14", link: "#", content: "Pricing plans" },
        { id: "article-15", link: "#", content: "Sales Tax & Regulatory Fees" },
      ],
      readMore: {
        id: "article-16",
        link: "#",
        content: "View all articles",
      },
    },
    {
      id: 4,
      title: "Advanced Usage",
      icon: <IoHomeOutline className={iconStyle} />,
      articles: [
        { id: "article-17", link: "#", content: "Admin & Billing" },
        { id: "article-18", link: "#", content: "Become a Pro" },
        { id: "article-19", link: "#", content: "Mobile application" },
        { id: "article-20", link: "#", content: "Guide" },
      ],
      readMore: {
        id: "article-21",
        link: "#",
        content: "View all articles",
      },
    },
    {
      id: 5,
      title: "Billing & Payments",
      icon: <RiMoneyPoundCircleLine className={iconStyle} />,
      articles: [
        { id: "article-22", link: "#", content: "How can I get a refund?" },
        { id: "article-23", link: "#", content: "How do I get a receipt" },
        { id: "article-24", link: "#", content: "Pricing plans" },
        { id: "article-25", link: "#", content: "Sales Tax & Regulatory Fees" },
      ],
      readMore: {
        id: "article-26",
        link: "#",
        content: "View all articles",
      },
    },
    {
      id: 6,
      title: "Integration",
      icon: <GrIntegration className={iconStyle} />,
      articles: [
        {
          id: "article-27",
          link: "#",
          content: "Overview of integration capabilities",
        },
        { id: "article-28", link: "#", content: "Setting up integrations" },
        { id: "article-29", link: "#", content: "How much software support?" },
      ],
      readMore: {
        id: "article-30",
        link: "#",
        content: "View all articles",
      },
    },
  ],
};

const CartContainer = () => {
  return (
    <main className="my-12 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-center justify-center">
        {exampleData.categories.map((curr) => (
          <div
            key={curr.id}
            className="min-w-[120px] w-full pb-12 relative h-full min-h-[120px] border border-slate-300 hover:border-slate-400 duration-200 rounded-lg p-2"
          >
            <div className="p-5 flex flex-col">
              <div className="pb-4 items-start justify-start">{curr.icon}</div>
              <div className="font-semibold text-xl pb-4">{curr.title}</div>

              <div className="flex flex-col gap-1 pb-8">
                {curr.articles.map((article) => (
                  <Link
                    key={article.id}
                    href={article.link}
                    className="flex items-center justify-start font-medium pt-1 gap-1 hover:text-blue-600 text-slate-500 cursor-pointer"
                  >
                    <MdOutlineKeyboardDoubleArrowRight />
                    <p>{article.content}</p>
                  </Link>
                ))}
              </div>
              {curr.readMore.id && (
                <div className="absolute bottom-0 left-0 pb-4 pl-8">
                  <Link
                    href={curr.readMore.link}
                    className="flex items-center justify-start gap-2 hover:text-blue-600 font-semibold text-blue-500"
                  >
                    <p>{curr.readMore.content}</p>
                    <HiOutlineArrowNarrowRight />
                  </Link>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};
export default CartContainer;
