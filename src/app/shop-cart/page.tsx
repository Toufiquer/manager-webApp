/*
|-----------------------------------------
| setting up Page for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/
import Header from "@/components/common/header";
import ShopCartHeader from "./shop-cart-header";
import CartContainer from "./cart-container";

const Page = () => {
  return (
    <main>
      <Header />
      <div className="p-2 md:p-4 max-w-7xl mx-auto">
        <ShopCartHeader />
        <CartContainer />
      </div>
    </main>
  );
};
export default Page;
