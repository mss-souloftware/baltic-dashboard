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
    <div className="rounded-xl border border-stroke bg-white w-full px-2 pb-2.5 pt-3 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-3 xl:pb-1 col-span-8 xl:col-span-8">
      <div className="flex justify-between items-center mb-6">
        <h4 className="text-md font-semibold text-black dark:text-white">
          Zu Entladen
        </h4>

        <div className="datePicker">
          <span className="mr-2 font-medium">Datum von</span>
          <input className="bg-gray-2 border px-2 w-9" type="date" />
          <span className="mx-2 font-medium">bis</span>
          <input className="bg-gray-2 border px-2 w-9" type="date" />
        </div>

        <div className="flex">
          <button className="bg-gray p-3 rounded-md mr-1">
            <Image
              width={112}
              height={112}
              src={"/images/icon/container.png"}
              style={{
                width: "auto",
                height: "auto",
              }}
              alt="User"
            />
          </button>

          <button className="bg-gray p-3 rounded-md mr-1">
            <Image
              width={112}
              height={112}
              src={"/images/icon/crain.png"}
              style={{
                width: "auto",
                height: "auto",
              }}
              alt="User"
            />
          </button>

          <button className="bg-gray p-3 rounded-md mr-1">
            <Image
              width={112}
              height={112}
              src={"/images/icon/list.png"}
              style={{
                width: "auto",
                height: "auto",
              }}
              alt="User"
            />
          </button>

          <button className="bg-gray p-3 rounded-md">
            <Image
              width={112}
              height={112}
              src={"/images/icon/train.png"}
              style={{
                width: "auto",
                height: "auto",
              }}
              alt="User"
            />
          </button>
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


        <div className="flex justify-between">

          <div className="flex items-center justify-start p-1">
            <p className="text-black dark:text-white">45K</p>
          </div>
          <div className="flex items-center justify-start p-1">
            <p className="text-black dark:text-white">37K</p>
          </div>
          <div className="flex items-center justify-start p-1">
            <p className="text-black dark:text-white">22K</p>
          </div>
          <div className="flex items-center justify-start p-1">
            <p className="text-black dark:text-white">31K</p>
          </div>
          <div className="flex items-center justify-start p-1">
            <p className="text-black dark:text-white">53K</p>
          </div>
          <div className="flex items-center justify-start p-1">
            <p className="text-black dark:text-white">77K</p>
          </div><div className="flex items-center justify-start p-1">
            <p className="text-black dark:text-white">23K</p>
          </div>
          <div className="flex items-center justify-start p-1">
            <p className="text-meta-3">$87</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TableOne;
