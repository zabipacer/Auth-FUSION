import React from "react";
import { FaRegChartBar, FaBookOpen, FaUserCheck } from "react-icons/fa";

const Overview = () => {
  return (
    <section className="py-8 px-4 sm:py-16 sm:px-8 bg-gradient-to-b from-gray-50 to-gray-100 text-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-emerald-600">
            Overview
          </h2>
          <p className="text-sm sm:text-lg text-gray-700 mt-4 leading-relaxed">
            Discover Applied Sciences is a multi-disciplinary open access
            journal fostering research in various disciplines. Our mission is to
            facilitate the dissemination of knowledge to a global audience.
          </p>
        </div>

        {/* Statistics Section */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
          {/* Indexed Information */}
          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 border border-gray-200">
            <div className="flex items-center mb-4">
              <FaRegChartBar className="text-emerald-500 text-2xl sm:text-3xl mr-4" />
              <h3 className="text-base sm:text-xl font-medium text-emerald-500">
                Indexed and Recognized
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-gray-700">
              Indexed in key platforms like <span className="font-medium">DOAJ</span>,{" "}
              <span className="font-medium">SCOPUS</span>, and more.
            </p>
          </div>

          {/* Legacy Section */}
          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 border border-gray-200">
            <div className="flex items-center mb-4">
              <FaBookOpen className="text-emerald-500 text-2xl sm:text-3xl mr-4" />
              <h3 className="text-base sm:text-xl font-medium text-emerald-500">
                Building on Excellence
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-gray-700">
              Formerly known as <span className="font-medium">SN Applied Sciences</span>.
            </p>
          </div>

          {/* Author and Reader Services */}
          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 border border-gray-200">
            <div className="flex items-center mb-4">
              <FaUserCheck className="text-emerald-500 text-2xl sm:text-3xl mr-4" />
              <h3 className="text-base sm:text-xl font-medium text-emerald-500">
                Author and Reader Focused
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-gray-700">
              A streamlined process for authors and strong reader engagement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
