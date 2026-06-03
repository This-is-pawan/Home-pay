import React, { useState } from "react";
import { FaUserCog, FaRegUserCircle } from "react-icons/fa";
import { FaBuildingCircleCheck } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { PiFolderSimpleUser } from "react-icons/pi";
import { team_member, properties as propertyData } from "../data";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("team");

  return (
    <div className="p-4 text-sm">
      {/* Tabs */}
      <article className="w-full max-w-3xl bg-pink-100 opacity-[0.8] p-2 rounded-lg flex flex-wrap gap-2 justify-around">
        <button
          onClick={() => setActiveTab("team")}
          className={`w-24 p-2 rounded-lg flex items-center gap-1 capitalize ${
            activeTab === "team"
              ? "bg-black text-white"
              : "bg-pink-50 text-black"
          }`}
        >
          <FaUserCog />
          <span>team</span>
        </button>

        <button
          onClick={() => setActiveTab("properties")}
          className={`w-24 p-2 rounded-lg flex items-center gap-1 capitalize ${
            activeTab === "properties"
              ? "bg-black text-white"
              : "bg-pink-50 text-black"
          }`}
        >
          <FaBuildingCircleCheck />
          <span>properties</span>
        </button>

        <button
          onClick={() => setActiveTab("profile")}
          className={`w-24 p-2 rounded-lg flex items-center gap-1 capitalize ${
            activeTab === "profile"
              ? "bg-black text-white"
              : "bg-pink-50 text-black"
          }`}
        >
          <FaRegUserCircle />
          <span>profile</span>
        </button>
      </article>

      {/* TEAM */}
      {activeTab === "team" && (
        <article className="shadow-lg bg-white p-4 rounded-lg border border-pink-200 mt-4">
          <h1 className="font-semibold mb-4">Add Agent</h1>

          <article className="grid gap-3">
            <div>
              <label>Name *</label>
              <input
                type="text"
                placeholder="Agent name"
                className="w-full border rounded-lg p-2"
              />
            </div>

            <div>
              <label>Email *</label>
              <input
                type="email"
                placeholder="email@example.com"
                className="w-full border rounded-lg p-2"
              />
            </div>

            <div>
              <label>Phone *</label>
              <input
                type="text"
                placeholder="+91 XXXXX XXXXX"
                className="w-full border rounded-lg p-2"
              />
            </div>

            <button className="w-fit p-2 rounded-lg bg-black text-white">
              + Add Agent
            </button>
          </article>

          {/* Team Members */}
          <div className="bg-white rounded-lg mt-6">
            <h1 className="font-semibold mb-3">Team Members</h1>

            <div className="grid gap-3">
              {team_member.map(({ id, name, email, account }) => (
                <article
                  key={id}
                  className="border rounded-lg p-3 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center font-bold">
                      {name?.charAt(0)}
                    </span>

                    <div>
                      <h1 className="font-medium">{name}</h1>
                      <p>{email}</p>
                      <p>{account}</p>
                    </div>
                  </div>

                  <button>
                    <MdDelete size={20} />
                  </button>
                </article>
              ))}
            </div>
          </div>
        </article>
      )}

      {/* PROPERTIES */}
      {activeTab === "properties" && (
        <article className="shadow-lg bg-white p-4 rounded-lg border border-pink-200 mt-4">
          <h1 className="font-semibold mb-4">Add Property</h1>

          <article className="grid gap-3">
            <div>
              <label>Property Name</label>
              <input
                type="text"
                placeholder="Property Name"
                className="w-full border rounded-lg p-2"
              />
            </div>

            <div>
              <label>City</label>
              <input
                type="text"
                placeholder="City"
                className="w-full border rounded-lg p-2"
              />
            </div>

            <div>
              <label>Area</label>
              <input
                type="text"
                placeholder="Area"
                className="w-full border rounded-lg p-2"
              />
            </div>

            <div>
              <label>Price Range</label>
              <input
                type="text"
                placeholder="Price Range"
                className="w-full border rounded-lg p-2"
              />
            </div>

            <button className="w-fit p-2 rounded-lg bg-black text-white flex items-center gap-2">
              <PiFolderSimpleUser />
              Add Property
            </button>
          </article>

          <div className="bg-white rounded-lg mt-6">
            <h1 className="font-semibold mb-3">Properties</h1>

            <div className="grid gap-3">
              {propertyData.map((property) => (
                <article
                  key={property.id}
                  className="border rounded-lg p-3 flex justify-between items-center"
                >
                  <div>
                    <h1 className="font-medium">{property.name}</h1>
                    <p className='text-[10px] p-1'>
                     {property.el_ci_pr}
                    </p>
                 
                  </div>

                  <button>
                    <MdDelete size={20} />
                  </button>
                </article>
              ))}
            </div>
          </div>
        </article>
      )}

      {/* PROFILE */}
      {activeTab === "profile" && (
        <article className="shadow-lg bg-white p-4 rounded-lg border border-pink-200 mt-4">
          <h1 className="font-semibold mb-4">Profile Settings</h1>

          <article className="grid gap-3">
            <div>
              <label>Email</label>
              <input
                type="email"
                placeholder="Email"
                className="w-full border rounded-lg p-2"
              />
            </div>

            <div>
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border rounded-lg p-2"
              />
            </div>

            <div>
              <label>Password</label>
              <input
                type="password"
                placeholder="Password"
                className="w-full border rounded-lg p-2"
              />
            </div>

            <button className="w-fit p-2 rounded-lg bg-black text-white flex items-center gap-2">
              <PiFolderSimpleUser />
              Save Changes
            </button>
          </article>
        </article>
      )}
    </div>
  );
};

export default Settings;