import React, { useState } from "react";
import { CiFilter } from "react-icons/ci";
import { FiDownload } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";
import { lead_user } from "../data";
import { CiStar } from "react-icons/ci";
const Leads = () => {
  const [selectedIds, setSelectedIds] = useState([]);

  const handleSelectAll = () => {
    if (selectedIds.length === lead_user.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(lead_user.map((item) => item.id));
    }
  };

  const handleSelect = (id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((item) => item !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  return (
    <div className="w-full p-4">
      {/* Filters */}

      <div className="flex justify-around items-center mb-5">
        <CiFilter size={22} />

        <select className="capitalize px-4 py-2 rounded-xl text-xs bg-white border border-gray-200">
          <option>All Source</option>
          <option>WhatsApp</option>
          <option>Instagram</option>
          <option>Facebook</option>
          <option>Website</option>
        </select>

        <select className="capitalize px-4 py-2 rounded-xl text-xs bg-white border border-gray-200">
          <option>All Stages</option>
          <option>New Lead</option>
          <option>Contacted</option>
          <option>Booked</option>
        </select>

        <select className="capitalize px-4 py-2 rounded-xl text-xs bg-white border border-gray-200">
          <option>Newest First</option>
          <option>Oldest First</option>
          <option>Score High To Low</option>
          <option>Score Low To High</option>
        </select>

        <button className="capitalize border rounded-lg hover:bg-yellow-500 transition-all duration-200 flex items-center p-2 text-xs bg-white">
          <FiDownload className="mr-2" />
          export
        </button>
      </div>

      {/* Bulk Actions */}

      {selectedIds.length > 0 && (
        <article className="bg-pink-50 p-3 rounded-lg flex items-center gap-4 mb-4">
          <p className="text-sm">
            {selectedIds.length} Selected
          </p>

          <select className="px-4 py-2 rounded-lg text-xs border">
            <option>Assign To</option>
            <option>Sham</option>
            <option>Amit Saxena</option>
            <option>Raman</option>
          </select>

          <select className="px-4 py-2 rounded-lg text-xs border">
            <option>New Lead</option>
            <option>Contacted</option>
            <option>Booked</option>
            <option>Lost</option>
          </select>

          <button className="bg-red-700 text-white px-4 py-2 rounded-lg">
            <MdDeleteForever />
          </button>

          <button
            onClick={() => setSelectedIds([])}
            className="bg-pink-400 text-white px-4 py-2 rounded-lg"
          >
            Clear
          </button>
        </article>
      )}

      {/* Table Header */}

      <div className="grid grid-cols-9 items-center bg-pink-100 border border-pink-300 p-4 rounded-t-xl">
        <div
          className="w-4 h-4 border border-black rounded-full cursor-pointer flex items-center justify-center"
          onClick={handleSelectAll}
        >
          {selectedIds.length === lead_user.length && (
            <div className="w-2 h-2 rounded-full bg-black"></div>
          )}
        </div>

        <h1 className="text-pink-500 text-sm">Name</h1>
        <h1 className="text-pink-500 text-sm">Contact</h1>
        <h1 className="text-pink-500 text-sm">Source</h1>
        <h1 className="text-pink-500 text-sm">Status</h1>
        <h1 className="text-pink-500 text-sm">Score</h1>
        <h1 className="text-pink-500 text-sm">Agent</h1>
        <h1 className="text-pink-500 text-sm">Location</h1>
        <h1 className="text-pink-500 text-sm">Actions</h1>
      </div>

      {/* Table Body */}

      {lead_user.map((lead) => {
        const PhoneIcon = lead.actions_phone;
        const MessageIcon = lead.actions_message;

        return (
          <div
            key={lead.id}
            className="grid grid-cols-9 items-center p-4 border-b bg-white hover:bg-pink-50 "
          >
            <div
              className="w-4 h-4 border border-black rounded-full cursor-pointer flex items-center justify-center "
              onClick={() => handleSelect(lead.id)}
            >
              {selectedIds.includes(lead.id) && (
                <div className="w-2 h-2 rounded-full bg-black"></div>
              )}
            </div>

            <p className="capitalize text-sm">{lead.name}</p>
            <p className="text-sm">{lead.contact}</p>
            <p className="capitalize text-sm">{lead.source}</p>
            <p className="capitalize text-sm">{lead.status}</p>
            <p className=" flex items-center text-xs"><CiStar  className="text-yellow-500 text-sm"/>{lead.score}</p>
            <p className="capitalize text-sm">{lead.agent}</p>
            <p className="capitalize text-sm">{lead.location}</p>

           <div className="flex gap-4 text-sm opacity-[0.7] transition-all duration-300">
  <PhoneIcon className="cursor-pointer text-yellow-500 text-sm " />
  <MessageIcon className="cursor-pointer text-yellow-500 text-sm " />
</div>
          </div>
        );
      })}
    </div>
  );
};

export default Leads;