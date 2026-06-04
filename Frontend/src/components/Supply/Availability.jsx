import React from "react";
import { avaiability } from "../data";
import { GlobalContext } from "../../ContextApi";

const Availability = () => {
  const {darkMode}=GlobalContext();
  return (
    <div className="min-h-screen p-4 sm:p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className={`text-2xl font-bold  ${darkMode?'text-gray-800':'text-slate-400'}`}>
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
            className={` rounded-xl shadow-md p-5 border  ${darkMode? 'bg-white border-gray-100':'border border-pink-700  text-slate-400' }`}
          >
            {/* Location Header */}
            <div className="flex items-center justify-between mb-4">
              <h2 className={`text-lg font-semibold  ${darkMode?'text-gray-800':'text-slate-400'}`}>
                {location.area}
              </h2>

              <span className={`font-medium px-3 py-1 rounded-full ${darkMode?'bg-green-100 text-green-700 text-sm ':'bg-yellow-500 text-slate-800 text-sm'}`}>
                {location.vacant} Vacant
              </span>
            </div>

            {/* Table Header */}
            <div className={`hidden sm:grid grid-cols-4 gap-3 text-xs font-semibold  uppercase pb-2 mb-3 ${darkMode?'text-gray-500 border-b ':'text-slate-7000 border-pink-700 border-b'}`}>
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
                  className={` rounded-lg p-3 shadow-sm  transition text-xs ${darkMode?'bg-gray-50':'bg-[hsl(0,0%,10%)] border border-pink-700 text-slate-400'}`}
                >
                  {/* Desktop */}
                  <div className="hidden sm:grid grid-cols-4 gap-3 items-center">
                    <h3 className={`font-medium  ${darkMode?'text-gray-800':'text-slate-400'}`}>
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
                    <h3 className={`font-medium ${darkMode?'text-gray-800':'text-slate-400'} mb-2`}>
                      {property.name}
                    </h3>

                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className={`${darkMode?'bg-white':'bg-[hsl(0,0%,10%)] text-slate-400 border border-pink-700'}  p-2 rounded shadow-sm`}>
                        <p className={`${darkMode?'text-gray-500':'text-slate-400'}  text-xs`}>Vacant Beds</p>
                        <p className="font-medium">{property.vacantBeds}</p>
                      </div>

                      <div className={` p-2 rounded shadow-sm ${darkMode?'bg-white':'text-slate-400 border border-pink-700'}`}>
                        <p className={`text-gray-500 text-xs`}>Rent/Bed</p>
                        <p className={`font-medium text-green-600`}>
                          ₹{property.rentPerBed.toLocaleString()}
                        </p>
                      </div>

                      <div className={` p-2 rounded shadow-sm col-span-2 ${darkMode?'bg-white':'text-slate-400 border border-pink-700'}`}>
                        <p className={`text-gray-00 text-xs`}>Next Vacancy</p>
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