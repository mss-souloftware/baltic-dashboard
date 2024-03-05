import { ApexOptions } from "apexcharts";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import Image from "next/image";

const options: ApexOptions = {
  colors: ["#7FD549", "#D9D9D9"],
  chart: {
    fontFamily: "Satoshi, sans-serif",
    type: "barh",
    height: 335,
    stacked: true,
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },

  responsive: [
    {
      breakpoint: 1536,
      options: {
        plotOptions: {
          bar: {
            borderRadius: 0,
            columnWidth: "25%",
          },
        },
      },
    },
  ],
  plotOptions: {
    bar: {
      horizontal: true,
      borderRadius: 0,
      columnWidth: "25%",
      borderRadiusApplication: "end",
      borderRadiusWhenStacked: "last",
    },
  },
  dataLabels: {
    enabled: false,
  },

  xaxis: {
    categories: ["106", "105", "104", "103", "102", "101"],
  },
  legend: {
    position: "top",
    horizontalAlign: "left",
    fontFamily: "Satoshi",
    fontWeight: 500,
    fontSize: "14px",

    markers: {
      radius: 99,
    },
  },
  fill: {
    opacity: 1,
  },
};

interface ChartTwoState {
  series: {
    name: string;
    data: number[];
  }[];
}

const ChartTwo: React.FC = () => {
  const [state, setState] = useState<ChartTwoState>({
    series: [
      {
        name: "Sales",
        data: [44, 55, 41, 67, 22, 43, 65],
      },
      {
        name: "Revenue",
        data: [13, 23, 20, 8, 13, 27, 15],
      },
    ],
  });

  const handleReset = () => {
    setState((prevState) => ({
      ...prevState,
    }));
  };
  handleReset;

  return (
    <div className="col-span-12 rounded-xl border border-stroke bg-white p-2.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
      <div className="mb-4 justify-between gap-4 sm:flex">
        <div className="flex justify-between items-center mb-6 w-full">
          <h4 className="text-md font-semibold text-black dark:text-white">
            Zu Entladen
          </h4>

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

            <button className="bg-gray p-3 rounded-md">
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
          </div>
        </div>
      </div>

      <div>
        <div id="chartTwo">
          <ReactApexChart
            options={options}
            series={state.series}
            type="bar"
            height={250}
            width={"100%"}
          />
        </div>
      </div>
    </div>
  );
};

export default ChartTwo;
