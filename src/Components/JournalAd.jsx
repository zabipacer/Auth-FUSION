import React from "react";
import { Link } from "react-router-dom";

const JournalAd = () => {
  return (
    <div
      className="w-full h-[330px] bg-cover bg-center flex items-center justify-center lg:justify-between"
      style={{
        backgroundImage: 'url(/backgroundR.png)', // Keeps the same image for all screens
      }}
    >
      {/* Logo Section */}
      <div className="lg:w-3/4 w-screen flex flex-col justify-center items-center md:block ">
        <img
          src="/LogoR.jpeg" // Replace with your logo's URL
          alt="Fusion Logo"
          className="h-32 md:ml-6 sm:ml-12  lg:w-auto lg:h-40 lg:rounded-lg object-cover"
        />

        {/* Buttons Section */}
        <div className="flex flex-row items-center justify-center md:justify-start md:ml-[14.7px]  mt-8  sm:space-y-0 space-x-4 ">
  <Link to="Research">
    <button className="w-full sm:w-auto px-6 py-3 bg-white text-emerald-700 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition">
      Explore Research
    </button>
  </Link>
  <Link to="Join">
    <button className="w-full sm:w-auto px-6 py-3 bg-emerald-700 text-white font-semibold rounded-lg shadow-lg hover:bg-emerald-800 transition">
      Submit Manuscript
    </button>
  </Link>
</div>

      </div>

      {/* Text Section */}
      <div className="hidden lg:inline-block text-white ml-8 lg:ml-16 mt-5 space-y-16 max-w-72">
        <h1 className="text-2xl lg:text-3xl leading-loose  font-light text-center">
          Where Engineering Meets Science
        </h1>
        <p className="text-sm   w-64 ml-5 lg:text-base text-center leading-relaxed">
          Explore groundbreaking research, innovative engineering solutions, and the latest in scientific discoveries.
        </p>
      </div>
    </div>
  );
};

export default JournalAd;