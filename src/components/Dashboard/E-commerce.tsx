"use client";
import React from "react";
import ChartTwo from "../Charts/ChartTwo";
import TableOne from "../Tables/TableOne";

const ECommerce: React.FC = () => {
  return (
    <>
      <div className="mt-4 grid grid-cols-12 gap-3 md:mt-6 md:gap-3 2xl:mt-7.5 2xl:gap-4">
        <TableOne />
        {/* <ChartOne /> */}
        <ChartTwo />
        {/* <MapOne /> */}
        {/* <div className="col-span-12 xl:col-span-8">
          <TableOne />
        </div> */}
        {/* <ChatCard /> */}
      </div>
    </>
  );
};

export default ECommerce;
