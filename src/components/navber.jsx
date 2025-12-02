import React, { useState, useEffect } from "react";
import Popup from "./subComponents/Popup";

const Navber = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <>
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
        {user ? (
          <div className="flex items-center gap-3">
            <span className="text-white">Welcome, {user.username}!</span>
            <button
              className="bg-red-600 p-2 px-4 rounded-lg text-white hover:bg-red-500 transition"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            className="bg-slate-800 p-2 px-5 rounded-lg text-white hover:bg-slate-700 transition"
            onClick={() => setShowPopup(true)}
          >
            Login
          </button>
        )}
      </div>
      {showPopup && <Popup onClose={() => setShowPopup(false)} />}
    </>
  );
};

export default Navber;
