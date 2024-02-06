import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export default function BubbleChart() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const myChartRef = chartRef.current.getContext("2d");

      const data = [
        { x: 20, y: 300, r: 15 },
        { x: 40, y: 100, r: 100 },
        { x: 100, y: 250, r: 25 },
      ];

      // Sort the data based on the radius (r) property
      const sortedData = data.slice().sort((a, b) => b.r - a.r);

      const maxX = Math.max(...sortedData.map((point) => point.x + point.r));
      const maxY = Math.max(...sortedData.map((point) => point.y + point.r));

      const colors = [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ];

      const labels = ["One_day", "Two_days", "Three_days"];

      const datasets = labels.map((label, index) => ({
        label: label,
        data: [sortedData[index]],
        backgroundColor: colors[index],
      }));

      chartInstance.current = new Chart(myChartRef, {
        type: "bubble",
        data: {
          datasets: datasets,
        },
        options: {
          scales: {
            x: {
              type: "linear",
              position: "bottom",
              max: maxX + 10, // add some padding
            },
            y: {
              max: maxY + 10, // add some padding
            },
          },
        },
      });
    }
  }, []);

  return (
    <div>
      <canvas ref={chartRef} width={500} height={500} />
    </div>
  );
}
