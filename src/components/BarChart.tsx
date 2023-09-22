import React from "react";

interface IBarChartProps {
  data: {
    label: string;
    value: number
  }[];
}

const BarChart = ({ data } : IBarChartProps) => {
  const max = Math.max(...data.map((item) => item.value));

  return (
    <div className="bar-chart">
      {data.map((item, index) => (
        <div
          key={index}
          className="bar"
          style={{
            height: `${(item.value / max) * 100}%`,
          }}
        >
          <span className="label">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default BarChart;