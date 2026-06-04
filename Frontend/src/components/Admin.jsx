import React from "react";
import { GlobalContext } from "../ContextApi";

const Admin = () => {
  const { darkMode } = GlobalContext();

  return (
    <div
      className={`
        p-4
        text-sm
        space-y-3
        absolute top-[20rem] left-5
        rounded-xl
        min-w-[260px]
        shadow-lg
        ${
          darkMode
            ? "border bg-pink-50 text-black"
            : "bg-[hsl(0,0%,10%)] border border-pink-700 text-white"
        }
      `}
    >
      <h2
        className={`
          text-base
          font-semibold
          border-b
          border-pink-500
          pb-2
        `}
      >
        Admin Details
      </h2>

      <div>
        <span className={`font-medium text-pink-500`}>Name:</span> Admin
      </div>

      <div>
        <span className={`font-medium text-pink-500`}>Email:</span>{" "}
        admin@gmail.com
      </div>

      <div>
        <span className={`font-medium text-pink-500`}>Role:</span>{" "}
        Administrator
      </div>

      <div>
        <span className={`font-medium text-pink-500`}>Status:</span> Active
      </div>

      <div>
        <span className={`font-medium text-pink-500`}>Department:</span>{" "}
        Management
      </div>

      

      <div>
        <span className={`font-medium text-pink-500`}>Access Level:</span>{" "}
        Full Access
      </div>
    </div>
  );
};

export default Admin;