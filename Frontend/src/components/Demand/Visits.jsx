import React from 'react'
import { complete_visite, visit } from '../data'
import { IoLocationOutline } from "react-icons/io5";
import { IoMdStopwatch } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { CiSquareQuestion } from "react-icons/ci";
import { GlobalContext } from '../../ContextApi';
const Visits = () => {
  const {darkMode}=GlobalContext()
  return (
    <div className="p-2">
      <div className="flex flex-wrap gap-4">
        {visit.map(
          ({
            id,
            name,
            location,
            conform,
            time,
            manager,
            booking,
            considered,
            not_interested,
          }) => (
            <article
              key={id}
              className={`w-[300px] max-[700px]:w-full border shadow-sm rounded-xl p-4  hover:shadow-md transition-all ${darkMode?'bg-white border-pink-100':'bg-[hsl(0,0%,10%)] text-slate-400 border-pink-700 border'}`}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-3">
                <h3 className={`text-sm font-semibold ${darkMode?'text-gray-800':'text-slate-400'}`}>
                  {name}
                </h3>

                <span className={`text-[10px]  px-2 py-1 rounded-full font-medium ${darkMode?'text-yellow-600 bg-yellow-100':'bg-yellow-500 text-pink-800'}`}>
                  {conform}
                </span>
              </div>

              {/* Location */}
              <p className="flex items-center gap-2 text-xs text-gray-600 mb-2">
                <IoLocationOutline className="text-yellow-500" />
                {location}
              </p>

              {/* Time & Manager */}
              <div className="flex justify-between text-xs text-gray-600 mb-4">
                <p className="flex items-center gap-1">
                  <IoMdStopwatch className="text-yellow-500" />
                  {time}
                </p>

                <p className="flex items-center gap-1">
                  <CiUser className="text-yellow-500" />
                  {manager}
                </p>
              </div>

              {/* Attractive Select */}
              <select
                className="
                  w-full
                  text-xs
                  bg-gradient-to-r from-pink-100 to-yellow-100
                  border border-pink-200
                  rounded-lg
                  px-3 py-2
                  text-gray-700
                  outline-none
                  focus:ring-2
                  focus:ring-pink-300
                  cursor-pointer
                "
              >
                <option>{booking}</option>
                <option>{considered}</option>
                <option>{not_interested}</option>
              </select>
            </article>
          )
        )}
      </div>

{/* complete visits */}
<div className={`  rounded-xl shadow-sm border  overflow-hidden mt-10 ${darkMode?'bg-white border-gray-200':'bg-[hsl(0,0%,10%)] text-slate-400 border-pink-700'}`}>
  <h1 className={`p-2 capitalize font-bold ${darkMode?'text-black':'text-salte-400'}`}>complete visit</h1>
        <table className="w-full text-xs">
          <thead className={` ${darkMode?'bg-pink-50':'bg-[hsl(0,0%,10%)] text-slate-400'}`}>
            <tr className={`text-left ${darkMode} 'text-gray-800':'text-slate-400 '`}>
              <th className="p-3">Name</th>
              <th className="p-3">Property</th>
              <th className="p-3">Status</th>
              <th className="p-3">Visit Time</th>
              <th className="p-3">Staff</th>
              <th className="p-3">Outcomes</th>
            </tr>
          </thead>

          <tbody>
            {complete_visite.map((item) => (
              <tr
                key={item.id}
                className={`border-t ${darkMode?'border-gray-100 hover:bg-gray-50':'border-l-none border-r-none border-pink-700 text-slate-400'}`}
              >
                <td className={`p-3 font-medium ${darkMode} 'text-gray-800':'text-slate-400 '`}>
                  {item.name}
                </td>

                <td className={`p-3  ${darkMode} 'text-gray-800':'text-slate-400 '`}>
                  {item.property}
                </td>

                <td className="p-3">
                  <span className={`px-2 py-1 rounded-full  text-[10px] ${darkMode?'text-green-600 bg-green-100':'bg-yellow-500 text-pink-700'}`}>
                    {item.conform}
                  </span>
                </td>

                <td className={`p-3  ${darkMode?'text-gray-700':'text-salte-40'}`}>
                  {item.time}
                </td>

                <td className={`p-3  ${darkMode?'text-gray-700':'text-slate-400'}`}>
                  {item.staff}
                </td>
                 <td className={`p-3  flex items-center gap-1 ${darkMode?'text-gray-700':'text-slate-400'}`}>
                 <CiSquareQuestion className={`text-lg ${darkMode?'text-yellow-500':'text-slate-400'}`}/> {item.outcomes}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default Visits