import React from "react";
import { Link } from "react-router-dom";
import { FaReact } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      {/* Left Side - Home Button */}
      <div className="flex items-center space-x-2">
        <FaReact className="text-emerald-700 text-2xl" /> {/* React Icon */}
        <Link
          to="/"
          className="text-emerald-700 text-lg font-semibold hover:underline"
        >
          Home
        </Link>
      </div>

      {/* Right Side - About Us Link */}
      <div>
        <Link
          to="/about"
          className="text-gray-600 hover:text-emerald-700 font-medium"
        >
          About Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
