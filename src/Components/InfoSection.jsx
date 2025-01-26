import React, { useState } from "react";
import { FaBullseye, FaUsers, FaNewspaper } from "react-icons/fa";
import AimsAndScope from "./AimsandScope";
import AuthorGuidelines from "./AuthorGuideline";
import EditorialBoard from "./EditorialUpdates";
import Explore from "./Explore";
import JournalUpdates from "./JournalUpdates";
import LatestArticles from "./LatestArticles";
import Overview from "./OverviewSection";
import LatestResearch from "./LatestResearch";

const InfoSection = () => {
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    {
      title: "Aims and Scope",
      icon: <FaBullseye className="text-emerald-700 text-2xl" />,
      component: <AimsAndScope />,
    },
    {
      title: "Editorial Board",
      icon: <FaUsers className="text-emerald-700 text-2xl" />,
      component: <EditorialBoard />,
    },
    {
      title: "Journal Updates",
      icon: <FaNewspaper className="text-emerald-700 text-2xl" />,
      component: <JournalUpdates />,
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row px-4 py-8 bg-white">
      {/* Left Section (Dynamic Content) */}
      <div className="flex-1">
        {/* Grid Section */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sections.map((section, index) => (
            <div
              key={index}
              onClick={() => setActiveSection(index)}
              className={`bg-emerald-100 p-4 sm:p-6 rounded-lg shadow-md flex items-center gap-4 cursor-pointer hover:bg-emerald-200 transition ${
                activeSection === index ? "ring-2 ring-emerald-400" : ""
              }`}
            >
              {/* Icon */}
              <div>{section.icon}</div>

              {/* Title */}
              <h2 className="text-sm sm:text-base lg:text-lg font-semibold text-emerald-900">
                {section.title}
              </h2>
            </div>
          ))}
        </div>

        {/* Dynamic Content Section */}
        <div className="mt-8 bg-emerald-50 p-4 sm:p-6 rounded-lg shadow-md">
          {activeSection !== null ? (
            <div>
              <button
                onClick={() => setActiveSection(null)}
                className="text-xl m-6 text-emerald-600 underline hover:text-emerald-800 transition"
              >
                Back to Overview
              </button>
              {sections[activeSection].component}
            </div>
          ) : (
            <>
              <Overview />
              <LatestResearch />
            </>
          )}
        </div>
      </div>

      {/* Right Section (Author Guidelines and Explore) */}
      <div className="mt-8 lg:mt-0 lg:ml-8 w-full lg:w-1/4 flex flex-col gap-6">
        {/* Author Guidelines */}
        <div className="bg-emerald-100 p-4 sm:p-6 rounded-lg shadow-md">
          <AuthorGuidelines />
        </div>

        {/* Explore */}
        <div className="bg-emerald-100 p-4 sm:p-6 rounded-lg shadow-md">
          <Explore />
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
