import React from "react";
import { bookings } from "../data";

const Bookings = () => {
  return (
    <div className="p-3 ">
      {/* Stats Cards */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-5">
  {bookings.map(({ id, booking_type, results, icons: Icon }) => (
    <article
      key={id}
      className="
        bg-gradient-to-r from-pink-50 to-rose-50
        border border-pink-100
        rounded-xl
        shadow-sm
        transition-all
        p-10
        flex items-center gap-4
        hover:border-yellow-500
        tansition-all
        cursor-pointer
      "
    >
      {/* Icon */}
      <div className="w-25 h-25 rounded-xl  flex items-center justify-center">
        {Icon && (
          <Icon className="text-3xl text-yellow-500" />
        )}
      </div>

      {/* Content */}
      <div>
        <h2 className="text-lg font-bold text-gray-800">
          {results}
        </h2>

        <p className="text-sm text-gray-500 capitalize font-medium">
          {booking_type}
        </p>
      </div>
    </article>
  ))}
</div>

      {/* Filter */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-3 flex justify-between items-center mb-4">
        <select className="border border-gray-200 rounded-md px-2 py-1 text-xs outline-none">
          <option>All Statuses</option>
          <option>Pending</option>
          <option>Confirmed</option>
          <option>Cancelled</option>
          <option>Checked Out</option>
        </select>

        <span className="text-yellow-500 font-medium text-xs">
         0 Bookings
        </span>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-x-auto">
        <table className="w-full text-xs">
          <thead className="bg-pink-50">
            <tr className="text-left text-gray-700">
              <th className="p-2">Lead</th>
              <th className="p-2">Property</th>
              <th className="p-2">Room / Bed</th>
              <th className="p-2">Rent</th>
              <th className="p-2">Deposit</th>
              <th className="p-2">Move-In</th>
              <th className="p-2">Status</th>
              <th className="p-2">Payment</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td
                colSpan="9"
                className="text-center text-gray-500 py-8"
              >
                No bookings found
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;