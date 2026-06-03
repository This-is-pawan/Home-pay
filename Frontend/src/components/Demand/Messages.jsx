import React from "react";
import { FiMessageCircle, FiSearch } from "react-icons/fi";

const conversations = [
  {
    id: 1,
    name: "Sham",
    last_message: "Hey, how are you?",
  },
  {
    id: 2,
    name: "Rahul",
    last_message: "Let's meet tomorrow.",
  },
  {
    id: 3,
    name: "Priya",
    last_message: "Project completed.",
  },
];

const Messages = () => {
  return (
    <div className="flex flex-col md:flex-row h-[calc(100vh-80px)] bg-pink-50 p-2 gap-2">
      
      {/* Sidebar */}
      <div className="w-full md:w-[300px] bg-white rounded-xl shadow-sm p-3">
        
        {/* Search */}
        <div className="flex items-center gap-2 bg-pink-100 rounded-lg px-3 py-2">
          <FiSearch className="text-gray-500" />

          <input
            type="text"
            placeholder="Search conversations"
            className="w-full bg-transparent outline-none text-sm"
          />
        </div>

        {/* Conversations */}
        <div className="mt-4 space-y-2">
          {conversations.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-pink-50 cursor-pointer transition"
            >
              <div className="w-10 h-10 rounded-full bg-pink-200 flex items-center justify-center text-lg font-semibold text-yellow-600">
                {item.name.charAt(0).toUpperCase()}
              </div>

              <div className="overflow-hidden">
                <h3 className="font-medium text-sm text-gray-800">
                  {item.name}
                </h3>

                <p className="text-xs text-gray-500 truncate">
                  {item.last_message}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 bg-white rounded-xl shadow-sm flex flex-col items-center justify-center p-6">
        <FiMessageCircle className="text-6xl text-yellow-400 mb-4" />

        <h1 className="text-lg md:text-xl font-semibold text-gray-700 text-center">
          Select a Conversation
        </h1>

        <p className="text-sm text-gray-500 text-center mt-2 max-w-md">
          Choose a conversation from the sidebar to start messaging.
        </p>
      </div>
    </div>
  );
};

export default Messages;