import React, { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { GoBell } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { MdOutlineKeyboardCommandKey } from "react-icons/md";
import { GlobalContext } from "../ContextApi";
import { nav_dashboard_data } from "./data";

const Navbar = () => {
    const {bar,setBar,activeIndex,setActiveInde}=GlobalContext();


  return (
    <nav className="w-full fixed top-0 left-0 z-50 p-4 bg-[rgba(218,249,249,0.3)] backdrop-blur-sm border-b border-pink-200 flex items-center justify-between">
      
      {/* Left Section */}
      <div className="flex items-center ">
        <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-pink-100 cursor-pointer transition min-[900px]:hidden" onClick={()=>setBar(!bar)}>
          <FaBarsStaggered className="text-sm " />
        </button>

         <div className="ml-6">
    
        <h1 className="capitalize font-semibold text-lg">
       
        </h1>

        <p className="capitalize text-xs text-gray-500">

        </p>
   
    </div>
      </div> 

      {/* Right Section */}
      <div className="flex items-center gap-3">
        
        {/* Notification */}
        <button className="p-2 bg-pink-100 rounded-lg hover:bg-pink-200 transition">
          <GoBell />
        </button>

        {/* Search */}
        <div className="flex items-center bg-pink-100 rounded-lg px-2 py-1 max-[500px]:p-2.5">
          <IoSearch className="text-sm text-gray-600 font-bold " />

          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none p-1   text-sm w-20 placeholder:text-gray-500 max-[500px]:hidden"
          />
          <span className="flex items-center gap-1 bg-white px-2 py-0.5 rounded text-xs text-gray-600 max-[500px]:hidden">
            <MdOutlineKeyboardCommandKey />
            K
          </span>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;