import React from "react";
import { FiMessageCircle, FiSearch } from "react-icons/fi";

const Messages = () => {
  return (
    <div className="w-full h-screen bg-pink-50 flex">
      
      {/* Left Sidebar */}
      <div className="w-[280px] bg-white shadow-sm rounded-lg m-2 p-3">
        
        {/* Search */}
        <div className="flex items-center gap-2 bg-pink-100 rounded-lg px-3 py-2">
          <FiSearch className="text-gray-500 text-sm" />

          <input
            type="text"
            placeholder="Search conversations"
            className="bg-transparent outline-none text-sm w-full"
          />
        </div>

        {/* Conversation List */}
        <div className="mt-4 space-y-2">
          {[{id:1,name:'sham',last_message:'hey how r u?'}].map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-pink-50 cursor-pointer"
            >
              <div className="w-10 h-10 rounded-full bg-pink-200 flex items-center justify-center font-semibold text-xl text-yellow-500">
                {item.name.charAt(0)}
              </div>

              <div>
                <h3 className="text-sm font-medium">
                  {item.name}
                </h3>
                <p className="text-xs text-gray-500">
                 {item.last_message}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Chat Area */}
      <div className="flex-1 bg-white shadow-sm rounded-lg m-2 flex flex-col items-center justify-center">
        <FiMessageCircle className="text-6xl text-yellow-300 mb-4" />

        <h1 className="text-lg font-semibold text-gray-700">
          Select a conversation
        </h1>

        <p className="text-sm text-gray-500 mt-2">
          Choose a conversation from the sidebar to start messaging.
        </p>
      </div>
    </div>
  );
};

export default Messages;