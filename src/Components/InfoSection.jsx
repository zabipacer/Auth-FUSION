import React, { useState } from "react";
import { FaBullseye, FaUsers, FaNewspaper } from "react-icons/fa";
import AimsAndScope from "./AimsandScope";
import AuthorGuidelines from "./AuthorGuideline";
import EditorialBoard from "./EditorialUpdates";
import Explore from "./Explore";
import JournalUpdates from "./JournalUpdates";
import LatestArticles from "./LatestArticles";
import Overview from "./OverviewSection";

// Components for each section
const InfoSection = () => {
  // State to track selected section
  const [activeSection, setActiveSection] = useState(null);

  // Data for sections
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
    <div className="flex px-6 py-8 bg-white">
      {/* Left Section (Dynamic Content) */}
      <div className="flex-1">
        {/* Grid Section */}
        <div className="grid md:grid-cols-3 gap-4">
          {sections.map((section, index) => (
            <div
              key={index}
              onClick={() => setActiveSection(index)}
              className="bg-emerald-100 p-6 rounded-lg shadow-md flex items-center gap-4 cursor-pointer hover:bg-emerald-200 transition"
            >
              {/* Icon */}
              <div>{section.icon}</div>

              {/* Title */}
              <h2 className="text-lg font-semibold text-emerald-900">{section.title}</h2>
            </div>
          ))}
        </div>

        {/* Dynamic Content Section */}
        <div className="mt-8 bg-emerald-50 p-6 rounded-lg shadow-md">
          {activeSection !== null ? (
            sections[activeSection].component
          ) : (<><Overview/>
            <LatestArticles/>
           </>
             )}
        </div>
      </div>

      {/* Right Section (Author Guidelines and Explore) */}
      <div className="ml-8 w-1/4 flex flex-col gap-6">
        {/* Author Guidelines */}
        <div className="bg-emerald-100 p-6 rounded-lg shadow-md">
          <AuthorGuidelines />
        </div>

        {/* Explore */}
        <div className="bg-emerald-100 p-6 rounded-lg shadow-md">
          <Explore />
        </div>
      </div>
    </div>
  );
};

export default InfoSection;