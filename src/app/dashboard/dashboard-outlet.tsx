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
import DashboardMyTask from "./outlet-components/dashboard-my-task";
import DashboardPeoples from "./outlet-components/dashboard-peoples";
import DashboardSettings from "./outlet-components/dashboard-settings";
import DashboardReporting from "./outlet-components/dashboard-reporting";
import DashboardOnboarding from "./outlet-components/dashboard-onboarding";
import DashboardOffBoarding from "./outlet-components/dashboard-off-boarding";
import DashboardInvitePeople from "./outlet-components/dashboard-invite-people";
import DashboardPeopleDetails from "./outlet-components/dashboard-people-details";

const DashboardOutlet = () => {
  const dashboardData = useGlobalStore((store) => store.dashboardData);
  let renderOutlet = <DashboardHome />;
  if (dashboardData.currentOutletName === "home") {
    renderOutlet = <DashboardHome />;
  } else if (dashboardData.currentOutletName === "inbox") {
    renderOutlet = <DashboardInbox />;
  } else if (dashboardData.currentOutletName === "invite-people") {
    renderOutlet = <DashboardInvitePeople />;
  } else if (dashboardData.currentOutletName === "my-task") {
    renderOutlet = <DashboardMyTask />;
  } else if (dashboardData.currentOutletName === "off-boarding") {
    renderOutlet = <DashboardOffBoarding />;
  } else if (dashboardData.currentOutletName === "onboarding") {
    renderOutlet = <DashboardOnboarding />;
  } else if (dashboardData.currentOutletName === "people-details") {
    renderOutlet = <DashboardPeopleDetails />;
  } else if (dashboardData.currentOutletName === "peoples") {
    renderOutlet = <DashboardPeoples />;
  } else if (dashboardData.currentOutletName === "settings") {
    renderOutlet = <DashboardSettings />;
  } else if (dashboardData.currentOutletName === "reporting") {
    renderOutlet = <DashboardReporting />;
  }
  return renderOutlet;
};
export default DashboardOutlet;
