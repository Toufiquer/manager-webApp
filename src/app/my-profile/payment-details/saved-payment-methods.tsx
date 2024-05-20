/*
|-----------------------------------------
| setting up SavedPaymentMethods for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/
import { FaPlus } from "react-icons/fa6";
import { FaCcMastercard } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { CiEdit } from "react-icons/ci";
import { IoTrashOutline } from "react-icons/io5";
import { ReactNode } from "react";
import { RiVisaFill } from "react-icons/ri";

const PaymentCard = ({
  title = " MasterCard **** 1569",
  expire = "Checking - Expires 12/26",
  icon = <FaCcMastercard className="w-[100px] h-[40px]" />,
  status,
}: {
  icon: ReactNode;
  title: string;
  expire: string;
  status?: string;
}) => {
  return (
    <main className="border p-4 pl-0 rounded-lg flex flex-col md:flex-row min-h-[100px] w-full">
      <div className="w-full flex items-center justify-start">
        <div className="p-2 pl-0">{icon}</div>
        <div className="flex flex-col items-start justify-start w-full">
          <div className="flex items-start text-xl font-semibold w-full justify-start">
            <p>{title}</p>
            <p>
              {status === "primary" && (
                <span className="bg-blue-400 text-white px-3 pb-[1px] mt-1 rounded-[4px] ml-4 text-xs">
                  {status}
                </span>
              )}
            </p>
          </div>
          <p className="text-slate-500 text-sm pt-1">{expire}</p>
        </div>
      </div>
      <div className="w-full flex items-start mt-2 ml-4 md:ml-0 md:items-center gap-4 justify-start md:justify-end">
        <Button className="hover:bg-slate-300 duration-200" variant="outline">
          <p className="flex items-center justify-center gap-2">
            {" "}
            <CiEdit />
            Edit
          </p>
        </Button>
        <Button className="hover:bg-slate-300 duration-200" variant="outline">
          <p className="flex items-center justify-center gap-2">
            <IoTrashOutline />
            Delete
          </p>
        </Button>
      </div>
    </main>
  );
};

const commonButtonStyle =
  "px-5 py-2 rounded-lg font-semibold text-[18px] duration-200 cursor-pointer flex gap-1 items-center";
const SavedPaymentMethods = () => {
  return (
    <main className=" py-12 my-12">
      <div className="py-12">
        <div className="w-full flex flex-col md:flex-row gap-2 items-start md:items-center border-b pb-4 justify-start md:justify-between">
          <h2 className="text-2xl font-bold">Saved payment methods</h2>
          <div
            className={`${commonButtonStyle} flex items-center gap-2 bg-blue-400 hover:bg-blue-500 text-white`}
          >
            <FaPlus />
            Add new card
          </div>
        </div>
        <div className="py-12 flex flex-col gap-4">
          {[
            {
              id: 1,
              title: "MasterCard •••• 1569",
              expire: "Checking - Expires 12/26",
              icon: <FaCcMastercard className="w-[100px] h-[40px]" />,
              status: "primary",
            },
            {
              id: 2,
              title: "VisaCard •••• 5620",
              expire: "Checking - Expires 12/26",
              icon: <RiVisaFill className="w-[100px] h-[40px]" />,
            },
          ].map((curr) => (
            <PaymentCard
              expire={curr.expire}
              icon={curr.icon}
              title={curr.title}
              key={curr.id}
              status={curr.status || undefined}
            />
          ))}
        </div>
      </div>
    </main>
  );
};
export default SavedPaymentMethods;
