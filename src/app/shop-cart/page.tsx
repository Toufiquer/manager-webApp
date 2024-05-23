/*
|-----------------------------------------
| setting up Page for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

import Banner from "./banner";
import CartSidebar from "./cart-sidebar";
import ShopCartFaq from "./shop-cart-faq";
import CartContainer from "./cart-container";
import ShopCartHeader from "./shop-cart-header";

import Header from "@/components/common/header";

const Page = () => {
  return (
    <main>
      <Header />
      <div className="p-2 md:p-4 max-w-7xl mx-auto">
        <ShopCartHeader />
        <div className="w-full grid grid-cols-1 md:grid-cols-[1fr_300px]">
          <CartContainer />
          <CartSidebar />
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-[1fr_300px]">
          <div className="div">
            <Banner />
            <ShopCartFaq />
          </div>
          <div />
        </div>
      </div>
    </main>
  );
};
export default Page;
