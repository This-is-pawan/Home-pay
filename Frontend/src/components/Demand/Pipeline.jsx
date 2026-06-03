import React from "react";
import { pipeline } from "../data";
import { FaPhoneVolume } from "react-icons/fa6";
import { TiMessage } from "react-icons/ti";
import { FaMapMarkerAlt } from "react-icons/fa";
import { GlobalContext } from "../../ContextApi";

const Pipeline = () => {
  const {darkMode}=GlobalContext()
  return (
    <div className="p-3">
      <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-3">
        {pipeline.map(
          ({
            id,
            name,
            score,
            stale,
            rent,
            agent,
            location,
            mobile,
          }) => (
            <article
              key={id}
            className={` rounded-xl border  shadow-sm hover:shadow-md transition-all p-3 text-xs ${darkMode?'bg-white border-gray-200':'bg-[hsl(0,0%,10%)] border-pink-700 text-slate-400'}`}
            >
              {/* Header */}
              <div className={`flex justify-between items-center mb-2`}>
                <span className={`px-2 py-1 rounded-full  capitalize text-[10px] ${darkMode?'bg-pink-100 text-pink-500':'bg-yellow-500 text-pink-700'}`}>
                  {stale}
                </span>

                <span className={`px-2 py-1 rounded-full bg-yellow-100 text-yellow-700 font-medium text-[10px]`}>
                  Score {score}
                </span>
              </div>

              {/* Name */}
              <h2 className={`font-semibold  text-sm capitalize ${darkMode?'text-gray-800':'text-slate-400'}`}>
                {name}
              </h2>

              {/* Phone */}
              <div className={`flex items-center gap-2 mt-2 text-gray-600`}>
                <FaPhoneVolume className={`text-green-500 text-xs`}/>
                <span>{mobile}</span>
              </div>

              {/* Location */}
              <div className={`flex items-center gap-2 mt-1 text-gray-500`}>
                <FaMapMarkerAlt className={`text-red-500 text-xs`} />
                <span>{location}</span>
              </div>

              {/* Rent */}
              <div className="mt-2">
                <p className={` text-gray-500 text-[11px]`}>
                  Expected Rent
                </p>
                <h3 className={`font-semibold text-green-600 text-sm`}>
                  ₹ {rent}
                </h3>
              </div>

              {/* Agent */}
              <div className="flex items-center gap-2 mt-3">
                <div className={`w-7 h-7 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-semibold text-xs`}>
                  {agent?.charAt(0).toUpperCase()}
                </div>

                <div>
                  <p className={` text-gray-500 text-[10px]`}>
                    Agent
                  </p>
                  <p className="capitalize text-xs">
                    {agent}
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div className={`flex gap-2 mt-3 pt-2 border-t border-gray-100`}>
                <button className={`flex-1 flex items-center justify-center gap-1 py-2 rounded-lg bg-green-100 text-green-600 hover:bg-green-200 transition text-xs font-medium`}>
                  <FaPhoneVolume />
                  Call
                </button>

                <button className={`flex-1 flex items-center justify-center gap-1 py-2 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200 transition text-xs font-medium`}>
                  <TiMessage />
                  Message
                </button>
              </div>
            </article>
          )
        )}
      </div>
    </div>
  );
};

export default Pipeline;