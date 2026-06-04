import React, { useState } from "react";
import { inventory } from "../data";
import { FaSearch } from "react-icons/fa";
import { CiFilter } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { GlobalContext } from "../../ContextApi";

const Inventory = () => {
  const {darkMode} =GlobalContext();
  const [search, setSearch] = useState("");
  const [showStatus, setShowStatus] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("All");

  const stats = [
    { id: 1, title: "Total Rooms", counting: inventory.length },
    {
      id: 2,
      title: "Vacant",
      counting: inventory.filter((i) => i.status === "Vacant").length,
    },
    {
      id: 3,
      title: "Occupied",
      counting: inventory.filter((i) => i.status === "Occupied").length,
    },
    {
      id: 4,
      title: "Blocked",
      counting: inventory.filter((i) => i.status === "Blocked").length,
    },
  ];

  const filteredData = inventory.filter((item) => {
    const matchesSearch =
      item.room?.toLowerCase().includes(search.toLowerCase()) ||
      item.property?.toLowerCase().includes(search.toLowerCase()) ||
      item.owner?.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      selectedStatus === "All" || item.status === selectedStatus;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="p-6">
      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {stats.map((item) => (
          <div
            key={item.id}
            className={` border rounded-xl p-4 shadow-sm ${darkMode?'bg-white':'bg-[hsl(0,0%,10%)] text-slate-400 border border-pink-700'}`}
          >
            <h2 className="text-2xl font-bold">{item.counting}</h2>
            <p className="text-sm text-gray-500">{item.title}</p>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 items-center mb-6">
        <button className={`${darkMode? 'bg-black text-white ':'hover:border border-yellow-500 bg-black text-white '}  px-4 py-2 rounded-lg`}>
          + Add Room
        </button>

        <div className="relative">
          <button
            onClick={() => setShowStatus(!showStatus)}
            className={` rounded-lg px-4 py-2 flex items-center gap-2  ${darkMode?'border ':'border border-pink-700 text-slate-400'}`}
          >
            <CiFilter />
            {selectedStatus}
            <IoIosArrowDown />
          </button>

          {showStatus && (
            <div className={`absolute top-full mt-2   rounded-lg shadow w-40 z-20 ${darkMode?'bg-white':'bg-[hsl(0,0%,10%)] text-slate-400 border border-pink-700'}`} >
              {["All", "Vacant", "Occupied", "Blocked"].map((item) => (
                <div
                  key={item}
                  onClick={() => {
                    setSelectedStatus(item);
                    setShowStatus(false);
                  }}
                  className={`px-4 py-2  cursor-pointer ${darkMode?'hover:bg-gray-100':'hover:bg-gray-700'}`}
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className={`flex items-center border rounded-lg px-3 flex-1 max-w-sm ${darkMode ? 'bg-white' :'bg-black border border-pink-700'}`}>
          <FaSearch className={`${darkMode?'text-gray-400':'text-slate-400'}`} />
       <input
  type="text"
  placeholder="Search room, owner, property..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className={`w-full p-2 outline-none ${
    darkMode
      ? "bg-pink-50 text-slate-400"
      : "bg-black text-slate-400"
  }`}
/>
        </div>
      </div>

      {/* Room Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredData.map((item) => (
          <div
            key={item.id}
            className={`  border rounded-xl p-5 shadow-sm hover:shadow-md transition ${darkMode? 'bg-white':'bg-[hsl(0,0%,10%)] border border-pink-700 text-slate-400'}`}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-semibold text-lg">{item.room}</h2>

              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  item.status === "Occupied"
                    ? "bg-green-100 text-green-700"
                    : item.status === "Vacant"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-red-100 text-red-700"
                } ${darkMode?'':'bg-yellow-500 text-slate-800 '}`}
              >
                {item.status}
              </span>
            </div>

            <div className="space-y-2 text-sm text-gray-600">
              <p>
                <strong>Property:</strong> {item.property}
              </p>

              <p>
                <strong>Owner:</strong> {item.owner}
              </p>

              <p>
                <strong>Beds:</strong> {item.beds}
              </p>

              <p>
                <strong>Type:</strong> {item.type}
              </p>

              <p>
                <strong>Ask:</strong> ₹{item.ask?.toLocaleString()}
              </p>

              <p>
                <strong>Confirmed:</strong> {item.confirmed}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inventory;