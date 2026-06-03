import React from "react";
import { avaiability } from "../data";

const Availability = () => {
  return (
    <div className="min-h-screen p-4 sm:p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Property Availability
        </h1>
        <p className="text-sm text-gray-500">
          Track vacant beds across all locations
        </p>
      </div>

      {/* Locations Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {avaiability.map((location) => (
          <div
            key={location.id}
            className="bg-white rounded-xl shadow-md p-5 border border-gray-100"
          >
            {/* Location Header */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-800">
                {location.area}
              </h2>

              <span className="bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded-full">
                {location.vacant} Vacant
              </span>
            </div>

            {/* Table Header */}
            <div className="hidden sm:grid grid-cols-4 gap-3 text-xs font-semibold text-gray-500 uppercase border-b pb-2 mb-3">
              <p>Property</p>
              <p>Vacant Beds</p>
              <p>Rent/Bed</p>
              <p>Next Vacancy</p>
            </div>

            {/* Properties */}
            <div className="space-y-3">
              {location.properties.map((property, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-3 shadow-sm  transition text-xs"
                >
                  {/* Desktop */}
                  <div className="hidden sm:grid grid-cols-4 gap-3 items-center">
                    <h3 className="font-medium text-gray-800">
                      {property.name}
                    </h3>

                    <p className="text-sm text-gray-600">
                      {property.vacantBeds}
                    </p>

                    <p className="text-sm font-semibold text-green-600">
                      ₹{property.rentPerBed.toLocaleString()}
                    </p>

                    <p className="text-sm text-gray-500">
                      {property.nextVacancy}
                    </p>
                  </div>

                  {/* Mobile */}
                  <div className="sm:hidden">
                    <h3 className="font-medium text-gray-800 mb-2">
                      {property.name}
                    </h3>

                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="bg-white p-2 rounded shadow-sm">
                        <p className="text-gray-500 text-xs">Vacant Beds</p>
                        <p className="font-medium">{property.vacantBeds}</p>
                      </div>

                      <div className="bg-white p-2 rounded shadow-sm">
                        <p className="text-gray-500 text-xs">Rent/Bed</p>
                        <p className="font-medium text-green-600">
                          ₹{property.rentPerBed.toLocaleString()}
                        </p>
                      </div>

                      <div className="bg-white p-2 rounded shadow-sm col-span-2">
                        <p className="text-gray-500 text-xs">Next Vacancy</p>
                        <p className="font-medium">
                          {property.nextVacancy}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Availability;