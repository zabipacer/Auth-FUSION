import React from "react";
import { Link } from "react-router-dom";

const ResearchAD = ({ title }) => {
  return (
    <div className="bg-emerald-900 text-white p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-[95%] mx-auto">
      {/* Title */}
      <h1 className="text-xl sm:text-3xl font-bold mb-4 text-center sm:text-left">
        {title}
      </h1>

      {/* Article Layout: Image on top for small screens, text beside image for larger screens */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
        {/* Photo */}
        <img
          src="/FUSON.png"
          alt="Article Preview"
          className="w-[200px] h-[300px] object-cover rounded-md shadow-lg mx-auto sm:mx-0"
        />

        {/* Text Content */}
        <div className="flex-1 text-center sm:text-left text-justify">
          {/* Metadata */}
          <div className="text-emerald-400 text-sm mb-6">
            Research | Open access | Published: 24 January 2025 <br />
          </div>

          {/* Download Section */}
          <div className="flex flex-col sm:flex-row justify-between items-center bg-emerald-800 p-4 rounded-lg shadow gap-4">
            <button className="bg-white text-emerald-800 px-4 py-2 rounded-md font-medium hover:bg-emerald-200">
              Download PDF
            </button>
            <span className="text-sm text-emerald-300">
              ✅ You have full access to this{" "}
              <span  className="underline hover:text-white">
                open access article
              </span>
            </span>
          </div>

          {/* Discover Section */}
          <div className="mt-6">
            <h2 className="text-lg font-bold mb-2">FUSION</h2>
            <div className="flex flex-wrap justify-start sm:justify-start gap-4 text-sm">
             
              <Link
                to="/Join"
                className="text-emerald-400 hover:underline hover:text-white"
              >
                Submit manuscript →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchAD;
