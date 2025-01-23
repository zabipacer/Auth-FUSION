import React from "react";
import { Link } from "react-router-dom";

const JournalAd = () => {
  return (
    <div className="h-auto lg:h-80 bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-900 text-white flex flex-col lg:flex-row items-center lg:items-center justify-between px-6 lg:px-16 py-10 space-y-6 lg:space-y-0">
      {/* Logo and Title Section */}
      <div className="flex flex-col items-center lg:flex-row lg:items-center lg:space-x-6">
        <img
          src="/LogoR.jpeg" // Replace with your company logo URL
          alt="Fusion Logo"
          className="h-24 w-auto lg:h-28 rounded-xl" // Adjust logo size for different screens
        />
        <div className="hidden md:inline-block  text-center lg:text-left mt-4 lg:mt-0">
          <h1 className=" text-4xl font-bold">Fusion</h1>
          <p className=" text-sm md:text-lg lg:text-lg mt-2">
            Where Engineering Meets Science
          </p>
        </div>
      </div>

      {/* Copywriting and Buttons Section */}
      <div className="text-center lg:text-right flex flex-col items-center lg:items-end space-y-4">
        <p className="text-sm sm:text-xl lg:text-xl">
          Explore groundbreaking research, innovative engineering solutions, and
          the latest in scientific discoveries.
        </p>
        <div className="flex flex-row lg:flex-row items-center  lg:space-x-4 space-x-4  lg:space-y-0">
          <Link to="Research">
            <button className="px-6 py-3 mt-5 bg-white text-emerald-700 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition">
              Explore Research
            </button>
          </Link>
          <Link to="Join">
            <button className="px-6 py-3 mt-5 bg-emerald-700 text-white font-semibold rounded-lg shadow-lg hover:bg-emerald-800 transition">
              Join Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JournalAd;
