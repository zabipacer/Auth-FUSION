import React from "react";

const Navbar = () => {
  return (
    <div className="border-b border-emerald-400 shadow-sm">
      <nav className="flex items-center justify-between px-6 py-4 bg-white">
        {/* Right Section: Publish with Us and Login */}
        <div className="flex items-center space-x-4 flex-1 justify-end">
          {/* Publish with Us Button */}
          <a
            href="#"
            className="px-4 py-2 text-sm font-medium text-white bg-emerald-700 rounded hover:bg-emerald-800"
          >
            Publish with Us
          </a>
          {/* Login Link */}
          <a
            href="#"
            className="text-lg font-medium text-emerald-700"
          >
            Login
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;