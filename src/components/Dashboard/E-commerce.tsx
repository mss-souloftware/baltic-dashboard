"use client";
import React from "react";
import ChartTwo from "../Charts/ChartTwo";
import TableOne from "../Tables/TableOne";
import TrainTrackBox from "../TrainTrack/TrainTrackBox";

const ECommerce: React.FC = () => {
  return (
    <>
      <div className="mt-2 grid grid-cols-12 gap-2">
        <TableOne />
        <ChartTwo />
      </div>
      <div className="mt-2 grid grid-cols-1 gap-2">
        <TrainTrackBox />
      </div>
    </>
  );
};

export default ECommerce;
