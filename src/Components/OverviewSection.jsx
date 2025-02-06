import React from "react";
import { FaRegChartBar, FaBookOpen, FaUserCheck } from "react-icons/fa";

const Overview = () => {
  return (
    <section className="py-12 px-6 sm:py-16 sm:px-10 bg-gradient-to-b from-gray-50 to-gray-100 text-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-emerald-600">
            Overview
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 mt-4 leading-relaxed">
            Fusion journal is a multi-disciplinary open-access
            journal fostering research in various disciplines. Our mission is to
            facilitate the dissemination of knowledge to a global audience.
          </p>
        </div>

        {/* Statistics Section */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Indexed Information */}
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 transition-transform transform hover:scale-105">
            <div className="flex items-center mb-4">
              <FaRegChartBar className="text-emerald-500 text-3xl mr-4" />
              <h3 className="text-xl font-semibold text-emerald-500">
                Indexed and Recognized
              </h3>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              Our journal is indexed in the world’s most authoritative academic
              databases, ensuring maximum visibility and impact, including:
              Web of Science, Scopus, PubMed/MEDLINE, and more. We uphold
              rigorous evaluation standards to guarantee research quality and
              global accessibility.
            </p>
          </div>

          {/* Focus on Innovation */}
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 transition-transform transform hover:scale-105">
            <div className="flex items-center mb-4">
              <FaBookOpen className="text-emerald-500 text-3xl mr-4" />
              <h3 className="text-xl font-semibold text-emerald-500">
                Focus on Innovation
              </h3>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              We champion groundbreaking research that pushes the boundaries of
              knowledge. By fostering interdisciplinary collaboration and
              supporting open science initiatives, we amplify transformative
              discoveries with real-world impact.
            </p>
          </div>

          {/* Author and Reader Services */}
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 transition-transform transform hover:scale-105">
            <div className="flex items-center mb-4">
              <FaUserCheck className="text-emerald-500 text-3xl mr-4" />
              <h3 className="text-xl font-semibold text-emerald-500">
                Author and Reader Focused
              </h3>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              Our platform is designed for seamless author submissions and
              enhanced reader engagement. Enjoy streamlined manuscript
              submissions, rigorous yet efficient peer reviews, and access to
              open science tools that promote global research collaboration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
