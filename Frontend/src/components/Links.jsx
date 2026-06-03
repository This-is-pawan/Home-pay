import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMoon } from "react-icons/fi";
import { IoIosSunny } from "react-icons/io";
import {links} from "../components/data.js";
import { GlobalContext } from "../ContextApi";

const Links = () => {
  const { bar,setBar,activeIndex,setActiveIndex,darkMode, setDarkMode } = GlobalContext();

  return (
   
    <aside
      className={`fixed top-[4.3rem] left-0 z-50  h-[calc(100vh-4rem)] w-full max-w-[250px] bg-black flex flex-col transition-transform duration-300 min-[900px]:hidden ${
        bar ? "translate-x-0 " : "-translate-x-full "
      }  `}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-700 p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-yellow-500 font-bold text-black shadow-md">
            H
          </div>

          <div>
            <h1 className="font-semibold text-white">HomePay</h1>
            <p className="text-xs text-gray-400">Booking OS</p>
          </div>
        </div>

        <button
          onClick={() => setBar(false)}
          className="text-lg text-white hover:text-red-400"
        >
          ✕
        </button>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto p-3">
        <nav className="flex flex-col gap-2">
          {links.map(({ id, title, link, icons: Icon },index) => (
            <NavLink
              key={id}
              to={link}
              onClick={() => {
     return           setBar(false)
                setActiveIndex(index)
              }}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all ${
                  isActive
                    ? "bg-yellow-500 text-black font-medium"
                    : "text-gray-400 hover:bg-gray-800 hover:text-white"
                }`
              }
            >
              {Icon && <Icon className="xs" />}
              <span className="capitalize text-xs">{title}</span>
            </NavLink>
          ))
          }

          {/* Dark / Light Mode */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="mt-2 flex items-center gap-3 rounded-lg px-3 py-2 text-gray-400 transition-all hover:bg-gray-800 hover:text-white"
          >
            {darkMode ? (
              <IoIosSunny className="xs"/>
            ) : (
              <FiMoon className="xs"/>
            )}

            <span className="text-xs">
              {darkMode ? "Light Mode" : "Dark Mode"}
            </span>
          </button>
        </nav>
      </div>

      {/* Footer */}
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
   
  );
};

export default Links;