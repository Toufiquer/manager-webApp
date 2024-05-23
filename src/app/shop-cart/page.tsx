/*
|-----------------------------------------
| setting up Page for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/
import Header from "@/components/common/header";
import ShopCartHeader from "./shop-cart-header";

const Page = () => {
  return (
    <main>
      <Header />

      <ShopCartHeader />
    </main>
  );
};
export default Page;
