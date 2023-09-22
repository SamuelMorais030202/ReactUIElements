import React from "react";
import { Bar } from "react-chartjs-2";

interface IBarChartProps {
  title: string;
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string;
    }[];
  }
}

const BarChart = ({ title, data } : IBarChartProps) => {
  return (
    <div>
      <h3>{title}</h3>
      <Bar data={data} />
    </div>
  );
};

export default BarChart;