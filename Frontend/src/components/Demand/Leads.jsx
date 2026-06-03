import React, { useState } from "react";
import { CiFilter, CiStar } from "react-icons/ci";
import { FiDownload } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";
import { lead_user } from "../data";

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
    setSelectedIds((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="w-full p-4">
      {/* Filters */}
      <div className="flex flex-wrap gap-3 items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <CiFilter size={22} />
          <span className="font-medium">Filters</span>
        </div>

        <div className="flex flex-wrap gap-2">
          <select className="px-3 py-2 rounded-lg text-xs border">
            <option>All Source</option>
            <option>WhatsApp</option>
            <option>Instagram</option>
            <option>Facebook</option>
            <option>Website</option>
          </select>

          <select className="px-3 py-2 rounded-lg text-xs border">
            <option>All Stages</option>
            <option>New Lead</option>
            <option>Contacted</option>
            <option>Booked</option>
          </select>

          <select className="px-3 py-2 rounded-lg text-xs border">
            <option>Newest First</option>
            <option>Oldest First</option>
            <option>Score High To Low</option>
            <option>Score Low To High</option>
          </select>

          <button className="flex items-center gap-2 px-4 py-2 rounded-lg border hover:bg-yellow-500 hover:text-white transition">
            <FiDownload />
            Export
          </button>
        </div>
      </div>

      {/* Bulk Actions */}
      {selectedIds.length > 0 && (
        <div className="bg-pink-50 p-4 rounded-lg flex flex-wrap gap-3 mb-5">
          <p className="text-sm font-medium">
            {selectedIds.length} Selected
          </p>

          <select className="px-3 py-2 rounded-lg text-xs border">
            <option>Assign To</option>
            <option>Sham</option>
            <option>Amit Saxena</option>
            <option>Raman</option>
          </select>

          <select className="px-3 py-2 rounded-lg text-xs border">
            <option>New Lead</option>
            <option>Contacted</option>
            <option>Booked</option>
            <option>Lost</option>
          </select>

          <button className="bg-red-600 text-white px-4 py-2 rounded-lg">
            <MdDeleteForever />
          </button>

          <button
            onClick={() => setSelectedIds([])}
            className="bg-pink-500 text-white px-4 py-2 rounded-lg"
          >
            Clear
          </button>
        </div>
      )}

      {/* Desktop Table */}
      <div className="hidden md:block">
        <div className="grid grid-cols-9 items-center bg-pink-100 border border-pink-300 p-4 rounded-t-xl font-medium">
          <div
            onClick={handleSelectAll}
            className="w-4 h-4 border border-black rounded-full cursor-pointer flex items-center justify-center"
          >
            {selectedIds.length === lead_user.length && (
              <div className="w-2 h-2 bg-black rounded-full"></div>
            )}
          </div>

          <p>Name</p>
          <p>Contact</p>
          <p>Source</p>
          <p>Status</p>
          <p>Score</p>
          <p>Agent</p>
          <p>Location</p>
          <p>Actions</p>
        </div>

        {lead_user.map((lead) => {
          const PhoneIcon = lead.actions_phone;
          const MessageIcon = lead.actions_message;

          return (
            <div
              key={lead.id}
              className="grid grid-cols-9 items-center p-4 border-b bg-white hover:bg-pink-50"
            >
              <div
                onClick={() => handleSelect(lead.id)}
                className="w-4 h-4 border border-black rounded-full cursor-pointer flex items-center justify-center"
              >
                {selectedIds.includes(lead.id) && (
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                )}
              </div>

              <p>{lead.name}</p>
              <p>{lead.contact}</p>
              <p>{lead.source}</p>
              <p>{lead.status}</p>

              <p className="flex items-center gap-1">
                <CiStar className="text-yellow-500" />
                {lead.score}
              </p>

              <p>{lead.agent}</p>
              <p>{lead.location}</p>

              <div className="flex gap-3">
                <PhoneIcon className="cursor-pointer text-yellow-500" />
                <MessageIcon className="cursor-pointer text-yellow-500" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        {lead_user.map((lead) => {
          const PhoneIcon = lead.actions_phone;
          const MessageIcon = lead.actions_message;

          return (
            <div
              key={lead.id}
              className="bg-white border rounded-xl p-4 shadow-sm"
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h2 className="font-semibold">{lead.name}</h2>
                  <p className="text-sm text-gray-500">
                    {lead.contact}
                  </p>
                </div>

                <div
                  onClick={() => handleSelect(lead.id)}
                  className="w-5 h-5 border border-black rounded-full cursor-pointer flex items-center justify-center"
                >
                  {selectedIds.includes(lead.id) && (
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                  )}
                </div>
              </div>

              <div className="space-y-2 text-sm">
                <p><strong>Source:</strong> {lead.source}</p>
                <p><strong>Status:</strong> {lead.status}</p>
                <p><strong>Agent:</strong> {lead.agent}</p>
                <p><strong>Location:</strong> {lead.location}</p>

                <p className="flex items-center gap-1">
                  <strong>Score:</strong>
                  <CiStar className="text-yellow-500" />
                  {lead.score}
                </p>
              </div>

              <div className="flex gap-4 mt-4">
                <PhoneIcon className="text-xl text-yellow-500 cursor-pointer" />
                <MessageIcon className="text-xl text-yellow-500 cursor-pointer" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Leads;