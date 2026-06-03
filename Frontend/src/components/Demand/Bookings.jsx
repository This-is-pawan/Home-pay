import React from "react";
import { bookings } from "../data";

const Bookings = () => {
  return (
    <div className="p-3 md:p-5">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
        {bookings.map(({ id, booking_type, results, icons: Icon }) => (
          <article
            key={id}
            className="
              bg-gradient-to-r from-pink-50 to-rose-50
              border border-pink-100
              rounded-xl
              shadow-sm
              p-4 sm:p-6
              flex items-center gap-4
              hover:border-yellow-500
              transition-all
              cursor-pointer
            "
          >
            {/* Icon */}
            <div className="flex items-center justify-center">
              {Icon && (
                <Icon className="text-3xl md:text-4xl text-yellow-500" />
              )}
            </div>

            {/* Content */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                {results}
              </h2>

              <p className="text-sm text-gray-500 capitalize font-medium">
                {booking_type}
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* Filter Section */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 mb-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <select className="border border-gray-200 rounded-md px-3 py-2 text-sm outline-none w-full sm:w-auto">
            <option>All Statuses</option>
            <option>Pending</option>
            <option>Confirmed</option>
            <option>Cancelled</option>
            <option>Checked Out</option>
          </select>

          <span className="text-yellow-500 font-medium text-sm">
            0 Bookings
          </span>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-x-auto">
        <table className="w-full min-w-[900px] text-sm">
          <thead className="bg-pink-50">
            <tr className="text-left text-gray-700">
              <th className="p-3">Lead</th>
              <th className="p-3">Property</th>
              <th className="p-3">Room / Bed</th>
              <th className="p-3">Rent</th>
              <th className="p-3">Deposit</th>
              <th className="p-3">Move-In</th>
              <th className="p-3">Status</th>
              <th className="p-3">Payment</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td
                colSpan="9"
                className="text-center text-gray-500 py-12"
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