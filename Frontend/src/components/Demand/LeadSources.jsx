import React from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";
import { GlobalContext } from "../../ContextApi";

const data = [
  { name: "Phone Call", value: 20 },
  { name: "WhatsApp", value: 18 },
  { name: "Website", value: 15 },
  { name: "Instagram", value: 12 },
  { name: "Landing Page", value: 10 },
  { name: "Facebook", value: 15 },
  { name: "Homepay", value: 15 },
];

const COLORS = [
  "#6366f1", // accent
  "#06b6d4", // info
  "#ef4444", // destructive
  "#7b4dcb", // instagram
  "#f59e0b", // warning
  "#22c55e", // success
  "#22c55dd", // grown
];

const LeadSources = () => {
  const {darkMode}=GlobalContext()
  return (
    <div className={`${darkMode?'bg-white ':'bg-[hsla(0,17%,5%,1)]'}  transition-all  rounded-xl shadow-md p-4`}>
      <h3 className="font-semibold text-sm mb-4 text-slate-400">
        Lead Sources
      </h3>

      <ResponsiveContainer width="100%" height={180}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            innerRadius={45}
            outerRadius={70}
            paddingAngle={2}
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>

      {/* Legend */}
      <div className="flex flex-wrap gap-3 mt-4">
        {data.map((item, index) => (
          <div
            key={item.name}
            className="flex items-center gap-2 text-xs text-gray-500"
          >
            <div
              className="w-2 h-2 rounded-full"
              style={{
                backgroundColor:
                  COLORS[index % COLORS.length],
              }}
            />
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeadSources;