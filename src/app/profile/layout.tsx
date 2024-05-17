/*
|-----------------------------------------
| setting up Layout for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/
import Header from "@/components/common/header";
import SideBar from "./side-bar";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className="">
      <Header />
      <div className="px-4">
        <SideBar />
        <div>{children}</div>
      </div>
    </main>
  );
};
export default Layout;
