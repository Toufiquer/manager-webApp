/*
|-----------------------------------------
| setting up Data for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/
import { ReactNode } from "react";

import { CiHeart } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { GoTrash, GoSignOut } from "react-icons/go";
import { BsBriefcase, BsBasket } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlinePayment, MdOutlineSecurity } from "react-icons/md";

export type sidebarType = {
  id: string;
  name: string;
  link: string;
  component: string;
  icon: ReactNode | string;
};
export interface SidebarDataType {
  menu: sidebarType[];
  profile: { name: string; imgUrl: string; email: string };
}
export const sidebarData: SidebarDataType = {
  menu: [
    {
      id: "1",
      name: "My Profile",
      link: "/my-profile",
      component: "/my-profile",
      icon: <IoPersonOutline />,
    },
    {
      id: "2",
      name: "Security",
      link: "/my-profile/security",
      component: "/security",
      icon: <MdOutlineSecurity />,
    },
    {
      id: "3",
      name: "Notification",
      link: "/my-profile/notification",
      component: "/notification",
      icon: <IoIosNotificationsOutline />,
    },
    {
      id: "4",
      name: "My Projects",
      link: "/my-profile/my-projects",
      component: "/my-projects",
      icon: <BsBriefcase />,
    },
    {
      id: "5",
      name: "Payment details",
      link: "/my-profile/payment-details",
      component: "/payment-details",
      icon: <MdOutlinePayment />,
    },
    {
      id: "6",
      name: "Order history",
      link: "/my-profile/order-history",
      component: "/order-history",
      icon: <BsBasket />,
    },
    {
      id: "7",
      name: "Wishlist",
      link: "/my-profile/wishlist",
      component: "/wishlist",
      icon: <CiHeart />,
    },
    {
      id: "8",
      name: "Delete profile",
      link: "/my-profile/delete-profile",
      component: "/delete-profile",
      icon: <GoTrash />,
    },
    {
      id: "9",
      name: "Sign Out",
      link: "/my-profile/sign-out",
      component: "/sign-out",
      icon: <GoSignOut />,
    },
  ],
  profile: { name: "Jacob Vau Miller", imgUrl: "", email: "example@gmail.com" },
};
