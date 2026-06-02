import React from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { FaTrophy } from "react-icons/fa";

const funnelData = [
  { stage: "New Lead", count: 3 },
  { stage: "Contacted", count: 2 },
  { stage: "Requirement", count: 2 },
  { stage: "Suggested", count: 2 },
  { stage: "Visit", count: 2 },
  { stage: "Completed", count: 1 },
  { stage: "Booked", count: 1 },
];

const roiData = [
  { source: "WhatsApp", leads: 3, bookings: 1 },
  { source: "Website", leads: 3, bookings: 0 },
  { source: "Instagram", leads: 2, bookings: 0 },
  { source: "Facebook", leads: 2, bookings: 0 },
  { source: "Phone", leads: 2, bookings: 0 },
];

const weeklyData = [
  { week: "Feb 22", leads: 2, bookings: 1 },
  { week: "Mar 1", leads: 7, bookings: 0 },
  { week: "Mar 8", leads: 5, bookings: 0 },
];

const leaderboard = [
  {
    rank: 1,
    name: "Rahul Verma",
    active: 2,
    avg: "3m",
    rate: "33%",
  },
  {
    rank: 2,
    name: "Priya Sharma",
    active: 4,
    avg: "3.7m",
    rate: "0%",
  },
  {
    rank: 3,
    name: "Anita Desai",
    active: 4,
    avg: "2m",
    rate: "0%",
  },
  {
    rank: 4,
    name: "Vikram Singh",
    active: 2,
    avg: "4.3m",
    rate: "0%",
  },
];

const Analytics = () => {
  return (
    <div className="p-4 bg-pink-50 min-h-screen text-xs">
      {/* Top */}
      <div className="grid lg:grid-cols-2 gap-4 mb-4">
        {/* Funnel */}
        <div className="bg-white rounded-xl shadow-sm p-4">
          <h3 className="font-semibold mb-4 text-sm">
            Conversion Funnel
          </h3>

          <div className="space-y-3">
            {funnelData.map((item) => (
              <div
                key={item.stage}
                className="flex items-center gap-3"
              >
                <span className="w-28 text-right text-gray-500">
                  {item.stage}
                </span>

                <div className="flex-1 bg-gray-100 rounded-lg h-7 overflow-hidden relative">
                  <div
                    className="h-full bg-yellow-500"
                    style={{
                      width: `${(item.count / 3) * 100}%`,
                    }}
                  />
                  <span className="absolute inset-0 flex items-center px-3 font-medium">
                    {item.count}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ROI */}
        <div className="bg-white rounded-xl shadow-sm p-4">
          <h3 className="font-semibold mb-4 text-sm">
            Lead Source ROI
          </h3>

          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={roiData}>
              <XAxis dataKey="source" fontSize={10} />
              <YAxis fontSize={10} />
              <Tooltip />
              <Bar dataKey="leads" fill="#eab308" radius={[4, 4, 0, 0]} />
              <Bar dataKey="bookings" fill="#eab308" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bottom */}
      <div className="grid lg:grid-cols-2 gap-4">
        {/* Leaderboard */}
        <div className="bg-white rounded-xl shadow-sm p-4">
          <h3 className="flex items-center gap-2 text-sm font-semibold mb-4">
            <FaTrophy className="text-yellow-500" />
            Agent Leaderboard
          </h3>

          <div className="space-y-2">
            {leaderboard.map((agent) => (
              <div
                key={agent.rank}
                className="flex items-center gap-3 p-3 rounded-lg bg-pink-50"
              >
                <span className="w-6 h-6 rounded-full bg-yellow-500 opacity-[0.7]  flex items-center justify-center text-[10px]">
                  {agent.rank}
                </span>

                <div className="flex-1">
                  <p className="font-medium">{agent.name}</p>
                  <p className="text-[10px] text-gray-500">
                    {agent.active} Active • {agent.avg} Avg
                  </p>
                </div>

                <p className="font-bold text-sm">
                  {agent.rate}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Weekly Trend */}
        <div className="bg-white rounded-xl shadow-sm p-4">
          <h3 className="font-semibold text-sm mb-4">
            Weekly Trends
          </h3>

          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={weeklyData}>
              <XAxis dataKey="week" fontSize={10} />
              <YAxis fontSize={10} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="leads"
                stroke="#eab308"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="bookings"
                stroke="#eab308"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Analytics;