import React from "react";
import SalesChart from "./graph/SalesChart";
import "./Overview.css";
// import { Doughnut } from "react-chartjs-2";
import ConstTotalEarning from "./TotalEarning/TotalEarning";

const Overview = () => {
  return (
    <div className="overview-container">
      <SalesChart/>

      {/* You can add additional components or information here as needed */}
    </div>
  );
};

export default Overview;
