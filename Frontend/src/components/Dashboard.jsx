import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FiMoon } from "react-icons/fi";
import { IoIosSunny } from "react-icons/io";

import { links } from "./data";


const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(true);
 const [loading, setLoading] = useState(true);
  return (
    <div
      className={`mt-[4.8rem] h-[calc(100vh-75px)] flex bg-[rgba(0, 0, 0,0.9] `}
    >
      {/* Sidebar */}
      
      <aside
        className={`w-[250px] flex flex-col max-[900px]:hidden z-10 ${
          darkMode
            ? "bg-black text-gray-300"
            : "bg-black text-gray-300"
        }`}
      >
       
        {/* Fixed Logo */}
        <div className="h-16 px-4 flex items-center gap-3 border-b border-gray-800">
          <div className="h-10 w-10 rounded-full bg-yellow-500 flex items-center justify-center font-bold text-black">
            H
          </div>

          <div>
            <h1 className="font-bold">HomePay</h1>
            <p className="text-xs text-gray-400">Booking OS</p>
          </div>
        </div>

        {/* Scrollable Links */}
        <div className=" flex-1 overflow-y-auto p-3 ">
          <nav className="flex flex-col gap-2">
            {links.map(({ id, title, link, icons: Icon }) => (
              <NavLink
                key={id}
                to={link}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-md px-3 py-2 ${
                    isActive
                      ? "bg-yellow-500 text-black":'hover:bg-gray-900'
                    
                  }`
                }
              >
                {Icon && <Icon />}
                <span className="text-xs capitalize">
                  {title}
                </span>
              </NavLink>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`flex items-center gap-3 rounded-md px-3 py-2 `}
            >
              {darkMode ? (
                <IoIosSunny className="text-xs" />
              ) : (
                <FiMoon   className="text-xs"/>
              )}

              <span className="text-xs">
                {darkMode ? "Light Mode" : "Dark Mode"}
              </span> 
            </button>
          </nav>
        </div>

        {/* Fixed Bottom Admin */}
         <div className=" border-gray-700 p-4 ">
        <div className="flex items-center gap-3  rounded-md p-2 bg-gray-800 ">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[rgba(63,33,8,0.58)] font-bold text-white shadow-md">
            A
          </div>

          <div>
            <h2 className="text-sm font-semibold text-white">Admin</h2>
            <p className="text-xs text-gray-400">
              admin@gmail.com
            </p>
          </div>
        </div>
      </div>
      </aside>

      {/* Dashboard Content */}
      <main className={`flex-1 overflow-y-auto p-5 bg-[rgba(218,249,249,0.42)] `}>

          <Outlet  />
       
      </main>
    </div>
  );
};

export default Dashboard;