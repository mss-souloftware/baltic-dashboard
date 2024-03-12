"use client";
import React from "react";
import ChartTwo from "../Charts/ChartTwo";
import TableOne from "../Tables/TableOne";
import ChartThree from "../Charts/ChartThree";
import TrainTrackBox from "../TrainTrack/TrainTrackBox";

const ECommerce: React.FC = () => {
  return (
    <>
      <div className="mt-4 grid grid-cols-12 gap-3 md:mt-6 md:gap-3 2xl:mt-7.5 2xl:gap-4">
        <TableOne />
        <ChartTwo />
      </div>
      <div className="mt-4 grid grid-cols-1 gap-3 md:mt-6 md:gap-3 2xl:mt-7.5 2xl:gap-4">
        <TrainTrackBox />
      </div>
    </>
  );
};

export default ECommerce;
