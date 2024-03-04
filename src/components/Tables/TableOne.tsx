import { BRAND } from "@/types/brand";
import Image from "next/image";

const brandData: BRAND[] = [
  {
    logo: "/images/brand/brand-01.svg",
    name: "Google",
    visitors: 3.5,
    revenues: "5,768",
    sales: 590,
    conversion: 4.8,
  },
  {
    logo: "/images/brand/brand-05.svg",
    name: "Facebook",
    visitors: 3.5,
    revenues: "6,768",
    sales: 390,
    conversion: 4.2,
  },
];

const TableOne = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white w-full px-2 pb-2.5 pt-3 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-3 xl:pb-1 col-span-8 xl:col-span-8">
      <div className="flex justify-between">
        <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
          Zu Entladen
        </h4>

        <div className="datePicker">
          <span className="mr-2 font-medium">Datum von</span>
          <input className="bg-gray-2 border px-2" type="date" />
          <span className="mx-2 font-medium">bis</span>
          <input className="bg-gray-2 border px-2" type="date" />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-between  gap-0 rounded-sm dark:bg-meta-4 ">
          <div className="p-1 xl:p-1">
            <h5 className="text-[12px] font-medium">
              LHG Zugname
            </h5>
          </div>
          <div className="p-1 xl:p-1">
            <h5 className="text-[12px] font-medium">
              Zugnummer
            </h5>
          </div>
          <div className="p-1 xl:p-1">
            <h5 className="text-[12px] font-medium">
              Bahnma
            </h5>
          </div>
          <div className="p-1 xl:p-1">
            <h5 className="text-[12px] font-medium">
              Datum
            </h5>
          </div>
          <div className="p-1 xl:p-1">
            <h5 className="text-[12px] font-medium">
              Gesamteinheiten
            </h5>
          </div>
          <div className="p-1 xl:p-1">
            <h5 className="text-[12px] font-medium">
              Gesamtwaggons
            </h5>
          </div>
          <div className="p-1 xl:p-1">
            <h5 className="text-[12px] font-medium">
              Zuglänge
            </h5>
          </div>
          <div className="p-1 xl:p-1">
            <h5 className="text-[12px] font-medium">
              Resteinheiten
            </h5>
          </div>
        </div>

        {brandData.map((brand, key) => (
          <div className="flex justify-between">

            <div className="flex items-center justify-start p-1">
              <p className="text-black dark:text-white">{brand.visitors}K</p>
            </div>
            <div className="flex items-center justify-start p-1">
              <p className="text-black dark:text-white">{brand.visitors}K</p>
            </div>
            <div className="flex items-center justify-start p-1">
              <p className="text-black dark:text-white">{brand.visitors}K</p>
            </div>
            <div className="flex items-center justify-start p-1">
              <p className="text-black dark:text-white">{brand.visitors}K</p>
            </div>
            <div className="flex items-center justify-start p-1">
              <p className="text-black dark:text-white">{brand.visitors}K</p>
            </div>
            <div className="flex items-center justify-start p-1">
              <p className="text-black dark:text-white">{brand.visitors}K</p>
            </div><div className="flex items-center justify-start p-1">
              <p className="text-black dark:text-white">{brand.visitors}K</p>
            </div>
            <div className="flex items-center justify-start p-1">
              <p className="text-meta-3">${brand.revenues}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableOne;
