import React from "react";
import { FiMessageCircle, FiSearch } from "react-icons/fi";
import { GlobalContext } from "../../ContextApi";

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
  const {darkMode}=GlobalContext()
  return (
    <div className={`flex flex-col md:flex-row h-[calc(100vh-80px)]  p-2 gap-2 ${darkMode ?'bg-pink-50 ':'bg-[hsl(0,0%,10%)]'}`}>
      
      {/* Sidebar */}
      <div className={`w-full md:w-[300px]  rounded-xl shadow-sm p-3 ${darkMode ?'bg-white':'bg-[hsl(0,0%,10%)] border border-pink-700'}`}>
        
        {/* Search */}
        <div className={`flex items-center gap-2 rounded-lg px-3 py-2 ${darkMode ?'bg-pink-100':'bg-[hsl(0,0%,10%)] text-slate-400 border border-pink-700'}`}>
          <FiSearch className={`  ${darkMode ?'text-gray-500':'bg-[hsl(0,0%,10%)]'}`} />

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
              className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition ${darkMode?'hover:bg-pink-50':'hover:bg-gray-800 border border-pink-700'}`}
            >
              <div className={`w-10 h-10 rounded-full  flex items-center justify-center text-lg font-semibold text-yellow-600 ${darkMode?'bg-pink-200':'bg-pink-700'}`}>
                {item.name.charAt(0).toUpperCase()}
              </div>

              <div className="overflow-hidden">
                <h3 className={`font-medium text-sm ${darkMode?'text-gray-800':'text-slate-400'}`}>
                  {item.name}
                </h3>

                <p className={`text-xs  truncate ${darkMode?'text-gray-500':'text-slate-400'}`}>
                  {item.last_message}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className={`flex-1  rounded-xl shadow-sm flex flex-col items-center justify-center p-6 ${darkMode?'bg-white':'bg-hsl(0,0%,10%)] border border-pink-700'}`}>
        <FiMessageCircle className="text-6xl text-yellow-400 mb-4" />

        <h1 className={`text-lg md:text-xl font-semibold text-center ${darkMode?'text-gray-700':'text-slate-400'}`}>
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