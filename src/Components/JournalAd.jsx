import React from "react";

const JournalAd = () => {
  return (
    <div className="h-80 bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-900 text-white flex items-center justify-between px-16">
      {/* Logo and Title Section */}
      <div className="flex items-center">
        <img
          src="/LogoR.jpeg" // Replace with your company logo URL
          alt="Fusion Logo"
          className="w-auto h-32 mr-6 rounded-xl" // Maintains natural shape of the logo
        />
        <div>
          <h1 className="text-4xl font-bold">Fusion</h1>
          <p className="text-lg mt-2">Where Engineering Meets Science</p>
        </div>
      </div>

      {/* Copywriting and Buttons Section */}
      <div className="text-right">
        <p className="text-xl mb-4">
          Explore groundbreaking research, innovative engineering solutions, and 
          the latest in scientific discoveries.
        </p>
        <div className="flex justify-end space-x-4">
          <button className="px-6 py-3 bg-white text-emerald-700 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition">
            Explore Research
          </button>
          <button className="px-6 py-3 bg-emerald-700 text-white font-semibold rounded-lg shadow-lg hover:bg-emerald-800 transition">
            Join Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default JournalAd;
