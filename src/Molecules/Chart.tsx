import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const Chart: React.FC<any> = ({ data, dataKey }) => {
  return (
    <>
      <ResponsiveContainer>
        <AreaChart data={data} dataKey={dataKey}>
          {/* Define Custom Gradient Background */}
          <defs>
            <linearGradient id="backgroundGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="-0.98%" stopColor="rgba(94, 195, 255, 0.04)" />
              <stop offset="100%" stopColor="rgba(253, 93, 239, 0.04)" />
            </linearGradient>
          </defs>

          {/* Customize Grid & Axes */}
          <CartesianGrid stroke="#030229" strokeWidth={0.05} vertical={false} />
          <XAxis
            dataKey="name"
            stroke="#030229"
            padding={{ left: 20, right: 20 }}
            strokeWidth={0.05}
          />
          <Tooltip
            cursor={{ stroke: "#030229", strokeWidth: 0 }}
            contentStyle={{
              backgroundColor: "#ffffff",
              color: "#959595",
              borderRadius: "5px",
              padding: "5px",
            }}
            formatter={(value) => [`${value}`, dataKey]}
          />

          {/* Background Gradient & Line */}
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#2B6EF6"
            strokeWidth={2}
            fill="url(#backgroundGradient)" // Apply gradient background
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
};

export default Chart;
