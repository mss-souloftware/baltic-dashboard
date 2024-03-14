import { ApexOptions } from "apexcharts";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import Image from "next/image";

const options: ApexOptions = {
  colors: ["#7FD549", "#D9D9D9"],
  chart: {
    fontFamily: "Satoshi, sans-serif",
    type: "bar",
    height: 350,
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
    show: false,
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
  const [chartTwoState, setChartTwoState] = useState<ChartTwoState>({
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

  const handleResetChartTwo = () => {
    setChartTwoState((prevState) => ({
      ...prevState,
    }));
  };

  const [selectedDatatype, setSelectedDatatype] = useState("container");
  const handleButtonClick = (datatype: string) => {
    setSelectedDatatype(datatype);
  };

  return (
    <div className="col-span-12 rounded-xl border border-stroke bg-white p-2.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
      <div className="justify-between gap-4 sm:flex">
        <div className="flex justify-between items-center w-full">
          <h4 className="text-md font-semibold text-black dark:text-white">
            Zu Entladen
          </h4>

          <div className="flex">
            <button className={`p-3 rounded-md mr-1 ${selectedDatatype === "container" ? "bg-[#3B74B9]" : "bg-gray"}`} datatype="container" onClick={() => handleButtonClick("container")}>
              <Image
                className={`${selectedDatatype === "container" ? "invert brightness-0" : ""}`}
                width={30}
                height={30}
                src={"/images/icon/container.svg"}
                alt="User"
              />
            </button>

            <button className={`p-3 rounded-md mr-1 ${selectedDatatype === "crain" ? "bg-[#3B74B9]" : "bg-gray"}`} datatype="crain" onClick={() => handleButtonClick("crain")}>
              <Image
                className={`${selectedDatatype === "crain" ? "invert brightness-0" : ""}`}
                width={30}
                height={30}
                src={"/images/icon/crain.svg"}
                alt="User"
              />
            </button>
          </div>
        </div>
      </div>

      <div datatype="container" className="w-full" style={{ display: selectedDatatype === "container" ? "flex" : "none" }}>
        <div id="chartTwo" className="w-full">
          <ReactApexChart
            options={options}
            series={chartTwoState.series}
            type="bar"
            height={220}
            width={"100%"}
          />
        </div>
      </div>

      <ChartThree selectedDatatype={selectedDatatype} />
    </div>
  );
};

const chartthreeoptions: ApexOptions = {
  chart: {
    fontFamily: "Satoshi, sans-serif",
    type: "donut",
    width: "100%",
  },
  colors: ["#A9B8D7", "#EA1E63", "#03A9F5", "#3A4070", "#F88E00"],
  labels: ["Gesamt", "Verladen", "K Platz", "Hafen", "Gesperrt"],
  plotOptions: {
    pie: {
      donut: {
        size: "45%",
        background: "transparent",
      },
    },
  },
  dataLabels: {
    enabled: true,
  },
  legend: {
    show: true,
    position: "top",
    horizontalAlign: "left",
    fontFamily: "Satoshi",
    fontWeight: 500,
    fontSize: "14px",
    markers: {
      radius: 99,
    },
  },
  responsive: [
    {
      breakpoint: 2600,
      options: {
        chart: {
          width: "100%",
        },
      },
    },
    {
      breakpoint: 640,
      options: {
        chart: {
          width: "100%",
        },
      },
    },
  ],
};

interface ChartThreeProps {
  selectedDatatype: string;
}

const ChartThree: React.FC<ChartThreeProps> = ({ selectedDatatype }) => {
  const [chartThreeState, setChartThreeState] = useState({
    series: [65, 34, 12, 56, 45],
  });

  const handleResetChartThree = () => {
    setChartThreeState((prevState) => ({
      ...prevState,
      series: [65, 34, 12, 56, 45],
    }));
  };

  return (
    <div className="mb-2" datatype="crain" style={{ display: selectedDatatype === "crain" ? "flex" : "none" }}>
      <div id="chartThree" className="mt-3 mx-auto flex justify-center w-full">
        <ReactApexChart
          className="w-full"
          options={chartthreeoptions}
          series={chartThreeState.series}
          type="donut"
          height={320}
        />
      </div>
    </div>
  );
};

export default ChartTwo;
