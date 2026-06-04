import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FiMoon } from "react-icons/fi";
import { IoIosSunny } from "react-icons/io";

import { links } from "./data";
import { GlobalContext } from "../ContextApi";
import Admin from "./Admin";


const Dashboard = () => {
const {darkMode, setDarkMode}=GlobalContext()
 const [loading, setLoading] = useState(true);
 const [admin,setAdmin]=useState(false)
  return (
    <div
      className={`  flex bg-[rgba(0, 0, 0,0.9] min-[900px]:mt-[6rem] min-[900px]:h-[calc(100vh-6rem)]  `}
    >
      {/* Sidebar */}
      
   <aside
  className={`w-[250px] h-full flex flex-col max-[900px]:hidden z-10 ${
    darkMode
      ? "bg-black text-gray-300"
      : "bg-black text-gray-300"
  }`}
>
        {/* Fixed Logo */}
       

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
         <div className=" border-gray-700 p-4 cursor-pointer" onClick={()=>setAdmin(!admin)}>
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
{admin&&<Admin/>}

      </aside>

      {/* Dashboard Content */}
      <main className={`flex-1 overflow-y-auto p-5 transition-all max-[900px]:mt-[4em]  ${darkMode?"bg-[rgba(218,249,249,0.42)]":"bg-[hsl(0,0%,10%)]"}`}>

          <Outlet  />
       
      </main>
    </div>
  );
};

export default Dashboard;