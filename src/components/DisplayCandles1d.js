import React, { Component } from "react";
import Chart from "react-apexcharts";

class DisplayCandles1d extends Component {
  constructor(props) {
    super(props);

    const data = props.data.changes.map((item) => {
      return { x: new Date(item[0]), y: [item[1], item[2], item[3], item[4]] };
    });

    this.state = {
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
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="candlestick"
              height="350"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default DisplayCandles1d;
