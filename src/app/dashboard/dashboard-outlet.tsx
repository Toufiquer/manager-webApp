/*
|-----------------------------------------
| setting up DashboardOutlet for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

"use client";

import { useGlobalStore } from "@/lib/global-store";

import DashboardHome from "./outlet-components/dashboard-home";
import DashboardInbox from "./outlet-components/dashboard-inbox";
import DashboardInvitePeople from "./outlet-components/dashboard-invite-people";
import DashboardMyTask from "./outlet-components/dashboard-my-task";
import DashboardOffBoarding from "./outlet-components/dashboard-off-boarding";
import DashboardOnboarding from "./outlet-components/dashboard-onboarding";
import DashboardPeopleDetails from "./outlet-components/dashboard-people-details";
import DashboardPeoples from "./outlet-components/dashboard-peoples";
import DashboardSettings from "./outlet-components/dashboard-settings";
import { sidebarData } from "./sidebar";
import DashboardReporting from "./outlet-components/dashboard-reporting";
const DashboardOutlet = () => {
  const dashboardData = useGlobalStore((store) => store.dashboardData);
  let renderOutlet = <DashboardHome />;
  if (dashboardData.currentOutletName === "home")
    renderOutlet = <DashboardHome />;
  if (dashboardData.currentOutletName === "inbox")
    renderOutlet = <DashboardInbox />;
  if (dashboardData.currentOutletName === "invite-people")
    renderOutlet = <DashboardInvitePeople />;
  if (dashboardData.currentOutletName === "my-task")
    renderOutlet = <DashboardMyTask />;
  if (dashboardData.currentOutletName === "off-boarding")
    renderOutlet = <DashboardOffBoarding />;
  if (dashboardData.currentOutletName === "onboarding")
    renderOutlet = <DashboardOnboarding />;
  if (dashboardData.currentOutletName === "people-details")
    renderOutlet = <DashboardPeopleDetails />;
  if (dashboardData.currentOutletName === "peoples")
    renderOutlet = <DashboardPeoples />;
  if (dashboardData.currentOutletName === "settings")
    renderOutlet = <DashboardSettings />;
  if (dashboardData.currentOutletName === "reporting")
    renderOutlet = <DashboardReporting />;
  return renderOutlet;
};
export default DashboardOutlet;
