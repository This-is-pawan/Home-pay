import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { GlobalContext } from "../../ContextApi";

const pipelineData = [
  { stage: "New", count: 3 },
  { stage: "Contacted", count: 2 },
  { stage: "Requirement", count: 2 },
  { stage: "Property", count: 2 },
  { stage: "Visit", count: 2 },
  { stage: "Follow Up", count: 1 },
  { stage: "Booked", count: 1 },
  { stage: "Lost", count: 1 },
];

const PipelineChart = () => {
  const{darkMode}=GlobalContext()
  return (
    <div className={`${darkMode?'bg-white ':'bg-[hsla(0,17%,5%,1)]'} tansition-all w-full max-w-[1200px] rounded-2xl  p-5 shadow-lg`}>
      <h2 className="mb-5 text-sm font-semibold text-slate-400 ">
        Pipeline Distribution
      </h2>

      <ResponsiveContainer width="100%" height={250}>
        <BarChart
          data={pipelineData}
          margin={{
            top: 10,
            right: 10,
            left: -30,
            bottom: 5,
          }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
          />

          <XAxis
            dataKey="stage"
            tick={{ fontSize: 10 }}
            axisLine={false}
            tickLine={false}
          />

          <YAxis
            allowDecimals={false}
            axisLine={false}
            tickLine={false}
          />

          <Tooltip
            cursor={{ fill: "rgba(99,102,241,0.08)" }}
            contentStyle={{
              borderRadius: "10px",
              border: "none",
              boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
            }}
          />

          <Bar
            dataKey="count"
            fill="#eab308"
            radius={[0, 0, 0, 0]}
            barSize={50}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PipelineChart;