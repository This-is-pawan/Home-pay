import React, { useState } from "react";
import { owners } from "../data";
import { FaSearch } from "react-icons/fa";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { BsBuildings } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { GlobalContext } from "../../ContextApi";

const Owners = () => {
  const {darkMode}=GlobalContext()
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState("");

  const filteredData = owners.filter(
    (owner) =>
      owner.name.toLowerCase().includes(search.toLowerCase()) ||
      owner.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative p-4">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-5">
        <button
          onClick={() => setShowModal(true)}
          className={`tansition-all duration-300 px-4 py-2 rounded-lg capitalize ${darkMode?'bg-black text-white border ':'bg-black text-white hover:border border-yellow-500'}`}
        >
          + Add Owner
        </button>

        <div className={`${darkMode?'bg-pink-50':'bg-black border border-pink-700 text-slate-400'} w-full md:max-w-[300px] border  flex items-center rounded-lg`}>
          <FaSearch className={` ml-3 ${darkMode?'text-pink-400':'text-salte-400'}`} />
          <input
            type="text"
            placeholder="Search owners..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-3 bg-transparent outline-none"
          />
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className={ `${darkMode?'bg-white':'bg-[hsl(0,0%,10%)] text-slate-400 border-pink-700 border'} absolute top-10 left-1/2 -translate-x-1/2 z-50  shadow-xl rounded-xl p-5 w-full max-w-md border`}>
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-xl font-semibold capitalize">
              Add Owner
            </h2>

            <button
              onClick={() => setShowModal(false)}
              className="text-lg font-bold"
            >
              ✕
            </button>
          </div>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Owner Name"
              className={`w-full border p-3 rounded-lg outline-none ${darkMode?'bg-pink-50':'bg-black border-pink-700 border'}`}
            />

            <input
              type="text"
              placeholder="Phone Number"
              className={`w-full border p-3 rounded-lg outline-none ${darkMode?'bg-pink-50':'bg-black border-pink-700 border'}`}
            />

            <input
              type="email"
              placeholder="Email Address"
              className={`w-full border p-3 rounded-lg outline-none ${darkMode?'bg-pink-50':'bg-black border-pink-700 border'}`}
            />

            <input
              type="text"
              placeholder="Company Name"
              className={`w-full border p-3 rounded-lg outline-none ${darkMode?'bg-pink-50':'bg-black border-pink-700 border'}`}
            />
          </div>

          <div className="flex justify-end gap-3 mt-6">
            <button
              onClick={() => setShowModal(false)}
              className={`border px-4 py-2 rounded-lg ${darkMode?'bg-pink-50':'bg-black border-pink-700 border'}`}
            >
              Cancel
            </button>

            <button className={` bg-black text-white px-4 py-2 rounded-lg`}>
              + Add Owner
            </button>
          </div>
        </div>
      )}

      {/* Owners Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredData.map(
          ({ id, name, email, status, properties, phone }) => (
            <article
              key={id}
              className={` border rounded-xl p-4 shadow-sm hover:shadow-md transition ${darkMode?'bg-white':'bg-[hsl(0,0%,10%)] text-slate-400 border-pink-700 border'}`}
            >
              <div className="flex justify-between items-start mb-4">
                <h2 className="font-semibold text-lg">{name}</h2>

                <span
                  className={`text-[10px] px-2 py-1 rounded-full font-semibold ${
                    status === "Active"
                      ? "bg-black text-white"
                      : "bg-yellow-500 text-slate-800"
                  } `}
                >
                  {status}
                </span>
              </div>

              <div className={`space-y-3 text-sm  ${darkMode?'text-gray-600':'text-salte-800'}`}>
                <div className="flex items-center gap-2">
                  <MdOutlinePhoneInTalk />
                  <span>{phone}</span>
                </div>

                <div className="flex items-center gap-2">
                  <AiOutlineMail />
                  <span>{email}</span>
                </div>

                <div className="flex items-center gap-2">
                  <BsBuildings />
                  <span>{properties} Properties</span>
                </div>
              </div>
            </article>
          )
        )}
      </div>
    </div>
  );
};

export default Owners;