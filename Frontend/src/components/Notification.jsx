// Notification.jsx

import React from "react";
import { GlobalContext } from "../ContextApi";

const Notification = () => {
const {darkMode}=GlobalContext()
  const notifications = [
    {
      id: 1,
      title: "New Property Added",
      message: "A new property has been added successfully.",
      time: "2 min ago",
    },
    {
      id: 2,
      title: "New Team Member",
      message: "John has joined your team.",
      time: "1 hour ago",
    },
    
  ];

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-4">Notifications</h2>

      <div className="space-y-3">
        {notifications.length > 0 ? notifications.map((item) => (
          <div
            key={item.id}
            className={`border rounded-lg p-3 shadow-sm  ${darkMode?'bg-white  ':'bg-[hsla(0,17%,5%,1)] text-pink-200 border border-pink-700 '}`}
          >
            <h3 className="font-medium text-sm">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.message}</p>
            <span className="text-sm text-gray-400">{item.time}</span>
          </div>
        )):<h1 className={`text-center leading-10 ${darkMode?'text-black':'text-slate-400'}`}>Not result found</h1>
       }
      </div>
    </div>
  );
};

export default Notification;