import React from "react";

const Navber = () => {
  return (
    <div className="w-full bg-slate-400 h-14 px-6 flex justify-between items-center">
      {/* Logo + Title */}
      <div className="flex items-center">
        <div className="h-7 w-7 bg-slate-900 rounded-lg mr-3"></div>
        <h1 className="text-lg font-semibold">
          MY <span className="text-sky-700">LIBRARY</span>
        </h1>
      </div>

      <div className="hidden md:flex items-center gap-11">
        <h1 className="hover:text-sky-300 cursor-pointer">HOME</h1>

        <h1 className="hover:text-sky-300 cursor-pointer">SHOPPING</h1>

        <h1 className="hover:text-sky-300 cursor-pointer">CONTACT</h1>
      </div>
    </div>
  );
};

export default Navber;
