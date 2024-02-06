// Label.js

import React from "react";
import ReactApexChart from 'react-apexcharts'; // Import ReactApexChart
import styles from "./SalesChart.module.css"; // Import your CSS module for styling

const Label = ({ options, series }) => (
  <div>
    <div id="chart">
      <ReactApexChart options={options} series={series} type="bubble" height={350} />
    </div>
    <div id="html-dist"></div>
  </div>
);

export default Label;
