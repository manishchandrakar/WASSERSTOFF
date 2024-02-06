import React, { useState } from "react";
import "./SalesChart.css"; // Import the CSS file for SalesChart styling
import ConstTotalEarning from "../TotalEarning/TotalEarning";
import BubbleChart from "./bubbleChart";

const SalesChart = () => {
  const [displaySalesChart, setDisplaySalesChart] = useState(true); // State to track whether to display sales chart or total earnings

  const handleButtonClick = (displayType) => {
    if (displayType === "sales") {
      setDisplaySalesChart(true);
    } else if (displayType === "total") {
      setDisplaySalesChart(false);
    }
  };

  return (
    <div className="sales-chart-container">
      <div className="dashboard-buttons">
        <button
          className={`dashboard-button ${displaySalesChart ? "active" : ""}`}
          onClick={() => handleButtonClick("sales")}
        >
          <i className="fas fa-chart-line"></i> Sales
        </button>
        <button
          className={`dashboard-button ${!displaySalesChart ? "active" : ""}`}
          onClick={() => handleButtonClick("total")}
        >
          <i className="fas fa-dollar-sign"></i> Total Earning
        </button>
      </div>
      <div className="chart-container">
        {displaySalesChart ? <BubbleChart /> : <ConstTotalEarning />}
      </div>
    </div>
  );
};

export default SalesChart;
