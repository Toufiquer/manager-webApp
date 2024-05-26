/*
|-----------------------------------------
| setting up Enterprise for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/
import Image from "next/image";

const imageClass = "mx-auto h-auto w-auto ";

const Enterprise = () => {
  return (
    <main>
      <div className="mx-auto my-12 flex w-full max-w-[960px] flex-col">
        <h2 className="my-6 text-center text-3xl font-semibold">
          Trusted by Open Source, enterprise, and <br />
          more than 33,000 of you
        </h2>
        <div className="mx-auto my-8 flex max-w-[1000px] flex-wrap items-center justify-center gap-8">
          <Image
            priority={false}
            quality={75}
            src="https://i.ibb.co/b3rwx5v/amazon-dark.png"
            width={100}
            height={80}
            className={imageClass}
            alt="amazon Image"
          />
          <Image
            priority={false}
            quality={75}
            src="https://i.ibb.co/wWQg9P9/airbnb-dark.png"
            width={100}
            height={80}
            className={imageClass}
            alt="airbnb Image"
          />
          <Image
            priority={false}
            quality={75}
            src="https://i.ibb.co/xDxTrcY/business-insider-dark.png"
            width={100}
            height={80}
            className={imageClass}
            alt="business Image"
          />
          <Image
            priority={false}
            quality={75}
            src="https://i.ibb.co/BKQKGnK/capsule-dark.png"
            width={100}
            height={80}
            className={imageClass}
            alt="capsule Image"
          />
          <Image
            priority={false}
            quality={75}
            src="https://i.ibb.co/71m2Rch/forbes-dark.png"
            width={100}
            height={80}
            className={imageClass}
            alt="forbes Image"
          />
          <Image
            priority={false}
            quality={75}
            src="https://i.ibb.co/W5DR0Zt/google-dark.png"
            width={100}
            height={80}
            className={imageClass}
            alt="google Image"
          />
          <Image
            priority={false}
            quality={75}
            src="https://i.ibb.co/hs226T1/hubspot-dark.png"
            width={100}
            height={80}
            className={imageClass}
            alt="hubspot Image"
          />
          <Image
            priority={false}
            quality={75}
            src="https://i.ibb.co/DtHt0hG/kaplan-dark.png"
            width={100}
            height={80}
            className={imageClass}
            alt="kaplan Image"
          />
          <Image
            priority={false}
            quality={75}
            src="https://i.ibb.co/VqGhKbS/layar-dark.png"
            width={100}
            height={80}
            className={imageClass}
            alt="layar Image"
          />
          <Image
            priority={false}
            quality={75}
            src="https://i.ibb.co/XyXKfZ5/shopify-dark.png"
            width={100}
            height={80}
            className={imageClass}
            alt="shopify Image"
          />
          <Image
            priority={false}
            quality={75}
            src="https://i.ibb.co/vQRKFd2/vidados-dark.png"
            width={100}
            height={80}
            className={imageClass}
            alt="vidados Image"
          />
        </div>
      </div>
    </main>
  );
};
export default Enterprise;
