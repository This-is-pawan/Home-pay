import React from 'react'
import { complete_visite, visit } from '../data'
import { IoLocationOutline } from "react-icons/io5";
import { IoMdStopwatch } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { CiSquareQuestion } from "react-icons/ci";
const Visits = () => {
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
              className="w-[300px] max-[700px]:w-full border border-pink-100 shadow-sm rounded-xl p-4 bg-white hover:shadow-md transition-all"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-gray-800">
                  {name}
                </h3>

                <span className="text-[10px] bg-yellow-100 text-yellow-600 px-2 py-1 rounded-full font-medium">
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
<div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mt-10">
        <table className="w-full text-xs">
          <thead className="bg-pink-50">
            <tr className="text-left text-gray-700">
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
                className="border-t border-gray-100 hover:bg-gray-50"
              >
                <td className="p-3 font-medium text-gray-800">
                  {item.name}
                </td>

                <td className="p-3 text-gray-600">
                  {item.property}
                </td>

                <td className="p-3">
                  <span className="px-2 py-1 rounded-full bg-green-100 text-green-600 text-[10px]">
                    {item.conform}
                  </span>
                </td>

                <td className="p-3 text-gray-600">
                  {item.time}
                </td>

                <td className="p-3 text-gray-700">
                  {item.staff}
                </td>
                 <td className="p-3 text-gray-700 flex items-center gap-1">
                 <CiSquareQuestion className='text-lg text-yellow-500'/> {item.outcomes}
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