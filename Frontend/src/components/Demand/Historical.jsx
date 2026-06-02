import React, { useState } from "react";
import { history_data } from "../data";

const Historical = () => {
  const [search, setSearch] = useState("");

  const filteredData = history_data.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.phone.toLowerCase().includes(search.toLowerCase()) ||
      item.location.toLowerCase().includes(search.toLowerCase())
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
        <div className="bg-white rounded-xl border p-6 shadow-sm h-full">
          <h2 className="text-xl font-semibold mb-3">CSV Import</h2>

          <p className="text-gray-500 mb-5">
            Upload a CSV file with lead data
          </p>

          <input
            type="file"
            accept=".csv"
            onChange={handleFileUpload}
            className="
              w-full
              border-2 border-dashed border-gray-300
              rounded-xl
              p-3
              text-sm text-gray-600
              cursor-pointer
              bg-gray-50
              hover:bg-gray-100
              transition-all duration-300
              
              file:mr-4
              file:py-2
              file:px-4
              file:rounded-lg
              file:border-0
              file:text-sm
              file:font-medium
              file:bg-blue-600
              file:text-white
              hover:file:bg-blue-700
            "
          />
        </div>
      </div>

      {/* Leads Table - Large */}
      <div className="lg:col-span-2">
        <div className="bg-white rounded-xl border p-5 shadow-sm">
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
            className="w-full border rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-100 border-b">
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
                    className="border-b hover:bg-gray-50 transition"
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