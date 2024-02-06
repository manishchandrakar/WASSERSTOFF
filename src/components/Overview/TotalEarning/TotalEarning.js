import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";

const ConstTotalEarning = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const data = {
      labels: ["Product A", "Product B", "Product C", "Product D"],
      datasets: [
        {
          data: [3000, 4500, 2000, 6000],
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50"],
        },
      ],
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,
    };

    const ctx = chartRef.current.getContext("2d");

    chartInstance.current = new Chart(ctx, {
      type: "doughnut",
      data: data,
      options: options,
    });

    return () => {
      // Cleanup function to destroy the chart when the component is unmounted
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div>
      <canvas ref={chartRef} width={500} height={500} />
    </div>
  );
};

export default ConstTotalEarning;
