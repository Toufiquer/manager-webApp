/*
|-----------------------------------------
| setting up Page for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import HeaderDashboard from "./header-dashboard";
import Sidebar from "./sidebar";
import DashboardOutlet from "./dashboard-outlet";

const Page = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <HeaderDashboard />
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel minSize={10} defaultSize={15}>
          <div className="min-h-screen">
            <Sidebar />
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel>
          <div className="min-h-screen">
            <DashboardOutlet />
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};
export default Page;
