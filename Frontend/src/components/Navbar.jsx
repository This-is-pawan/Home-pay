import React, { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { GoBell } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { MdOutlineKeyboardCommandKey } from "react-icons/md";
import { GlobalContext } from "../ContextApi";
import { nav_dashboard_data } from "./data";
import Notification from "./Notification";

const Navbar = () => {
    const {bar,setBar,activeIndex,setActiveInde,darkMode, setDarkMode}=GlobalContext();
 const [notification,setNotification]=useState(false)

  return (
    <nav className={`w-full fixed top-0 left-0 z-50 p-4  backdrop-blur-sm border-b flex items-center justify-between transition-all ${ darkMode? ' bg-[rgba(218,249,249,0.3)] ':'bg-[hsl(0,0%,10%)]  border-pink-700'}`}>
      
      {/* Left Section */}
      <div className="flex items-center ">
        <button className={`w-8 h-8 flex items-center justify-center rounded-full cursor-pointer transition min-[900px]:hidden ${darkMode? "font-bold hover:bg-pink-100 ":"font-bold  hover:bg-yellow-500  text-white"}`} onClick={()=>setBar(!bar)}>
          <FaBarsStaggered className={`text-sm  `} />
        </button>

         <div className="h-16 px-4 flex items-center gap-3  border-gray-800 max-[900px]:hidden">
          <div className="h-10 w-10 rounded-full bg-yellow-500 flex items-center justify-center font-bold text-black">
            H
          </div>

          <div>
            <h1 className={`transition-all ${darkMode? "font-bold":"font-bold text-white"}`}>HomePay</h1>
            <p className="text-xs text-gray-400">Booking OS</p>
          </div>
        </div>
      </div> 

      {/* Right Section */}
      <div className="flex items-center gap-3">
        
        {/* Notification */}
        <button className={`p-2  rounded-lg transition ${darkMode?'bg-pink-100 hover:bg-pink-200 ':'bg-[hsla(0,17%,5%,1)] text-pink-200 opacity-[0.7]'}`} onClick={()=>setNotification(!notification)}>
          <GoBell />
        </button>
       {notification &&

        <div className={` w-full max-w-60 absolute top-[4.5rem] border right-10  h-80 rounded-lg overflow-y-scroll ${darkMode?'bg-pink-50 hover:bg-pink-100 ':'bg-[hsla(0,17%,5%,1)] text-pink-200 border border-pink-700 hover:border-yellow-500'}`}>
<Notification/>
        </div>}
        {/* Search */}
        <div className={` transition-all flex items-center ${darkMode ?'bg-pink-100':'bg-[hsla(0,17%,5%,1)]'}  rounded-lg px-2 py-1 max-[500px]:p-2.5`}>
          <IoSearch className="text-sm text-gray-600 font-bold " />

          <input
            type="text"
            placeholder="Search..." 
            className={`bg-transparent outline-none p-1   text-sm w-20 placeholder:text-gray-500 max-[500px]:hidden ${darkMode?'text-black':'text-slate-400'}`}
          />
          <span className={` transition-all flex items-center gap-1 px-2 py-0.5 rounded text-xs text-gray-600 max-[500px]:hidden  ${darkMode?'bg-white':'bg-[#241b1b] text-pink-200 opacity-[0.7]'}`}>
            <MdOutlineKeyboardCommandKey />
            K
          </span>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;