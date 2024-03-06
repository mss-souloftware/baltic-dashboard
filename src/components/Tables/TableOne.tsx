import { BRAND } from "@/types/brand";
import Image from "next/image";
import React, { useState } from 'react';

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

const ToggleTableData = () => {
  const [selectedDatatype, setSelectedDatatype] = useState("container");
  const handleButtonClick = (datatype) => {
    setSelectedDatatype(datatype);
  };


  return (

    <div className="rounded-xl border border-stroke bg-white w-full px-2 pb-2.5 pt-3 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-3 xl:pb-1 col-span-8 xl:col-span-8" >
      <div className="flex justify-between items-center mb-6">
        <h4 className="text-md font-semibold text-black dark:text-white" datatype="container" style={{ display: selectedDatatype === "container" ? "flex" : "none" }}>
          Zu Entladen
        </h4>

        <h4 className="text-md font-semibold text-black dark:text-white" datatype="crain" style={{ display: selectedDatatype === "crain" ? "flex" : "none" }}>
          Zu Beladen
        </h4>

        <h4 className="text-md font-semibold text-black dark:text-white" datatype="list" style={{ display: selectedDatatype === "list" ? "flex" : "none" }}>
          Zugdetails
        </h4>

        <h4 className="text-md font-semibold text-black dark:text-white" datatype="train" style={{ display: selectedDatatype === "train" ? "flex" : "none" }}>
          Zugzulauf
        </h4>

        <div className="selectPicker" style={{ display: selectedDatatype === "list" ? "flex" : "none" }}>
          <span className="mr-2 font-medium">Kran</span>
          <select className="bg-gray-2 border text-sm">
            <option value="">alle</option>
            <option value="">SK</option>
            <option value="">ACAN</option>
          </select>
        </div>

        <div className="datePicker">
          <span className="mr-2 font-medium">Datum von</span>
          <input className="bg-gray-2 border px-2 w-9" type="date" />
          <span className="mx-2 font-medium">bis</span>
          <input className="bg-gray-2 border px-2 w-9" type="date" />
        </div>

        <div className="flex">
          <button className={`p-3 rounded-md mr-1 ${selectedDatatype === "container" ? "bg-[#3B74B9]" : "bg-gray"}`} datatype="container" onClick={() => handleButtonClick("container")}>
            <Image
              className={`${selectedDatatype === "container" ? "invert brightness-0" : ""}`}
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

          <button className={`p-3 rounded-md mr-1 ${selectedDatatype === "crain" ? "bg-[#3B74B9]" : "bg-gray"}`} datatype="crain" onClick={() => handleButtonClick("crain")}>
            <Image
              className={`${selectedDatatype === "crain" ? "invert brightness-0" : ""}`}
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

          <button className={`p-3 rounded-md mr-1 ${selectedDatatype === "list" ? "bg-[#3B74B9]" : "bg-gray"}`} datatype="list" onClick={() => handleButtonClick("list")}>
            <Image
              className={`${selectedDatatype === "list" ? "invert brightness-0" : ""}`}
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

          <button className={`p-3 rounded-md mr-1 ${selectedDatatype === "train" ? "bg-[#3B74B9]" : "bg-gray"}`} datatype="train" onClick={() => handleButtonClick("train")}>
            <Image
              className={`${selectedDatatype === "train" ? "invert brightness-0" : ""}`}
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


      <div className="flex flex-col" datatype="container" style={{ display: selectedDatatype === "container" ? "flex" : "none" }}>
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

      <div className="flex flex-col" datatype="crain" style={{ display: selectedDatatype === "crain" ? "flex" : "none" }}>
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

      <div className="flex flex-col" datatype="list" style={{ display: selectedDatatype === "list" ? "flex" : "none" }}>
        <div className="flex justify-between  gap-0 rounded-sm dark:bg-meta-4 ">
          <div className="p-1 xl:p-1">
            <h5 className="text-[12px] font-medium">
              Typ
            </h5>
          </div>
          <div className="p-1 xl:p-1">
            <h5 className="text-[12px] font-medium">
              Nummer
            </h5>
          </div>
          <div className="p-1 xl:p-1">
            <h5 className="text-[12px] font-medium">
              Gewicht
            </h5>
          </div>
          <div className="p-1 xl:p-1">
            <h5 className="text-[12px] font-medium">
              Länge
            </h5>
          </div>
          <div className="p-1 xl:p-1">
            <h5 className="text-[12px] font-medium">
              IMO
            </h5>
          </div>
          <div className="p-1 xl:p-1">
            <h5 className="text-[12px] font-medium">
              Verschiffung
            </h5>
          </div>
          <div className="p-1 xl:p-1">
            <h5 className="text-[12px] font-medium">
              akt. Stellplatz
            </h5>
          </div>
          <div className="p-1 xl:p-1">
            <h5 className="text-[12px] font-medium">
              Seq
            </h5>
          </div>
          <div className="p-1 xl:p-1">
            <h5 className="text-[12px] font-medium">
              Waggonnr
            </h5>
          </div>
          <div className="p-1 xl:p-1">
            <h5 className="text-[12px] font-medium">
              Typ
            </h5>
          </div>
          <div className="p-1 xl:p-1">
            <h5 className="text-[12px] font-medium">
              Gewicht
            </h5>
          </div>
          <div className="p-1 xl:p-1">
            <h5 className="text-[12px] font-medium">
              Anz. LE
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
          <div className="flex items-center justify-start p-1">
            <p className="text-meta-3">$87</p>
          </div>
          <div className="flex items-center justify-start p-1">
            <p className="text-meta-3">$87</p>
          </div>
          <div className="flex items-center justify-start p-1">
            <p className="text-meta-3">$87</p>
          </div>
          <div className="flex items-center justify-start p-1">
            <p className="text-meta-3">$87</p>
          </div>
        </div>

      </div>

      <div className="flex flex-col" datatype="train" style={{ display: selectedDatatype === "train" ? "flex" : "none" }}>
        <div className="flex justify-between  gap-0 rounded-sm dark:bg-meta-4 ">
          <div className="p-1 xl:p-1">
            <h5 className="text-[12px] font-medium">
              Zugname
            </h5>
          </div>
          <div className="p-1 xl:p-1">
            <h5 className="text-[12px] font-medium">
              Zugnummer
            </h5>
          </div>
          <div className="p-1 xl:p-1">
            <h5 className="text-[12px] font-medium">
              Anz. LE
            </h5>
          </div>
          <div className="p-1 xl:p-1">
            <h5 className="text-[12px] font-medium">
              ETA
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
        </div>

      </div>

    </div >
  );
}

const TableOne = () => {
  return (
    <ToggleTableData />
  );
};

export default TableOne;