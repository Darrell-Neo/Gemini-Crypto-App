import React from "react";
import Chart from "react-apexcharts";

const DisplayCandles1d = (props) => {
  const data = props.data.changes.map((item) => {
    return { x: new Date(item[0]), y: [item[1], item[2], item[3], item[4]] };
  });

  const state = {
    options: {
      chart: {
        type: "candlestick",
        height: 350,
      },
      title: {
        text: props.data.symbol,
        align: "left",
      },
      xaxis: {
        type: "datetime",
      },
      yaxis: {
        labels: {
          formatter: function (value) {
            return "$" + value;
          },
        },
      },
    },
    series: [
      {
        data: data,
      },
    ],
  };

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={state.options}
            series={state.series}
            type="candlestick"
            height="350"
          />
        </div>
      </div>
    </div>
  );
};

export default DisplayCandles1d;
