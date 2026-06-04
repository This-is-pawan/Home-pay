import React, { useState } from "react";
import { history_data } from "../data";
import { GlobalContext } from "../../ContextApi";

const Historical = () => {
  const { darkMode } = GlobalContext();
  const [search, setSearch] = useState("");

  const filteredData = history_data.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.phone.toLowerCase().includes(search.toLowerCase()) ||
      item.location.toLowerCase().includes(search.toLowerCase()),
  );

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    console.log("Selected CSV:", file);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* CSV Import Card - Small */}
      <div className="lg:col-span-1 ">
        <div
          className={` rounded-xl border p-6 shadow-sm h-full ${darkMode ? "bg-white" : "bg-[hsl(0,0%,10%)] border border-pink-700 text-slate-400"}`}
        >
          <h2 className="text-xl font-semibold mb-3">CSV Import</h2>

          <p className="text-gray-500 mb-5">Upload a CSV file with lead data</p>

          <input
            type="file"
            accept=".csv"
            onChange={handleFileUpload}
            className={`
              w-full
              
              rounded-xl
              p-3
              text-sm text-gray-600
              cursor-pointer
              
              
              transition-all duration-300
              
              file:mr-4
              file:py-2
              file:px-4
              file:rounded-lg
              file:border-0
              file:text-sm
              file:font-medium
              
              
              
              ${darkMode ? "tansition-all  bg-gray-50 hover:file:bg-blue-700 file:text-white file:bg-blue-600 border-gray-300 border-2  hover:bg-gray-100" : "tansition-all bg-[hsl(0,0%,10%)] border-2 border-pink-700 hover:border-yellow-500 opacity-[0.7 text-slate-700]"}
            `}
          />
        </div>
      </div>

      {/* Leads Table - Large */}
      <div className="lg:col-span-2">
        <div
          className={`  rounded-xl border p-5 shadow-sm ${darkMode ? "bg-white" : "bg-[hsl(0,0%,10%)] border text-slate-400 border-pink-700"}`}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">
              All Leads ({filteredData.length})
            </h2>
          </div>

          <input
            type="text"
            placeholder="Search by name, phone, location..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-black border-pink-700"
          />

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr
                  className={`${darkMode ? "bg-gray-100  border-b " : "bg-[hsl(0,0%,20%)] border-b border-pink-700"}`}
                >
                  <th className="text-left p-3">Name</th>
                  <th className="text-left p-3">Phone</th>
                  <th className="text-left p-3">Source</th>
                  <th className="text-left p-3">Status</th>
                  <th className="text-left p-3">Location</th>
                  <th className="text-left p-3">Created</th>
                </tr>
              </thead>

              <tbody>
                {filteredData.map((lead) => (
                  <tr
                    key={lead.id}
                    className={` ${darkMode ? "border-b hover:bg-gray-50 transition" : "border-b hover:bg-gray-500 transition border-pink-700"}`}
                  >
                    <td className="p-3">{lead.name}</td>
                    <td className="p-3">{lead.phone}</td>
                    <td className="p-3">{lead.source}</td>
                    <td className="p-3">{lead.status}</td>
                    <td className="p-3">{lead.location}</td>
                    <td className="p-3">{lead.created}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Historical;
